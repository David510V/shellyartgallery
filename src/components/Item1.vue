<template>
  <div>
    <apphead></apphead>
     <div class="wrapper">
              
              <div class="flex1">

                <h1>Size</h1>
                <div class="custom-control custom-radio mt-sm-0 mt-md-5">
                <input type="radio" id="size1" name="customSize" class="custom-control-input"  value="040X60" @click="size1()" checked>
                <label class="custom-control-label" for="size1">040X60 cm</label>
              </div>
              <div class="custom-control custom-radio">
                <input type="radio" id="size2" name="customSize" class="custom-control-input" checked  value="120X150" @click="size2()">
                <label class="custom-control-label" for="size2">120X150 cm</label>
              </div>
              <div class="custom-control custom-radio">
                <input type="radio" id="size3" name="customSize" class="custom-control-input"  value="170X210" @click="size3()">
                <label class="custom-control-label" for="size3">170X210 cm</label>
              </div>

            </div>

            <div class="flex2">
              
                <img id="Mainimg" class="imgItem mt-3 mb-2" style="cursor: none;" :src="require(`../../public/img/${img}.jpg`)"  width="320px" height="400px" alt="">
                <h1 class="mt-md-2 mt-sm-4">{{img}}</h1>
                <h2> {{desc}}</h2>
                <button class="btn buttn mt-2 mb-3" style="font-size:1.7vw" @click="modal=true" data-toggle="modal"  data-target="#modal">Make Order</button>

            </div>

           <div class="flex3">

               <h1>Frame</h1>
                <div class="custom-control custom-radio  mt-sm-0 mt-md-5">
                <input type="radio" id="frame1" name="customFrame" class="custom-control-input" value="frame1" @click="frame1()" checked>
                <label class="custom-control-label" for="frame1">frame1</label>
              </div>
              <div class="custom-control custom-radio">
                <input type="radio" id="frame2" name="customFrame" class="custom-control-input" value="frame2"  @click="frame2()">
                <label class="custom-control-label" for="frame2">frame2</label>
              </div>
              <div class="custom-control custom-radio">
                <input type="radio" id="frame3" name="customFrame" class="custom-control-input" value="frame3"  @click="frame3()">
                <label class="custom-control-label" for="frame3">frame3</label>
              </div>
              <br><br>

           </div>
           
        <modelitem :img="img" :frame="frame" :id="img" :size="size" ></modelitem>
        </div>

   </div>

  
</template>

<script>
var frames = document.getElementsByName('customFrame');
var sizes=document.getElementsByName('customSize')
import modelItem from './modelItem1.vue'
import header from '../views/header.vue'
import $ from 'jquery'
export default {
  
  data() {
    return {
      img:this.$route.params.img,
      desc:this.$route.params.desc,
      frame:'frame1',
      size:'040X60',
      modal:false
    }
  },
   components: {
    modelitem:modelItem,
    apphead:header
    },

    mounted(){
      $("#Mainimg").addClass("frame1")
      $("#Mainimg").addClass("size")
      $("#Mainimg2").addClass("frame1")
      $("#Mainimg2").addClass("size")
    },
    methods: {

      size1(){
        for (var i = 0;i<sizes.length; i++) {
            if (sizes[i].checked) {
               this.size=sizes[i].value
            }
      }
       $("#Mainimg").addClass("size1")
       $("#Mainimg").removeClass("size2")
       $("#Mainimg").removeClass("size3")
       
      },
      size2(){
        for (var i = 0;i<sizes.length; i++) {
            if (sizes[i].checked) {
               this.size=sizes[i].value
            }
      }
        $("#Mainimg").addClass("size2")
        $("#Mainimg").removeClass("size1")
        $("#Mainimg").removeClass("size3")
        
      },
      size3(){
        for (var i = 0;i<sizes.length; i++) {
            if (sizes[i].checked) {
               this.size=sizes[i].value
            }
      }
        $("#Mainimg").addClass("size3")
        $("#Mainimg").removeClass("size1")
        $("#Mainimg").removeClass("size2")
        
      },

      
      frame1(){
        for (var i = 0;i<frames.length; i++) {
            if (frames[i].checked) {
               this.frame=frames[i].value
            }
      }
       $("#Mainimg2").addClass("frame1").removeClass("frame2").removeClass("frame3")
       $("#Mainimg").addClass("frame1")
       $("#Mainimg").removeClass("frame2")
       $("#Mainimg").removeClass("frame3")
      },
      frame2(){
        for (var i = 0;i<frames.length; i++) {
            if (frames[i].checked) {
               this.frame=frames[i].value
            }
      }
      $("#Mainimg2").addClass("frame2").removeClass("frame1").removeClass("frame3")
       $("#Mainimg").addClass("frame2")
       $("#Mainimg").removeClass("frame1")
       $("#Mainimg").removeClass("frame3")
      },
      frame3(){
        for (var i = 0;i<frames.length; i++) {
            if (frames[i].checked) {
               this.frame=frames[i].value
            }
      }
      $("#Mainimg2").addClass("frame3").removeClass("frame1").removeClass("frame2")
       $("#Mainimg").addClass("frame3")
       $("#Mainimg").removeClass("frame2")
       $("#Mainimg").removeClass("frame1")
      }

    },
}
</script>

<style lang="scss">
@import "../scss/item.scss";
.btn{
     font-size: 1.8vw;
   }
</style>