<template>
  <v-app>
  <div>
    <div class="background">
      <div class="secondBackground tw-flex tw-justify-center tw-items-center align-center">
        <div class="imgBarcode tw-h-72 tw-w-72">
          <v-img :src="barCode"> </v-img>
        </div>

      </div>
    </div>
  </div>
  </v-app>
</template>

<script>
export default {
  name: "QrCode",

  data () {
    return {
      barCode: require('@/assets/image-qr-code.png')
    }
  }
}
</script>

<style scoped>

.background {
  background-color: #D4E1EF;
  /*background-repeat: no-repeat;*/
  /*background-size: cover;*/
  height: 100vh;
  /*background-position:center;*/
}

.secondBackground {
  width: 290px;
  height: 450px;
  background-color: #FFFFFF;
  border-radius: 20px;
  position: center;
}

.imgBarcode {
  width: 288px;
  height: 288px;
}

</style>