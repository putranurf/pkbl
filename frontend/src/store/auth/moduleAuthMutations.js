/*=========================================================================================
  File Name: moduleAuthMutations.js
  Description: Auth Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import axios from "../../http/axios/index.js"

export default {
  SET_BEARER(state, accessToken) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken
  },

  AUTH_REQUEST(state) {
    state.status = 'loading'
  },
  AUTH_SUCCESS(state, { token, user}) {
    state.status = 'success'
    state.token = token
    state.user = user
  },
  AUTH_ERROR(state) {
    state.status = 'error'
  },
  AUTH_LOGOUT(state) {
    state.token = "";
  },
  UPDATE_USER_INFO(state, payload) {

    // Get Data localStorage
    let userInfo = JSON.parse(localStorage.getItem("userInfo")) || state.AppActiveUser    

    // console.log(userInfo)
    // for (const property of Object.keys(payload)) {

    //   if (payload[property] != null) {
    //     // If some of user property is null - user default property defined in state.AppActiveUser
    //     state.AppActiveUser[property] = payload[property]

    //     // Update key in localStorage
    //     userInfo[property] = payload[property]
    //   }
    // }  

    // Store data in localStorage
    localStorage.setItem("userInfo", JSON.stringify(userInfo))
  },
}
