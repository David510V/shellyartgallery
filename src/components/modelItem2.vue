<template>
  <!-- Modal -->
    
            <div class="modal fade " id="modalSmall" tabindex="-1" role="dialog" aria-labelledby="modalSmallLabel" aria-hidden="true">
            <div class="modal-dialog " role="">
                    <div class="modal-content">
                            <h2 class="modal-title mt-1">Lets Order!</h2>
                        <div class="modal-body">
                            <div class="container">
                              <div class="row">

                              <div class="col-md-5">
                                <form  @submit.prevent="sendEmail" >
                                <div class="form-group">
                                    <label for="exampleInputEmail2">Email address</label>
                                    <input type="email" name="email" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" value="rt56223@gmail.com" placeholder="Enter email">
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputName2">Name</label>
                                    <input type="name" class="form-control" name="name" id="exampleInputName2" placeholder="Name">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPhone2">Phone Number</label>
                                    <input type="number" class="form-control" name="phone" id="exampleInputPhone2" placeholder="Phone"
                                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                    required>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputimg2">Img</label>
                                    <input type="name" readonly class="form-control" name="img" id="exampleInputimg2" :value="this.img">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputframe2">Frame</label>
                                    <input type="name" readonly class="form-control" name="frame" id="exampleInputframe2" :value="this.frameSmall">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputsize2">Size</label>
                                    <input type="name" readonly class="form-control" name="size" id="exampleInputsize2" :value="this.sizeSmall">
                                </div>
                                <br>
                                
                                <button  type="submit" class="btn order mb-3" >Send Order</button>
                                </form>
                              </div>

                                <div class="col-md-7 p-0 md-p-1">
                                    <div class="modalDesc2" >
                                    <div class="row">
                                    <div class="col-12"> <h3>Item Details</h3></div>
                                    <div class="col-12"><h5>Img Name: <strong>{{img}}</strong></h5></div>
                                    <div class="col-6"><h5>Size: <br> <strong>{{sizeSmall}}</strong></h5></div>
                                    <div class="col-6"><h5>Frame: <strong>{{frameSmall}}</strong></h5></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12"><img id="mobileImg2" :src="require(`../../public/img/${img}.jpg`)" width="280px" height="270px" alt=""></div>
                                       
                                    </div>
                                    
                                    </div>
                                </div>
                              </div>
                        </div>
                        </div>
                         <br><br><br>
                      </div>
                      
                    </div>
            </div>
</template>

<script>
import emailjs from 'emailjs-com';
import router from '../router/index.js'
export default {
props:['img','frameSmall','sizeSmall'],

  methods: {
    sendEmail (e){
      var vm=this;
      var template_params={
        "img":document.getElementById("exampleInputimg2").value,
        "frame":document.getElementById("exampleInputframe2").value,
        "size":document.getElementById("exampleInputsize2").value,
        "phone":document.getElementById("exampleInputPhone2").value,
        "name":document.getElementById("exampleInputName2").value,
        "email":document.getElementById("exampleInputEmail2").value
      }
      var service_id = "default_service";
      var template_id = "template_JDnGkVQ2";

      emailjs.sendForm('gmail', 'template_JDnGkVQ2', e.target, 'user_ZZdcDqadzofCnHZLkkcFW',service_id,template_id,template_params)
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text, template_params);
            alert("Great You bought a Painting")
            $('#modalSmall').modal('hide');
            router.push({ name: 'Home'})
        }, (error) => {
            console.log('FAILED...', error);
        });
    }
  },
}
</script>
<style lang="scss">
@import "../scss/item2.scss";
  @import "../scss/modalMobile.scss";
</style>
