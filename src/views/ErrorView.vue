<template>
  <v-container class="full-height">
    <v-row class="fill-height">
      <v-col align-self="center" class="text-center">
        <h1>{{ $t("error.title") }}</h1>
        <router-link to="/">{{ $t("error.home") }}</router-link>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.full-height {
  height: 100%;
}
</style>
