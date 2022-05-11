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
      if (this.$route.name) {
        //Eğer kullanıcı ana sayfa dışında bir sayfada ise, url'in dinamik olarak değişmesi için bu kodları kullanıyorum.
        let seperatedRoute = this.$route.path.split("/");
        seperatedRoute[1] = this.$i18n.locale;
        this.$router.push(seperatedRoute.join("/"));
      } else {
        this.$router.push(`/${this.$i18n.locale}`);
      }
      //Ürünleri mockapi'de tr ve en olarak ayrı endpointlerde tuttuğum için burada sayfayı reload edip az önce setlediğim
      //dile göre ürünleri tekrar çekiyorum.
      location.reload();
    },
  },
};
</script>

<style></style>
