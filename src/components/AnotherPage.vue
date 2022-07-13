<template>

  <div class="tw-items-center">
    Another Page

    <div>
      <h5 class="instruction tw-mt-16 tw-mb-5">Blah Instruction</h5>

      <ul v-for="(instruction,index) in instructions" :key="index">
        <li>{{ instruction }}</li>
      </ul>
    </div>

    <div class="tw-mt-10">
      <CustomChipList/>
    </div>

    <div class="tw-mt-20">
      <Ratings/>
    </div>
  </div>
</template>

<script>
import CustomChipList from "@/components/CustomChipList";
import Ratings from "@/components/reusables/Ratings";
export default {
  name: "AnotherPage",
  components: {Ratings, CustomChipList},
  data() {
    return {
      instructions: {
        first_instruction: 'Make sure you have a stable internet connection before you start.',
        second_instruction: 'Once you begin, you cannot go back as you would be forced to submit.',
        third_instruction: 'Once you have submitted an answer, you can’t go back.',
        fourth_instruction: 'You may exit the test, but the timer will continue to run.',
        fifth_instruction: 'You will see a time notice when you have 10 minutes left for the test.',
        sixth_instruction: 'If the test can be retaken, your latest score will be the score used.'
      },
    }
  },
}
</script>

<style scoped>

</style>