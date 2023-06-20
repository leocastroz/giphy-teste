<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MainComponent from './components/MainComponent.vue'
</script>

<template>
  <section>
    <div class="container">
      <MainComponent />
    </div>
    <nav>
      <div class="nav-links">
        <RouterLink to="/">HOME</RouterLink>
        <RouterLink to="/giphy">FOR GIPHY</RouterLink>
      </div>
    </nav>
  </section>
  <RouterView />
</template>

<style scoped>
section {
  max-width: 100%;
  margin: 50px;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

nav {
  max-width: 350px;
  margin: 0 auto;
}

nav {
  box-shadow: 0 0 1000px 5px #FF0080;
  border: 1px solid #FF0080;
  background-color: #000000;
  border-radius: 50px;
  text-align: center;
  margin-top: 20px;
  padding: 20px 0;
}

nav a {
  text-decoration: none;
  font-weight: 700;
  color: #fff;
  margin: 20px;
}

nav a.router-link-exact-active {
  background: linear-gradient(270deg, #FF0080 0%, #9433f5 100%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}</style>
