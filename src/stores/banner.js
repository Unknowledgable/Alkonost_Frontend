import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBannerStore = defineStore('banner', () => {
  const dropdownOpen = ref(false)
  const userLoggedIn = ref(false)
  const logoURL = 'src/assets/Alkonost_icon.png'
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

  return {
    dropdownOpen,
    userLoggedIn,
    logoURL,
    dropdownRef,
    toggleRef,
    toggleDropdown,
    handleClickOutside,
  }
})
