import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ErrorView from "../views/ErrorView.vue";
import i18n from "../locales/index";
import App from "../App.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: `/${i18n.locale}`,
  },
  {
    path: "/:locale(en|tr)",
    name: "Home",
    component: App,
    children: [
      {
        path: "",
        name: "Home",
        component: HomeView,
      },
      {
        path: "about",
        name: "About",
        component: AboutView,
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
