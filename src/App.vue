<template>
  <v-app>
    <app-navigation/>
    <v-main transition="slide-x-transition">
      <router-view></router-view>
    </v-main>
    <app-footer/>
  </v-app>
</template>

<script>

import AppNavigation from "@/components/AppNavigation";
import AppFooter from "@/components/AppFooter";

export default {
  name: 'App',
  components: {AppFooter, AppNavigation},
  data: () => ({
    //
  }),
};
</script>
