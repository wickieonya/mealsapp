<template>
  <v-container fluid>
    <home-plans/>
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
