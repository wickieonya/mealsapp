<template>
  <span>
    <v-navigation-drawer app v-model="drawer" class="brown lighten-2" dark disable-resize-watcher>
      <v-list-item v-for="(item, index) in items">
        <v-list-item-content>
          <v-list-item-title :key="index" class="py-2">{{ item.title }}</v-list-item-title>
          <v-divider :key="`divider-${index}`"></v-divider>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>
    <v-app-bar app color="brown lighten-1" dark>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <router-link to="/">
        <v-toolbar-title class="text--white" style="color: white">{{ appTitle }}</v-toolbar-title>
      </router-link>

      <v-spacer class="hidden-md-and-up"></v-spacer>

      <router-link to="/menu">
        <v-btn light class="hidden-sm-and-down mx-2" rounded color="green" style="color: white">Menu</v-btn>
      </router-link>

      <v-spacer class="hidden-sm-and-down"></v-spacer>

      <div class="hidden-sm-and-down" v-if="!isAuthenticated">
        <router-link to="/sign-in">
          <v-btn light class="hidden-sm-and-down mx-2">SIGN IN</v-btn>
        </router-link>
        <router-link to="/join">
          <v-btn color="brown lighten-3" class="hidden-sm-and-down mx-2">JOIN</v-btn>
        </router-link>
      </div>
      <div v-else>
        <v-btn to="/about" class="mx-3" color="secondary">
          <v-icon class="mr-1">mdi-account</v-icon>
          PROFILE
        </v-btn>
        <v-btn outlined color="white" @click="logout">
          <v-icon class="mr-1">mdi-logout-variant</v-icon>
           Logout
        </v-btn>
      </div>

    </v-app-bar>
  </span>
</template>

<script>
export default {
  name: "AppNavigation",
  data() {
    return {
      appTitle: "Meal Prep",
      drawer: false,
      items: [
        {title: 'Menu'},
        {title: 'Sign In'},
        {title: 'Join'}
      ]
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('userSignOut');
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
}
</style>
