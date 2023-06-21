<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MainComponent from './components/MainComponent.vue'
import './assets/config/config_app.css'
</script>

<template>
  <section class="max-w-full m-14">
    <div class="max-w-7xl mx-auto">
      <MainComponent />
    </div>
    <nav
      class="max-w-xs mx-auto shadow-lg border-solid border-2 border-pink-600 bg-black rounded-full text-white text-center mt-8 p-5 nav-bar">
      <div class="nav-links">
        <RouterLink to="/" class="text-white font-bold mr-4">HOME</RouterLink>
        <RouterLink to="/giphy" class="text-white font-bold">FOR GIPHY</RouterLink>
      </div>
    </nav>
  </section>
  <RouterView />
</template>