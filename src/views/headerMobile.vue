<template>
  <div>
      
    <div class="nav">
      <div class="about">
        <router-link :to="{ name: 'about'}">
        <a href="">ABOUT</a>
        </router-link>
      </div>
      <div class="contact">
        <router-link :to="{ name: 'about'}">
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

<script>
export default {

}
</script>

<style lang="scss">
    @import "../scss/mobile.scss";
</style>