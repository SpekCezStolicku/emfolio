import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    anchors: [
      "home",
      "about",
      "skills",
      "education",
      "experience",
      "hobby",
      "references",
      "contact",
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
