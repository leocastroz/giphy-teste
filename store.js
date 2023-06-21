import axios from 'axios';
import { createStore } from 'vuex';

const store = createStore({
  state: {
    gifs: []
  },
  mutations: {
    SET_GIFS(state, gifs) {
      state.gifs = gifs;
    }
  },
  actions: {
    async setGifs({ commit, state }, gifs) {
        if (state.gifs.length === 0) {
          try {
            const response = await axios.get(
                `https://api.giphy.com/v1/gifs/trending?api_key=ICR7VcGaD4CwjRQ3LvYkpPwG4VHdG5pM&offset=${this.offset}`
            );
            commit('SET_GIFS', response.data.data);
          } catch (error) {
            console.error(error);
          }
        } else {
          commit('SET_GIFS', [...state.gifs, ...gifs]);
        }
      },
  },
  getters: {
    getGifs(state) {
      return state.gifs;
    }
  }
});

export default store;
