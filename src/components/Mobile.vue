<template>
  <div>

    <div class="nav">
      <div class="aboutR">
        <router-link :to="{ name: 'about'}">
        <a href="">ABOUT</a>
        </router-link>
      </div>
      <div class="contact">
        <router-link :to="{ name: 'contact'}">
        <a href="">CONTACT</a>
        </router-link>
      </div>
    </div>
    <div class="logo">
      <router-link :to="{ name: 'Home'}">
      <figure>
        <img src="../../public/img/Brown.png" alt="">
      </figure>
      </router-link>
    </div>



    <div class="top">
      <div class="heading">
      <h1>
        WELCOME
      </h1>
    </div>
    



    <div class="arrow" id="arrow" >
      
      <svg v-on:click="scrollSection()" width="71" height="42" viewBox="0 0 71 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line y1="-0.5" x2="53.0051" y2="-0.5" transform="matrix(-0.657205 0.753712 0.669484 0.742826 70.6705 1)" stroke="black"/>
      <line y1="-0.5" x2="52.5133" y2="-0.5" transform="matrix(0.663361 0.7483 0.663361 -0.7483 0.999939 1)" stroke="black"/>
      <line x1="56.3773" y1="2.32809" x2="36.3773" y2="25.3281" stroke="black"/>
      <line x1="16.16" y1="2.17501" x2="35.9714" y2="25.3384" stroke="black"/>
      </svg>

    </div>
    </div>
      

      <div class="section"  >
        
        <div class="sectionTitle">
          <span  id="section"></span>
          <p>Art</p>
          <p >People</p>
          <p>Expression</p>
        </div>

        <div class="sectionImg" >
          <img src="../../public/img/Untitled.jpg" alt="">
        </div>
        
      </div>

    <div class="sectionBigImg" >
        <img src="../../public/img/Fight-Mood.jpg" alt="">
    </div>


    <div class="gallery">
      <div class="galleryHead">
        <p>GALLERY</p>
      </div>

      <div class="galleryItems owl-carousel owl-theme owl-loaded">
     
     <carousel  :center="true" :loop="true" :items="2" :margin="50">
        <div class="item" v-for="(item,index) in imgs.slice(0,12)" :key="index">
            <div class="itemImg">
              <img :src="require(`../../public/img/${imgs[index].id}.jpg`)" alt="">
            </div>
            <div class="itemDesc">
              <p>{{item.img}}</p>
              <p>{{item.desc}}</p>
               <router-link :to="{ name: 'item', params: {img: item.id, desc:item.desc} }">
              <button>BUY NOW</button>
               </router-link>
            </div>
        </div>
       
     </carousel>
       

      </div>



    </div>
  </div>
</template>

<script>
import {obj} from '../data/data.js'
import carousel from 'vue-owl-carousel'


// function scrollSection(){
//   var section=document.getElementById("section")
//   section.scrollIntoView('smooth')
//   return alert('wow')
// }
export default {
    components: { carousel },
    data() {
      return {
        imgs:obj
      }
    },
    methods: {
      scrollSection:function(){
      var section=document.getElementById("section")
      section.scrollIntoView({behavior: "smooth",block: "start"})
      },
    },
}
</script>

<style lang="scss">
@import "../scss/mobile.scss";
.owl-nav , .owl-dots{
  display: none;
}
</style>