<template>
  <v-footer color="brown lighten-1" padless tile>
    <v-row justify="center" no-gutters>
      <v-btn text rounded class="my-2" to="/">Home</v-btn>
      <v-btn text rounded class="my-2" to="/join">Join</v-btn>
      <v-btn text rounded class="my-2" to="/menu">Menu</v-btn>
      <v-col class="brown lighten-2 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} - <strong>Meals App</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      links: [
        'Sign-in',
        'About',
        'Menu',
      ]
    }
  }
}
</script>

<style scoped>

</style>
