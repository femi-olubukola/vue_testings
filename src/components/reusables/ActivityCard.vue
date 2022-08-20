<template>
  <div>
<!--    <div @click='gotoActivity(file)' :class='file.is_complete?"colored":""' class='tw-flex tw-justify-between tw-flex-wrap align-center tw-py-2'>-->
      <div>
        <div class='act tw-flex align-center'>
<!--          <div><h3 class='font-weight-bold tw-mr-2'>{{ types[file.file_type] }}: </h3>-->
          </div>
          <div>
<!--            <small class='tw-pt-1'> {{ file.title }}</small>-->
          </div>
        </div>
        <div class='time align-center tw-flex tw-py-2'>
<!--          <vue-feather style='width: 17px' class='mr-3' type='clock' />-->
          <div>
<!--            <span class='tw-pt-2'>{{ file.duration }} mins</span>-->
          </div>
        </div>
      </div>

<!--      <div v-if='file.is_complete'>-->
<!--        <v-avatar style='  background: #F0FFF7;border: 1px solid #0BCA7A; border-radius: 30px;'-->
<!--                  class='tw-ml-3'-->
<!--                  size='20'>-->
<!--          <vue-feather type='check' style='width: 13px;color: #0BCA7A' />-->
<!--        </v-avatar>-->

<!--      </div>-->




<!--      <div v-else @click='gotoActivity(file)'>-->

<!--        <div v-if='file.file_type === "video"'>-->
<!--          <v-btn icon>-->
<!--            <vue-feather style='width: 17px' class='mr-3' type='video'/>-->
<!--          </v-btn>-->
<!--        </div>-->

<!--        <div v-else-if='file.file_type === "audio"'>-->
<!--          <v-btn icon>-->
<!--            <vue-feather style='width: 17px' class='mr-3' type='mic'/>-->
<!--          </v-btn>-->
<!--        </div>-->

<!--        <div v-else-if='file.file_type ===  "pdf" || "doc" || "rich_text" || "text"'>-->
<!--          <v-btn icon>-->
<!--            <vue-feather style='width: 17px' class='mr-3' type='book-open'/>-->
<!--          </v-btn>-->
<!--        </div>-->

<!--        <div v-else-if='file.file_type === "quiz"'>-->
<!--          <v-btn icon>-->
<!--            <vue-feather style='width: 17px' class='mr-3' type='grid'/>-->
<!--          </v-btn>-->
<!--        </div>-->

<!--        <div v-else-if='file.file_type === "image"'>-->
<!--          <v-btn icon>-->
<!--            <vue-feather style='width: 17px' class='mr-3' type='image'/>-->
<!--          </v-btn>-->
<!--        </div>-->

<!--        <div v-else-if='file.next=false'>-->
<!--          <v-btn depressed :width='$vuetify.breakpoint.mobile?"100%":"auto"'>continue </v-btn>-->
<!--        </div>-->

<!--        &lt;!&ndash;        <div v-else='file.next'>&ndash;&gt;-->
<!--        &lt;!&ndash;          <base-button depressed :width='$vuetify.breakpoint.mobile?"100%":"auto"' button-text='Resume Learning' />&ndash;&gt;-->
<!--        &lt;!&ndash;        </div>&ndash;&gt;-->
<!--      </div>-->

<!--    </div>-->
<!--    <v-divider class='tw-py-4' />-->
<!--  </div>-->
</template>

<script>
export default {
  name: 'ActivityCard',
  components: { },
  props: {
    file: [Object],
    index:[String,Number]
  },
  methods:{
    // gotoActivity(data){
    //   let c_id = this.$route.query.course
    //   let cl_id = this.$route.query.class
    //   let s_id = this.$route.query.session
    //   let m_id = this.$route.query.module
    //   let course_name = sessionStorage.getItem('course_name')
    //   let module_name = sessionStorage.getItem('module_name')
    //   this.$router.push({name:'workspace-learn',query:{module:m_id,module_name:module_name,course:c_id,course_name:course_name,session:s_id,learning_activity:data.id,class:cl_id,program:this.$route.query.program,counter:this.index}})
    // }
  },
  data() {
    return {
      types: {
        image: 'Image',
        video: 'Video',
        doc: 'Reading',
        quiz: 'Quiz',
        audio: 'Audio',
        text: 'Reading',
        ppt: 'Presentation',
        pdf: 'Reading',
        rich_text:'Reading'
      }
    }
  }


}
</script>

<style scoped lang='scss'>
.colored {
  color: #008EEF !important;
}

.time {
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 140%;
  letter-spacing: 0.01em;
}

.learn {
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;

  /* Enum-Grey/1 */

  color: #1E323F;

}

.act {
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 140%;
}

.icon {
  width: 40px;
  height: 40px;
  background: #F7FCFF;
  border: 1px solid #D0DCE4;
  box-sizing: border-box;
  border-radius: 5px;
}

.card {
  background: #FBFBFB !important;
  border-radius: 4px;
}

.title {
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: #1E323F;
  @media screen and (max-width: 760px) {
    font-size: 10px;
    font-weight: 500;
    line-height: 20px;
  }
}

.completeStyle {
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 140%;
  color: #475661;
  width: 9rem;
  background: #F0FFF7;
  border: 1px solid #0BCA7A;
  box-sizing: border-box;
  border-radius: 8px;
}

.incomplete {
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 140%;
  width: 9.5rem;
  color: #475661;
  background: #FFFFFF;
  border-radius: 8px;
  border: 2px solid #D0DCE4;
  box-sizing: border-box;
}

.course {
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #000000;
}
</style>