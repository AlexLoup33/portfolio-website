<script setup lang="ts">
import HeaderVue from "./components/Header.vue"
import FooterVue from "./components/Footer.vue"
</script>

<template>
  <!-- HEADER -->
  <HeaderVue />


  <!-- APP -->
  

  <!-- FOOTER -->
   <FooterVue />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
