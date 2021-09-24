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
    <v-app-bar app color="brown darken-4" dark>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <v-toolbar-title>{{ appTitle }}</v-toolbar-title>
      <v-btn light class="hidden-sm-and-down mx-2">Menu</v-btn>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-btn light class="hidden-sm-and-down mx-2">SIGN IN</v-btn>
      <v-btn color="brown lighten-3" class="hidden-sm-and-down mx-2">JOIN</v-btn>
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
  }
}
</script>

<style scoped>

</style>
