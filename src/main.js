import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import mdiVue from "mdi-vue";
import * as mdijs from "@mdi/js";
import VueFullPage from "vue-fullpage.js";
import "fullpage.js/vendors/scrolloverflow";
import "fullpage.js/dist/fullpage.css";
import "animate.css";
import VueTyperPlugin from "vue-typer";
import VueSilentbox from "vue-silentbox";

Vue.use(VueSilentbox);
Vue.use(VueTyperPlugin);
Vue.use(VueFullPage);

Vue.use(mdiVue, {
  icons: mdijs,
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
