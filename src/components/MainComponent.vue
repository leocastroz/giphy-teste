<script>
export default {
  methods: {
    openURL() {
      window.open('https://github.com/leocastroz', '_blank');
    }
  }
}
</script>

<template>
  <section class="bg-gradient-to-r from-purple-700 to-pink-500 justify-between items-center rounded-lg flex">
    <div class="font-bold px-6 py-2">
      <img src="../../public/giphy.png" alt="giphy" class="w-24">
    </div>
    <div @click="openURL" class="cursor-pointer">
      <img class="w-6 mx-4" src="../assets/extras/github.svg" alt="github">
    </div>
  </section>
</template>
