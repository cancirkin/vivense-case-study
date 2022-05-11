<template>
  <v-row justify="center">
    <v-pagination
      v-model="$store.state.pagination.page"
      :length="calculateTotalPages"
      @input="changePage"
    ></v-pagination>
  </v-row>
</template>

<script>
export default {
  computed: {
    calculateTotalPages() {
      return Math.ceil(this.$store.state.products.length / 3);
    },
  },
  methods: {
    changePage(e) {
      this.$store.dispatch("setPage", e);
    },
  },
};
</script>

<style></style>
