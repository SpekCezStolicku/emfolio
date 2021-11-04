import Vue from "vue";
import VueRouter from "vue-router";
import IntroPage from "../components/Header/IntroPage.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "intro",
    component: IntroPage,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
