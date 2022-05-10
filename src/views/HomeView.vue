<template>
  <button @click="changeLocale">change</button>
</template>

<script>
export default {
  name: "HomePage",

  methods: {
    changeLocale() {
      console.log(this.$i18n.locale);
    },
  },
  mounted() {
    this.$store.dispatch("getProductsEn");
  },
};
</script>
