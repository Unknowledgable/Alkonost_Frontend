<script setup>
import { useBannerStore } from '@/stores/banner'
const banner = useBannerStore()
</script>

<template>
  <div class="banner-container">
    <a href="/home" class="flex items-center">
      <img class="banner-logo" :src="banner.logoURL" alt="Alkonost" />
      Alkonost
    </a>

    <div class="banner-link-group">
      <template v-if="banner.userLoggedIn">
        <div class="relative">
          <button
            :ref="banner.toggleRef"
            @click="banner.toggleDropdown"
            class="cursor-pointer"
          >
            Profile <span :class="{ 'rotate-180': banner.dropdownOpen }">⌄</span>
          </button>

          <div
            v-if="banner.dropdownOpen"
            :ref="banner.dropdownRef"
            class="dropdown-menu"
          >
            <a href="/profile" class="dropdown-item">My Profile</a>
            <a href="/user_preferences" class="dropdown-item">Preferences</a>
            <a href="/logout" class="dropdown-item">Log Out</a>
          </div>
        </div>
      </template>

      <template v-else>
        <a href="/login" class="hover:underline">Sign in</a>
      </template>
    </div>
  </div>
</template>