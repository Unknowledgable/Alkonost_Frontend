<template>
  <div class="banner-container">
    <a href="/home" class="flex items-center">
      <img class="banner-logo" :src="logoURL" alt="Alkonost" />
      Alkonost
    </a>

    <div class="banner-link-group">
      <template v-if="userLoggedIn">
        <div class="relative">
          <button
            ref="toggleRef"
            @click="toggleDropdown"
            class="cursor-pointer"
          >
            Profile <span :class="{ 'rotate-180': dropdownOpen }">⌄</span>
          </button>

          <div
            v-if="dropdownOpen"
            ref="dropdownRef"
            class="dropdown-menu"
          >
            <a href="/profile" class="dropdown-item">My Profile</a>
            <a href="/user_preferences" class="dropdown-item">Preferences</a>
            <a href="/logout" class="dropdown-item">Log Out</a>
          </div>
        </div>
      </template>

      <template v-else>
        <a href="/Login" class="hover:underline">Sign in</a>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const dropdownOpen = ref(false)
const userLoggedIn = ref(false)
import logoPath from '@/assets/Alkonost_icon.png'
const logoURL = logoPath
const dropdownRef = ref(null)
const toggleRef = ref(null)

function toggleDropdown() {
    dropdownOpen.value = !dropdownOpen.value
}
function handleClickOutside(event) {
    if (
      dropdownOpen.value &&
      !dropdownRef.value?.contains(event.target) &&
      !toggleRef.value?.contains(event.target)
    ) {
      dropdownOpen.value = false
    }
  }


onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})

</script>