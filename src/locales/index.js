import Vue from "vue";
import VueI18n from "vue-i18n";
import tr from "./tr";
import en from "./en";

Vue.use(VueI18n);

const messages = {
  en,
  tr,
};

// Get locale from cookie
export default new VueI18n({
  locale: "tr",
  messages,
});
