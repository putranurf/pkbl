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
    <!-- 
    <vs-input
      v-validate="'required|email'"
      data-vv-validate-on="blur"
      name="email"
      type="email"
      label-placeholder="Email"
      placeholder="Email"
      v-model="email"
      class="w-full mt-6" />
    <span class="text-danger text-sm">{{ errors.first('email') }}</span> -->

    <vs-input
      type="text"
      name="id"      
      v-model="id"
      class="w-full mt-6" 
      v-show="false" /> 

    <vs-input
      type="text"
      name="token"      
      v-model="token"
      class="w-full mt-6" 
      v-show="false" />   

    <vs-input
      ref="password"
      type="password"
      data-vv-validate-on="blur"
      v-validate="'required|min:6|max:10'"
      name="password"
      label-placeholder="Password Baru"
      placeholder="Password Baru"
      v-model="password"
      class="w-full mt-6" />
    <span class="text-danger text-sm">{{ errors.first('password') }}</span>

    <vs-input
      type="password"
      v-validate="'min:6|max:10|confirmed:password'"
      data-vv-validate-on="blur"
      data-vv-as="password"
      name="confirm_password"
      label-placeholder="Ulangi Password"
      placeholder="Ulangi Password"
      v-model="confirm_password"
      class="w-full mt-6" />
    <span class="text-danger text-sm">{{ errors.first('confirm_password') }}</span>
    
    <!-- <router-link to="/pages/login" class="mt-6">Kembali</router-link>  -->
    <vs-button class="float-right mt-6" @click="pulihkanPassword" :disabled="!validateForm">Pulihkan</vs-button>
   
  </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            email: '',
            password: '',
            confirm_password: '',
            isTermsConditionAccepted: false,
            id:'',
            token: '',  
        }
    },
    computed: {
        validateForm() {
            return !this.errors.any() && this.password != '' && this.confirm_password != '';
        }
    },
    mounted() {
        let currentUrl = window.location.href;
        let uri = currentUrl.split("/");
        this.id = uri[5]
        this.token = uri[6]
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
        pulihkanPassword() {
            const payload = {
              tokenDetails: {
                id: this.id,
                token: this.token,
                password: this.password            
              },
              notify: this.$vs.notify
            }
            // console.log(payload)
            this.$store.dispatch('auth/pulihkanPassword', payload)
        }
    }
}
</script>
