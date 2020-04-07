/*=========================================================================================
  File Name: moduleAuthActions.js
  Description: Auth Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import jwt from "../../http/requests/auth/jwt/index.js";
import axios from "../../axios";
import router from "@/router";
const photoURL = require("@/assets/images/portrait/small/avatar-s-11.jpg")

export default {
  
  // updateUsername({ commit }, payload) {
  //   payload.user
  //     .updateProfile({
  //       displayName: payload.username
  //     })
  //     .then(() => {       
  //       // If username update is success
  //       // update in localstorage
  //       let newUserData = Object.assign({}, payload.user.providerData[0]);
  //       newUserData.displayName = payload.username;
  //       commit("UPDATE_USER_INFO", newUserData, { root: true });

  //       // If reload is required to get fresh data after update
  //       // Reload current page
  //       if (payload.isReloadRequired) {
  //         router.push(router.currentRoute.query.to || "/");
  //       }
  //     })
  //     .catch(err => {
  //       payload.notify({
  //         time: 8800,
  //         title: "Error",
  //         text: err.message,
  //         iconPack: "feather",
  //         icon: "icon-alert-circle",
  //         color: "danger"
  //       });
  //     });
  // },

  login({ commit }, payload) {
    return new Promise((resolve, reject) => {
      // The Promise used for router redirect in login
      commit('AUTH_REQUEST')
      axios.post('api/auth', {
            username: payload.userDetails.username,
            password: payload.userDetails.password
        })
        .then(resp => {
          const token = resp.data[1].accessToken;
          // const user = JSON.stringify(resp.data[1].userData[0])
          const addDetails = {
            photoURL: photoURL,
            userRole: resp.data[1].userData[0].user_role
          }
          const infoDetails = JSON.stringify(Object.assign(resp.data[1].userData[0],
                                                           addDetails,))
          // console.log(assign)

          localStorage.setItem("accessToken", token); // store the token in localstorage
          localStorage.setItem("userInfo", infoDetails); // store the token in localstorage
          // localStorage.setItem("userRole", resp.data[1].userData[0].user_role); // store the token in localstorage
          
          axios.defaults.headers.common['Authorization'] = token
          commit('AUTH_SUCCESS', { token, infoDetails});

          // you have your token, now log in your user :)
          // dispatch('USER_REQUEST');

          const userDetails = {
            token,
            infoDetails
          }
          commit("UPDATE_USER_INFO", userDetails);

          resolve(resp);
        })
        .catch(err => {
          commit('AUTH_ERROR', err);           
          localStorage.removeItem("accessToken"); // if the request fails, remove any possible user token if possible          
          payload.notify({
              time: 2500,
              title: err.response.data.title,
              // text: err.message,
              text: err.response.data.text,
              iconPack: 'feather',
              icon: 'icon-alert-circle',
              color: 'danger'
          })

          reject(err);
        });
    });
  },
  logout({ commit }, payload) {
    return new Promise((resolve, reject) => {
      commit("AUTH_LOGOUT");
      localStorage.removeItem("accessToken"); // clear your user's token from localstorage      
      delete axios.defaults.headers.common['Authorization']
      resolve();
    });
  },
  // JWT
  loginJWT({ commit }, payload) {
    return new Promise((resolve, reject) => {
      jwt
        .login(payload.userDetails.npp, payload.userDetails.password)
        .then(response => {
          // If there's user data in response

          console.log(response);
          // console.log(response.data[1].userData[0])

          // if(response.data.userData) {
          if (response.data[1]) {
            // Navigate User to homepage
            // router.push({ name: 'dashboard-analytics'})
            router.push(
              router.currentRoute.query.to || { name: "dashboard-analytics" }
            );

            // Set accessToken
            localStorage.setItem("accessToken", response.data[1].accessToken);

            // Update user details
            commit("UPDATE_USER_INFO", response.data[1].userData, {
              root: true
            });
            // commit('UPDATE_USER_INFO', response.data[0], {root: true})

            // Set bearer token in axios
            commit("SET_BEARER", response.data[1].accessToken);

            resolve(response);
          } else {
            reject({ message: "Wrong Username or Password" });
            // reject({message: response})
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  },


  registerUserJWT({ commit }, payload) {
    const {
      displayName,
      email,
      password,
      confirmPassword
    } = payload.userDetails;

    return new Promise((resolve, reject) => {
      // Check confirm password
      if (password !== confirmPassword) {
        reject({ message: "Password doesn't match. Please try again." });
      }

      jwt
        .registerUser(displayName, email, password)
        .then(response => {
          // Redirect User
          router.push(router.currentRoute.query.to || "/");

          // Update data in localStorage
          localStorage.setItem("accessToken", response.data.accessToken);
          commit("UPDATE_USER_INFO", response.data.userData, { root: true });

          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  //Buatan Putra
  daftarUser({ commit }, payload) {
    const {
      username,
      email,
      password,
      confirmPassword
    } = payload.userDetails;

    return new Promise((resolve, reject) => {
      // Check confirm password
      if (password !== confirmPassword) {
        reject({ message: "Password doesn't match. Please try again." });
      }
      axios
          .post('api/daftarUser', payload.userDetails)
          .then(response => {

          payload.notify({
            title: 'Berhasil',
            text: 'Akun PKBL Online Berhasil dibuat. Silahkan cek Email Untuk Aktivasi',
            iconPack: 'feather',
            icon: 'icon-check',
            color: 'success'
          }) 
          // Redirect User
          router.push(router.currentRoute.query.to || "/");
          resolve(response);
        })
        .catch(error => {
          payload.notify({
            time: 2500,
            title: error.response.data.title,
            // text: err.message,
            text: error.response.data.text,
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'danger'
          })
          reject(error);
      });
    });
  },

  lupaPassword({ commit }, payload) {
    const {
      email,
    } = payload.userDetails;
    return new Promise((resolve, reject) => {
      axios
          .post('api/lupapassword', payload.userDetails)
          .then(response => {
             let rstoken           = '';
             let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
             let charactersLength = characters.length;
             for ( let i = 0; i < 200; i++ ) {
                rstoken += characters.charAt(Math.floor(Math.random() * charactersLength));
             }
            localStorage.setItem('rstoken',rstoken)
            payload.notify({
              title: 'Berhasil',
              text: 'Silahkan cek email anda untuk pulihkan password akun Anda',
              iconPack: 'feather',
              icon: 'icon-check',
              color: 'success'
            }) 
          // Redirect User          
          router.push(router.currentRoute.query.to || "/");
          resolve(response);
        })
        .catch(error => {
          payload.notify({
            time: 2500,
            title: error.response.data.title,
            // text: err.message,
            text: error.response.data.text,
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'danger'
          })
          reject(error);
      });
    });
  },


  pulihkanPassword({ commit }, payload) {
    const {
      id,
      token,
      password
    } = payload.tokenDetails;
    return new Promise((resolve, reject) => {
      axios
          .post('/api/pulihkanpassword', payload.tokenDetails )
          .then(response => {         
            localStorage.removeItem('rstoken')   
            payload.notify({
              title: response.data.title,
              text: response.data.text,
              iconPack: 'feather',
              icon: 'icon-check',
              color: 'success'
            }) 
          // Redirect User
          router.push(router.currentRoute.query.to || {name: "page-login"});
          resolve(response);
        })
        .catch(error => {
          payload.notify({
            time: 2500,
            title: error.response.data.title,
            // text: err.message,
            text: error.response.data.text,
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'danger'
          })
          reject(error);
      });
    });
  },

  kirimVerifikasi({ commit }, payload) {
    const {
      username_verifikasi,
      email_verifikasi
      // password,
      // confirmPassword
    } = payload.userDetails;

    return new Promise((resolve, reject) => {
      // console.log('masuk vuex')
      axios
          .post('api/kirimVerifikasi', payload.userDetails)
          .then(response => {

          payload.notify({
            title: 'Berhasil',
            text: 'Verifikasi telah dikirim email. Silahkan buka email anda dan lakukan Aktivasi',
            iconPack: 'feather',
            icon: 'icon-check',
            color: 'success'
          }) 
          // Redirect User
          router.push(router.currentRoute.query.to || '/');
          resolve(response);
        })
        .catch(error => {
          payload.notify({
            time: 2500,
            title: error.response.data.title,
            // text: err.message,
            text: error.response.data.text,
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'danger'
          })
          reject(error);
      });
    });
  },

  fetchAccessToken() {
    return new Promise(resolve => {
      jwt.refreshToken().then(response => {
        resolve(response);
      });
    });
  }
};
