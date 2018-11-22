<template>
  <div>
    <div>

      <h2 class="m-5">Search For a Location</h2>

      <label class="w-75">
        <gmap-autocomplete class="form-control p-5" style="font-size: 1.5rem" @place_changed="setPlace"></gmap-autocomplete>
        <!-- <button @click="addMarker">Add</button> -->
      </label>
      <br>
      <div class="w-75 mx-auto">
        <ul class="list-group">
          <li class="list-group-item" style="cursor: pointer" v-for="p in defaultPlaces" v-bind:key="p.id" @click="setPlace(p)">{{p.name}}</li>
        </ul>
      </div>
    </div>
    <br>

  </div>
</template>
<script>
import Router from "../router";
import axios from "axios";
export default {
  name: "GoogleMap",
  data() {
    return {
      // defualt to Johannesburg for the time being
      center: { lat: -26.204103, lng: 28.047304 },
      markers: [],
      places: [],
      currentPlace: null,
      defaultPlaces: [{ id: 0, name: "Durban" }, { id: 1, name: "Johanesburg" }, { id: 2, name: "Sandton" }],
      errors: []
    };
  },
  mounted() {
    this.geolocate();
  },
  methods: {
    // receive place object via autocomplete component
    setPlace(place) {
      const apiUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=8bd4bfb5466590711b37c96a21978ccb&nojsoncallback=true&format=json&extras=url_m&per_page=25&tags=${encodeURI(
        place.name
      )}`;

      this.currentPlace = place;
      axios
        .get(apiUrl)
        .then(function(response) {
          // handle success
          Router.push({
            name: "placePhotoList",
            path: "/placePhotoList",
            params: {
              photos: response.data.photos.photo
            }
          });
        })
        .catch(function(error) {
          // handle error
          // console.error("Error", error);
          this.errors.push(error);
        });
    },
    /* addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    }, */
    geolocate: () => {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
    /*  showImages: photos => {
      Router.push({
        name: "placePhotosList",
        path: "/placePhotosList",
        params: {
          photos: photos
        }
      });
      console.log("Pushed Place: ", photos);
    } */
  }
};
</script>
