<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <HeaderComponent />
    </div>
    <div class="container">
      <nav>
        <RouterLink to="/">HOME</RouterLink>
        <RouterLink to="/giphy">GIPHY</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  max-width: 100%;
  margin: 50px;
}
.wrapper {
  margin: 0 auto;
  max-width: 1400px;
}
.container {
  margin: 0 auto;
  max-width: 350px;
}
nav {
  padding: 20px 0;
  margin-top: 20px;
  text-align: center;
  background-color: #000000;
  box-shadow: 0 0 1000px 5px #FF0080;
  border: 1px solid #FF0080;
  border-radius: 50px;
}
nav a {
  font-weight: 700;
  margin: 40px;
  padding: 0 5px;
  text-decoration: none;
  color: #fff;
}
nav a.router-link-exact-active {
  background: linear-gradient(270deg,#FF0080 0%,#9433f5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

</style>
