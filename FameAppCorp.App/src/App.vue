<template>
  <div id="app" class="smart-canvas">
    <component v-bind:is="layout"></component>
  </div>
</template>

<script>

  const default_layout = 'default';

  export default {
    name: 'app',
    computed: {
      layout() {
        return (this.$route.meta.layout || default_layout) + '-layout'; 
      }
    }
  };
</script>

<style>
</style>
