<template>
  <div>
    <div class="max-width-sm mx-auto">
      <!--<label for="email" id="passwordLabel">Adresse e-mail</label>-->
      <div class="input-group mb-3">
        <input v-model="username" type="email" class="form-control input-lg" placeholder="Email" name="email">
      </div>
      <!--<label for="password" id="passwordLabel">Mot de passe</label>-->
      <div class="input-group">
        <input v-model="password" type="password" class="form-control input-lg" placeholder="Password" name="password" data-password="">
        <a href="#" class="input-group-append text-decoration-none" data-toggle-password=""> <span class="input-group-text"><i class="fal fa-eye-slash"></i> </span></a>
      </div>
      <!--<p class="text-right mb-3"><small><a href="#">{{ $t('credentials.forgotPassword') }}</a></small></p>
      <p v-if="loginStatus">{{loginStatus}}</p>-->
    </div>
    <div class="text-center mb-5">
      <!--<a href="#" class="btn btn-outline-primary">{{ $t('credentials.createAccount') }}</a>
      <a @click="connect" class="btn btn-primary">{{ $t('credentials.logIn') }}</a>-->
    </div>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'

  export default {
    computed: {
      username: {
        get() {
          return this.$store.state.login.username
        },
        set(value) {
          this.$store.commit('login/updateUsername', value)
        }
      },
      password: {
        get() {
          return this.$store.state.password
        },
        set(value) {
          this.$store.commit('login/updatePassword', value)
        }
      },
      ...mapState('login', {
        loginStatus: state => state.loginStatus,
      })
    },
    methods: {
      connect() {
        return this.$store.dispatch('login/connect', { router: this.$router })
      }
    }
  }

  $(function ($) {

    $("[data-toggle-password]").on("click", function () {

      var targetInput = $("[data-password]");
      var targetPicto = $("[data-toggle-password] i");

      if (targetInput.attr("type") == "password") {
        targetInput.attr("type", "text");
        targetPicto.attr("class", "fal fa-fw fa-eye");

      } else {
        targetInput.attr("type", "password");
        targetPicto.attr("class", "fal fa-fw fa-eye-slash");
      }

      event.preventDefault();
    });

  });
</script>

<style scoped>
</style>
