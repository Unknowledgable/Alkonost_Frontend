import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '@/views/Welcome.vue'
import Profile from '@/views/Profile.vue'
import Preferences from '@/views/Preferences.vue'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Signup from '@/views/Signup.vue'

const routes = [
  {
  name: 'root',
  path: '/',
  component: Welcome,
  meta: {title: 'Welcome | Alkonost Project' },
  },
  {
  name: 'home page',
  path: '/home',
  component: Home,
  },
  {
  name: 'profile page',
  path: '/profile',
  component: Profile,
  },
  {
  name: 'preferences page',
  path: '/user_preferences',
  component: Preferences,
  },
  {
  name: 'signin page',
  path: '/login',
  component: Login
  },
  {
  name: 'signup page',
  path: '/signup',
  component: Signup
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.afterEach((to) => {
    if(to.meta?.title) {
        document.title = to.meta.title
    }
})

export default router