<script>
import axios from 'axios'

export default {
  data() {
    return {
      gifs: [],
      offset: 0,
      loading: false,
      error: false,
      searchQuery: '',
      originalGifs: [],
      modalOpen: false,
      selectedGif: null
    }
  },

  mounted() {
    this.loadGifs()
    window.addEventListener('scroll', this.handleScroll)
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  computed: {
    filteredGifs() {
      if (this.searchQuery.trim() === '') {
        return this.gifs
      } else {
        return this.gifs.filter((gif) =>
          gif.title.toLowerCase().includes(this.searchQuery.trim().toLowerCase())
        )
      }
    }
  },

  methods: {
    async loadGifs() {
      const queryString = new URLSearchParams({
        api_key: import.meta.env.VITE_APP_API_KEY,
        offset: this.offset
      })
      try {
        this.loading = true
        const response = await axios.get(
          `${import.meta.env.VITE_URL_GIPHY}?${queryString.toString()}`
        )
        this.gifs = [...this.gifs, ...response.data.data]
        this.originalGifs = [...this.gifs]
        this.offset += 25
        this.loading = false
      } catch (error) {
        console.error(error)
        this.loading = false
        this.error = true
      }
    },

    handleScroll() {
      const scrollY = window.scrollY
      const visibleHeight = window.innerHeight
      const totalHeight = document.documentElement.scrollHeight

      if (!this.loading && scrollY + visibleHeight >= totalHeight) {
        this.loadGifs()
      }
    },

    filterGifs() {
      if (this.searchQuery.trim() === '') {
        this.gifs = [...this.originalGifs]
      } else {
        this.gifs = this.originalGifs.filter((gif) =>
          gif.title.toLowerCase().includes(this.searchQuery.trim().toLowerCase())
        )
      }
    },

    openModal(gif) {
      this.selectedGif = gif
      this.modalOpen = true
    },

    closeModal() {
      this.modalOpen = false
    }
  }
}
</script>

<template>
  <section>
    <div class="flex justify-center items-center">
      <input
        type="text"
        v-model="searchQuery"
        @input="filterGifs"
        placeholder="Search Gifs"
        class="bg-gradient-to-r from-pink-500 to-purple-700 border-2 border-white rounded-lg py-2 px-4 m-8 text-white focus:font-medium focus:outline-none"
      />
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
      <div
        v-for="(gif, index) in filteredGifs"
        :key="index"
        class="rounded-lg cursor-pointer p-4 m-4 hover:scale-110 transition-transform duration-300"
      >
        <img :src="gif.images.original.url" alt="Gif" class="w-lg" @click="openModal(gif)" />
      </div>
    </div>

    <div v-if="loading" class="flex justify-center items-center">
      <div
        class="animate-spin rounded-full h-10 w-10 border-dashed border-2 border-white border-t-5 border-b-2 bg-gradient-to-r from-purple-700 to-pink-700"
      ></div>
    </div>
    <div class="error mt-10 text-3xl text-center text-pink-500" v-else-if="error">
      Ops.. Ocorreu um erro ao carregar os Gifs.
    </div>

    <div
      class="modal fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 flex items-center justify-center"
      v-if="modalOpen"
    >
      <div class="modal-content">
        <img :src="selectedGif.images.original.url" alt="Gif" class="w-full" />
        <div class="close-button absolute top-4 right-4">
          <span
            class="material-symbols-outlined cursor-pointer text-3xl text-white bg-gradient-to-r from-pink-500 to-purple-700 rounded-full py-1 px-2"
            @click="closeModal"
          >
            cancel
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hover\:scale-110:hover {
  transform: scale(1.1);
}

.transition-transform {
  transition-property: transform;
}

.duration-300 {
  transition-duration: 300ms;
}
</style>
