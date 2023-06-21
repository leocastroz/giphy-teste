<script>
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'
import LoadingError from '../components/LoadingError.vue'
import ModalPreview from '../components/ModalPreview.vue'
import GifGrid from '../components/GifGrid.vue'
import '../assets/config/config_gipht.css'

export default {
  components: {
    LoadingError,
    ModalPreview,
    GifGrid
  },
  data() {
    return {
      gifs: [],
      offset: 0,
      loading: false,
      error: false,
      searchQuery: '',
      originalGifs: [],
      modalOpen: false,
      selectedGif: null,
      showScrollButton: false
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
    shouldShowClearIcon() {
      return this.searchQuery.length > 0;
    },
    ...mapGetters(['getGifs']),
    filteredGifs() {
      const gifs = this.getGifs
      if (this.searchQuery.trim() === '') {
        return gifs
      } else {
        return gifs.filter((gif) =>
          gif.title.toLowerCase().includes(this.searchQuery.trim().toLowerCase())
        )
      }
    }
  },
  methods: {
    clearSearch() {
      this.searchQuery = '';
    },
    ...mapActions(['setGifs']),
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
        this.setGifs([...this.getGifs, ...response.data.data])
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
      this.showScrollButton = window.pageYOffset > 200
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
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
    },
    handleOpenModal(gif) {
      this.selectedGif = gif
      this.modalOpen = true
    }
  }
}
</script>

<template>
  <section>
    <img
      src="../assets//extras/arrow.svg"
      alt="arrow"
      class="bg-gradient-to-r from-pink-500 to-purple-700 border-2 border-white cursor-pointer rounded-full fixed bottom-3 right-3 m-2 z-40"
      @click="scrollToTop"
    />
    <div class="flex justify-center items-center">
      <input
        type="text"
        v-model="searchQuery"
        @input="filterGifs"
        placeholder="Search Gifs"
        class="bg-gradient-to-r from-pink-500 to-purple-700 border-2 border-white rounded-lg py-2 px-4 m-8 text-white focus:font-medium focus:outline-none"
      />
      <img src="../assets/extras/close.svg" alt="clear" @click="clearSearch" v-if="searchQuery.length > 0" class="clear-icon cursor-pointer">
    </div>

    <gif-grid :filteredGifs="filteredGifs" @open-modal="handleOpenModal" />
    
    <LoadingError :loading="loading" :error="error" />

    <ModalPreview :modalOpen="modalOpen" :selectedGif="selectedGif" @close-modal="closeModal" />
  </section>
</template>
