<script setup>
import Banner from './components/Banner.vue'
import Footer from './components/Footer.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Banner />
    <main class="flex-1">
     <RouterView />
    </main>
    <Footer />
  </div>
</template>
