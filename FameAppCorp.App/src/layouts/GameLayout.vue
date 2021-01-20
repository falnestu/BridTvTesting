<template>
  <div class="smart-canvas smart-canvas---horizontal">

    <!-- section : header
    ===================================== -->

    <header class="smart-canvas__header header">
      <div class="header__left">
        <a class="btn btn-link btn-lg" @click="goBack"><i class="far fa-arrow-left"></i></a>
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
      <div class="container-fluid main__container">
        <div class="row main__row">
            <router-view></router-view>
        </div>
      </div>
      <GameTimer></GameTimer>
    </main>

    <footer class="smart-canvas__footer footer">
      <nav class="nav-main">
        <div class="nav-main__container container">
          <div class="nav-main__nav">
            <ul class="nav-main__list">
              <li class="nav-main__item">
                <router-link :to="monJeuLink" id="back" class="nav-main__link">
                  <div class="nav-main__picto"><i class="far fa-sign-out fa-flip-horizontal"></i></div>
                  <div class="nav-main__text">{{ $t('menu.close') }}</div>
                </router-link>
              </li>

              <li class="nav-main__item">
                <span class="nav-main__separator"></span>
              </li>

              <li class="nav-main__item">
                <span class="nav-main__link">
                  <span class="nav-main__text-title">{{ $t('periodIdentifier', { year ,  quarter }) }}</span>
                  <span class="nav-main__text-title">J{{ period }}</span>
                  <div class="nav-main__text">{{ $t('menu.decision') }}</div>
                </span>
              </li>

              <li class="nav-main__item">
                <span class="nav-main__separator"></span>
              </li>
              
              <li class="nav-main__item">
                <router-link :to="'/scenario/'+ scenarioId +'/market'" id="market" class="nav-main__link">
                  <div class="nav-main__picto"><i class="fal fa-globe"></i></div>
                  <div class="nav-main__text">{{ $t('menu.market') }}</div>
                </router-link>
              </li>
              <li class="nav-main__item">
                <router-link :to="'/game/entreprise/' + corporateId" id="entreprise" class="nav-main__link">
                  <div class="nav-main__picto"><i class="fa fa-building"></i></div>
                  <div class="nav-main__text">{{ $t('menu.corporate') }}</div>
                </router-link>
              </li>
              <li class="nav-main__item">
                <router-link :to="'/game/finance'" id="balanceSheet" class="nav-main__link">
                  <div class="nav-main__picto"><i class="far fa-chart-pie"></i></div>
                  <div class="nav-main__text">{{ $t('menu.finance') }}</div>
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

  import GameTimer from '../components/GameTimer.vue';

  export default {
    components: {
      GameTimer
    },
    computed: {
      time() {
        return this.$store.state.game.time
      },
      year() {
        if (this.$store.state.game != null && this.$store.state.game.actualYear != null) {
          return this.$store.state.game.actualYear;
        }
        else {
          return 1;
        }
      },
      quarter() {
        if (this.$store.state.game != null && this.$store.state.game.actualQuarter != null) {
          return this.$store.state.game.actualQuarter;
        }
        else {
          return 1;
        }
      },
      period() {
        if (this.$store.state.game != null && this.$store.state.game.actualPeriode != null) {
          return this.$store.state.game.actualPeriode;
        }
        else {
          return 1;
        }
      },
      scenarioId() {
        if (this.$store.state.scenario != null && this.$store.state.scenario.activeScenario != null) {
          return this.$store.state.scenario.activeScenario.ScenarioID;
        }
        else {
          return 0;
        }
      },
      corporateId() {
        if (this.$store.state.scenario != null && this.$store.state.scenario.corporateId != null) {
          return this.$store.state.scenario.corporateId;
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
      }
    },
    filters: {
      timedisplay: function (value) {
        if (!value) return ''
        console.log('time display')
        var minutes = Math.floor(value / 60)
        var seconds = value % 60
        return minutes + ' min ' + seconds + ' sec'
      }
    },
    methods: {
      goBack() {
        return this.$router.go(-1);
      }
    }
  }
</script>
