<template>
  <div>
<!--    <v-dialog :fullscreen="$vuetify.breakpoint.mobile" v-model="comment" max-width="689">-->
      <v-card class="commentCard px-6 py-6">
        <div class='tw-flex tw-mb-6'>
          <div>
            <h3>Comments</h3>
          </div>
          <v-spacer/>
          <div @click="$emit('close-submit')">
<!--            <vue-feather type="x" class='tw-pt-1'/>-->
            <v-icon class='tw-pt-1'>
              mdi-close
            </v-icon>
          </div>
        </div>

        <div v-for='(item,i) in items' :key='i'>

          <div class='tw-flex'>
            <div class='tw-w-8 tw-h-8'>
              <v-avatar rounded>
                <img :src="item.image"  alt=''/>
              </v-avatar>
            </div>

            <div class='name tw-pl-8 tw-mt-3'>
              <h5>{{item.name}}</h5>
            </div>
          </div>

          <div class='comment-body tw-mt-6 tw-mb-6'>
            <div class='comment-text px-4 my-4'>
              <h6>{{item.comment}}</h6>
              <span>{{item.date}}</span>
            </div>
          </div>

        </div>

      </v-card>
<!--    </v-dialog>-->
  </div>
</template>
<script>
export default {
  name: 'CommentsSection',
  data() {
    return {
      items: [{
        image: require('@/assets/logo.svg'),
        name: 'Ade Johnson',
        comment: 'I really like how engaging this classroom is. The instructors have made all the necessary resources available and we just have to go through them.',
        date: 'Dec. 12, 2021. 9am',
      },
        {
          image: require('@/assets/logo.svg'),
          name: 'Ade Johnson',
          comment: 'I really like how engaging this classroom is. The instructors have made all the necessary resources available and we just have to go through them.',
          date: 'Dec. 12, 2021. 9am',
        },
        {
          image: require('@/assets/logo.svg'),
          name: 'Onowomano',
          comment: 'I really like how engaging this classroom is. The instructors have made all the necessary resources available and we just have to go through them.',
          date: 'Dec. 12, 2021. 9am',
        }]
    }
  },

  props: {
    comment: [Boolean],
  }
}
</script>

<style scoped>

h5 {
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  color: #001343;
}

h3 {
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 31px;
  letter-spacing: -0.02em;
  color: #1E323F;
}

h6 {
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #475661;
}

span {
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #9CABB5;
}

.comment-body {
  background: #FFFFFF;
  border: 1px solid #D0DCE4;
  border-radius: 8px;
}
</style>