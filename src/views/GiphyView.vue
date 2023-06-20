<template>
  <section>
    <div class="search">
      <input type="text" v-model="searchQuery" @input="filterGifs" placeholder="Search Gifs" />
    </div>

    <div class="grid-container">
      <div class="grid-item" v-for="(gif, index) in filteredGifs" :key="index">
        <img :src="gif.images.original.url" alt="Gif" @click="openModal(gif)" />
      </div>
    </div>

    <div class="error">
      <div v-if="loading">Carregando...</div>
      <div v-else-if="error">Ocorreu um erro ao carregar os gifs.</div>
    </div>

    <div class="modal" v-if="modalOpen">
      <div class="modal-content">
        <img :src="selectedGif.images.original.url" alt="Gif" />
        <div class="close-button" @click="closeModal">
          <span class="material-symbols-outlined">
            disabled_by_default
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

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
      try {
        this.loading = true
        const response = await axios.get(
          `https://api.giphy.com/v1/gifs/trending?api_key=ICR7VcGaD4CwjRQ3LvYkpPwG4VHdG5pM&offset=${this.offset}`
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

<style scoped>
.search {
  justify-content: center;
  align-items: center;
  display: flex;
}

.search input {
  background: linear-gradient(270deg, #ff0080 0%, #9433f5 100%);
  border: 2px solid #fff;
  border-radius: 5px;
  padding: 10px 25px;
  margin: 30px;
}

.search input::placeholder {
  color: #fff;
}

.search input:focus {
  font-weight: 500;
  outline: none;
  color: #fff;
}

.grid-container {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  display: grid;
}

.grid-item {
  border: 2px solid #8e8e8ea4;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px;
  margin: 10px;
}

.grid-item img {
  height: auto;
  width: 100%;
}

.error {
  margin: 40px;
  font-size: 30px;
  text-align: center;
  color: #ff0080;
}

.modal {
  background-color: #000000cc;
  justify-content: center;
  align-items: center;
  position: fixed;
  display: flex;
  z-index: 999;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
}

.modal-content {
  position: relative;
  max-height: 100%;
  max-width: 100%;
}

.modal-content img {
  height: auto;
  width: 100%;
}

.close-button {
  position: absolute;
  right: 10px;
  top: 10px;
}

.close-button span {
  background: linear-gradient(270deg, #ff0080 0%, #9433f5 100%);
  cursor: pointer;
  font-size: 30px;
  color: #fff;
}

main {
  max-width: 1400px;
  margin: 0 auto;
  padding: 50px;
}

.box {
  flex-direction: row;
  display: flex;
}
</style>
