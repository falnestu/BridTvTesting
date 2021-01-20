<template>
  <div class="smart-canvas">
    <!-- section : header
    ===================================== -->

    <header class="smart-canvas__header header">
      <div class="header__left">
        <router-link id="scenarioPlanPage" to="/home" class="btn btn-link btn-lg"><i class="fas fa-home"></i></router-link>
        <!--<i class="fas fa-home"></i><i :class="navIconClass"></i>-->
        <a id="otherPageLink" class="btn btn-link btn-lg" v-on:click="goBack"><i class="far fa-arrow-left"></i></a>
      </div>
      <div class="header__center">
        <a href="accueil.html" class="logo">
          <div class="logo__text">Fame App Corp</div>
          <img src="../assets/images/picto-fcl.svg" class="logo__img" alt="">
        </a>
      </div>
      <div class="header__right">
        <a href="#" class="btn btn-link btn-lg"><i class="far fa-bars"></i></a>
      </div>
    </header>

    <main class="smart-canvas__main main">
      <div class="container main__container">
        <div class="row main__row">
          <router-view></router-view>
        </div>
      </div>
    </main>

    <footer class="smart-canvas__footer footer">
      <nav class="nav-main">
        <div class="nav-main__container container">
          <div class="nav-main__nav">
            <ul class="nav-main__list">
              <li class="nav-main__item">
                <router-link :to="monJeuLink" id="game" class="nav-main__link">
                  <div class="nav-main__picto"><i class="fas fa-tachometer-alt"></i></div>
                  <div class="nav-main__text">{{ $t('menu.monJeu') }}</div>
                </router-link>
              </li>
              <li class="nav-main__item">
                <console-menu cssClass="nav-main__link"></console-menu>
              </li>
              <li class="nav-main__item">
                <entreprise-menu cssClass="nav-main__link"></entreprise-menu>
              </li>
              <li class="nav-main__item">
                <market-menu cssClass="nav-main__link"></market-menu>
              </li>
              <li class="nav-main__item">
                <finance-menu cssClass="nav-main__link"></finance-menu>
              </li>
              <li class="nav-main__item">
                <router-link :to="'/scenario/'+ scenarioId +'/plan'" id="plan" class="nav-main__link">
                  <div class="nav-main__picto"><i class="fas fa-tasks"></i></div>
                  <div class="nav-main__text">{{ $t('menu.plan') }}</div>
                </router-link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </footer>
  </div>
</template>

<script>
  export default {
    computed: {
      scenarioId() {
        if (this.$store.state.scenario != null && this.$store.state.scenario.activeScenario != null) {
          return this.$store.state.scenario.activeScenario.ScenarioID;
        }
        else {
          return 0;
        }
      },
      monJeuLink() {
        if (this.$store.getters['mission/missionLink'] != null) {
          return this.$store.getters['mission/missionLink']
        }
        else {
          return this.$store.state.scenario.monJeuLink;
        }
      },
      messageStatus() {
        return this.$store.state.messageStatus
      }
    },
    methods: {
      goBack() {
        var returnRouteName = null
        var params = null
        switch (this.$router.currentRoute.name) {
          case 'scenarioPlan':
            returnRouteName = 'home'
            break;
          case 'scenarioMission':
            returnRouteName = 'scenarioPlan'
            params = { id: this.scenarioId }
            break;
          case 'missionPlan':
            returnRouteName = 'scenarioPlan'
            params = { id: this.scenarioId }
            break;
          case 'block':
            returnRouteName = 'missionPlan'
            params = { id: this.$store.state.mission.activeMission.Mission.MissionId }
            break;
          default:
        }

        if (returnRouteName) {
          this.$router.push({ name: returnRouteName, params })
        }
        else {
          return this.$router.go(-1);
        }
      },
      setLink(routeName) {
        if (routeName === 'scenarioPlan' || routeName.name === 'scenarioPlan') {
          $('#scenarioPlanPage').show()
          $('#otherPageLink').hide()
        }
        else {
          $('#scenarioPlanPage').hide()
          $('#otherPageLink').show()
        }
      }
    },
    watch: {
      $route(to, from) {
        // react to route changes...
        this.setLink(to)
      }
    },
    mounted() {
      this.setLink(this.$router.currentRoute.name)
    }
  }
</script>
