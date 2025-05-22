import { ref, onMounted, onBeforeUnmount } from 'vue'

const dropdownOpen = ref(false)
const userLoggedIn = ref(true)
const logoURL = 'src/assets/Alkonost_icon.png'

const dropdownRef = ref(null)
const toggleRef = ref(null)

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

const handleClickOutside = (event) => {
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