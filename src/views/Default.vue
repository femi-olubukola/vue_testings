<template>

  <div id="app">
    <button @click="increase">Click Me</button>
    <p>{{counter}}</p>
  </div>

</template>

<script>
export default {
  name: "Default",
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