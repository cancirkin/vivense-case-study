import API from "./AxiosConfig";

export default {
  getProductsEn() {
    return API().get("/en_product");
  },
  getProductsTr() {
    return API().get("/tr_product");
  },
};
