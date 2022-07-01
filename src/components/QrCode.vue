<template>
  <v-app>
  <div>
    <div class="background">
      <div class="holder tw-flex tw-justify-center align-center tw-m-auto">

        <div class="secondBackground  tw-w-80  ">
          <div class="imgBarcode tw-w-72 tw-mb-32 tw-m-auto tw-mt-4">
            <v-img :src="barCode" style="border-radius: 20px"> </v-img>
          </div>

          <div class=" ">

            <div class="bigText tw-w-full">
              Improve your front-end <br/>
              skills by building projects
            </div>

            <div class="smallText tw-w-72 tw-pl-4 tw-mt-4">
              Scan the QR code to visit Frontend
              Mentor and take your coding skills to <br/>
              the next level
            </div>
          </div>

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
  /*width: 290px;*/
  height: 500px;
  background-color: #FFFFFF;
  border-radius: 20px;
  /*position: center;*/
}

.imgBarcode {
  /*width: 288px;*/
  /*height: 288px;*/
  /*border-radius: 20px;*/
}

.bigText {
  margin-top: -100px;
}

.holder {
  height: 100%;
}

.bigText {
  /*font-style: "Outfit", sans-serif;*/
  font-weight: 700;
  font-size: 22px;
  @import url('https://fonts.google.com/specimen/Outfit');
  font-family: "Outfit", sans-serif;
  font-style: normal;
}

.smallText {
  font-weight: 400;
  @import url('https://fonts.google.com/specimen/Outfit');
  font-family: "Outfit", sans-serif;
  color: #769ECB;
}

</style>