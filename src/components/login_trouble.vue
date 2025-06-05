<template>
  <div class="trouble-container">
    <h2>Having Trouble Logging In?</h2>
    <p>What do you want to recover?</p>

    <div class="trouble-options">
      <button @click="recover('username')">Recover Username</button>
      <button @click="recover('password')">Reset Password</button>
      <button @click="recover('otp')">Use One-Time Password (OTP)</button>
    </div>

    <div v-if="loading">Loading...</div>
    <div v-if="error" class="error-message">{{ error }}</div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { recoverUsernameAPI, resetPasswordAPI, sendOTPAPI } from '@/utils/apiCalls.js'

const loading = ref(false)
const error = ref('')

async function recover(type) {
  loading.value = true
  error.value = ''

  try {
    if (type === 'username') {
      await recoverUsernameAPI()
    } else if (type === 'password') {
      await resetPasswordAPI()
    } else if (type === 'otp') {
      await sendOTPAPI()
    }
    alert(`Recovery for ${type} started.`)
  } catch (e) {
    error.value = `Failed to recover ${type}.`
  } finally {
    loading.value = false
  }
}
</script>
