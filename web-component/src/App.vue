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
                      class="ma-2">
                <v-card-title>
                  {{ item.message }}
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
                        append-icon="send">
          </v-text-field>
        </form>
      </v-footer>
    </v-navigation-drawer>

    <main>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <v-layout column
                    align-center>
            <v-avatar size="240px"
                      class="mb-5"
                      tile="true">
              <img src="/static/hello.gif">
            </v-avatar>
            <blockquote>
              Hello there, I'm here to help.<br/> Be my guest!
              <footer>
                <small>
                  <em>&mdash;Claudio l'ornytho</em>
                </small>
              </footer>
            </blockquote>
          </v-layout>
        </v-slide-y-transition>
      </v-container>
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
      this.items.push({ who: 'me', message: this.question })
      this.items.push({ who: 'bot', message: this.$bot.answerQuestion(this.question) })
    }
  }
}
</script>

<style>
.navigation-drawer {
  width: 400px;
}

.footer {
  background: transparent !important;
}

.questionForm {
  width: 100%;
}

.divider--inset {
  margin-left: 72px;
  margin-right: 72px;
  width: calc(100% - 72px - 72px);
}
</style>
