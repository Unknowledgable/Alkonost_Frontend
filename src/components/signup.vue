<template>
  <div class="login-container flex items-center justify-center">
    <div class="default-card w-full max-w-md">
      <h2 class="default-heading text-center">Create an Account</h2>

      <form @submit.prevent="handleSignUp" class="flex flex-col gap-4">
        <label class="default-text">
          Username
          <input
            v-model="username"
            type="text"
            required
            class="default-input mt-1"
            placeholder="Choose a username"
          />
        </label>

        <label class="default-text">
          Email
          <input
            v-model="email"
            type="email"
            required
            class="default-input mt-1"
            placeholder="Douglas@example.com"
          />
        </label>

        <label class="default-text">
          Password
          <input
            v-model="password"
            type="password"
            required
            minlength="6"
            class="default-input mt-1"
            placeholder="••••••••"
          />
        </label>

        <label class="default-text">
          Confirm Password
          <input
            v-model="confirmPassword"
            type="password"
            required
            minlength="6"
            class="default-input mt-1"
            placeholder="••••••••"
          />
        </label>

        <p v-if="errorMessage" class="text-sm text-red-500">
          {{ errorMessage }}
        </p>

        <button type="submit" class="default-button mt-2">
          Sign Up
        </button>
      </form>

      <div class="mt-4 text-center">
        <span class="default-text">Already have an account?</span>
        <router-link
        to="/login"
        class="default-text hover:underline ml-1"
        >
          Log In
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { signUpAPI } from '@/utils/apiCalls.js'

const router = useRouter()

const username = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const errorMessage = ref('')

async function handleSignUp() {
  errorMessage.value = ''

  if (password.value !== confirmPassword.value) {
    errorMessage.value = 'Passwords do not match.'
    return
  }

  try {
    const accountInformation = {
      username: username.value.trim(),
      email: email.value.trim(),
      password: password.value,
    }

    await signUpAPI(accountInformation)
    router.push( '/login')
    password.value =''

  } catch (err) {
    console.error(err)
    errorMessage.value =
        err.response?.data?.message ||
         'Unable to sign up. Please try again.'
    }
  }
</script>
<style scoped>
</style>
