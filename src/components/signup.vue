<template>
  <div class="baseline-container flex items-center justify-center">
    <div class="baseline-card w-full max-w-md">
      <h2 class="baseline-heading text-center">Create an Account</h2>

      <form @submit.prevent="handleSignUp" class="flex flex-col gap-4">
        <label class="baseline-text">
          Username
          <input
            v-model="username"
            type="text"
            required
            class="mt-1 p-2 rounded border border-[var(--border)] bg-[var(--card)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            placeholder="Choose a username"
          />
        </label>

        <label class="baseline-text">
          Email
          <input
            v-model="email"
            type="email"
            required
            class="mt-1 p-2 rounded border border-[var(--border)] bg-[var(--card)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            placeholder="you@example.com"
          />
        </label>

        <label class="baseline-text">
          Password
          <input
            v-model="password"
            type="password"
            required
            minlength="6"
            class="mt-1 p-2 rounded border border-[var(--border)] bg-[var(--card)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            placeholder="••••••••"
          />
        </label>

        <label class="baseline-text">
          Confirm Password
          <input
            v-model="confirmPassword"
            type="password"
            required
            minlength="6"
            class="mt-1 p-2 rounded border border-[var(--border)] bg-[var(--card)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            placeholder="••••••••"
          />
        </label>

        <p v-if="errorMessage" class="text-sm text-red-500">
          {{ errorMessage }}
        </p>

        <!-- Submit Button -->
        <button type="submit" class="baseline-button mt-2">
          Sign Up
        </button>
      </form>

      <!-- “Already have an account?” link to switch back to login -->
      <div class="mt-4 text-center">
        <span class="baseline-text">Already have an account?</span>
        <button @click="$emit('switchToLogin')" class="text-[var(--accent)] hover:underline ml-1">
          Log In
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { signUpAPI } from '@/utils/apiCalls.js'

const emit = defineEmits(['switchToLogin', 'signUpSuccess'])

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

    emit('signUpSuccess')
  } catch (err) {
    console.error(err)

    if (err.response?.data?.message) {
      errorMessage.value = err.response.data.message
    } else {
      errorMessage.value = 'Unable to sign up. Please try again.'
    }
  }
}
</script>
<style scoped>
</style>
