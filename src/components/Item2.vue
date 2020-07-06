<template>
  <div>
    <apphead></apphead>
     <div class="container-fluid mt-4">
            <div class="row mt-1">
              
              <div class="row ml-2">
                  <div class="col-7 text-center" >
                        <h2>Size</h2>
                        <div class="custom-radio">
                         <label class="form-check-label size p-1 m-1 mr-2"  id="size1"  @click="size1()"> 040X60 cm</label>
                        </div>
                        <div class="custom-radio">
                         <label class="form-check-label size p-1 m-1" id="size2"  @click="size2()"> 120X170 cm</label>
                        </div>
                        <div class="custom-radio">
                         <label class="form-check-label size p-1 m-1" id="size3"  @click="size3()"> 170X210 cm</label>
                        </div>
                  </div>

                  <div class="col-5 text-center">
                    <h2>Frame</h2>
                      <div class="custom-radio">
                         <label class="form-check-label frame p-1 m-1"  id="frame1"  @click="frame1()">frame1</label>
                        </div>
                      <div class="custom-radio">
                         <label class="form-check-label frame p-1 m-1"  id="frame2"  @click="frame2()">frame2</label>
                      </div>
                      <div class="custom-radio">
                         <label class="form-check-label frame p-1 m-1"  id="frame3"  @click="frame3()">frame3</label>
                      </div>
                  </div>
              </div>
              

              <div class="col-12 col-md-4 text-center">
                  <img class="imgItem mt-3 mb-2" id="mobileImg" :src="require(`../../public/img/${img}.jpg`)"  width="320px" height="400px" alt="">
                  <h1 class="mt-md-2 mt-sm-4 text-center">{{img}}</h1>
                   <button type="button" class="btn maOrder" data-toggle="modal"  data-target="#modalSmall">
                   Make Order
                  </button>
                  
              </div>
              
            </div>
             

        </div>
        <modelitem2 :img="img" :frameSmall="frameSmall"  :sizeSmall="sizeSmall" ></modelitem2>
   </div>

  
</template>

<script>
var frames = document.getElementsByName('customFrames');
var sizes=document.getElementsByName('customSizes')
import modelItem2 from './modelItem2.vue'
import header from '../views/headerMobile.vue';
export default {
  
  data() {
    return {
      img:this.$route.params.img,
      desc:this.$route.params.desc,
      frameSmall:'',
      sizeSmall:''
    }
  },
   components: {
    modelitem2:modelItem2,
    apphead:header
    },
    methods: {
      size1(){
       this.sizeSmall="040X60"
       $("#mobileImg").addClass("size1").removeClass("size2").removeClass("size3")
       $('label#size1').addClass("red")
       $('label#size2').removeClass("red")
       $('label#size3').removeClass("red")
       console.log(this.sizeSmall)
      },
      size2(){
        this.sizeSmall="120X170"
        $("#mobileImg").addClass("size2").removeClass("size1").removeClass("size3")
        $('label#size2').addClass("red")
        $('label#size1').removeClass("red")
        $('label#size3').removeClass("red")
        console.log(this.sizeSmall)
      },
      size3(){
        this.sizeSmall="170X210"
        $("#mobileImg").addClass("size3").removeClass("size1").removeClass("size2")
        $('label#size3').addClass("red")
        $('label#size2').removeClass("red")
        $('label#size1').removeClass("red")
        console.log(this.sizeSmall)
      },

      
      frame1(){
        this.frameSmall="frame1"
       $("#mobileImg").addClass("frame1").removeClass("frame2").removeClass("frame3")
       $("#mobileImg2").addClass("frame1").removeClass("frame2").removeClass("frame3")
       $('label#frame1').addClass("red")
       $('label#frame2').removeClass("red")
       $('label#frame3').removeClass("red")
      },
      frame2(){
      this.frameSmall="frame2"
       $("#mobileImg").addClass("frame2").removeClass("frame1").removeClass("frame3")
       $("#mobileImg2").addClass("frame2").removeClass("frame1").removeClass("frame3")
       $('label#frame2').addClass("red")
       $('label#frame1').removeClass("red")
       $('label#frame3').removeClass("red")
      },
      frame3(){
       this.frameSmall="frame3"
       $("#mobileImg").addClass("frame3").removeClass("frame2").removeClass("frame1")
       $("#mobileImg2").addClass("frame3").removeClass("frame2").removeClass("frame1")
       $('label#frame3').addClass("red")
       $('label#frame2').removeClass("red")
       $('label#frame1').removeClass("red")
      }

    },
}
</script>

<style lang="scss">
@import "../scss/item2.scss";
</style>