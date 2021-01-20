<template>

  <div class="col main__col">
    <!-- InstanceBeginEditable name="main" -->
    <div class="text-center mb-5">
      <img src="../assets/images/logo-fcl.svg" class="logo-splash" alt="">
    </div>
    <LoginForm></LoginForm>
    <div class="text-center">
      <router-link to="/homeTest">TEST BRID</router-link>
    </div>

    <!-- InstanceEndEditable -->
  </div>

</template>

<script>
  import LoginForm from '../components/TheLoginForm.vue';

  export default {
    name: 'login',
    components: {
      LoginForm
    },
    created() {
      console.log('call login created')
      if (!document.getElementById('brid-tv-script')) {
        console.log('add brid script')
        let bridScript = document.createElement('script')
        bridScript.setAttribute('src', 'https://services.brid.tv/player/build/brid.min.js')
        bridScript.setAttribute('id', 'brid-tv-script')
        document.head.appendChild(bridScript)
      }
    },
  };
</script>

<style>
</style>
