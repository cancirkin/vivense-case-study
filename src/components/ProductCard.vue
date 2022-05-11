<template>
  <v-col lg="4" md="4" sm="12">
    <v-card
      @click="openProductDetail"
      class="mx-auto my-12"
      max-width="300"
      elevation="1"
    >
      <v-img :src="product.images[0]" contain></v-img>

      <v-card-title>{{ product.name }}</v-card-title>

      <v-card-text>
        <div class="my-4 text-subtitle-1">{{ product.price + " TL" }}</div>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    openProductDetail() {
      this.$router.push({ name: "product", params: { id: this.product.id } });
    },
  },
};
</script>

<style scoped>
.v-card__title {
  font-size: 1rem;
}
</style>
