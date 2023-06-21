<script lang="ts">
import axios from 'axios'
import { saveAs } from 'file-saver'

export default {
  props: {
    filteredGifs: {
      type: Array,
      required: true
    }
  },
  methods: {
    downloadImage(url) {
      axios
        .get(url, {
          responseType: 'blob'
        })
        .then((response) => {
          const filename = 'image.gif'
          saveAs(response.data, filename)
        })
        .catch((error) => {
          console.error(error)
        })
    },
    openModal(gif) {
      this.$emit('open-modal', gif)
    }
  }
}
</script>

<template>
  <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
    <div v-for="(gif, index) in filteredGifs" :key="index"
      class="rounded-lg cursor-pointer p-4 m-4 hover:scale-110 transition-transform duration-300">
      
      <VTooltip :distance="-25" :skidding="0" class="rteste">
        <img src="../assets/extras/download.svg" alt="donwload"
          class="bg-gradient-to-r from-pink-500 to-purple-700 text-white rounded-sm w-6 p-1 my-1"
          @click="downloadImage(gif.images.original.url)" />
        <template #popper>
          <p class="text-xs text-purple-500 font-bold">Donwload GIF</p>
        </template>
      </VTooltip>

      <div class="relative">
        <img :src="gif.images.original.url" alt="Gif" class="w-lg rounded-lg fist-image" @click="openModal(gif)" />
        <p class="text-xs font-semibold text-zinc-500 text-center p-2">{{ gif.title }}</p>
      </div>
    </div>
  </div>
</template>
