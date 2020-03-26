<!-- =========================================================================================
    File Name: Register.vue
    Description: Register Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div class="h-screen flex w-full vx-row no-gutter items-center justify-center">
        <div class="vx-col sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4 sm:m-0 m-4">
            <vx-card>
                <!-- <div slot="no-body" class="full-page-bg-color">
                    <div class="vx-row no-gutter"> -->
                        <!-- <div class="vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center">
                            <img src="@/assets/images/pages/register.jpg" alt="register" class="mx-auto">
                        </div> -->
                        <div class="vx-col sm:w-full md:w-full lg:w-full mx-auto self-center  d-theme-dark-bg">
                            <div class="px-8 pt-8 register">
                                <div class="vx-card__title mb-4">
                                    <center><h4 class="mb-4">Buat Akun PKBL Online</h4></center>
                                    <!-- <p>Fill the below form to create a new account.</p> -->
                                </div>
                                <!-- <vs-tabs>
                                  <vs-tab label="JWT"> -->
                                    <register-jwt></register-jwt>
                                  <!-- </vs-tab> -->

                                  <!-- <vs-tab label="Firebase">
                                    <register-firebase></register-firebase>
                                  </vs-tab> -->

                                 <!--  <vs-tab label="Auth0">
                                    <register-auth0></register-auth0>
                                  </vs-tab> -->
                                <!-- </vs-tabs> -->
                            </div>
                        </div>
                    <!-- </div>
                </div> -->
            </vx-card>
        </div>
    </div>
</template>

<script>
import RegisterJwt from "./DaftarJWT.vue"
// import RegisterFirebase from "./RegisterFirebase.vue"
import RegisterAuth0 from "./DaftarAuth0.vue"

export default {
    components: {
      RegisterJwt,
      // RegisterFirebase,
      RegisterAuth0
    }
}
</script>

<style lang="scss">
.register-tabs-container {
  min-height: 517px;

  .con-tab {
    padding-bottom: 23px;
  }
}
</style>
