<template>
  <v-card class="mx-auto my-12" max-width="300" elevation="1">
    <v-card-title>{{ product.name }}</v-card-title>

    <v-card-text>{{ product.desc }}</v-card-text>

    <v-card-text>
      <div class="my-4 text-subtitle-1">{{ product.price + " TL" }}</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style></style>
