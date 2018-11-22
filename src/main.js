import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as VueGoogleMaps from "vue2-google-maps";

import "./registerServiceWorker";

import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAd5fIvpgx0vSvPggDDkdpUcCBaMPuXftU",
    libraries: "places", // necessary for places input
    region: "za",
    type: ["cities"]
  }
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
