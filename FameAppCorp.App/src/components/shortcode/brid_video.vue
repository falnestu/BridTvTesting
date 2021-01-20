<template>
  <div>
    <p>brid_video component</p>
    <p>{{ bridDivId }}</p>
    <p>{{ videoid }}</p>
    <textarea :value="bridScript"></textarea>
    <button @click="getDivContent">Test</button>
    <div :id="bridDivId" class="brid"></div>
    <textarea id="bridContent"></textarea>
    <p id="bridStatus"></p>
  </div>
</template>

<script>
  export default {
    props: ['videoid', 'status', 'scenariostepid'],
    data() {
      return {
        currentStatus: this.status,
        bridDivId: 'brid_div_' + this.videoid
      }
    },
    computed: {
      alreadyPlayed: {
        get: function () {
          return this.currentStatus
        },
        set: function (newValue) {
          this.currentStatus = newValue
        }
      },
      bridScript() {
        return document.getElementById('brid-tv-script').outerHTML
      },
      divContent() {
        return $('#' + this.bridDivId).innerHTML
      }
    },
    methods: {
      playVideo: function (event) {
        console.log('play brid video')
        if (this.currentStatus === 'false') {
          this.alreadyPlayed = true
          this.$store.dispatch('mission/completeStep', { scenarioStepID: this.scenariostepid, stepType: 2, status: 1 })
        }
      },
      getDivContent: function () {
        var content = document.getElementById(this.bridDivId).outerHTML
        document.getElementById("bridContent").value = content
        console.log("test is Ready")
        $("#bridStatus").text(window.$bp(this.bridDivId).isReady)
      }
    },
    mounted() {
      window.$bp(this.bridDivId, { "id": "24780", "width": "480", "height": "270", "video": this.videoid }, function () {
        /*$("#bridStatus").text('brid ready')*/ })
      window.$bp(this.bridDivId).add('start', this.playVideo)
    },
    beforeDestroy() {
      window.$bp(this.bridDivId).destroy(true)
    }
  }
</script>
