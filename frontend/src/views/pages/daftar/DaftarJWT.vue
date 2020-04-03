<!-- =========================================================================================
File Name: RegisterJWT.vue
Description: Register Page for JWT
----------------------------------------------------------------------------------------
Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div class="clearfix">
    <vs-input
      v-validate="'required|alpha_dash|min:3'"
      data-vv-validate-on="blur"
      label-placeholder="Username"
      name="username"
      placeholder="Username"
      v-model="username"
      class="w-full" />
    <span class="text-danger text-sm">{{ errors.first('username') }}</span>

    <vs-input
      v-validate="'required|email'"
      data-vv-validate-on="blur"
      name="email"
      type="email"
      label-placeholder="Email"
      placeholder="Email"
      v-model="email"
      class="w-full mt-6" />
    <span class="text-danger text-sm">{{ errors.first('email') }}</span>

    <vs-input
      ref="password"
      type="password"
      data-vv-validate-on="blur"
      v-validate="'required|min:6|max:10'"
      name="password"
      label-placeholder="Password"
      placeholder="Password"
      v-model="password"
      class="w-full mt-6" />
    <span class="text-danger text-sm">{{ errors.first('password') }}</span>

    <vs-input
      type="password"
      v-validate="'min:6|max:10|confirmed:password'"
      data-vv-validate-on="blur"
      data-vv-as="password"
      name="confirm_password"
      label-placeholder="Confirm Password"
      placeholder="Confirm Password"
      v-model="confirm_password"
      class="w-full mt-6" />
    <span class="text-danger text-sm">{{ errors.first('confirm_password') }}</span>

    <!-- Segala bentuk apapun dalam Akun PKBL harus dipertanggung jawabkan dan siap menerima sanksi jika melakukan kesalahan diluar aturan. -->
    <vs-checkbox v-model="isTermsConditionAccepted" class="mt-6">
    Saya setuju membuat Akun. 
    </vs-checkbox>
     <vs-divider></vs-divider>
    <vs-button type="border" to="/pages/login" class="mt-6">Kembali</vs-button>
    <!-- <router-link to="/pages/login" class="mt-6">Kembali</router-link>  -->
    <vs-button class="float-right mt-6" @click="daftarUser" :disabled="!validateForm">Daftar</vs-button>
    <vs-divider></vs-divider>
    <center><a @click="popupActivo=true" color="primary" type="border">Kirim Email Verifikasi Ulang</a></center>
    <!-- <a @click="activePrompt = true" class="w-full">Kirim Ulang Email Verifikasi</a> -->
    <vs-popup class="holamundo"  title="Kirim Email Verifikasi Ulang" :active.sync="popupActivo">
       <vs-input v-validate="'required|alpha_dash|min:3'" name="username_verifikasi" class="w-full mb-4 mt-5" placeholder="Username" v-model="username_verifikasi"  />
       <vs-input v-validate="'required|email'" name="email_verifikasi" class="w-full mb-4 mt-5" placeholder="Email" v-model="email_verifikasi" />
       <vs-button class="float-right mt-6" @click="kirimVerifikasi" :disabled="!validateFormVerifikasi">Kirim</vs-button>
    </vs-popup>
  </div>
</template>

<script>
export default {
    data() {
        return {
            popupActivo:false,
            username_verifikasi: '',
            email_verifikasi: '',
            username: '',
            email: '',
            password: '',
            confirm_password: '',
            isTermsConditionAccepted: false,
        }
    },
    computed: {
        validateForm() {
            return !this.errors.any() && this.username != '' && this.email != '' && this.password != '' && this.confirm_password != '' && this.isTermsConditionAccepted === true;
        },
        validateFormVerifikasi() {
            return !this.errors.any() && this.username_verifikasi != '' && this.email_verifikasi != ''
        }
    },
    methods: {
        checkLogin() {
          // If user is already logged in notify
          if(this.$store.state.auth.isUserLoggedIn()) {

            // Close animation if passed as payload
            // this.$vs.loading.close()

            this.$vs.notify({
              title: 'Login Attempt',
              text: 'You are already logged in!',
              iconPack: 'feather',
              icon: 'icon-alert-circle',
              color: 'warning'
            })

            return false
          }
          return true
        },
        daftarUser() {
            // If form is not validated or user is already login return
            // if (!this.validateForm || !this.checkLogin()) return
            // if (!this.validateForm) return

            const payload = {
              userDetails: {
                username: this.username,
                email: this.email,
                password: this.password,
                confirmPassword: this.confirm_password
              },
              notify: this.$vs.notify
            }
            // this.$store.dispatch('auth/registerUserJWT', payload)
            this.$store.dispatch('auth/daftarUser', payload)
        },
        clearFields() {
            Object.assign(this.taskLocal, {
              title: "",
              desc: "",
              isCompleted: false,
              isImportant: false,
              isStarred: false,
              tags: []
            })
        },
        kirimVerifikasi() {          
            const payload = {
              userDetails: {
                username: this.username_verifikasi,
                email: this.email_verifikasi,
              },
              notify: this.$vs.notify
            }
            // this.$store.dispatch('auth/registerUserJWT', payload)
            this.$store.dispatch('auth/kirimVerifikasi', payload)
            this.popupActivo = false
        }
    }
}
</script>
