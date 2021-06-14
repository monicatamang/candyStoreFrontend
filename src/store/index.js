import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allCandies: []
  },

  mutations: {
    addNewCandy(state, data) {
      state.allCandies.push(data);
    },

    removeCandy(state, data) {
      state.allCandies.splice(data, 1);
    },

    updateAllCandies(state, data) {
      state.allCandies = data
    }
  },

  actions: {
    getCandy(context) {
      axios.request({
          url: "http://127.0.0.1:5000/candy",
          method: "GET"
      }).then((res) => {
          console.log(res);
          context.commit("updateAllCandies", res.data);
      }).catch((err) => {
          console.log(err);
      });
    },
  },

  getters: {
    
  }
})
