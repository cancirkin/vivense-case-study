<template>
  <v-btn @click="changeLanguage" text>
    {{ $i18n.locale }}
  </v-btn>
</template>

<script>
import jsCookie from "js-cookie";
export default {
  methods: {
    changeLanguage() {
      this.$i18n.locale = this.$i18n.locale === "en" ? "tr" : "en";
      jsCookie.set("locale", this.$i18n.locale);
      this.$router.push(`/${this.$i18n.locale}`);
    },
  },
};
</script>

<style></style>
