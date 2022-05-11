<template>
  <v-app-bar app color="white" flat elevation="1">
    <v-container class="py-0 fill-height">
      <router-link class="header-title" to="/">{{
        $t("header.title")
      }}</router-link>

      <v-spacer></v-spacer>

      <locale-switcher></locale-switcher>
    </v-container>
  </v-app-bar>
</template>

<script>
import LocaleSwitcher from "./LocaleSwitcher.vue";
export default {
  components: { LocaleSwitcher },
  methods: {},
};
</script>
<style scoped>
.header-title {
  font-size: 1.2rem;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87);
}
</style>
