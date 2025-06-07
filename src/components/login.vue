<template>
  <div class="login-container">
    <div class="login-form-section">
      <h1>Welcome back to the Alkonost project!</h1>
      <p>Please enter your details.</p>

      <form @submit.prevent="submitLoginHandler">
        <input
          class="login-input"
          v-model="email"
          type="email"
          name="email"
          placeholder="Your email address"
          required
        />
        <input
          class="login-input"
          v-model="password"
          type="password"
          name="password"
          placeholder="Your password"
          required
        />
        <div>
          <label class="default-text">
            <input type="checkbox" v-model="remember" />
            Remember you?
          </label>
        </div>
        <button type="submit">Click to sign in</button>
      </form>

      <button class="login-footer" @click="googleLogin">
        <strong>Google login (WIP)</strong>
      </button>

      <div class="login-footer">
        <a href="/signup">Dont have an account?</a>
        <br>
        <a href="#" @click.prevent="showTrouble = true">Trouble signing in?</a>
            <Modal :isOpen="showTrouble" @close="showTrouble = false">
                <LoginTrouble />
            </Modal>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { submitLogin, googleAuthLogin } from '@/utils/apiCalls.js'
import Modal from '@/components/modal.vue'
import LoginTrouble from '@/components/login_trouble.vue'

const email = ref('')
const password = ref('')
const remember = ref(false)
const showTrouble = ref(false)

const router = useRouter()


function submitLoginHandler() {
    submitLogin({
        email: email.value,
        password: password.value,
        remember: remember.value
      })
    .then(() => {
        router.push({ name: '/home'})
    })
    .catch(e => {
        console.error(e)
    })
}
</script>