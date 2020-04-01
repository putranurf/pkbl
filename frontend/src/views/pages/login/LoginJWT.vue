<template>
  <div>
    <vs-input
        v-validate="'required|min:5|min:3'"
        data-vv-validate-on="blur"
        name="username"
        icon-no-border
        icon="icon icon-user"
        icon-pack="feather"
        label-placeholder="Username"
        v-model="username"
        class="w-full"/>
    <span class="text-danger text-sm">{{ errors.first('username') }}</span>

    <vs-input
        data-vv-validate-on="blur"
        v-validate="'required|min:6|max:10'"
        type="password"
        name="password"
        icon-no-border
        icon="icon icon-lock"
        icon-pack="feather"
        label-placeholder="Password"
        v-model="password"
        class="w-full mt-6" />
    <span class="text-danger text-sm">{{ errors.first('password') }}</span>

    <!-- <div class="flex flex-wrap justify-between my-5"> -->
        <!-- <vs-checkbox v-model="checkbox_remember_me" class="mb-3">Remember Me</!-->
        <!-- <router-link to="/pages/forgot-password">Forgot Password?</router-link> --> 
    <!-- </div> -->
    <!-- <div class="flex flex-wrap justify-between mb-6"> -->
      <!-- <vs-button  type="border" @click="registerUser">Register</vs-button> -->
      <!-- <vs-button class="w-full mt-6" :disabled="!validateForm" @click="loginJWT">Login</vs-button> -->
    <!-- </div> -->


    <div class="flex flex-wrap justify-between my-5">
        <!-- <vs-checkbox v-model="checkbox_remember_me" class="mb-3">Remember Me</!-->
          <router-link to="/pages/lupa-password">Lupa Password ?</router-link> 
        
          <vs-button class="w-1/2" :disabled="!validateForm" @click="loginJWT">Login</vs-button>
    </div>
    <!-- <div class="flex flex-wrap justify-between mb-6"> -->      
      <div class="flex flex-wrap justify-between my-5">
        <vs-divider></vs-divider>
        <p>Belum punya Akun ?</p>
        <vs-button type="border" @click="daftarUser">Klik Disini</vs-button> 
    </div>


  </div>
</template>

<script>
import router from '@/router'

export default {
  data() {
    return {
      username: '',
      password: '',
      checkbox_remember_me: false
    }
  },
  computed: {
    validateForm() {
      return !this.errors.any() && this.username != '' && this.password != '';
    },
    //ditambahin Putra
    loggedIn(){
        return this.$store.getters['auth/isAuthenticated']
    }
  },
  //mounted ditambahin Putra
  mounted() {
      if (this.loggedIn) {
          this.$router.push(router.currentRoute.query.to || {name: "dashboard-analytics"});
      }
     
  },
  methods: {
    
    checkLogin() {
      // console.log(this.$store.state.auth.isUserLoggedIn())
      // If user is already logged in notify
      if (this.$store.state.auth.isUserLoggedIn()) {
        // if (localStorage.getItem('accessToken')) {

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
    loginJWT() {
      
      // if (!this.checkLogin()) return

      // Loading
      // this.$vs.loading()

      const payload = {
        checkbox_remember_me: this.checkbox_remember_me,
        userDetails: {
          username: this.username,
          password: this.password
        },
        notify: this.$vs.notify
      }
      
      this.$store.dispatch('auth/login', payload)
        .then(() => 
            this.$router.push(router.currentRoute.query.to || {name: "dashboard-analytics"} ))
        // .catch(error => {
        //   this.$vs.loading.close()
        //   this.$vs.notify({
        //     title: error,
        //     // text: error,            
        //     iconPack: 'feather',
        //     icon: 'icon-alert-circle',
        //     color: 'danger'
        //   })
        // })
        .catch(err => console.log('error: '+ err))
    },
    // registerUser() {
    //   if (!this.checkLogin()) return
    //   this.$router.push('/pages/register').catch(() => {})
    // }
    daftarUser() {
      // if (!this.checkLogin()) return
      // this.$router.push('/pages/daftar').catch(() => {})
      
      this.$router.push('/pages/daftar')
    }
  }
}

</script>

