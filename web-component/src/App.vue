<template>
  <v-app dark>
    <v-navigation-drawer persistent
                         :mini-variant="miniVariant"
                         :clipped="clipped"
                         v-model="drawer"
                         enable-resize-watcher>

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

      <v-footer fixed="true"
                absolute="true"
                class="mt-2 mb-3">
        <form @submit.prevent="askQuestion()"
              class="questionForm">
          <v-text-field v-model="question"
                        hint="Ask a question"
                        append-icon="send"
                        @input="typingQuestion()">
          </v-text-field>
        </form>
      </v-footer>
    </v-navigation-drawer>

    <main>
      <v-layout column
                align-center>
        <v-avatar size="240px"
                  class="mb-5"
                  tile="true">
          <img :src="claudioImage">
        </v-avatar>
        <blockquote>
          Hello there, I'm here to help.<br/> Be my guest!
          <footer>
            <small>
              <em>&mdash; Claudio l'Ornytho</em>
            </small>
          </footer>
        </blockquote>
      </v-layout>
    </main>
  </v-app>
</template>

<script>

export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      miniVariant: false,
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
      this.claudioImage = '/static/claudio-talking.gif'

      // And get back to normal state
      setTimeout(this.sayHello, 4000)
    },
    sayHello() {
      this.claudioImage = '/static/claudio-hello.gif'
    }
  }
}
</script>

<style>
.navigation-drawer {
  width: 500px;
}

.footer {
  background: transparent !important;
}

.questionForm {
  width: 100%;
}

main {
  padding-left: 500px !important;
}
</style>
