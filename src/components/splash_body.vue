<script setup>
import { ref } from 'vue'
import { handleImageClick } from '@/stores/splash_body.js'
import splashImage from '@/assets/Alkonost_large.png'
const showImage = ref(true)
const clickCount = ref(0)

function toggleImage() {
  handleImageClick(clickCount, showImage)
}
</script>
<template>
  <section class="welcome-container flex flex-col items-center text-center">
    <h1 class="welcome-heading text-3xl font-bold my-4">Hello! Welcome to Alkonost!</h1>
    <p class="welcome-description mb-2">
      The site is still under development. Soon you can come here whenever you need a musical recommendation!
    </p>
    <p class="welcome-wip mb-6">
      <strong>This site may not work well for mobile users at this time.</strong>
    </p>
    <p class="text-lg font-semibold mb-2">Clicks: {{ clickCount }}</p>
    <img
      v-if="showImage"
      :src="splashImage"
      alt="Alkonost"
      class="w-80 cursor-pointer transition-transform hover:scale-105"
      @click="toggleImage"
    />
  </section>
</template>