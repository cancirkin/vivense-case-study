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
    setProducts(state, products) {
      state.products = products.data;
    },
    setProductsToDisplay(state) {
      let clone = JSON.parse(JSON.stringify(state.products));
      let startFrom =
        state.pagination.page * state.pagination.rowsPerPage -
        state.pagination.rowsPerPage;
      state.productsToDisplay = clone.splice(
        startFrom,
        state.pagination.rowsPerPage
      );
    },
    setPage(state, page) {
      state.pagination.page = page;
    },
    setTotal(state) {
      state.pagination.total = state.products.length;
    },
    getInfiniteData(state) {
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
      commit("setProducts", await Product.getProducts());
      commit("setTotal");
      commit("setProductsToDisplay");
    },
    setPage({ commit }, page) {
      commit("setPage", page);
      commit("setProductsToDisplay");
    },
    getInfiniteData({ commit }) {
      commit("getInfiniteData");
    },
  },
});
