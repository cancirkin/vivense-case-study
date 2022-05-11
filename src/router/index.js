import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductView from "../views/ProductView.vue";
import ErrorView from "../views/ErrorView.vue";
import i18n from "../locales/index";
// import App from "../App.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: `/${i18n.locale}`,
  },
  {
    path: "/:locale(en|tr)",
    component: {
      template: "<router-view />",
    },
    children: [
      {
        path: "",
        component: HomeView,
      },
      {
        path: "products/:id",
        component: ProductView,
        name: "product",
      },
    ],
  },
  {
    path: "*",
    name: "Error",
    component: ErrorView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
