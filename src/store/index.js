import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Storing all candy posts into an array
    allCandies: [],

    // Initializing the status of the request as an empty string
    requestStatus: "",

    // Initializing the status of the user sign up or log in as an empty string
    userStatus: "",
  },

  mutations: {
    // Adding a new candy post to the array
    addNewCandy(state, data) {
      state.allCandies.unshift(data);
    },

    // Removing a candy post from the array
    removeCandy(state, data) {
      state.allCandies.splice(data, 1);
    },

    // Replace the old candy post with the new candy post
    updateCandy(state, data) {
      state.allCandies.splice(data.index, 0, data.post);
    },

    // Updating all the candy posts to show all posts with the current changes
    storeAllCandies(state, data) {
      state.allCandies = data
    },

    // Updating the request status for each request sent by the user
    updateRequestStatus(state, data) {
      state.requestStatus = data;
    },

    // Updating the user status when a user signs up or logs in
    updateUserStatus(state, data) {
      state.userStatus = data;
    }
  },

  actions: {
    // Creating a GET request to get all candy posts
    getCandy(context) {
      context.commit("updateRequestStatus", "");
      // Configuring the request with the url and type
      axios.request({
          url: `${process.env.VUE_APP_API_URL}/candy`,
          method: "GET"
      }).then((res) => {
          res;
          // If the network is done and there are no errors, send the data to the function to update the page with the current candy posts
          context.commit("storeAllCandies", res.data);
      }).catch((err) => {
          // If the network is done but the page errors, print an error message to the user
          err;
          context.commit("updateRequestStatus", "Failed to retrieve all candy posts. Please refresh the page.");
      });
    },
  },

  getters: {
    
  }
})
