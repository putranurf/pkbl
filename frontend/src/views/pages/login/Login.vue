<!-- =========================================================================================
    File Name: Login.vue
    Description: Login Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div class="h-screen flex w-full vx-row no-gutter items-center justify-center" id="page-login">
    <div class="vx-col sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4 sm:m-0 m-4">
      <vx-card>
        <!-- <div slot="no-body" class="full-page-bg-color"> -->

          <!-- <div class="vx-row no-gutter justify-center items-center"> -->

            <!-- <div class="vx-col hidden lg:block lg:w-1/2">
              <img src="@/assets/images/pages/login.png" alt="login" class="mx-auto">
            </div> -->

            <!-- <div class="vx-col sm:w-full md:w-full lg:w-full d-theme-dark-bg">
              <div class="px-8 pt-8 login-tabs-container"> -->

                <div class="vx-card__title mb-4">
                  <center><h4 class="mb-4">Login</h4>
                  <p>Selamat Datang</p><p>Aplikasi PKBL PT Pindad (Persero)</p></center>
                  <br>
                </div>
                
                <!-- <vs-tabs>
                  <vs-tab label="JWT"> -->
                    <login-jwt></login-jwt>
                  <!-- </vs-tab>

                  <vs-tab label="Firebase">
                    <login-firebase></login-firebase>
                  </vs-tab>

                  <vs-tab label="Auth0">
                    <login-auth0></login-auth0>
                  </vs-tab>
                </vs-tabs> -->

              <!-- </div>
            </div> -->
          <!-- </div> -->
        <!-- </div> -->
      </vx-card>
    </div>
  </div>
</template>


<script>
import LoginJwt from "./LoginJWT.vue"
// import LoginFirebase from "./LoginFirebase.vue"
import LoginAuth0 from "./LoginAuth0.vue"
import router from '@/router'

export default {
  components: {
    LoginJwt,
    // LoginFirebase,
    LoginAuth0
  },
  // computed: {
  //   //ditambahin Putra
  //   loggedIn(){
  //       return this.$store.getters['auth/isAuthenticated']
  //   }
  // },
  // mounted() {
  //     if (this.loggedIn) {
  //         this.$router.push(router.currentRoute.query.to || '/');
  //     }
  // },
}
</script>

<style lang="scss">
.login-tabs-container {
  min-height: 505px;

  .con-tab {
    padding-bottom: 14px;
  }

  .con-slot-tabs {
    margin-top: 1rem;
  }
}
</style>
