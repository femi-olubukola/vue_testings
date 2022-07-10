<template>
  <div class="text-center">
    <v-progress-circular
        :size="50"
        color="primary"
        rotate="10"
    ></v-progress-circular>

    <v-progress-circular
        :width="3"
        color="red"
    ></v-progress-circular>

    <v-progress-circular
        :size="100"
        :width="7"
        color="purple"
    ></v-progress-circular>

    <v-progress-circular
        :width="3"
        color="green"
    ></v-progress-circular>

    <v-progress-circular
        :size="50"
        color="amber"
    ></v-progress-circular>
  </div>
</template>

<script>
export default {
  name: "CircularProgress"
}
</script>

<style scoped>

v-progress-circular {
  margin: 1rem;
}

</style>