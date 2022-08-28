<template>

  <div id="app">
    <button @click="increase">Click Me</button>
    <p>{{counter}}</p>


    <LazyComponent/>


  </div>

</template>

<script>
import LazyComponent from "@/components/LazyComponent";
export default {
  name: "Default",
  components: {LazyComponent},
  data() {
    return {
      counter: 0,
      message: "hallos",
    }
  },
  methods: {
    increase() {
      this.counter ++
    },
  }
}
</script>

<style scoped>
button {
  width: 200px;
  height: 30px;
}

</style>