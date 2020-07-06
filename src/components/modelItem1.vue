<template>
    <!-- Modal -->
    
            <div class="modal fade " id="modal"  tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="">
                    <div class="modal-content">
                            <h2 class="modal-title mt-1 text-center">Lets Order!</h2>
                        <div class="modal-body">
                            <div class="container">
                              <div class="row">

                              <div class="col-md-5">
                                <form  @submit.prevent="sendEmail" >
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="rt56223@gmail.com" placeholder="Enter email">
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputName1">Name</label>
                                    <input type="name" class="form-control" name="name" id="exampleInputName1" placeholder="Name">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPhone1">Phone Number</label>
                                    <input type="number" class="form-control" name="phone" id="exampleInputPhone1" placeholder="Phone"
                                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                    required>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputimg1">Img</label>
                                    <input type="name" readonly class="form-control" name="img" id="exampleInputimg1" :value="this.img">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputframe1">Frame</label>
                                    <input type="name" readonly class="form-control" name="frame" id="exampleInputframe1" :value="this.frame">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputsize1">Size</label>
                                    <input type="name" readonly class="form-control" name="size" id="exampleInputsize1" :value="this.size">
                                </div>
                                <br>
                                <button type="submit" style="margin-left: 2.3vw; font-size: 2.2vw;background-color:$lightblue;" class="btn order" >Send Order</button>
                                </form>
                              </div>

                              <div class="col-md-7 p-0">
                                <div class="modalDesc">
                                  <div class="row">
                                   <div class="col-12"> <h3>Item Details</h3></div>
                                   <div class="col-12"><h5>Img Name: <strong>{{img}}</strong></h5></div>
                                   <div class="col-12"><h5>Size: <strong>{{size}}</strong></h5></div>
                                   <div class="col-12"><h5>Frame: <strong>{{frame}}</strong></h5></div>
                                  </div>
                                   <div class="row">
                                       <div class="col-12"><img id="Mainimg2" style="cursor: none; margin-top:3vh" :src="require(`../../public/img/${img}.jpg`)" width="300vw" height="450vh" alt=""></div>
                                   </div>
                                </div>
                              </div>
                          </div>
                            </div>
                        </div>
                      </div>
                    </div>
            </div>
</template>


<script>
import emailjs from 'emailjs-com';
import router from '../router/index.js'
export default {
 
  props:['img','frame','id','size'],
    methods: {
    sendEmail (e){
      var vm=this;
      var template_params={
        "img":document.getElementById("exampleInputimg1").value,
        "frame":document.getElementById("exampleInputframe1").value,
        "size":document.getElementById("exampleInputsize1").value,
        "phone":document.getElementById("exampleInputPhone1").value,
        "name":document.getElementById("exampleInputName1").value,
        "email":document.getElementById("exampleInputEmail1").value
      }
      var service_id = "default_service";
      var template_id = "template_JDnGkVQ2";

      emailjs.sendForm('gmail', 'template_JDnGkVQ2', e.target, 'user_ZZdcDqadzofCnHZLkkcFW',service_id,template_id,template_params)
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text, template_params);
            alert("Great You bought a Painting")
            $('#modal').modal('hide');
            router.push({ name: 'Home'})
        }, (error) => {
            console.log('FAILED...', error);
        });
    }
  },
}
</script>
<style lang="scss">
@import "../scss/modalitem1.scss";
</style>