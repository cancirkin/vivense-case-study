import Vue from "vue";
import Vuex from "vuex";
import Product from "../services/Product";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productsEn: [],
    productsTr: [],
  },
  getters: {
    getProductsEn: (state) => state.productsEn,
    getProductsTr: (state) => state.productsTr,
  },
  mutations: {
    setProductsEn(state, products) {
      state.productsEn = products;
    },
    setProductsTr(state, products) {
      state.productsTr = products;
    },
  },
  actions: {
    async getProductsEn({ commit }) {
      commit("setProductsEn", await Product.getProductsEn());
    },
    async getProductsTr({ commit }) {
      commit("setProductsTr", await Product.getProductsTr());
    },
  },
});
