<template>
  <div>
    <keep-alive>
     <component class="d-none  d-lg-block" :is="showOne"></component>
     </keep-alive>
     <keep-alive>
     <component class="d-block  d-lg-none " :is="showTwo"></component>
     </keep-alive>
  </div>
</template>

<script>
import item1 from './Item1.vue'
import item2 from './Item2.vue'
export default {
  data() {
      return {
         showOne:'itemone',
         showTwo:'itemtwo'
      }
   },
    components:{
        itemone:item1,
        itemtwo:item2
    }
}
</script>