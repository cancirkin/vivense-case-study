<template>
  <div>
    <v-carousel>
      <v-carousel-item
        v-for="(image, i) in images"
        :key="i"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <img class="slider-image" :src="image" />
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.slider-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
