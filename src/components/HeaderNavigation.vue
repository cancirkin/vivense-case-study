<template>
  <v-app-bar app color="white" flat elevation="1">
    <v-container class="py-0 fill-height">
      <span>{{ $t("header.title") }}</span>

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

<style></style>
