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

export default {
  // loginAttempt({ dispatch }, payload) {

  //     // New payload for login action
  //     const newPayload = {
  //         userDetails: payload.userDetails,
  //         notify: payload.notify,
  //         closeAnimation: payload.closeAnimation
  //     }

  //     // If remember_me is enabled change firebase Persistence
  //     if (!payload.checkbox_remember_me) {

  //         // Change firebase Persistence
  //         firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)

  //             // If success try to login
  //             .then(function() {
  //                 dispatch('login', newPayload)
  //             })

  //             // If error notify
  //             .catch(function(err) {

  //                 // Close animation if passed as payload
  //                 if(payload.closeAnimation) payload.closeAnimation()

  //                 payload.notify({
  //                     time: 2500,
  //                     title: 'Error',
  //                     text: err.message,
  //                     iconPack: 'feather',
  //                     icon: 'icon-alert-circle',
  //                     color: 'danger'
  //                 })
  //             })
  //     } else {
  //         // Try to login
  //         dispatch('login', newPayload)
  //     }
  // },
  // login({ commit, state, dispatch }, payload) {

  //     // If user is already logged in notify and exit
  //     if (state.isUserLoggedIn()) {
  //         // Close animation if passed as payload
  //         if(payload.closeAnimation) payload.closeAnimation()

  //         payload.notify({
  //             title: 'Login Attempt',
  //             text: 'You are already logged in!',
  //             iconPack: 'feather',
  //             icon: 'icon-alert-circle',
  //             color: 'warning'
  //         })

  //         return false
  //     }

  //     // Try to sigin
  //     firebase.auth().signInWithEmailAndPassword(payload.userDetails.email, payload.userDetails.password)

  //         .then((result) => {

  //             // Set FLAG username update required for updating username
  //             let isUsernameUpdateRequired = false

  //             // if username is provided and updateUsername FLAG is true
  //               // set local username update FLAG to true
  //               // try to update username
  //             if(payload.updateUsername && payload.userDetails.displayName) {

  //                 isUsernameUpdateRequired = true

  //                 dispatch('updateUsername', {
  //                   user: result.user,
  //                   username: payload.userDetails.displayName,
  //                   notify: payload.notify,
  //                   isReloadRequired: true
  //                 })
  //             }

  //             // Close animation if passed as payload
  //             if(payload.closeAnimation) payload.closeAnimation()

  //             // if username update is not required
  //               // just reload the page to get fresh data
  //               // set new user data in localstorage
  //             if(!isUsernameUpdateRequired) {
  //               router.push(router.currentRoute.query.to || '/')
  //               commit('UPDATE_USER_INFO', result.user.providerData[0], {root: true})
  //             }
  //         }, (err) => {

  //             // Close animation if passed as payload
  //             if(payload.closeAnimation) payload.closeAnimation()

  //             payload.notify({
  //                 time: 2500,
  //                 title: 'Error',
  //                 text: err.message,
  //                 iconPack: 'feather',
  //                 icon: 'icon-alert-circle',
  //                 color: 'danger'
  //             })
  //         })
  // },

  // // Google Login
  // loginWithGoogle({commit, state}, payload) {
  //     if (state.isUserLoggedIn()) {
  //         payload.notify({
  //             title: 'Login Attempt',
  //             text: 'You are already logged in!',
  //             iconPack: 'feather',
  //             icon: 'icon-alert-circle',
  //             color: 'warning'
  //         })
  //         return false
  //     }
  //     const provider = new firebase.auth.GoogleAuthProvider()

  //     firebase.auth().signInWithPopup(provider)
  //       .then((result) => {
  //           router.push(router.currentRoute.query.to || '/')
  //           commit('UPDATE_USER_INFO', result.user.providerData[0], {root: true})
  //       }).catch((err) => {
  //           payload.notify({
  //               time: 2500,
  //               title: 'Error',
  //               text: err.message,
  //               iconPack: 'feather',
  //               icon: 'icon-alert-circle',
  //               color: 'danger'
  //           })
  //       })
  // },

  // // Facebook Login
  // loginWithFacebook({commit, state}, payload) {
  //     if (state.isUserLoggedIn()) {
  //         payload.notify({
  //             title: 'Login Attempt',
  //             text: 'You are already logged in!',
  //             iconPack: 'feather',
  //             icon: 'icon-alert-circle',
  //             color: 'warning'
  //         })
  //         return false
  //     }
  //     const provider = new firebase.auth.FacebookAuthProvider()

  //     firebase.auth().signInWithPopup(provider)
  //         .then((result) => {
  //             router.push(router.currentRoute.query.to || '/')
  //             commit('UPDATE_USER_INFO', result.user.providerData[0], {root: true})
  //         }).catch((err) => {
  //             payload.notify({
  //                 time: 2500,
  //                 title: 'Error',
  //                 text: err.message,
  //                 iconPack: 'feather',
  //                 icon: 'icon-alert-circle',
  //                 color: 'danger'
  //             })
  //         })
  // },

  // // Twitter Login
  // loginWithTwitter({commit, state}, payload) {
  //     if (state.isUserLoggedIn()) {
  //         payload.notify({
  //             title: 'Login Attempt',
  //             text: 'You are already logged in!',
  //             iconPack: 'feather',
  //             icon: 'icon-alert-circle',
  //             color: 'warning'
  //         })
  //         return false
  //     }
  //     const provider = new firebase.auth.TwitterAuthProvider()

  //     firebase.auth().signInWithPopup(provider)
  //         .then((result) => {
  //             router.push(router.currentRoute.query.to || '/')
  //             commit('UPDATE_USER_INFO', result.user.providerData[0], {root: true})
  //         }).catch((err) => {
  //             payload.notify({
  //                 time: 2500,
  //                 title: 'Error',
  //                 text: err.message,
  //                 iconPack: 'feather',
  //                 icon: 'icon-alert-circle',
  //                 color: 'danger'
  //             })
  //         })
  // },

  // // Github Login
  // loginWithGithub({commit, state}, payload) {
  //     if (state.isUserLoggedIn()) {
  //         payload.notify({
  //             title: 'Login Attempt',
  //             text: 'You are already logged in!',
  //             iconPack: 'feather',
  //             icon: 'icon-alert-circle',
  //             color: 'warning'
  //         })
  //         return false
  //     }
  //     const provider = new firebase.auth.GithubAuthProvider()

  //     firebase.auth().signInWithPopup(provider)
  //         .then((result) => {
  //             router.push(router.currentRoute.query.to || '/')
  //             commit('UPDATE_USER_INFO', result.user.providerData[0], {root: true})
  //         }).catch((err) => {
  //             payload.notify({
  //                 time: 2500,
  //                 title: 'Error',
  //                 text: err.message,
  //                 iconPack: 'feather',
  //                 icon: 'icon-alert-circle',
  //                 color: 'danger'
  //             })
  //         })
  // },
  // registerUser({dispatch}, payload) {

  //     // create user using firebase
  //     firebase.auth().createUserWithEmailAndPassword(payload.userDetails.email, payload.userDetails.password)
  //         .then(() => {
  //             payload.notify({
  //                 title: 'Account Created',
  //                 text: 'You are successfully registered!',
  //                 iconPack: 'feather',
  //                 icon: 'icon-check',
  //                 color: 'success'
  //             })

  //             const newPayload = {
  //                 userDetails: payload.userDetails,
  //                 notify: payload.notify,
  //                 updateUsername: true
  //             }
  //             dispatch('login', newPayload)
  //         }, (error) => {
  //             payload.notify({
  //                 title: 'Error',
  //                 text: error.message,
  //                 iconPack: 'feather',
  //                 icon: 'icon-alert-circle',
  //                 color: 'danger'
  //             })
  //         })
  // },
  updateUsername({ commit }, payload) {
    payload.user
      .updateProfile({
        displayName: payload.displayName
      })
      .then(() => {
        // If username update is success
        // update in localstorage
        let newUserData = Object.assign({}, payload.user.providerData[0]);
        newUserData.displayName = payload.displayName;
        commit("UPDATE_USER_INFO", newUserData, { root: true });

        // If reload is required to get fresh data after update
        // Reload current page
        if (payload.isReloadRequired) {
          router.push(router.currentRoute.query.to || "/");
        }
      })
      .catch(err => {
        payload.notify({
          time: 8800,
          title: "Error",
          text: err.message,
          iconPack: "feather",
          icon: "icon-alert-circle",
          color: "danger"
        });
      });
  },

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
          const user = JSON.stringify(resp.data[1].userData[0]);
          localStorage.setItem("accessToken", token); // store the token in localstorage
          localStorage.setItem("userInfo", user); // store the token in localstorage
          axios.defaults.headers.common['Authorization'] = token
          commit('AUTH_SUCCESS', { token, user});
          // you have your token, now log in your user :)
          // dispatch('USER_REQUEST');
          // console.log('masuk euy');
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
