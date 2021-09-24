<template>
  <span>
    <home-hero/>
    <home-details/>
  </span>
</template>

<script>
import HomeHero from "@/components/HomeHero";
import HomeDetails from "@/components/HomeDetails";

export default {
  name: 'Home',

  components: {HomeDetails, HomeHero},
}
</script>
