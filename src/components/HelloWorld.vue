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

    <div class="row">
      <div class="col-3" v-for="(obj, index) in products" :key="index">
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

    <div class="row">
      <div class="col-12 text-right">
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li.nav-item a:after {
  color: #fff;
  right: -9px;
  border: 0;
  width: 10px;
  height: 5px;
  background: url(https://www.myeventbox.com/dropdown-white.6e9e8ad….svg) center
    no-repeat;
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
  background: rgba(41, 29, 137, 0.8);
  margin-top: 0;
  width: 275px;
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
  justify-content: space-around !important;
  width: 100%;
}

.collapse.navbar-collapse {
  justify-content: center;
}

ul.navbar-nav li.nav-item a {
  color: #fff;
  font-size: 15px;
  padding: 8px 9px;
}

section.top-subheader {
  background: rgba(41, 29, 137, 0.8);
  width: 100%;
}

span.amountlisting-tem {
  font-weight: bold;
}

.form-check.listitme-p input.form-check-input {
  width: 20px;
  height: 20px;
  float: right;
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
</style>
