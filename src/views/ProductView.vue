<template>
  <v-container>
    <v-row align="center">
      <v-col cols="12" lg="8" md="8" sm="8" xs="12">
        <product-slider
          v-if="products.length > 0"
          :images="product.images"
        ></product-slider>
      </v-col>
      <v-col cols="12" lg="4" md="4" sm="4" xs="12">
        <product-details :product="product"></product-details>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProductSlider from "../components/ProductSlider.vue";
import ProductDetails from "../components/ProductDetails.vue";
import { mapGetters } from "vuex";
export default {
  components: { ProductDetails, ProductSlider },
  data() {
    return {
      product: {},
    };
  },
  computed: {
    ...mapGetters({
      products: "getProducts",
    }),
  },
  async mounted() {
    //Sayfa yenilendiğinde store datası kaybolacağı için burada tekrar ürünleri çekiyorum ve
    //url'deki parametreye göre filtreleyip seçilen ürünü buluyorum.
    await this.$store.dispatch("fetchProducts");
    this.product = this.products.find(
      (product) => product.id === this.$route.params.id
    );
  },
};
</script>

<style></style>
