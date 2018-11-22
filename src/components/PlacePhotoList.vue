<template>
  <div class="container-fluid fadeIn">
    <div class="row" v-if="photos && photos.length > 0">
      <div class="col-xs-12 col-sm-6 col-md-3 my-2 mr-0" v-for="p in photos" v-bind:key="p.id">
        <div class="card">
          <img class="card-img-top" :src="p.url_m" style="width:100%; height: 200px" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{ p.title }}</h5>
            <button class="btn btn-primary" @click="showPhotoDetail(p)">View Image Details</button>
          </div>
        </div>
      </div>

    </div>

    <template v-else>
      <div class="m-5 ">
        <h3>
          <i>
            No images found for this particular location
          </i>
        </h3>
      </div>
    </template>
  </div>
</template>

<script>
import Router from "../router";
import axios from "axios";

export default {
  name: "placePhotoList",
  props: {
    photos: {
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      errors: []
    };
  },
  methods: {
    showPhotoDetail(photo) {
      const apiUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=8bd4bfb5466590711b37c96a21978ccb&nojsoncallback=true&format=json&photo_id=${
        photo.id
      }`;

      axios
        .get(apiUrl)
        .then(response => {
          // handle success
          response.data.photo;
          Router.push({
            name: "placePhotoDetail",
            path: "/placePhotoDetail",
            params: {
              photo_url: photo.url_m,
              photo: response.data.photo
            }
          });
        })

        .catch(error => {
          // handle error
          this.error.push(error);
        });

      // this.photo = self;
    }
  }
};
</script>
