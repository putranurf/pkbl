/*=========================================================================================
  File Name: moduleAuthState.js
  Description: Auth Module State
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import auth from "@/auth/authService";

export default {
    // isUserLoggedIn: () => {
    //     let isAuthenticated = false

    //     // // get firebase current user
    //     // // const firebaseCurrentUser = firebase.auth().currentUser

    //     // // if (auth.isAuthenticated() || firebaseCurrentUser) isAuthenticated = true
    //     // if (auth.isAuthenticated()) isAuthenticated = true
    //     // else isAuthenticated = false

    //     // return (localStorage.getItem('userInfo') && isAuthenticated)

    //     if (auth.isAuthenticated()) isAuthenticated = true
    //     else isAuthenticated = false
        
    //     return (localStorage.getItem('userInfo') && isAuthenticated)
    // },
    // const state = {
      token: localStorage.getItem('accessToken') || '',
      status: '',
    // }
}

