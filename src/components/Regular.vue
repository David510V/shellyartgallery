<template>
  <div>
    <div class="navr">
        <div class="aboutR">
          <p></p>
        </div>

        <div class="logo">
          
            <img src="../../public/img/Brown.png" alt="">
       
        </div>


        <div class="contactR">
          <p></p>
        </div>
    </div>

     
  <div class="heading">
    <p class="big">WELCOME</p>
    <p class="small">Art, people and their expression. That's the idea I want to convey to you</p>
  </div>


    <div class="arrow">
      
     <svg v-on:click="scrollSection()" width="10vw" height="6.5vh" viewBox="0 0 96 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line y1="-0.5" x2="66.8225" y2="-0.5" transform="matrix(-0.710838 0.703356 0.722362 0.691515 96 1)" stroke="black"/>
      <line y1="-0.5" x2="66.2829" y2="-0.5" transform="matrix(0.716626 0.697458 0.716626 -0.697458 1 1)" stroke="black"/>
      <line y1="-0.5" x2="34.8178" y2="-0.5" transform="matrix(-0.727596 0.686006 0.738803 0.673921 73.8333 1)" stroke="black"/>
      <line y1="-0.5" x2="34.5504" y2="-0.5" transform="matrix(0.733228 0.679983 0.733228 -0.679983 23.1666 1)" stroke="black"/>
      </svg>


    </div>


    <div class="section1">
      <span id="section1"></span>
      <div class="section1Content">
        <p class="head">Shelly Feterman</p>
        <p class="sub">
          My name is Shelly Feterman, I was born in 1999, Haifa Israel. I graduated "Vizo" high school of fine arts. 
        </p>
        <p class="sub">
          My main goal in my works is to convey the satisfaction of my form of aesthetics, 
          to create comfort and pleasantness to the viewer, in an attempt to form some kind of euphoric surrounding.
        </p>
      </div>

      <div class="section1Img">
        <img src="../../public/img/David.jpg" alt="">
      </div>
    </div>

    <div class="section2"> 

          <div class="section2Img">
            <img src="../../public/img/Fight-Mood.jpg" alt="">
          </div>

          <div class="section2Content">
            <p>Art</p>
            <p>People</p>
            <p>Expression</p>
          </div>

     </div>

    <div class="section3">
        <div class="gallery3">
          <p class="Title">GALLERY</p>
          <div class="row rowT">
            <div class="col-md-4 itemRow " v-for="(item,index) in items.slice(0,12)" :key="index">
              <div class="itemImg">
                  <img :src="require(`../../public/img/${items[index].id}.jpg`)" alt="">
                </div>
                <div class="itemDesc">
                  <p>
                    {{item.img}}
                  </p>
                  <p>
                    {{item.desc}}
                  </p>
                </div>
                <router-link :to="{ name: 'item', params: {img: item.id, desc:item.desc} }">
                <button class="itemBtn">
                  Buy Now
                </button>
                </router-link>
            </div>
            
            
          </div>
        </div>
        <div class="section3Img">
          <img src="../../public/img/Relax.jpg" alt="">
          <img src="../../public/img/Expression.jpg" alt="">
          <img src="../../public/img/Pigeon.jpg" alt="">
          <img src="../../public/img/Judging-Look.jpg" alt="">
        </div>
    </div>
    <span class="brown">
      <p class="text-center"><small>@DEVinter.</small></p>
    </span>
  </div>
</template>

<script>
import {obj} from '../data/data.js'
export default {
  data() {
      return {
        items:obj
      }
  },
   methods: {
      scrollSection:function(){
      var section=document.getElementById("section1")
      section.scrollIntoView({block: "start",behavior: "smooth"})
      },
    },
}
</script>

<style lang="scss">
@import "../scss/regular.scss";
</style>