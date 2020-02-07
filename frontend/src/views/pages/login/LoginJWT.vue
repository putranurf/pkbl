<template>
  <div>
    <vs-input
        v-validate="'required|min:5|min:3'"
        data-vv-validate-on="blur"
        name="npp"
        icon-no-border
        icon="icon icon-user"
        icon-pack="feather"
        label-placeholder="Npp"
        v-model="npp"
        class="w-full"/>
    <span class="text-danger text-sm">{{ errors.first('npp') }}</span>

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

    <div class="flex flex-wrap justify-between my-5">
        <!-- <vs-checkbox v-model="checkbox_remember_me" class="mb-3">Remember Me</!-->
        <!-- <router-link to="/pages/forgot-password">Forgot Password?</router-link> --> 
    </div>
    <!-- <div class="flex flex-wrap justify-between mb-6"> -->
      <!-- <vs-button  type="border" @click="registerUser">Register</vs-button> -->
      <vs-button class="w-full mt-6" :disabled="!validateForm" @click="loginJWT">Login</vs-button>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      npp: '06010',
      password: 'carotid22',
      checkbox_remember_me: false
    }
  },
  computed: {
    validateForm() {
      return !this.errors.any() && this.npp != '' && this.password != '';
    },
  },
  methods: {
    checkLogin() {
      console.log(this.$store.state.auth.isUserLoggedIn())
      // If user is already logged in notify
      if (this.$store.state.auth.isUserLoggedIn()) {

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
      
      if (!this.checkLogin()) return

      // Loading
      this.$vs.loading()

      const payload = {
        checkbox_remember_me: this.checkbox_remember_me,
        userDetails: {
          npp: this.npp,
          password: this.password
        }
      }
      
      this.$store.dispatch('auth/loginJWT', payload)
        .then(() => { this.$vs.loading.close() })
        .catch(error => {
          this.$vs.loading.close()
          this.$vs.notify({
            title: 'Error',
            text: error.message,            
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'danger'
          })
        })
    },
    // registerUser() {
    //   if (!this.checkLogin()) return
    //   this.$router.push('/pages/register').catch(() => {})
    // }
  }
}

</script>

