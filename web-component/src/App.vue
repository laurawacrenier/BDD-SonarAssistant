<template>
  <v-app dark>
    <v-toolbar app
               fixed
               clipped-left>
      <v-toolbar-title>Claudio l'Ornytho</v-toolbar-title>
    </v-toolbar>

    <main>
      <v-content>
        <v-layout row>
          <v-flex xs8>

            <template v-for="(item, index) in items">
              <v-container fluid
                           grid-list-lg
                           v-bind:key="item">
                <v-layout row>
                  <v-flex v-if="item.who=='bot'"
                          xs2>
                    <v-avatar>
                      <img src="/static/claudio-avatar-60x60.png">
                    </v-avatar>
                  </v-flex>
                  <v-flex xs10>
                    <v-card v-bind:key="item"
                            class="ma-2 grey darken-2">
                      <v-card-title>
                        {{ item.message }}
                      </v-card-title>
                      <v-card-title v-if="item.url != null">
                        You can read more about that on the
                        <a :href="item.url"
                           target="_blank">official documentation</a>.
                      </v-card-title>
                    </v-card>
                  </v-flex>
                  <v-flex v-if="item.who=='me'"
                          xs2>
                    <v-avatar>
                      <img src="https://secure.gravatar.com/avatar/3bee1367bdf28d58f7c4527f6a84ca33.jpg">
                    </v-avatar>
                  </v-flex>
                </v-layout>
              </v-container>
            </template>

          </v-flex>

          <v-flex xs4>
            <div style="width: 100%; text-align: center">
              <v-avatar size="300px"
                        class="mb-5"
                        tile="true">
                <img :src="claudioImage">
              </v-avatar>
            </div>
          </v-flex>
        </v-layout>
      </v-content>
    </main>

    <v-footer app
              fixed>
      <v-layout row>
        <v-flex xs4>
        </v-flex>
        <v-flex xs8>
          <form @submit.prevent="askQuestion()"
                class="questionForm">
            <v-text-field v-model="question"
                          hint="Ask a question"
                          append-icon="send"
                          @input="typingQuestion()">
            </v-text-field>
          </form>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      question: '',
      claudioImage: '/static/claudio-hello.gif',
      items: [
        {
          who: 'bot',
          message: 'Hey there, how can I help you?'
        }
      ]
    }
  },
  methods: {
    askQuestion() {
      if (this.items.length === 1) {
        this.items = []
      } else if (this.items.length === 4) {
        this.items.splice(0, 2)
      }
      // Display my question
      this.items.push({ who: 'me', message: this.question })
      this.claudioImage = '/static/Claudio-Thinking.gif'

      // And wait for the answer
      setTimeout(this.giveAnswer, 2000)
    },
    typingQuestion() {
      this.claudioImage = '/static/Claudio-Waiting.gif'
    },
    giveAnswer() {
      // Get the answer
      let answer = this.$bot.answerQuestion(this.question)
      // And display it
      this.items.push({
        who: 'bot',
        message: answer.msg,
        url: answer.url
      })

      // manage the mood
      this.claudioImage = this.getPicForMood(answer.mood)

      // And get back to normal state
      setTimeout(this.sayHello, 10000)
    },
    sayHello() {
      this.claudioImage = '/static/claudio-hello.gif'
    },
    getPicForMood(mood) {
      switch (mood) {
        case 'angry': return '/static/Claudio-Angry.gif'
        case 'laugh': return '/static/Claudio-Laughing.gif'
        case 'dance': return '/static/Claudio-Dancing.gif'
        case 'happy': return '/static/Claudio-Dancing.gif'
        default: return '/static/claudio-talking.gif'
      }
    }
  }
}
</script>

<style>
.footer {
  height: 80px;
}
</style>
