<template>

<!--START MODAL -->
<div class="modal fade" id="SelectanEvent" tabindex="-1" role="dialog" aria-labelledby="SelectanEvent" aria-hidden="true" data-backdrop="static" data-keyboard="false">
    <div class="modal-dialog"> 
      <div class="modal-content"> 
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
        <!-- START:: Modal content-->
        <!-- start header  -->
        <div class="modal-header with-sub-header" >
		<div class="topProBar">
			<div class="progress">
				<div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
			</div>
		</div>
			
		</div>
        <!-- end header  -->
        <div class="selectDatepicker active" >
			<h4 class="modal-title">Select Date Of Event</h4>		
           <!-- <datepicker :inline="true"></datepicker> -->
				<div id="datepicker" data-date="12/03/2012"></div>
					<input type="hidden" id="my_hidden_input">
		</div>
    <!-- body START -->
    <div class="selectEventStart ">
				
			<div class="form-group">
    <label for="exampleFormControlSelect1"><h4 class="modal-title">When Does Your Event Start?</h4>	</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option value="00:00">12:00 AM</option>
      <option value="00:30">12:30 AM</option>
      <option value="01:00">01:00 AM</option>
    </select>
  </div>
		</div>
    <!-- END body -->
    <!-- START:: FOOTER -->
    <div class="modal-body">
				<div class="btn-space with-border">
					<button class="btn link " type="button">Back</button>
					<button class="btn primary" type="button">Next</button>
				</div>
		</div>
    <!-- END :: FOOTER -->
        <!-- END::   Modal content-->
      </div>
    </div>
</div>
<!-- END MODAL  -->
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="eventbox-toolbox-header">
          <h2 class="text-center">EVENTBOX -TOOLBOX</h2>
        </div>
      </div>

      <!-- start menu -->
      <section class="top-subheader">
        <div class="container-fluid">
          <nav class="navbar navbar-expand-lg">
            <button class="navbar-toggler" type="button">☰</button>
            <div class="collapse navbar-collapse">
              <ul class="navbar-nav">
                <!---->
                <li
                  class="nav-item has-child"
                  v-for="(obj, index) in categories"
                  :key="index"
                >
                  <a href="#" class="nav-link lg-device-nav-link">{{
                    obj.name
                  }}</a>
                  <!---->
                  <ul class="dropdown-menu">
                    <li
                      v-for="(sub_obj, sub_index) in obj.children"
                      :key="sub_index"
                    >
                      <a href="#">{{ sub_obj.name }}</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
      <!-- end menu -->
    </div>

    <div class="container">
		<div class="row">
      <div class="col-12"><div class="page-title">  </div></div>		
		<div class="col-3">
			<div class="sidebarBx">
          <!-- START:: COMPONENT -->
            <div class="filter-head">
				<div class="filter-title">Filters</div>
				<button class="btn text blue-text no-underline">Clear All</button>
				</div>
        <div class="filter-container">
				<p class="title info-section">Location: <img alt="Info" class="info-icon ml-2" src="https://www.myeventbox.com/assets/images/icon-info.svg">
					<span _ngcontent-serverapp-c5="" class="info-text d-none">To get tailored results, please enter location here <span _ngcontent-serverapp-c5="" class="nav-close-btn">✕</span></span>
				</p>
				<div class="input-with-sign">
				<app-shared-google-location _ngcontent-serverapp-c5="" class="form-control">
					<form class="location-input-form ng-untouched ng-pristine ng-valid" novalidate="">
					<input autocomplete="off" class="google-loc form-control ng-untouched ng-pristine ng-valid pac-target-input" formcontrolname="location" placeholder="Location" type="text" title="">
					<button class="btn text"><img alt="Location" src="https://www.myeventbox.com/assets/images/location.svg"></button>
					</form>
				</app-shared-google-location>
				</div>
				</div>
          <!-- END:: COMPONENT -->
          <div class="divider"></div>
          <!-- START:: COMPONENT -->
          <div class="boxListing">
            <p class="title">Choose the Radius</p>
            <div class="check-container">
						<input formcontrolname="radius" type="radio" disabled="" id="25" class="ng-untouched ng-pristine"><label _ngcontent-serverapp-c5="" for="25">Within 25 Miles</label>
					</div>
          <div class="check-container">
						<input formcontrolname="radius" type="radio" disabled="" id="25" class="ng-untouched ng-pristine"><label _ngcontent-serverapp-c5="" for="25">Within 40 Miles</label>
					</div>
          </div>
          <!-- END:: COMPONENT -->
          <div class="divider"></div>
          <!-- START:: COMPONENT -->
            <div class="boxListing">
              <p _ngcontent-serverapp-c5="" class="title">Search by</p>
					<div class="check-container">
						<input formcontrolname="radius" type="radio" disabled="" id="25" class="ng-untouched ng-pristine"><label _ngcontent-serverapp-c5="" for="25">Within 25 Miles</label>
					</div>
					<div class="check-container">
						<input formcontrolname="radius" type="radio" disabled="" id="25" class="ng-untouched ng-pristine"><label _ngcontent-serverapp-c5="" for="25">Within 50 Miles</label>
					</div>
            </div>
          <!-- END:: COMPONENT -->
          <div class="divider"></div>
          <!-- START:: COMPONENT -->
          <div class="boxListing">
            <p _ngcontent-serverapp-c5="" class="title">Price (USD)</p>
					<div class="min-max-slider" data-legendnum="2">
						<label for="min">Minimum price</label>
						<input id="min" class="min" name="min" type="range" step="1" min="0" max="3000" />
						<label for="max">Maximum price</label>
						<input id="max" class="max" name="max" type="range" step="1" min="0" max="3000" />
					</div>
          </div>
          <!-- END:: COMPONENT -->
         
          <div class="divider"></div>
          
      </div>
    </div>
    <div class="col-9">
    <div class="row">
      <div class="col-4" v-for="(obj, index) in products" :key="index">
        <div class="eventboxtool-item">
          <div class="row">
            <div class="col-12 no-gutters">
              <div class="image-section">
                                    <img 
                                    alt="Product"
                  class="product-image-tem img-fluid"
                      :src="obj.defaultImageUrl"
                      @error="
                        $event.target.src =
                          'https://posh-marketplace.plego.pro/img/product-images/997/no_image.png'
                      "
                    />
              </div>
            </div>
            <div class="col-12">
              <h6 class="product-category-tem">{{ obj.name }}</h6>
              <p class="product-category">
                {{ obj.description }}
              </p>
            </div>
            <div class="col-8">
              <span class="amountlisting-tem">${{ obj.price }}</span>
            </div>
            <div class="col-4 text-right">
              <div class="form-check listitme-p">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>

    <div class="row">
      <div class="col-12 text-right mb-5">
        <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#SelectanEvent">Get Quote</button>
      </div>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

    </div>
  </div>
</template>

<script>
// import Datepicker from 'vuejs-datepicker';
import axios from "axios";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  // components: {
  //   Datepicker
  // },
  data() {
    return {
      categories: [],
      products:[]
    };
  },
  async mounted() {
    this.getCategories();
    this.getProducts();
     $('#datepicker').datepicker();
      $('#datepicker').on('changeDate', function() {
      $('#my_hidden_input').val(
        $('#datepicker').datepicker('getFormattedDate')
      );
    });
  },
  methods: {
    async getCategories() {
      let cat_result = await axios.get(
        "https://api.myeventbox.com/common/categories"
      );
      this.categories = await cat_result.data.data;
      console.log(await cat_result.data);
    },
    async getProducts() {
      let cat_result = await axios.get(
        "https://api.myeventbox.com/common/getToolboxProducts"
      );
      this.products = await cat_result.data.data;
      console.log(await cat_result.data);
    },
   
  },
};
</script>

<style scoped>
div#SelectanEvent button.close {
    position: fixed;
    right: 22px;
    top: 22px;
    font-weight: normal;
    font-size: 35px;
    color: #000;
    opacity: 1;
}
body{font-family:Montserrat,sans-serif}
.col-12.no-gutters {
    padding-right: 0;
    padding-left: 0;
}

button.btn.link.active {
    display: initial;
}
.rating > input{ display:none;}
.sidebarBx {
    text-align: left;
}
.rating > label {
    position: relative;
    width: 20px;
    font-size: 28px;
    color: #FFD600;
    cursor: pointer;
    margin-right: 5px;
	margin-bottom:-3px;
}
.rating > label::before{ 
  content: "\2605";
  position: absolute;
  opacity: 0;
}
.rating > label:hover:before,
.rating > label:hover ~ label:before {
  opacity: 1 !important;
}
.rating {
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
}
p.title {
    font-weight: 500;
    margin-bottom: 15px;
}
.divider {
    margin: 26px 0;
    height: 1px;
    background-color: #d8d8d8;
}
form.location-input-form button.btn.text {
    background: transparent;
}
.check-container input {
    margin-right: 10px;
    height: 16px;
    width: 16px;
    padding-top: 10px;
}
form.location-input-form {
    display: flex;
    justify-content: space-between;
}
input.google-loc.form-control.ng-untouched.ng-pristine.ng-valid.pac-target-input {
    border: 0;
    height: 38px;
    padding: 0;
}
.btn.text.blue-text {
    color: rgb(80, 103, 235);
    text-decoration: none;
}
button.btn.text.blue-text.no-underline {
    font-size: 15px;
    padding: 5px 0;
    background: transparent;
}
.filter-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #d8d8d8;
    margin-bottom: 26px;
}
.page-title {
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 44px;
    margin-top: 44px;
}
li.nav-item a:after {
    color: #fff;
    right: -9px;
    border: 0;
    width: 10px;
    height: 5px;
    background: url(https://www.myeventbox.com/dropdown-white.6e9e8ad….svg) center no-repeat;
    content: "";
    vertical-align: middle;
    left: 5px;
    position: relative;
    display: inline-block;
}
a:hover {
    text-decoration: none;
}
li.nav-item:last-child ul.dropdown-menu {
    right: 0;
    left: initial;
}
li.nav-item ul.dropdown-menu {
    background: rgba(41,29,137,.8);
    margin-top: 0;
	width:275px;
}
li.nav-item:hover ul.dropdown-menu {
    display: block;
}
li.nav-item {
    position: relative;
}
ul.navbar-nav {
    display: flex;
    list-style: none;
    justify-content: space-around!important;
    width: 100%;
}
.collapse.navbar-collapse {
    justify-content: center;
}
ul.navbar-nav li.nav-item a {
    color: #fff;
    font-family: Montserrat,sans-serif;
    font-size: 13px;
    padding:8px 9px;
}
section.top-subheader {
    background: rgba(41,29,137,.8);
    width: 100%;
}
ul.navbar-nav li.nav-item ul.dropdown-menu li a {
    display: block;
}
ul.navbar-nav li a:hover {
    font-weight: bold;
}
span.amountlisting-tem {
    font-weight: bold;
    float: left;
    font-size: 24px;
}
.form-check.listitme-p input.form-check-input {
    width: 20px;
    height: 20px;
    float: right;;
}
img.product-image-tem {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
}
h6.product-category-tem {
    padding: 10px 0 0 0;
    color: rgba(0,0,0,.7);
    font-weight: 600;
    margin-bottom: 8px;
    padding-right: 8px;
    line-height: 1.3;
    font-family: Montserrat,sans-serif;
    word-break: break-word;
}
button.btn.btn-info.btn-lg {
    background: rgba(41,29,137,.8);
    border-color: rgba(41,29,137,.8);
}
.eventboxtool-item {
  text-align:left;
    border-radius: 5px;
    box-shadow: 1px 5px 15px 1px rgb(135 135 135 / 7%);
    background-color: #fff;
    padding-bottom: 2px;
    height: 100%;
    cursor: pointer;
    overflow: hidden;
    padding: 10px;
    margin-bottom: 20px;
}
div#eventboxCat .modal-content {
    background: #ededed;
    padding-bottom: 20px;
}
span.amountlisting {
    font-weight: bold;
}
.eventbox-toolbox-header {
    padding: 20px;
}
div#eventboxCat .modal-dialog {
    max-width: 800px;
}
.min-max-slider > input::-webkit-slider-runnable-track {cursor: pointer;}
.min-max-slider > input::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 14px; /* Set a specific slider handle width */
  height: 14px; /* Slider handle height */
  background: #eee; /* Green background */
  cursor: pointer; /* Cursor on hover */
  border: 1px solid gray;
  border-radius: 100%;
}
.min-max-slider > input {
  -webkit-appearance: none;
  outline: none!important;
  background: transparent;
  background-image:linear-gradient(to bottom, transparent 0%, transparent 30%, #5067eb  30%, #5067eb 60%, transparent 60%, transparent 100%);
}
.min-max-slider {position: relative;text-align: center;}
.min-max-slider > label {display: none;}
span.value {height: 1.7em; font-weight: bold; display: inline-block;}
span.value.lower::before {content: "€"; display: inline-block;}
span.value.upper::before {content: "- €"; display: inline-block; margin-left: 0.4em;}
.min-max-slider > .legend {display: flex; justify-content: space-between;}
.min-max-slider > .legend > * {font-size: small; opacity: 0.25;}
.min-max-slider > input {cursor: pointer; position: absolute;}

.selectDatepicker,.selectEventStart {
    display: none;
}
.selectEventStart.active {
    display: block;
}
.selectDatepicker.active {display:block!important}
table.ui-datepicker-calendar td a {
    color: #6e6e6e;
    text-align: center;
    margin: 0 auto;
    display: block;
}
table.ui-datepicker-calendar th{
    padding: 3px 8px;
    color: #6e6e6e;
}
a.ui-datepicker-next.ui-corner-all {
    float: right;
	padding-right: 10px;
	cursor: pointer;
}
a.ui-datepicker-prev.ui-corner-all {
    padding-left: 10px;
	cursor: pointer;
}
.ui-datepicker-title {
    text-align: center;
    border: 1px solid #dfdfdf;
}
.ui-datepicker-inline.ui-datepicker.ui-widget.ui-widget-content.ui-helper-clearfix.ui-corner-all {
    border: 1px solid #dfdfdf;
}
div#datepicker {
    max-width: 273px;
    margin: 0 auto;
    border: 1px solid #dfdfdf;
    margin-top: 30px;
    box-shadow: 3px 4px #f3f3f3;
    padding: 10px;
}
.topbar-item.active { opacity: 1; }
.topbar-item {
    background: #5067eb;
    height: 10px;
    width: 100%;
    border-radius: 10px;
    opacity: .4;
}
.topProBar .progress-bar {
    background: #5067eb;
}
.topProBar {
    justify-content: center;
    margin-bottom: 30px;
    width: 100%;
}
.btn-space .btn+.btn {
    margin-left: 16px;
}
.btn.primary {
    color: #fff;
    border-color: transparent;
    background: #5067eb;
}
select#exampleFormControlSelect1 {
    height: 40px;
}
.btn-space .btn {
height: 40px;
    width: 90px;
}
button.btn.link {
    color: #000;
    background: #fff;
    border-color: #5067eb;
}
.btn-space.with-border {
    border-top: 1px solid #e2e2e2;
    padding: 25px 35px 4px;
    margin-top: 40px;
    background: #fafafa;
	text-align: center;
}
.add-button-container.d-flex {
    display: flex;
    justify-content: right;
}
button.btn.text.blue-text.small.ml-auto {
    color: #5067eb;
    text-decoration: underline;
    background: transparent;
}
.form-group label {
    font-size: 15px;
    margin-bottom: 11px;
    display: inline-block;
}
.btn-space.with-border {
    border-top: 1px solid #e2e2e2;
    padding: 25px 35px 25px 35px;
    margin-top: 40px;
    background: #fafafa;
}
div#SelectanEvent .modal-dialog iframe {
    height: 80vh;
}
div#SelectanEvent .modal-dialog {
    max-width: 500px;
}
#SelectanEvent .modal-body {
    padding: 0;
}
.modal-header.with-sub-header {
    padding-top: 30px;
    padding-bottom: 15px;
    padding-left: 55px;
    padding-right: 55px;
    flex-direction: column;
    align-items: center;
}
li.nav-item.has-child:before {
    position: absolute;
    content: '';
    display: inline-block;
    height: 8px;
    width: 8px;
    vertical-align: baseline;
    border-style: solid;
    border-width: 2px 2px 0 0;
    transform: rotate(136deg);
    color: #fff;
    right: 0;
    top: 13px;
}
h4.modal-title {
  font-size: 22px;
    text-align: center;
    font-family: Montserrat,sans-serif;
}
.form-group,.add-button-container.d-flex {
    padding-left: 35px;
    padding-right: 35px;
}
.form-group{
    padding-top: 25px;
    padding-bottom: 20px;
    padding-left: 35px;
    padding-right: 35px;
}
</style>
