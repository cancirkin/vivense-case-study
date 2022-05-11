import API from "./AxiosConfig";
import i18n from "../locales/index";

export default {
  getProducts() {
    return API().get(`/${i18n.locale}_product`);
  },
};
