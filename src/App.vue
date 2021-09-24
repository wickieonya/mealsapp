<template>
  <v-app>
    <v-main transition="slide-x-transition">
      <AppNavigation/>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

import AppNavigation from "@/components/AppNavigation";

export default {
  name: 'App',
  components: {AppNavigation},
  data: () => ({
    //
  }),
};
</script>
