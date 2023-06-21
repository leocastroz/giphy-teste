import './assets/config/tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import store from './database/store'
import FloatingVue  from 'floating-vue'
import 'floating-vue/dist/style.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(store)
app.use(FloatingVue);

app.config.globalProperties.$axios = axios

app.mount('#app')
