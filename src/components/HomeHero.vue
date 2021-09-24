<template>
  <v-main class="home-hero pa-5" style="max-height: 100vh;">
    <v-layout justify-center align-center align-content-center column class="pa-5">
      <div class="display-4 font-weight-black white--text text-xs-center my-16">HEALTHY MEALS</div>
      <div class="display-3 font-weight-black white--text text-xs-center my-10">FOR YOUR TABLE</div>
      <div class="display-1 font-weight-black white--text text-xs-center">Finally be a foodie at home with fresh,
        chef-prepared meals delivered daily to your door.
      </div>
      <v-btn fab class="mt-5 brown darken-4">
        <v-icon>...</v-icon>
      </v-btn>
    </v-layout>
  </v-main>
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
