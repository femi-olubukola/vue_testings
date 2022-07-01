<template>
  <div>
<!--    <Testing/>-->

    <div class="mt-12">
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
  </div>

</template>

<script>
// @ is an alias to /src
// import Testing from '@/components/Testing.vue'
import About from "@/views/About";

export default {
  name: 'Home',
  components: {
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
  /*margin-top: -20px;*/
}

</style>
