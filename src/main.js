import Vue from "vue";
import App from "./App";
import store from "./store";
import uView from "uview-ui";
import httpInterceptor from "@/utils/request.js";
Vue.config.productionTip = false;
App.mpType = "app";
Vue.use(uView);
const app = new Vue({
  ...App,
  store,
});
Vue.use(httpInterceptor, app);
app.$mount();
