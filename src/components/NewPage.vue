<template>
  <!-- START MODAL FOR ADD BTN -->
  <!-- END MODAL  -->
  <!-- END :: MODAL FOR ADD BTN -->
  <!--START MODAL -->
  <div
    class="modal fade"
    id="SelectanEvent"
    tabindex="-1"
    role="dialog"
    aria-labelledby="SelectanEvent"
    aria-hidden="true"
    data-backdrop="static"
    data-keyboard="false"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <button
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <!-- START:: Modal content-->
        <!-- start header  -->
        <div class="modal-header with-sub-header">
          <div class="topProBar">
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 25%"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                25%
              </div>
            </div>
          </div>
        </div>
        <!-- end header  -->
        <div class="selectDatepicker active">
          <h4 class="modal-title">Select Date Of Event</h4>
          
          <!-- <div id="datepicker" data-date="12/03/2012"></div>
					<input type="hidden" id="my_hidden_input"> -->
        </div>
        <!-- body START -->
        <div class="selectEventStart">
          <div class="form-group">
            <label for="exampleFormControlSelect1"
              ><h4 class="modal-title">When Does Your Event Start?</h4>
            </label>
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
            <button class="btn link" type="button">Back</button>
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
          <div class="form_group seach_event_toolbox">
            <input
              type="text"
              class="form-control"
              id=""
              placeholder="Search.."
            />
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-8">
          <div class="row">
            <!-- START:: BOX -->

            <div
              class="col-sm-6 col-12"
              v-for="(obj, index) in products"
              :key="index"
            >

  <div
    class="modal fade"
    
    :id="'clikedAddBtn_' + index"
    
    tabindex="-1"
    role="dialog"
    aria-labelledby="SelectanEvent"
    aria-hidden="true"
    data-backdrop="static"
    data-keyboard="false"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <button
          type="button"
          class="close bteb_popup"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <!-- START:: Modal content-->

        <div class="evtb_addBtn_box">
          <div class="evtb_addbtn_area">
            <!-- left -->
            <div class="evtb_addbtn_left">
              <h3 class="evtb_addbtn_title">{{ obj.name }}</h3>
              <!-- <div class="ebt-lbl-box" data-v-140022cf=""><p class="eventBox_Price" data-v-140022cf="">$45</p><div class="form-check listitme-p" data-v-140022cf=""><input class="form-check-input" type="checkbox" id="defaultCheck1" data-v-140022cf=""></div></div> -->
              <p class="evtb_dsc">{{ obj.description }}</p>
            </div>
            <!-- end:left -->
            <!-- right -->
            <div class="evtb_addbtn_right">
              <div class="evtb_addbtn_image">
                <!-- <img
                  class="evnt_img-detail img-fluid"
                  src="https://sharetribe.imgix.net/5d49270c-e5cf-43c2-a9c0-1e920fe99ce7/61f49c2b-da27-4249-a685-7bb13d55fe61?auto=format&amp;fit=clip&amp;h=750&amp;w=750&amp;s=a8eaf9cf6c8126f8380e688e25f056bf"
                /> -->
                    <img
                      alt="Product"
                      class="evnt_img-detail img-fluid"
                      :src="obj.defaultImageUrl"
                      
                    />

</div>
              <div class="evtb_btn-number">
                <button type="button" v-on:click="CheckboxEnable(index)" data-dismiss="modal" class="btn btn_ebtb">
                  <span>Add to Quote</span>
                  <span class="AddExtrasToCartFormDesktop_sumPrice__1xEi2"
                    >${{ obj.price }}</span
                  >
                </button>
              </div>
            </div>
            <!-- end right -->
          </div>
        </div>

        <!-- END::   Modal content-->
      </div>
    </div>
  </div>


              <div class="eventBox_item">
                <div class="eventBox_item_left">
                  <!-- left top -->
                  <div class="ebt-lt-bx">
                    <h3 class="eventBox_title_area">{{ obj.name }}</h3>
                    <div class="eventBox_title_disc">
                      <span class=""
                        >{{ obj.description }}</span
                      >
                    </div>
                  </div>
                  <!-- left top -->
                  <!-- bottom left -->
                  <div class="ebt-lbl-box">
                    <p class="eventBox_Price">${{ obj.price }}</p>
                    <div class="form-check listitme-p">
                      
                      <input
                        v-model="productsQuotes"
                        class="form-check-input"
                        type="checkbox"
                        :value="obj.id"
                        :id="'defaultCheck1_' + index"
                      />
                    </div>
                  </div>
                  <!-- bottom left -->
                </div>

                <div class="eventBox_item_right">
                  <div class="SectionExtrasMaybe_itemThumbnail__BOgPo">
                    <img
                      alt="Product"
                      class="
                        CloudinaryImage_lazyImage__2Rrfp
                        SectionExtrasMaybe_itemImage__2C9R6
                      "
                      width="126"
                      height="127"
                      :src="obj.defaultImageUrl"
                      @error="
                        $event.target.src =
                          'https://posh-marketplace.plego.pro/img/product-images/997/no_image.png'
                      "
                    />

                    <div class="SectionExtrasMaybe_extraAddBtnWrapper__22BOr">
                      <button
                        data-toggle="modal"
                        
                        :data-target="'#clikedAddBtn_' + index" 
                        
                        type="button"
                        class="SectionExtrasMaybe_extraAddBtn__2By5D"
                      >
                        <span class="SectionExtrasMaybe_plus__1BWh5">+</span>
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- END:: BOX   -->
          </div>
        </div>
        <!-- START:: SIDEBAR RIGHT -->
        <div class="col-4">
          <div class="Ebtb_sdebar_right">
            <!-- <p class="ebtb_title">$500</p>
            <span class="ebtb_sp">Starting price</span> -->
            <!-- <h3 class="ebtb_bfsc">Book Full Service Catering</h3>
              <span class="ebtb_aityc">Add items to your cart</span> -->
            <p class="ebtb_sdatos">Select date and time of service</p>
            <div class="form_group">
              <input
                type="date"
                placeholder="dd-mm-yyyy"
                class="form-control"
                id=""
                v-model="datestart"
              />
            </div>
            <div class="input_form_group">
              <div class="form_group">
                <select class="form-control" id="exampleFormControlSelect1" v-model="timestart">
                  <option>start time</option>
                  <option value="1:30">1:30 AM</option>
                  <option value="2:00">2:00 AM</option>
                  <option value="2:30">2:30 AM</option>
                  <option value="3:30">3:30 AM</option>
                </select>
              </div>
              <div class="form_group">
                <select v-model="timeend" class="form-control" id="exampleFormControlSelect1">
                  <option>end time</option>
                  <option value="1:30">1:30 AM</option>
                  <option value="2:00">2:00 AM</option>
                  <option value="2:30">2:30 AM</option>
                  <option value="3:30">3:30 AM</option>
                </select>
              </div>
            </div>
            <div class="form_group">
              <input
                type="text"
                class="form-control"
                id=""
                v-model="location"
                placeholder="location"
              />
            </div>
            <p class="ebtb_ywbcy">You won't be charged yet</p>
            <div class="">
              <button
                type="button"
                v-on:click="postQuotes"
                class="btn btn_ebtb"
                data-v-140022cf=""
              >
                Request to Quote
              </button>
            </div>
          </div>
        </div>
        <!-- END  :: SIDEBAR RIGHT -->
      </div>
    </div>

    <div class="row mt-2">
      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
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
  name: "NewPage",
  props: {
    msg: String,
  },
  components: {
    
  },
  data() {
    return {
      productsQuotes: [],
      categories: [],
      products: [],
      location:null,
      datestart:null,
      timestart:null,
      timeend:null,
    };
  },
  async mounted() {
    this.getCategories();
    this.getProducts();
  },
  methods: {
    CheckboxEnable(index){
      // alert(index)
      document.getElementById("defaultCheck1_"+index).checked = true;
      // jQuery("#defaultCheck1_"+index).prop("checked","true")
    },
    async getCategories() {
      //alert("asdf;lkj")
      let cat_result = await axios.get(
        "https://api.myeventbox.com/common/categories"
      );
      this.categories = await cat_result.data.data;
      console.log(await cat_result.data);
    },
    async getProducts() {
      /*
      Planner Registrations
      https://api.myeventbox.com/signup/planner
      POST
      email: "teerath12@plego.com"
firstName: "TEERATH"
isVerified: true
lastName: "KUMAR"
password: "Test@123"
passwordConfirmation: "Test@123"
phone: "+1 3333333333"
      */
      let cat_result = await axios.get(
        "https://api.myeventbox.com/common/getToolboxProducts"
      );
      this.products = await cat_result.data.data;
      console.log(await cat_result.data);
    },
    async postQuotes() {
      alert("Posting...");
      // let cat_quote = await axios.post(

      // );

      this.productsQuotes.forEach((element) => {
        axios
          .post("https://api.myeventbox.com/events/PartialEvent", {
            anything_else: "Test",
            category: "5eb358f7b27c7a0033a649ac",
            categoryName: "Food + Beverage",
            city: "Downers Grove",
            citycode: "Downers Grove",
            companyid: "62d03d4ded906c1449fbd781",
            confirmpassword: "Test@123",
            country: "United States",
            countrycode: "US",
            end_date: null,
            event: null,
            eventLable: "toolboxtestingevent",
            event_name: "Toolbox Testing Event",
            event_name_id: null,
            event_type: {
              _id: "5eb358f7b27c7a0033a649b2",
              name: "Birthday / Anniversary",
            },
            guest_count: null,
            latitude: "41.796636",
            location: this.location,
            longitude: "-88.011678",
            mobilecode: "+1",
            new_event: true,
            password: "Test@123",
            planner: "",
            planner_email: "teerath@plego.com",
            planner_fullname: "TEERATH KUMAR",
            planner_id: "62c74d6bc937923d5303e52e",
            planner_mobile: "3333333333",
            price: 56,
            product_id: element, // 62d84b9caf37a2745aeae6cf
            product_name: "Test Product (Show Evan)", // Demo Product
            providing_graphic: null,
            quantity: 1,
            selectedDialCode: null,
            selected_budget: null,
            selected_guest: null,
            selected_hour: null,
            singuplastName: "",
            startDate: null,
            start_date: this.datestart,
            start_time: this.timestart,
            state: "Illinois",
            statecode: "IL",
            sub_category: "5eb358f7b27c7a0033a6494c",
            vendor: "62d03d4ded906c1449fbd782",
            vendorname: "plego",
            zipcode: "60515",
          })
          .then((result) => {
            alert("Posted Successfully");
            console.log(result.data);
          });
      });
      // axios
      //   .post("https://api.myeventbox.com/events/PartialEvent", {
      //     anything_else: "Test",
      //     category: "5eb358f7b27c7a0033a649ac",
      //     categoryName: "Food + Beverage",
      //     city: "Downers Grove",
      //     citycode: "Downers Grove",
      //     companyid: "62d03d4ded906c1449fbd781",
      //     confirmpassword: "Test@123",
      //     country: "United States",
      //     countrycode: "US",
      //     end_date: null,
      //     event: null,
      //     eventLable: "toolboxtestingevent",
      //     event_name: "Toolbox Testing Event",
      //     event_name_id: null,
      //     event_type: {
      //       _id: "5eb358f7b27c7a0033a649b2",
      //       name: "Birthday / Anniversary",
      //     },
      //     guest_count: null,
      //     latitude: "41.796636",
      //     location: "First FL, 4949 Forest Ave, Downers Grove, IL 60515, USA",
      //     longitude: "-88.011678",
      //     mobilecode: "+1",
      //     new_event: true,
      //     password: "Test@123",
      //     planner: "",
      //     planner_email: "teerathtest1234@plego.com",
      //     planner_fullname: "TEERATH KUMAR",
      //     planner_id: "62e2c6654c1186259267ef9e",
      //     planner_mobile: "3333333333",
      //     price: 56,
      //     product_id: "62dada6a74894f2336c5a25b", // 62d84b9caf37a2745aeae6cf
      //     product_name: "Test Product (Show Evan)", // Demo Product
      //     providing_graphic: null,
      //     quantity: 1,
      //     selectedDialCode: null,
      //     selected_budget: null,
      //     selected_guest: null,
      //     selected_hour: null,
      //     singuplastName: "",
      //     startDate: null,
      //     start_date: "07-29-2022",
      //     start_time: "12:00",
      //     state: "Illinois",
      //     statecode: "IL",
      //     sub_category: "5eb358f7b27c7a0033a6494c",
      //     vendor: "62d03d4ded906c1449fbd782",
      //     vendorname: "plego",
      //     zipcode: "60515",
      //   })
      //   .then((result) => {
      //     alert("Posted Successfully");
      //     console.log(result.data);
      //   });
      // axios
      //   .post("https://api.myeventbox.com/events/PartialEvent", {
      //     anything_else: "Test",
      //     category: "5eb358f7b27c7a0033a649ac",
      //     categoryName: "Food + Beverage",
      //     city: "Downers Grove",
      //     citycode: "Downers Grove",
      //     companyid: "62d03d4ded906c1449fbd781",
      //     confirmpassword: "Test@123",
      //     country: "United States",
      //     countrycode: "US",
      //     end_date: null,
      //     event: null,
      //     eventLable: "toolboxtestingevent",
      //     event_name: "Toolbox Testing Event",
      //     event_name_id: null,
      //     event_type: {
      //       _id: "5eb358f7b27c7a0033a649b2",
      //       name: "Birthday / Anniversary",
      //     },
      //     guest_count: null,
      //     latitude: "41.796636",
      //     location: "First FL, 4949 Forest Ave, Downers Grove, IL 60515, USA",
      //     longitude: "-88.011678",
      //     mobilecode: "+1",
      //     new_event: true,
      //     password: "Test@123",
      //     planner: "",
      //     planner_email: "teerathtest1234@plego.com",
      //     planner_fullname: "TEERATH KUMAR",
      //     planner_id: "62e2c6654c1186259267ef9e",
      //     planner_mobile: "3333333333",
      //     price: 56,
      //     product_id: "62d84b9caf37a2745aeae6cf",
      //     product_name: "Demo Product",
      //     providing_graphic: null,
      //     quantity: 1,
      //     selectedDialCode: null,
      //     selected_budget: null,
      //     selected_guest: null,
      //     selected_hour: null,
      //     singuplastName: "",
      //     startDate: null,
      //     start_date: "07-29-2022",
      //     start_time: "12:00",
      //     state: "Illinois",
      //     statecode: "IL",
      //     sub_category: "5eb358f7b27c7a0033a6494c",
      //     vendor: "62d03d4ded906c1449fbd782",
      //     vendorname: "plego",
      //     zipcode: "60515",
      //   })
      //   .then((result) => {
      //     alert("Posted Successfully");
      //     console.log(result.data);
      //   });
    },
  },
};
</script>

<style scoped>
p.evtb_dsc {
  margin-top: 22px;
  padding-bottom: 22px;
}
.evtb_btn-number {
  padding-top: 20px;
  padding-bottom: 22px;
}
button.close.bteb_popup {
  text-align: right;
  padding: 10px 20px;
  font-size: 36px;
  font-weight: normal;
  color: black;
  border: 0px;
  outline: none;
}
img.evnt_img-detail.img-fluid {
  width: 100%;
  object-fit: cover;
  height: 250px;
}
.evtb_addBtn_box {
  padding-right: 20px;
  padding-left: 20px;
}
div#clikedAddBtn .modal-dialog {
  max-width: 732px;
}
img .evnt_img-detail {
  width: 100%;
  object-fit: cover;
  height: 250px;
}
.evtb_addbtn_right {
  width: 50%;
}
.evtb_addbtn_left {
  flex: 1 1;
  width: 50%;
  text-align: left;
}
.evtb_addbtn_area {
  display: flex;
  grid-column-gap: 20px;
  -webkit-column-gap: 20px;
  -moz-column-gap: 20px;
  column-gap: 20px;
  justify-content: space-between;
}
button.btn.btn_ebtb {
  background: rgba(41, 29, 137, 0.8);
  color: #fff;
  width: 100%;
}
.input_form_group .form_group {
  width: 100%;
}
.input_form_group {
  display: flex;
  margin-top: 20px;
  column-gap: 30px;
  margin-bottom: 20px;
}
p.ebtb_ywbcy {
  text-align: center;
  margin-top: 20px;
  color: #9b9b9b;
}
p.ebtb_ywbcy {
  text-align: center;
  margin-top: 20px;
}
p.ebtb_title {
  margin: 0;
  color: rgba(41, 29, 137, 0.8);
  font-size: 34px;
}
span.AddExtrasToCartFormDesktop_sumPrice__1xEi2 {
  position: absolute;
  right: 35px;
  color: #fff;
}
span.ebtb_sp {
  margin-right: 10px;
  font-size: 14px;
  margin-bottom: 20px;
  display: block;
}
h3.ebtb_bfsc {
  color: #525252;
  margin-top: 0;
  margin-bottom: 9px;
  line-height: 32px;
  font-weight: 600;
  font-size: 24px;
}
span.ebtb_aityc {
  font-size: 16px;
  margin: 0;
  font-weight: 600;
  color: #c36;
}
p.ebtb_sdatos {
  color: #8a8a8a;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 6px;
  padding-bottom: 20px;
}
.Ebtb_sdebar_right {
  text-align: left;
  border-left: 1px solid #e7e7e7;
  padding-left: 30px;
}
button.SectionExtrasMaybe_extraAddBtn__2By5D {
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 4px;
  background: hsla(0, 0%, 100%, 0.9);
  position: relative;
  z-index: 100;
  height: 32px;
  font-size: 15px;
  min-width: 90%;
  opacity: 0;
  -webkit-transform: translateY(30px);
  transform: translateY(1px);
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
body {
  background: #f2f2f2 !important;
}
span.SectionExtrasMaybe_plus__1BWh5 {
  position: absolute;
  left: 7px;
}
.eventBox_item:hover button.SectionExtrasMaybe_extraAddBtn__2By5D {
  opacity: 1;
  -webkit-transform: translateY(-15px);
  transform: translateY(-15px);
}
.ebt-lbl-box {
  max-width: 100%;
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
}
.ebt-lt-bx {
  text-align: left;
}
.eventBox_title_disc {
  margin: 10px 0 20px;
  position: relative;
}
p.eventBox_Price {
  margin: 0;
  font-size: 16px;
  word-wrap: break-word;
  max-width: 50%;
  line-height: 32px;
}
.SectionExtrasMaybe_extraAddBtnWrapper__22BOr {
  position: absolute;
  bottom: 5px;
  right: 0;
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.eventBox_item_right {
  width: 200px;
  margin-left: 10px;
  position: relative;
  overflow: hidden;
}
.SectionExtrasMaybe_typeIcon__2DRmJ {
  display: flex;
  align-items: flex-end;
}
h3.eventBox_title_area {
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  overflow: hidden;
  font-size: 13px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.eventBox_title_disc span {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 11px;
}
.eventBox_item {
  margin-top: 20px;
  display: flex;
  width: 100%;
  border-radius: 6px;
  justify-content: space-between;
  background-color: #fff;
  cursor: pointer;
}
.eventBox_item_left {
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  max-width: 60%;
  padding: 10px 5px 5px 15px;
}
div#SelectanEvent button.close {
  position: fixed;
  right: 22px;
  top: 22px;
  font-weight: normal;
  font-size: 35px;
  color: #000;
  opacity: 1;
}
.eventBToolbox {
  font-family: Montserrat, sans-serif;
  background-color: #f2f2f2;
}
.col-12.no-gutters {
  padding-right: 0;
  padding-left: 0;
}

button.btn.link.active {
  display: initial;
}
.rating > input {
  display: none;
}
.sidebarBx {
  text-align: left;
}
.rating > label {
  position: relative;
  width: 20px;
  font-size: 28px;
  color: #ffd600;
  cursor: pointer;
  margin-right: 5px;
  margin-bottom: -3px;
}
.rating > label::before {
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
.form_group.seach_event_toolbox {
  width: 650px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
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
  font-family: Montserrat, sans-serif;
  font-size: 13px;
  padding: 8px 9px;
}
section.top-subheader {
  background: rgba(41, 29, 137, 0.8);
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
  float: right;
}
img.product-image-tem {
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
h6.product-category-tem {
  padding: 10px 0 0 0;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 600;
  margin-bottom: 8px;
  padding-right: 8px;
  line-height: 1.3;
  font-family: Montserrat, sans-serif;
  word-break: break-word;
}
button.btn.btn-info.btn-lg {
  background: rgba(41, 29, 137, 0.8);
  border-color: rgba(41, 29, 137, 0.8);
}
.eventboxtool-item {
  text-align: left;
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
.min-max-slider > input::-webkit-slider-runnable-track {
  cursor: pointer;
}
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
  outline: none !important;
  background: transparent;
  background-image: linear-gradient(
    to bottom,
    transparent 0%,
    transparent 30%,
    #5067eb 30%,
    #5067eb 60%,
    transparent 60%,
    transparent 100%
  );
}
.min-max-slider {
  position: relative;
  text-align: center;
}
.min-max-slider > label {
  display: none;
}
span.value {
  height: 1.7em;
  font-weight: bold;
  display: inline-block;
}
span.value.lower::before {
  content: "€";
  display: inline-block;
}
span.value.upper::before {
  content: "- €";
  display: inline-block;
  margin-left: 0.4em;
}
.min-max-slider > .legend {
  display: flex;
  justify-content: space-between;
}
.min-max-slider > .legend > * {
  font-size: small;
  opacity: 0.25;
}
.min-max-slider > input {
  cursor: pointer;
  position: absolute;
}

.selectDatepicker,
.selectEventStart {
  display: none;
}
.selectEventStart.active {
  display: block;
}
.selectDatepicker.active {
  display: block !important;
}
table.ui-datepicker-calendar td a {
  color: #6e6e6e;
  text-align: center;
  margin: 0 auto;
  display: block;
}
table.ui-datepicker-calendar th {
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
.topbar-item.active {
  opacity: 1;
}
.topbar-item {
  background: #5067eb;
  height: 10px;
  width: 100%;
  border-radius: 10px;
  opacity: 0.4;
}
.topProBar .progress-bar {
  background: #5067eb;
}
.topProBar {
  justify-content: center;
  margin-bottom: 30px;
  width: 100%;
}
.btn-space .btn + .btn {
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
  content: "";
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
  font-family: Montserrat, sans-serif;
}
.form-group,
.add-button-container.d-flex {
  padding-left: 35px;
  padding-right: 35px;
}
.form-group {
  padding-top: 25px;
  padding-bottom: 20px;
  padding-left: 35px;
  padding-right: 35px;
}
</style>
