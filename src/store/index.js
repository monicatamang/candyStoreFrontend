import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allCandies: []
  },

  mutations: {
    addNewCandy: function(state, data) {
      state.allCandies = data;
    },

    updateAllCandies: function(state, data) {
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
