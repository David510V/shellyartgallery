<template>
<div>
  <apphead></apphead>
  <div class="about">
      <div class="aboutImg">
        <img src="../../public/img/Bath.jpg" alt="">
      </div>
      <div class="aboutContent">
          <h1>Shelly Feterman</h1>
          <p>My name is Shelly Feterman, I was born in 1999, Haifa- Israel. I graduated "Vizo" high school of fine arts.
             My main goal in my works is to convey the satisfaction of my form of aesthetics, 
             to create comfort and pleasantness to the viewer, in an attempt to form some kind of euphoric surrounding.
             </p>
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
@import "../scss/about.scss";
</style>