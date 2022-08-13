<template>

  <v-dialog persistent width="367" v-model="deleteAdmin">
    <v-card>
      <v-card-title class="justify-space-between">
        <h4 class="deleteText">{{title}}</h4>
        <v-btn icon @click="$emit('close')">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="tw-mt-4">
        <h6 class="cardText">{{message}}</h6>

        <div class="tw-flex justify-space-between tw-mt-3">
          <v-btn large text style="color: black" class="text-capitalize" @click="$emit('close')">Cancel</v-btn>
          <v-btn large style="background-color: #FF2E2E; color: white; border-radius: 12px" class="text-capitalize" @click="$emit('delete')" :loading="buttonLoading">Delete</v-btn>
        </div>

      </v-card-text>

    </v-card>
  </v-dialog>
</template>

<script>

export default {
  name: "DeleteModal",
  components: {},
  props: {
    buttonLoading: Boolean,
    deleteAdmin: Boolean,
    title: {
      type: String,
      default: 'Remove Admin'
    },
    message: {
      type: String,
      default: 'Deleting this Admin cannot be undone, but if you really want to, proceed by clicking the delete button.'
    }
  },

}
</script>

<style scoped>

.deleteText {
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 31px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  color: #1E323F;
}

.cardText {
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #475661;
}
</style>