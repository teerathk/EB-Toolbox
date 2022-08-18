<template>
  <div class="container" style="box-shadow: 0 0 10px 3px #ccc">
    <div class="quote-invoice-header">
      <div class="quote-invoice-image">
        <img
          _ngcontent-serverapp-c30=""
          alt="Logo"
          class="img-contain"
          src="https://myeventbox.plego.pro/assets/images/logo.svg"
        />
      </div>
      <div _ngcontent-serverapp-c30="" class="quote-invoice-text">
        <!----><!----><!----><!----><!---->
        <h2 _ngcontent-serverapp-c30="">ORDER ID #{{ quotedata.quoteId }}</h2>
        <p _ngcontent-serverapp-c30="">
          <span _ngcontent-serverapp-c30="">ORDER DATE/TIME: </span
          >{{ quotedata.createdAt }}
        </p>
      </div>
      <!---->
    </div>

    <div _ngcontent-serverapp-c30="" class="eventBx-body">
      <div _ngcontent-serverapp-c30="" class="row">
        <div _ngcontent-serverapp-c30="" class="col-md-6">
          <div _ngcontent-serverapp-c30="" class="invoice-sub-header">
            <h3 _ngcontent-serverapp-c30="">
              {{
                quotedata.planners?.companyName
                  ? quotedata.planners?.companyName
                  : ""
              }}
            </h3>
            <p _ngcontent-serverapp-c30="">
              <span _ngcontent-serverapp-c30="">{{
                quotedata.planners?.companyName
                  ? quotedata.planners?.companyName
                  : ""
              }}</span>
            </p>
          </div>
        </div>
        <div _ngcontent-serverapp-c30="" class="col-md-6">
          <div _ngcontent-serverapp-c30="" class="invoice-sub-header-detail">
            <div _ngcontent-serverapp-c30="" class="text">
              <span _ngcontent-serverapp-c30="">Representative: </span>Vendor
              {{ quotedata.vendors?.name }}
            </div>
            <div _ngcontent-serverapp-c30="" class="text">
              <span _ngcontent-serverapp-c30="">Phone: </span
              >{{ quotedata.vendors?.phone }}
            </div>
            <div _ngcontent-serverapp-c30="" class="text">
              <span _ngcontent-serverapp-c30="">Email:</span>
              <!-- evan@nextstopcandles.com -->
              {{ quotedata.vendors?.website }}
            </div>
          </div>
        </div>
        <div _ngcontent-serverapp-c30="" class="info-section">
          <div _ngcontent-serverapp-c30="" class="info-heading">
            Planner Information
          </div>
          <div _ngcontent-serverapp-c30="" class="col-md-6">
            <div _ngcontent-serverapp-c30="" class="text">
              <span _ngcontent-serverapp-c30="" class="heading"
                >First Name:</span
              ><span _ngcontent-serverapp-c30="" class="detail">{{
                quotedata.planners?.firstName
              }}</span>
            </div>
            <div _ngcontent-serverapp-c30="" class="text">
              <span _ngcontent-serverapp-c30="" class="heading">Phone:</span
              ><span _ngcontent-serverapp-c30="" class="detail">{{
                quotedata.planners?.phone
              }}</span>
            </div>
          </div>
          <div _ngcontent-serverapp-c30="" class="col-md-6">
            <div _ngcontent-serverapp-c30="" class="text">
              <span _ngcontent-serverapp-c30="" class="heading">Last Name:</span
              ><span class="detail">{{ quotedata.planners?.lastName }}</span>
            </div>
            <div _ngcontent-serverapp-c30="" class="text">
              <span _ngcontent-serverapp-c30="" class="heading">Email:</span
              ><span _ngcontent-serverapp-c30="" class="detail">{{
                quotedata.planners?.email
              }}</span>
            </div>
          </div>
        </div>
        <div _ngcontent-serverapp-c30="" class="info-section">
          <div _ngcontent-serverapp-c30="" class="info-heading">
            Event Information
          </div>
          <div _ngcontent-serverapp-c30="" class="col-md-6">
            <div _ngcontent-serverapp-c30="" class="text row">
              <span _ngcontent-serverapp-c30="" class="heading col-sm-6"
                >Event Start:</span
              ><span _ngcontent-serverapp-c30="" class="detail col-sm-6"
                >{{ quotedata.events?.startDate }}
                <br _ngcontent-serverapp-c30="" />(Local Time of Event Location)
              </span>
            </div>
            <!-- <div _ngcontent-serverapp-c30="" class="text row">
              <span _ngcontent-serverapp-c30="" class="heading col-sm-6"
                >Venue:</span
              ><span _ngcontent-serverapp-c30="" class="detail col-sm-6"></span>
            </div> -->
            <div _ngcontent-serverapp-c30="" class="text row">
              <span _ngcontent-serverapp-c30="" class="heading col-sm-6"
                >Venue Address:</span
              ><span _ngcontent-serverapp-c30="" class="detail col-sm-6">{{
                quotedata.events?.address
              }}</span>
            </div>
          </div>
          <div _ngcontent-serverapp-c30="" class="col-md-6">
            <div _ngcontent-serverapp-c30="" class="text row">
              <span _ngcontent-serverapp-c30="" class="heading col-sm-6"
                >Event End:</span
              ><span _ngcontent-serverapp-c30="" class="detail col-sm-6"
                >Mar 31, 2022 11:59 PM <br _ngcontent-serverapp-c30="" />(Local
                Time of Event Location)
              </span>
            </div>
            <!-- <div _ngcontent-serverapp-c30="" class="text row">
              <span _ngcontent-serverapp-c30="" class="heading col-sm-6"
                >Event Name:</span
              ><span _ngcontent-serverapp-c30="" class="detail col-sm-6"
                >test 32222 p3</span
              >
            </div>
            <div _ngcontent-serverapp-c30="" class="text row">
              <span _ngcontent-serverapp-c30="" class="heading col-sm-6"
                >Event Type:</span
              ><span _ngcontent-serverapp-c30="" class="detail col-sm-6"
                >Seated Dinner</span
              >
            </div>
            <div _ngcontent-serverapp-c30="" class="text row">
              <span _ngcontent-serverapp-c30="" class="heading col-sm-6"
                >Total Guests:</span
              ><span _ngcontent-serverapp-c30="" class="detail col-sm-6"></span>
            </div> -->
          </div>
        </div>

        <div _ngcontent-serverapp-c30="" class="info-section">
          <div _ngcontent-serverapp-c30="" class="info-heading">
            Event Logistics
          </div>
          <div _ngcontent-serverapp-c30="" class="col-md-6">
            <div _ngcontent-serverapp-c30="" class="text row">
              <span _ngcontent-serverapp-c30="" class="heading col-sm-6"
                >Delivery Start:</span
              ><span _ngcontent-serverapp-c30="" class="detail col-sm-6">
                {{ quotedata.varriableInfo?.deliveryStartDate }}
                <br _ngcontent-serverapp-c30="" />(Local Time of Event Location)
              </span>
            </div>
            <div _ngcontent-serverapp-c30="" class="text row">
              <span _ngcontent-serverapp-c30="" class="heading col-sm-6"
                >Set Up Start:</span
              ><span _ngcontent-serverapp-c30="" class="detail col-sm-6">
                {{ quotedata.varriableInfo?.setUpFromDate }}
                <br _ngcontent-serverapp-c30="" />(Local Time of Event Location)
              </span>
            </div>
            <div _ngcontent-serverapp-c30="" class="text row">
              <span _ngcontent-serverapp-c30="" class="heading col-sm-6"
                >Breakdown Start:</span
              ><span _ngcontent-serverapp-c30="" class="detail col-sm-6">
                {{ quotedata.varriableInfo?.breakDownStartDate }}
                <br _ngcontent-serverapp-c30="" />(Local Time of Event Location)
              </span>
            </div>
          </div>
          <div _ngcontent-serverapp-c30="" class="col-md-6">
            <div _ngcontent-serverapp-c30="" class="text row">
              <span _ngcontent-serverapp-c30="" class="heading col-sm-6"
                >Delivery End:</span
              ><span _ngcontent-serverapp-c30="" class="detail col-sm-6">
                {{ quotedata.varriableInfo?.deliveryEndDate }}
                <br _ngcontent-serverapp-c30="" />(Local Time of Event Location)
              </span>
            </div>
            <div _ngcontent-serverapp-c30="" class="text row">
              <span _ngcontent-serverapp-c30="" class="heading col-sm-6"
                >Set Up End:</span
              ><span _ngcontent-serverapp-c30="" class="detail col-sm-6">
                {{ quotedata.varriableInfo?.setUpToDate }}
                <br _ngcontent-serverapp-c30="" />(Local Time of Event Location)
              </span>
            </div>
            <div _ngcontent-serverapp-c30="" class="text row">
              <span _ngcontent-serverapp-c30="" class="heading col-sm-6"
                >Breakdown End:</span
              ><span _ngcontent-serverapp-c30="" class="detail col-sm-6">
                {{ quotedata.varriableInfo?.breakDownEndDate }}
                <br _ngcontent-serverapp-c30="" />(Local Time of Event Location)
              </span>
            </div>
          </div>
        </div>
        <form _ngcontent-serverapp-c30="" class="w-100" id="purchasedForm">
          <div
            _ngcontent-serverapp-c30=""
            class="form-group col-12"
            id="vendorNotes"
          >
            <label _ngcontent-serverapp-c30="" for="vendorNotes"
              >Vendor Notes*</label
            >
            <div _ngcontent-serverapp-c30="">Test 1 after live push</div>
          </div>
          <div _ngcontent-serverapp-c30="" id="purchasedItems">
            <div
              _ngcontent-serverapp-c30=""
              class="info-section info-table-section"
            >
              <div _ngcontent-serverapp-c30="" class="info-heading">
                Contract Items
              </div>
              <div
                _ngcontent-serverapp-c30=""
                class="
                  table-listing
                  quote-invoice-table
                  mb-4
                  overflow-unset
                  w-100
                "
              >
                <div _ngcontent-serverapp-c30="" class="table-head-wrapper">
                  <div _ngcontent-serverapp-c30="" class="table-head">
                    <div _ngcontent-serverapp-c30="" class="thead-data">
                      Name/Description
                    </div>
                    <div _ngcontent-serverapp-c30="" class="thead-data">
                      Qty*
                    </div>
                    <div _ngcontent-serverapp-c30="" class="thead-data">
                      Price*
                    </div>
                    <div _ngcontent-serverapp-c30="" class="thead-data">
                      Total Price
                    </div>
                  </div>
                </div>
                <div
                  _ngcontent-serverapp-c30=""
                  class="table-body-wrapper mb-0"
                >
                  <div _ngcontent-serverapp-c30="" class="table-body mb-0">
                    <div
                      _ngcontent-serverapp-c30=""
                      class="tbody-data"
                      data-label="Name/Description"
                    >
                      <span _ngcontent-serverapp-c30="" class="heading">{{
                        quotedata.products?.name
                      }}</span
                      ><span _ngcontent-serverapp-c30="" class="des"
                        >{{ quotedata.products?.description }}
                      </span>
                    </div>
                    <div
                      _ngcontent-serverapp-c30=""
                      class="tbody-data"
                      data-label="Qty"
                    >
                      <div _ngcontent-serverapp-c30="">1</div>
                    </div>
                    <div
                      _ngcontent-serverapp-c30=""
                      class="tbody-data"
                      data-label="Price"
                    >
                      <div _ngcontent-serverapp-c30="">
                        ${{ quotedata.products?.price }}
                      </div>
                    </div>
                    <div
                      _ngcontent-serverapp-c30=""
                      class="tbody-data"
                      data-label="Total Price"
                    >
                      ${{ quotedata.products?.price }}
                    </div>
                    <div
                      _ngcontent-serverapp-c30=""
                      class="tbody-data additional-detail"
                    >
                      <div _ngcontent-serverapp-c30="" class="first-level">
                        <span _ngcontent-serverapp-c30="" class="heading"
                          >Additional Details
                          <span _ngcontent-serverapp-c30=""
                            >(Guidelines)</span
                          ></span
                        ><span _ngcontent-serverapp-c30="" class="des">{{
                          quotedata.products?.additionalDetails
                        }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <!---->
              </div>
              <div
                _ngcontent-serverapp-c30=""
                class="additional-column only-view-details"
              >
                <div _ngcontent-serverapp-c30="" class="first-level">
                  &nbsp;
                </div>
                <div _ngcontent-serverapp-c30="" class="second-level">
                  <div _ngcontent-serverapp-c30="" class="col-12">
                    <div _ngcontent-serverapp-c30="" class="text">Labor</div>
                    <div _ngcontent-serverapp-c30="" class="form-group">
                      <label
                        _ngcontent-serverapp-c30=""
                        class="sr-only"
                        for="enterFirstAmount"
                        >Amount</label
                      ><span _ngcontent-serverapp-c30="">0</span>
                    </div>
                  </div>
                  <div _ngcontent-serverapp-c30="" class="col-12">
                    <div _ngcontent-serverapp-c30="" class="text">Delivery</div>
                    <div _ngcontent-serverapp-c30="" class="form-group">
                      <label
                        _ngcontent-serverapp-c30=""
                        class="sr-only"
                        for="enterSecondAmount"
                        >Amount</label
                      >
                      <div _ngcontent-serverapp-c30="">0</div>
                    </div>
                  </div>
                  <div _ngcontent-serverapp-c30="" class="col-12">
                    <div _ngcontent-serverapp-c30="" class="text">Tax</div>
                    <div _ngcontent-serverapp-c30="" class="form-group">
                      <label
                        _ngcontent-serverapp-c30=""
                        class="sr-only"
                        for="enterThirdAmount"
                        >Amount</label
                      ><span _ngcontent-serverapp-c30="">0</span>
                    </div>
                  </div>
                  <!---->
                  <div _ngcontent-serverapp-c30="" class="w-100">
                    <!---->
                    <div _ngcontent-serverapp-c30="" class="w-100">
                      <div
                        _ngcontent-serverapp-c30=""
                        class="col-12 position-relative"
                      >
                        <div _ngcontent-serverapp-c30="" class="form-group">
                          <div _ngcontent-serverapp-c30=""></div>
                        </div>
                        <div _ngcontent-serverapp-c30="" class="form-group">
                          <div _ngcontent-serverapp-c30=""></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!----><!---->
                <div _ngcontent-serverapp-c30="" class="total-container">
                  <div _ngcontent-serverapp-c30="" class="price">Total</div>
                  <div _ngcontent-serverapp-c30="" class="total">
                    ${{ quotedata.products?.price }}
                  </div>
                </div>
                <!---->
                <div _ngcontent-serverapp-c30="" class="total-container">
                  <div _ngcontent-serverapp-c30="" class="price">
                    Grand Total (USD)
                  </div>
                  <div _ngcontent-serverapp-c30="" class="total">
                    ${{ quotedata.products?.price }}
                  </div>
                </div>
                <!---->
              </div>
            </div>
          </div>
        </form>
      </div>
      <div _ngcontent-serverapp-c30="" class="d-flex forBtnBox">
        <button
          _ngcontent-serverapp-c30=""
          class="btn primary btnacc"
          data-html2canvas-ignore="true"
          type="button"
          v-on:click="AcceptQuote"
        >
          Accept
        </button>
        <button
          _ngcontent-serverapp-c30=""
          class="btn primary btnrej"
          data-html2canvas-ignore="true"
          type="button"
          v-on:click="RejectQuote"
        >
          Reject
        </button>
        <button
          _ngcontent-serverapp-c30=""
          class="btn primary btndown"
          data-html2canvas-ignore="true"
          type="button"
        >
          Contact
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Quote",
  data() {
    return {
      quote_id: this.$route.query.id,
      quotedata: {},
      //url:"https://api.myeventbox.com",
      url: "http://localhost:3000",
    };
  },
  async mounted() {
    this.getQuoteData();
    // this.AcceptQuote();
  },
  methods: {
    async AcceptQuote() {
      axios
        .get(this.url + "/common/accept-toolbox/"+this.quote_id)
        .then((result) => {
          alert("Accepted Successfully");
          
          console.log(result.data);
        });
    },
    async RejectQuote() {
      axios
      .get(this.url + "/common/reject-toolbox/"+this.quote_id)
        .then((result) => {
          alert("Rejected Successfully");
          
          console.log(result.data);
        });
    },
    async getQuoteData() {
      //alert(this.quote_id);

      // this.quote_id = "62fd44b0155dfe73bcbfbae9";
      // http://localhost:3000/quotes/62fd44b0155dfe73bcbfbae9
      axios
        .get(this.url + "/quotes/ViewQuote/" + this.quote_id)
        .then((result) => {
          //alert("Got it Successfully");
          this.quotedata = result.data.data;
          console.log(this.quotedata);
        });
    },
  },
};
</script>



<style scoped>
button.btn.primary {
  width: 146px;
  font-size: 20px;
}
button.btn.primary.btnacc {
  color: #fff;
  border-color: transparent;
  background: #5067eb;
}
button.btn.primary.btnrej {
  color: #fff;
  border-color: transparent;
  background: red;
}
button.btn.primary.btndown {
  color: #fff;
  border-color: transparent;
  background: #3f51b5;
}
.d-flex.forBtnBox {
  max-width: 500px;
  align-items: center;
  margin: 0 auto;
  justify-content: space-around;
}
.quote-invoice-header {
  padding-left: 35px;
  padding-right: 35px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px !important;
  padding-top: 30px;
  padding-bottom: 15px;
}
.quote-invoice-image {
  width: 134px;
  height: 68px;
}
img.img-contain {
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
  object-fit: contain;
}
.quote-invoice-text {
  padding-left: 30px;
  text-align: right;
  margin-left: auto;
}
.quote-invoice-text h2 {
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 18px;
}
.quote-invoice-text p {
  font-size: 14px;
  font-weight: 500;
  max-width: 450px;
  margin-bottom: 0;
}
.quote-invoice-text p span {
  font-weight: 700;
}
img.paid-image {
  position: absolute;
  left: 50%;
  margin-left: -115px;
  top: 30px;
  max-width: 230px;
}
.eventBx-body {
  padding-top: 25px;
  padding-bottom: 20px;
  border: 0;
  padding-left: 35px;
  padding-right: 35px;
}
.info-section {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  border-radius: 25px;
  border: 1px solid #ccc;
  padding: 50px 5px 18px;
  margin: 0 15px 33px;
  width: 100%;
}
.invoice-sub-header-detail {
  text-align: right;
  padding-bottom: 70px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  height: 100%;
}
.invoice-sub-header-detail span {
  font-weight: 700;
  text-transform: uppercase;
}
.info-heading {
  background: #fff;
  padding: 5px 15px;
  font-weight: 600;
  color: #5a5a5a;
  text-transform: uppercase;
  position: absolute;
  top: -15px;
  left: 50px;
}
.text {
  font-size: 15px;
  text-align: center;
  display: flex;
  margin-bottom: 12px;
}
span.heading {
  font-weight: 600;
  margin-right: 10px;
  display: flex;
  flex-basis: 40%;
  min-width: 40%;
  justify-content: flex-end;
}
span.detail {
  display: inline-block;
  text-align: left;
  word-break: break-word;
}
.info-section.info-notes .text {
  flex-wrap: wrap;
  margin-bottom: 30px;
}
.info-section.info-notes .text .heading {
  flex-basis: 100%;
  min-width: 100%;
  justify-content: flex-start;
  margin-right: 0;
  margin-bottom: 8px;
}
.table-listing {
  overflow-y: auto;
  min-height: 203px;
  margin: 0;
}
.overflow-unset {
  overflow: unset !important;
}
.table-head-wrapper {
  min-width: 100%;
  display: flex;
  flex-direction: column;
}
.table-head {
  display: flex;
  padding: 0 20px 0 10px;
}
.table-listing.quote-invoice-table .tbody-data:nth-child(1),
.table-listing.quote-invoice-table .thead-data:nth-child(1) {
  width: 60%;
}
.thead-data {
  font-size: 15px;
  font-weight: 600;
  color: #000 !important;
}
.table-listing.quote-invoice-table .tbody-data:nth-child(2),
.table-listing.quote-invoice-table .tbody-data:nth-child(3),
.table-listing.quote-invoice-table .thead-data:nth-child(2),
.table-listing.quote-invoice-table .thead-data:nth-child(3) {
  width: 13%;
}
.quote-invoice-table .thead-data {
  font-size: 15px;
  font-weight: 600;
  color: #000 !important;
}
.tbody-data[_ngcontent-serverApp-c8],
.thead-data[_ngcontent-serverApp-c8] {
  font-size: 13px;
  font-weight: 500;
  width: 20%;
  padding: 10px 0 15px 10px;
  word-wrap: break-word;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
}
.table-body-wrapper.mb-0 {
  min-width: 100%;
  display: flex;
  flex-direction: column;
}
.quote-invoice-table .table-body {
  flex-wrap: wrap;
  border: 1px dashed #979797;
  background-color: #f6f6f6;
  border-radius: 0;
}
.table-body {
  display: flex;
  border-radius: 5px;
  box-shadow: 1px 5px 15px 1px rgb(135 135 135 / 7%);
  border: 1px solid rgba(226, 226, 226, 0.5);
  background-color: #fff;
  margin-bottom: 12px;
  padding: 19px 20px 19px 10px;
}
.quote-invoice-table .tbody-data span {
  display: block;
  margin-bottom: 10px;
  color: #000;
  font-weight: 600;
  font-size: 15px;
}
.quote-invoice-table .tbody-data .heading span {
  font-style: italic;
  font-weight: 400;
  display: inline-block;
}
.table-body .tbody-data {
  padding: 0 0 0 10px;
  flex-wrap: wrap;
}
.additional-column.only-view-details {
  width: 100%;
}
.additional-column {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.first-level {
  display: flex;
  width: 60%;
  flex-wrap: wrap;
  padding: 0 5% 0 20px;
  flex-direction: column;
}
.second-level {
  display: flex;
  width: 40%;
  flex-wrap: wrap;
  padding: 0 70px 0 15px;
}
.second-level .text {
  min-height: 45px;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.57;
  color: #111210;
}
.second-level .form-group {
  width: 48%;
  position: relative;
  margin-bottom: 24px;
}
.form-group label {
  font-size: 15px;
  margin-bottom: 11px;
  display: inline-block;
}
.form-group label {
  font-size: 15px;
  margin-bottom: 11px;
  display: inline-block;
}
.total-container .price {
  display: flex;
  width: 78%;
  padding-right: 10px;
  align-items: center;
  justify-content: flex-end;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
}
.total-container {
  border-top: 1px solid #ccc;
  padding: 21px 70px 22px;
  display: flex;
  width: 100%;
}
.total-container .total {
  display: flex;
  width: 22%;
  align-items: center;
  justify-content: flex-end;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.38;
  color: #111210;
}
.total-container .total {
  display: flex;
  width: 22%;
  align-items: center;
  justify-content: flex-end;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.38;
  color: #111210;
}
.second-level .col-12 {
  padding: 0;
  display: flex;
  justify-content: space-between;
}
.quote-invoice-table .additional-detail {
  margin-top: 20px;
  width: 100%;
}
</style>