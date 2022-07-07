<template>
  <div>

    <div>
      <Header/>
    </div>
<!--    <Testing/>-->

    <div class="tw-mt-12">
    <v-row no-gutters>
      <v-col cols="12" md="2"></v-col>
    <v-btn @click="naviGate" outlined style="border-radius: 12px; background-color: bisque; color: gray">Navigate</v-btn>
    </v-row>
    </div>

    <div class="mb-4">
      <v-row no-gutters>
        <v-col cols="12" md="9"></v-col>
        <v-btn text @click="qrCode" style=" color: mediumvioletred">View QR</v-btn>
      </v-row>
    </div>

    <About :openDialog="dialog" @close="dialog=false"/>

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

export default {
  name: 'Home',
  components: {
    Footer,
    Header,
    // Testing,
    About,
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
