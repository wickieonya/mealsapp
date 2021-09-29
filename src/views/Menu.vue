<template>
  <v-container fluid>
    <home-plans/>
    <v-divider></v-divider>
    <meal-recipes/>
  </v-container>
</template>

<script>
import HomePlans from "@/components/HomePlans";
import MealRecipes from "@/components/MealRecipes";

export default {
  name: "Menu",
  components: {MealRecipes, HomePlans}
}
</script>

<style scoped>

</style>
