<template>
  <div class="login-container">
    <div class="login-form-section">
      <h1>Welcome to The Alkonost Project!</h1>
      <p>Please enter your details.</p>

      <form @submit.prevent="submitLogin">
        <input
          v-model="email"
          type="email"
          name="email"
          placeholder="Your email address"
          required
        />
        <input
          v-model="password"
          type="password"
          name="password"
          placeholder="Your password"
          required
        />
        <div class="alt-login">
          <label>
            <input type="checkbox" v-model="remember" />
            Remember you?
          </label>
        </div>
        <button type="submit">Click to sign in</button>
      </form>

      <button class="Oauth-btn" @click="googleLogin">
        <strong>Google login (WIP)</strong>
      </button>

      <div class="login-footer">
        Don't have an account?
        <a href="#" @click.prevent="showSignup = true">Sign up</a>
            <Modal :isOpen="showSignup" @close="showSignup = false">
                <SignUp />
            </Modal>
        Trouble Signing in?
        <a href="#" @click.prevent="showTrouble = true">Recovery</a>
            <Modal :isOpen="showTrouble" @close="showTrouble = false">
                <loginTrouble />
            </Modal>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { submitLogin, googleLogin } from '@/utils/userAuthentication.js'
import Modal from '@/components/modal.vue'
import LoginTrouble from '@/components/login_trouble.vue'
import SignUp from '@component/signup.vue'


const email = ref('')
const password = ref('')
const remember = ref(false)
</script>
