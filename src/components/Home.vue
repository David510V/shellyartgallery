<template>
  <div>
     <regular class="regular"  ></regular>
     <mobile class="mobile"></mobile>
     
  </div>
</template>

<script>
import mobile from './Mobile.vue'
import regular from './Regular.vue'
export default {
 components: {
    mobile:mobile,
    regular:regular
    },
}
</script>

<style>
@import "../scss/home.scss";
</style>