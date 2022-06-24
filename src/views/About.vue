<template>
    <v-dialog
        v-model="dialog"
        max-width="631"
        transition="dialog-top-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card class="p-8">
        <div>
        <div class="tw-justify-between tw-items-center d-flex mb-3">
        <v-card-title class="createAFolder">
          Create a Folder
        </v-card-title>

          <v-spacer/>

          <v-icon class="mr-5" @click="dialog=false">mdi-window-close</v-icon>
        </div>

        <div class="folderName justify-start d-flex pl-4 mb-1">Folder name</div>

        <v-text-field class="folderNameField px-4" solo hide-details style="padding-top:8px" placeholder="Type Folder name here"></v-text-field>



        <div>
          <v-spacer/>

          <div class="tw-justify-end align-end d-flex">
            <v-btn>Cancel</v-btn>
            <v-btn>Create Folder</v-btn>
          </div>
        </div>

        <v-card-actions>
          <v-spacer></v-spacer>
<!--          <v-btn-->
<!--              color="green darken-1"-->
<!--              text-->
<!--              @click="dialog = false"-->
<!--          >-->
<!--            Disagree-->
<!--          </v-btn>-->
<!--          <v-btn-->
<!--              color="green darken-1"-->
<!--              text-->
<!--              @click="dialog = false"-->
<!--          >-->
<!--            Agree-->
<!--          </v-btn>-->
        </v-card-actions>
        </div>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
    }
  },
}
</script>


<style>


</style>
