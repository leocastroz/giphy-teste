<script>
import '../assets/config/config_gipht.css'

export default {
  props: {
    modalOpen: {
      type: Boolean,
      required: true
    },
    selectedGif: {
      type: Object,
      required: true
    }
  },
  methods: {
    closeModal() {
      this.$emit('close-modal')
    }
  }
}
</script>

<template>
  <div>
    <transition name="modal-fade">
      <div class="modal fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 flex items-center justify-center"
        v-if="modalOpen">
        <div class="modal-content">
          <img :src="selectedGif.images.original.url" alt="Gif" class="w-full rounded-xl" />
          <div class="absolute top-4 right-4">
            <img src="../assets/extras/close.svg" alt="close"
              class="cursor-pointer bg-gradient-to-r from-pink-500 to-purple-700 rounded-full px-3 py-1"
              @click="closeModal" />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
