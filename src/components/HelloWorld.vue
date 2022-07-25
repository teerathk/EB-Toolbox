<template>
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
                  class="nav-item"
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
            <div class="col-12">
              <div class="image-section">
                                    <img 
                                    alt="Product"
                  class="product-image-tem img-fluid" style='max-width: 75%; height: auto; border: 1px solid;'
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
        <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#exampleModal">Get Quote</button>
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
import axios from "axios";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      categories: [],
      products:[]
    };
  },
  async mounted() {
    this.getCategories();
    this.getProducts();
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
    font-size: 15px;
    padding:8px 9px;
}
section.top-subheader {
    background: rgba(41,29,137,.8);
    width: 100%;
}
span.amountlisting-tem {
    font-weight: bold;
}
.form-check.listitme-p input.form-check-input {
    width: 20px;
    height: 20px;
    float: right;;
}
h6.product-category-tem {
    padding: 10px 0 0 0;
}
.eventboxtool-item {
    padding: 10px;
    background: #fff;
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

</style>
