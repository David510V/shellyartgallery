<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script>
export default {
    mounted(){
        this.mountedFin("Mounted")
    },
     destroyed () {
      this.destroyedFin()
    },
    methods: {
        mountedFin(arg){
            console.log(arg)
        },
        destroyedFin(arg){
            console.log(arg)
        },
    }
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
