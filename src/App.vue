<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MainComponent from './components/MainComponent.vue'
</script>

<template>
  <section class="max-w-full m-14">
    <div class="max-w-7xl mx-auto">
      <MainComponent />
    </div>
    <nav
      class="max-w-xs mx-auto shadow-lg border-solid border-2 border-pink-600 bg-black rounded-full text-white text-center mt-8 p-5">
      <div class="nav-links">
        <RouterLink to="/" class="text-white font-bold mr-4">HOME</RouterLink>
        <RouterLink to="/giphy" class="text-white font-bold">FOR GIPHY</RouterLink>
      </div>
    </nav>
  </section>
  <RouterView />
</template>


<style scoped>
nav {
  box-shadow: 0 0 1000px 5px #FF0080;
}

nav a.router-link-exact-active {
  background: linear-gradient(270deg, #FF0080 0%, #9433f5 100%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}
</style>
