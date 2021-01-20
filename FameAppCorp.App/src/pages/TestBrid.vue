<template>

  <div class="col main__col">
    <div class="text-center mb-5">
      <img src="../assets/images/logo-fcl.svg" class="logo-splash" alt="">
    </div>
    <h1>Test Brid</h1>
    <brid_video-shortcode videoid="689012" status="1" scenariostepid="1"></brid_video-shortcode>
  </div>

</template>

<script>
  export default {
    created() {
      console.log('call block created')
      
    },

    mounted() {
      console.log('call block mounted')
      
    }
  }
</script>

<style>
</style>
