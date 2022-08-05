<template>
  <div class="tw-mb-32">
    <v-app-bar style='background-color: white; box-shadow: 0px 2px 16px #F0F9FF !important;' color="white" fixed elevation="1" height="76">
      <v-app-bar-nav-icon/>
      <v-app-bar-title class="tw-pl-5">
        header
      </v-app-bar-title>

      <v-spacer/>

      <div class="text-center tw-pr-3">
        <v-badge
            bordered
            color="error"
            icon="mdi-lock"
            overlap>
<!--          <v-hover v-model="hover">-->
            <v-icon
                color="grey lighten-1"
                large
            >
              mdi-account
            </v-icon>
<!--          </v-hover>-->
        </v-badge>
      </div>

      <div>
        <v-badge
            :value="hover"
            color="deep-purple accent-4"
            content="9999+"
            right
            transition="slide-x-transition">
          <v-hover v-model="hover">

            <div @click="dropDown" class="tw-pr-5">
              chuLOrd
            </div>

          </v-hover>

        </v-badge>
      </div>


    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      hover: false,
    }
  }
}
</script>

<style scoped>

.v-application .elevation-1 {
  box-shadow: 0px 2px 16px #F0F9FF !important;
}

</style>