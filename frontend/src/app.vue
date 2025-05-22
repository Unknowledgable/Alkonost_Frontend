<script setup>
import Banner from './components/Banner.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Banner />
    <main class="flex-grow pt-[72px] pb-[96px]">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>
