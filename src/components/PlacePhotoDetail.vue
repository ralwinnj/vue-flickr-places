<template>
  <div>
    <!-- {{photo}} -->
    <div class="mt-3 container">
      <div class="">
        <div class="card text-center mx-auto" style="max-width: 500px">
          <img class="card-img-top" :src="photo_url" alt="Card image cap">
          <div class="card-body ">
            <h5 class="card-title">{{photo.title._content}}</h5>
            <p class="card-text">
              {{photo.description._content}}
            </p>
            <p class="text-secondary">
              <em>{{ photo.owner.realname || "Unknown"}} - {{ photo.dates.taken.substring(0, 10) }} - {{ photo.owner.location || photo.location.region._content || "Unknown" }}</em>
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: "placePhotoDetail",
  props: {
    photo_url: String,
    photo: {
      default: () => {
        return {};
      }
    }
  }
};
</script>
