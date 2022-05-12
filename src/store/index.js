import Vue from "vue";
import Vuex from "vuex";
import Product from "../services/Product";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    productsToDisplay: [],
    pagination: {
      page: 1,
      total: 0,
      rowsPerPage: 3,
    },
  },
  getters: {
    getProducts: (state) => state.products,
    getProductsToDisplay: (state) => state.productsToDisplay,
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products.data;
    },
    SET_PRODUCTS_TO_DISPLAY(state) {
      let clone = JSON.parse(JSON.stringify(state.products));
      let startFrom =
        state.pagination.page * state.pagination.rowsPerPage -
        state.pagination.rowsPerPage;
      state.productsToDisplay = clone.splice(
        startFrom,
        state.pagination.rowsPerPage
      );
    },
    SET_PAGE(state, page) {
      state.pagination.page = page;
    },
    SET_TOTAL(state) {
      state.pagination.total = state.products.length;
    },
    SET_INFINITE_DATA(state) {
      let clone = JSON.parse(JSON.stringify(state.products));
      state.pagination.page++;
      let startFrom =
        state.pagination.page * state.pagination.rowsPerPage -
        state.pagination.rowsPerPage;
      clone.forEach((product, index) => {
        if (
          index >= startFrom &&
          index < startFrom + state.pagination.rowsPerPage
        ) {
          state.productsToDisplay.push(product);
        }
      });
    },
  },
  actions: {
    async getProductsApi({ commit }) {
      commit("SET_PRODUCTS", await Product.getProducts());
      commit("SET_TOTAL");
      commit("SET_PRODUCTS_TO_DISPLAY");
    },
    setPage({ commit }, page) {
      commit("SET_PAGE", page);
      commit("SET_PRODUCTS_TO_DISPLAY");
    },
    setInfiniteData({ commit }) {
      commit("SET_INFINITE_DATA");
    },
  },
});
