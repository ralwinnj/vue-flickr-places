import Vue from "vue";
import Router from "vue-router";

import GoogleMap from "./components/GoogleMap.vue";
import PlacePhotoList from "./components/PlacePhotoList.vue";
import PlacePhotoDetail from "./components/PlacePhotoDetail.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: GoogleMap
    },
    {
      path: "/placePhotoList",
      name: "placePhotoList",
      component: PlacePhotoList,
      props: true
    },
    {
      path: "/placePhotoDetail",
      name: "placePhotoDetail",
      component: PlacePhotoDetail,
      props: true
    }
  ]
});
