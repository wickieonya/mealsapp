<template>
  <v-app>
    <app-navigation/>
    <v-main transition="slide-x-transition">
      <router-view></router-view>
      <app-footer/>
    </v-main>
  </v-app>
</template>

<script>

import AppNavigation from "@/components/AppNavigation";
import AppFooter from "@/components/AppFooter";

export default {
  name: 'App',
  components: {AppFooter, AppNavigation},
  mounted() {
    document.title = "Meal Prep App";
  },
  data: () => ({
    //
  }),
};
</script>
