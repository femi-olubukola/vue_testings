<template>
  <div>

    <div>
      <Header/>
    </div>
<!--    <Testing/>-->

    <div class="tw-flex tw-items-end tw-justify-end tw-w-32">
      <v-col cols="12" md="1"></v-col>
      <v-text-field
          class="flex justify-end align-end"
          label="Search"
          solo
      ></v-text-field>
    </div>

    <div class="tw-mt-12">
    <v-row no-gutters>
      <v-col cols="12" md="2"></v-col>
    <v-btn @click="naviGate" outlined style="border-radius: 12px; background-color: bisque; color: gray">Navigate</v-btn>
    </v-row>
    </div>

    <div>
      <TimePicker/>
    </div>

    <div class="mb-4">
      <v-row no-gutters>
        <v-col cols="12" md="9"></v-col>
        <v-btn text @click="qrCode" style=" color: mediumvioletred">View QR</v-btn>
      </v-row>
    </div>

    <About :openDialog="dialog" @close="dialog=false"/>

    <div>
      <overlay-with-loader/>
    </div>

    <div class="tw-mt-20">
      <CircularProgress/>
      <SnackBar/>
    </div>

    <DeleteModal :deleteAdmin="deleteAdmin" @close="deleteAdmin=false" :button-loading="buttonLoading" @delete="removeAdmin"></DeleteModal>
    <DeleteModal title="Remove Instructor" :message="message" :deleteAdmin="deleteAdmin" @close="deleteAdmin=false" :button-loading="buttonLoading" @delete="removeInstructor"></DeleteModal>


    <div class="footer">
      <Footer/>
    </div>


  </div>


</template>

<script>
// @ is an alias to /src
// import Testing from '@/components/Testing.vue'
import About from "@/views/About";
import Header from "@/components/reusables/Header";
import Footer from "@/components/reusables/Footer";
import CircularProgress from "@/components/reusables/CircularProgress";
import SnackBar from "@/components/reusables/SnackBar";
import OverlayWithLoader from "@/components/reusables/overlay-with-loader";
import TimePicker from "@/components/reusables/TimePicker";
import DeleteModal from "@/components/reusables/DeleteModal";

export default {
  name: 'Home',
  components: {
    DeleteModal,
    TimePicker,
    OverlayWithLoader,
    SnackBar,
    CircularProgress,
    Footer,
    Header,
    // Testing,
    About,
  },
  data () {
    return {
      buttonLoading: false,
      deleteAdmin: false,
      message: 'Deleting this Instructor cannot be undone, but if you really want to, proceed by clicking the delete button.',

    }
  },

  methods: {
    naviGate(){
      this.$router.push({name:'AnotherPage'})
    },

    qrCode() {
      this.$router.push({name:'QrCode'})
    }
  }
}
</script>

<style scoped>

.mb-4 {
  margin-top: -20px;
}

/*.footer {*/
/*  position: absolute;*/
/*  bottom: 0;*/
/*}*/

</style>
