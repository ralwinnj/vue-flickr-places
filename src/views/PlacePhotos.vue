<template>
  <div class="home">
    <PlacePhotoList :photos2="photos" />
  </div>
</template>

<script>
// @ is an alias to /src
import PlacePhotoList from "../components/PlacePhotoList";

export default {
  name: "placePhotos",
  props: {
    photos: {
      default: () => {
        return [];
      }
    }
  },
  components: {
    PlacePhotoList
  }
};
</script>
