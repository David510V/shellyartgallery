<template>
  <div>
     <itemone class="d-none  d-lg-block "></itemone>
     <itemtwo class="d-block  d-lg-none "></itemtwo>
  </div>
</template>

<script>
import item1 from './Item1.vue'
import item2 from './Item2.vue'
export default {
    components:{
        itemone:item1,
        itemtwo:item2
    }
}
</script>