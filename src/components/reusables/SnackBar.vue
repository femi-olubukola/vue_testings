<template>
  <div class="text-center">
    <v-btn
        dark
        color="orange darken-2"
        @click="snackbar = true"
    >
      Open Snackbar
    </v-btn>

    <v-snackbar
        v-model="snackbar"
        :timeout="timeout"
        top
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
            color="blue"
            text
            v-bind="attrs"
            @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "SnackBar",
  data: () => ({
    snackbar: false,
    text: 'blah blah blahhh',
    timeout: 2000,
  }),
}
</script>

<style scoped>

</style>