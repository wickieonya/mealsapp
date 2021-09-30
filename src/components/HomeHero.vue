<template>
  <v-container fluid class="home-hero pa-5" style="max-height: 100vh;">
    <v-layout column align-content-center justify-center align-center class="pa-5 my-16">
      <div class="display-4 font-weight-black white--text text-center mx-auto mt-16">HEALTHY MEALS</div>
      <div class="display-3 font-weight-black white--text text-center my-4 mx-auto">FOR YOUR TABLE</div>
      <div class="display-1 font-weight-black white--text text-center mx-auto">
        Finally be a foodie at home with fresh, chef-prepared meals delivered daily to your door.
      </div>
      <v-btn fab class="mt-5 brown darken-4 mx-auto">
        <v-icon large color="white">mdi-arrow-down-drop-circle-outline</v-icon>
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
import {mdiDotsHorizontal} from '@mdi/js';

export default {
  name: "HomeHero"
}
</script>

<style scoped>
.home-hero {
  background: url("https://source.unsplash.com/0BhSKStVtdM");
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>
