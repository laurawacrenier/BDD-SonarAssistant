<template>
  <v-app dark>
    <v-navigation-drawer persistent
                         :mini-variant="miniVariant"
                         :clipped="clipped"
                         v-model="drawer"
                         enable-resize-watcher>
      <v-list two-line
              dark>
        <template v-for="(item, index) in items">
          <v-divider v-if="index > 0"
                     :inset="true"
                     :key="index"></v-divider>
          <v-list-tile avatar
                       v-bind:key="item.title">
            <v-list-tile-avatar v-if="item.who=='bot'">
              <img src="/static/claudio-avatar-60x60.png">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title v-html="item.message"></v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-avatar v-if="item.who=='me'">
              <img src="https://secure.gravatar.com/avatar/3bee1367bdf28d58f7c4527f6a84ca33.jpg">
            </v-list-tile-avatar>
          </v-list-tile>
        </template>
      </v-list>
      <v-footer fixed="true"
                class="mt-2 mb-3">
        <v-text-field v-model="question"
                      hint="Ask a question"
                      append-icon="send">
        </v-text-field>
      </v-footer>
    </v-navigation-drawer>

    <main>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <v-layout column
                    align-center>
            <v-avatar size="240px" class="mb-5">
              <img src="/static/claudio-avatar-60x60.png">
            </v-avatar>
            <blockquote>
              Hello there, I'm here to help.<br/> Be my guest!
              <footer>
                <small>
                  <em>&mdash;Claudio</em>
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
        { who: 'bot', message: 'I will be in your neighborhood doing errands this weekend. Do you want to hang out?' },
        { who: 'me', message: 'Wish I could come, but I am out of town this weekend.' },
        { who: 'bot', message: 'Do you have Paris recommendations? Have you ever been?' }
      ]
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

.divider--inset {
  margin-left: 72px;
  margin-right: 72px;
  width: calc(100% - 72px - 72px);
}
</style>
