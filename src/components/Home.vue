<template>
  <div>
     <keep-alive>
     <component class="regular" :is="showRegular"></component>
     </keep-alive>
     <keep-alive>
     <component class="mobile" :is="showMobile"></component>
     </keep-alive>
     
  </div>
</template>

<script>
import mobile from './Mobile.vue'
import regular from './Regular.vue'
export default {
   data() {
      return {
         showRegular:'regular',
         showMobile:'mobile'
      }
   },
 components: {
    mobile:mobile,
    regular:regular
    },
}
</script>

<style>
@import "../scss/home.scss";
</style>