<!-- =========================================================================================
    File Name: ForgotPassword.vue
    Description: FOrgot Password Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div class="h-screen flex w-full">
        <div class="vx-col w-1/4 sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4 mx-auto self-center">
            <vx-card>
                <!-- <div slot="no-body" class="full-page-bg-color">
                    <div class="vx-row"> -->
                        <!-- <div class="vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center">
                            <img src="@/assets/images/pages/forgot-password.png" alt="login" class="mx-auto">
                        </div> -->
                        <div class="vx-col sm:w-full md:w-full lg:w-full mx-auto self-center d-theme-dark-bg">
                            <div class="p-8">
                                <div class="vx-card__title mb-8">
                                    <h4 class="mb-4">Pulihkan Password Anda</h4>
                                    <!-- <p>Please enter your email address and we'll send you instructions on how to reset your password.</p> -->
                                    <p>Isilah Email anda dan sistem akan mengirimkan notifikasi ke email Anda berupa password baru</p>
                                </div>

                                <vs-input
                                  v-validate="'required|email'"
                                  data-vv-validate-on="blur"
                                  name="email"
                                  type="email"
                                  label-placeholder="Email"
                                  placeholder="Email"
                                  v-model="email"
                                  class="w-full mt-6" />
                                  <vs-divider></vs-divider>
                               <!--  <vue-recaptcha
                                  ref="recaptcha"
                                  @verify="onVerify"
                                  @expired="onExpired"
                                  :sitekey="sitekey"
                                  class="w-full mb-8"
                                  required>
                                </vue-recaptcha> -->
                                <vs-button type="border" to="/pages/login" class="px-4 w-full md:w-auto">Kembali</vs-button>
                                <vs-button class="float-right px-4 w-full md:w-auto mt-3 mb-8 md:mt-0 md:mb-0" @click="lupaPassword" :disabled="!validateForm">Kirim Verifikasi</vs-button>
                            </div>
                        </div>
                        <!-- <template>
                          <vue-recaptcha sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"></vue-recaptcha>
                        </template> -->
                        
                        <!-- <vs-button @click="resetRecaptcha"> Reset ReCAPTCHA </vs-button> -->
                   <!--  </div>
                </div> -->
            </vx-card>
        </div>
    </div>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha';
export default {
    data() {
        return {
            email: '',
            value1: '',
            sitekey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
            secretkey: '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe'
        }
    },
    components: {
        'vue-recaptcha': VueRecaptcha
    },
    computed: {
        validateForm() {
            return !this.errors.any() && this.email != '' ;
        }
    },
    methods: {
        onSubmit: function () {
          this.$refs.invisibleRecaptcha.execute()
        },
        onVerify: function (response) {
          console.log('Verify: ' + response)
        },
        onExpired: function () {
          console.log('Expired')
        },
        resetRecaptcha () {
          this.$refs.recaptcha.reset() // Direct call reset method
        },
        lupaPassword() {
          
            const payload = {
              userDetails: {
                // username: this.username,
                email: this.email,
                // password: this.password,
                // confirmPassword: this.confirm_password
              },
              notify: this.$vs.notify
            }
            // this.$store.dispatch('auth/registerUserJWT', payload)
            this.$store.dispatch('auth/lupaPassword', payload)
        }
    }
}
</script>
