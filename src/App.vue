<template>
  <v-app id="inspire">
    <header-navigation></header-navigation>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import HeaderNavigation from "./components/HeaderNavigation.vue";
export default {
  components: { HeaderNavigation },
  name: "App",
};
</script>
