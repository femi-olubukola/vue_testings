<template>
  <div class="text-center">
    <v-rating
        v-model="rating"
        background-color="purple lighten-3"
        color="green"
        size="6"
    ></v-rating>
    <v-rating
        v-model="rating"
        background-color="purple lighten-3"
        color="green"
        x-small
    ></v-rating>
    <v-rating
        v-model="rating"
        background-color="purple lighten-3"
        color="purple"
        small
    ></v-rating>
    <v-rating
        v-model="rating"
        background-color="pink lighten-3"
        color="pink"
    ></v-rating>
    <v-rating
        v-model="rating"
        background-color="green lighten-3"
        color="green"
        large
    ></v-rating>
    <v-rating
        v-model="rating"
        background-color="red lighten-3"
        color="red"
        x-large
    ></v-rating>
    <v-rating
        v-model="rating"
        background-color="indigo lighten-3"
        color="indigo"
        size="64"
    ></v-rating>
  </div>
</template>

<script>
export default {
  name: "Ratings",
  data() {
    return {
      rating: 4,
    }
  }
}
</script>

<style scoped>

</style>