<template>
  <v-footer app color="brown lighten-1" padless>
    <v-row justify="center" no-gutters>
      <v-btn v-for="link in links" :key="link" :to="link.toLocaleLowerCase()" text rounded class="my-2">
        {{ link }}
      </v-btn>
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
