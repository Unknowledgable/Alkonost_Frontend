<script setup>
import Banner from './components/Banner.vue'
import Footer from './components/Footer.vue'
import { RouterView } from 'vue-router'
import Welcome from './views/Welcome.vue'

</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Banner />
     <Welcome />
    <Footer />
  </div>
</template>
