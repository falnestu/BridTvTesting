<template>
  <div class="smart-canvas">
    <!-- section : header
    ===================================== -->

    <header class="smart-canvas__header header">
      <div class="header__left">
        <a class="btn btn-link btn-lg" @click="goBack"><i class="far fa-arrow-left"></i></a>
      </div>
      <div class="header__center">
        <router-link :to="'/home'" class="logo">
          <div class="logo__text">Fame App Corp</div>
          <img src="../assets/images/picto-fcl.svg" class="logo__img" alt="">
        </router-link>
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
                <a href="/home" id="home" class="nav-main__link">
                  <div class="nav-main__picto"><i class="far fa-home-lg"></i></div>
                  <div class="nav-main__text">{{ $t('menu.home') }}</div>
                </a>
              </li>
              <li class="nav-main__item">
                <a href="#" id="library" class="nav-main__link">
                  <div class="nav-main__picto"><i class="far fa-books"></i></div>
                  <div class="nav-main__text">{{ $t('menu.library') }}</div>
                </a>
              </li>
              <li class="nav-main__item">
                <a href="#" id="user" class="nav-main__link">
                  <div class="nav-main__picto">
                    <!--<div class="nav-main__number">2</div>-->
                    <i class="far fa-user"></i>
                  </div>
                  <div class="nav-main__text">{{ $t('menu.account') }}</div>
                </a>
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
    methods: {
      goBack() {
        return this.$router.go(-1);
      }
    }
  }
</script>
