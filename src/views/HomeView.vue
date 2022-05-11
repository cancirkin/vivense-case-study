<template>
  <v-container>
    <v-col v-if="device !== 'mobile'" class="d-flex flex-wrap" cols="12">
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
export default {
  components: { ProductCard, ProductPagination },
  name: "HomePage",
  data() {
    return {
      device: "",
    };
  },
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
      this.$store.dispatch("getInfiniteData");
    },
    detectDevice() {
      const ua = navigator.userAgent;
      if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
      } else if (
        /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
          ua
        )
      ) {
        return "mobile";
      }
      return "desktop";
    },
  },
  computed: {
    ...mapGetters({
      products: "getProductsToDisplay",
    }),
  },
  async created() {
    this.device = this.detectDevice();
    await this.$store.dispatch("getProductsApi");
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
