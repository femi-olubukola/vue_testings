<template>
  <div class="tw-mb-32">
    <v-app-bar style='background-color: white; box-shadow: 0px 2px 16px #F0F9FF !important;' color="white" fixed elevation="1" height="76">
      <v-app-bar-nav-icon/>
      <v-app-bar-title class="tw-pl-5">
        header
      </v-app-bar-title>

      <v-spacer/>

      <div @click="dropDown" class="tw-pr-7">
        HHHHH
      </div>

    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

.v-application .elevation-1 {
  box-shadow: 0px 2px 16px #F0F9FF !important;
}

</style>