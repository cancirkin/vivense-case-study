<template>
  <v-container>
    <v-col
      v-if="device !== 'mobile'"
      class="d-flex flex-wrap flex-column"
      cols="12"
    >
      <v-row>
        <product-card
          v-for="product in products"
          :key="product.id"
          :product="product"
        ></product-card>
      </v-row>
      <v-row>
        <product-pagination></product-pagination>
      </v-row>
    </v-col>
    <v-col v-else class="infiniteSection" cols="12">
      <product-card
        v-for="product in products"
        :key="product.id"
        :product="product"
      ></product-card>
    </v-col>
  </v-container>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import { mapGetters } from "vuex";
import ProductPagination from "@/components/ProductPagination.vue";
import debounce from "debounce";
import device from "../mixins/device.js";
export default {
  components: { ProductCard, ProductPagination },
  name: "HomePage",
  mixins: [device],

  methods: {
    onScroll: debounce(function () {
      let wrap = document.querySelector(".infiniteSection");
      let contentHeight = wrap.offsetHeight;
      let yOffset = window.pageYOffset;
      let currentPosition = yOffset + window.innerHeight;
      if (currentPosition >= contentHeight) {
        this.getProductForInfiniteScroll();
      }
    }, 500),
    getProductForInfiniteScroll() {
      this.$store.commit("SET_INFINITE_DATA");
    },
  },
  computed: {
    ...mapGetters({
      products: "getProductsToDisplay",
    }),
  },
  async created() {
    //Url'deki sayfa parametresi elle değiştirilirse hata sayfasına yönlendirdim.
    if (!Number(this.$route.params.page)) {
      this.$router.push({ name: "Error" });
      return;
    }
    await this.$store.dispatch(
      "fetchProducts",
      Number(this.$route.params.page)
    );
    if (this.device === "mobile") {
      window.addEventListener("scroll", () => {
        this.onScroll();
      });
    }
  },
};
</script>
<style scoped>
.infiniteSection {
  height: 100%;
}
</style>
