<template>
  <div>
    <Testing/>

    <v-row no-gutters>
      <v-col cols="12" md="2"></v-col>
    <v-btn @click="naviGate">Navigate</v-btn>
    </v-row>

    <About :openDialog="dialog" @close="dialog=false"/>
  </div>

</template>

<script>
// @ is an alias to /src
import Testing from '@/components/Testing.vue'
import About from "@/views/About";

export default {
  name: 'Home',
  components: {
    Testing,
    About,
  },
  methods: {
    naviGate(){
      this.$router.push({name:'Testing'})
    }
  }
}
</script>
