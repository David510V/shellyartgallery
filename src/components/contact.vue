<template>
<div>
  <apphead></apphead>
  <div class="about">
      
      <div class="aboutContent">
          <h1>Shelly Feterman</h1>
          <br>
          <h1>052-615-2237</h1>
          <br>
          <h2>Feshelly@gmail.com</h2>
          <br>
      </div>
      <div class="aboutImg">
        <img src="../../public/img/Judging-Look.jpg" alt="">
      </div>
  </div>

  </div>
</template>

<script>
import header from '../views/headerMobile.vue';
export default {
  
   components: {
    apphead:header
    },
    
}
</script>

<style lang="scss">
@import "../scss/contact.scss";
</style>