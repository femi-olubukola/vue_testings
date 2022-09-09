<template>
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>A First App</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
  <div id="app">
    <div>
      <label for="goal">My Goals</label>
      <input v-on:keyup.enter="addGoal" type="text" id="goal" v-model="enteredValue" />
      <button v-on:click="addGoal" style="color: #42b983">Add Goal</button>
      <!--      <v-btn icon depressed v-on:click="clearGoals" v-on:keyup.enter="clearGoals" class="justify-end">-->
      <!--        <v-icon>mdi-close</v-icon>-->
      <!--      </v-btn>-->
    </div>

    <ul>
      <li v-for="(goal, i) in goals" :key="i">
        {{ goal }}
      </li>
    </ul>

    <v-btn text depressed v-on:click="clearGoals" style="color: #ec3169" class="justify-end text-capitalize">
      clear goals
    </v-btn>
  </div>
  </body>
  </html>
</template>

<script>
export default {
  name: "Module1",
  data() {
    return {
      goals: [],
      enteredValue: '',
    }
  },

  methods : {
    addGoal () {
      this.goals.push(this.enteredValue)
      this.enteredValue = ''
    },

    clearGoals () {
      // this.goals.clear()
      this.goals = []
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

#app {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

label, input {
  margin-bottom: 0.5rem;
  display: block;
  width: 100%;
}

label {
  font-weight: bold;
}

ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}

li {
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid #ccc;
}
</style>