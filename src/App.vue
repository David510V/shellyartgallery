<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script>
import Header from '../src/views/header.vue';
import Footer from '../src/views/footer.vue';
export default {
  components:{
    appHead:Header,
    appFoot:Footer
  },

}


let vh = window.innerHeight * 0.01;
let vw=window.innerWidth *0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
document.documentElement.style.setProperty('--vh', `${vh}px`)
</script>

<style lang="scss">
body{
  font-family: 'Montserrat', sans-serif;
}
</style>
