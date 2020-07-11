<template>
  <div>
    <div class="nav">
      <div class="aboutR">
        <router-link :to="{ name: 'about'}">
        <a href="">ABOUT</a>
        </router-link>
      </div>
      <div class="contact">
        <router-link :to="{ name: 'contact'}">
        <a href="">CONTACT</a>
        </router-link>
      </div>
    </div>
    <div class="logo">
      <router-link :to="{ name: 'Home'}">
      <figure>
        <img src="../../public/img/Brown.png" alt="">
      </figure>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
    @import "../scss/mobile.scss";
</style>