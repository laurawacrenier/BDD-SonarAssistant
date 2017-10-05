<template>
  <v-app dark>
    <v-navigation-drawer persistent
                         :mini-variant="miniVariant"
                         :clipped="clipped"
                         v-model="drawer"
                         enable-resize-watcher>
      <v-footer fixed="true"
                class="mt-2 mb-3">
        <v-text-field 
                      v-model="question"
                      hint="Ask a question"
                      append-icon="send"></v-text-field>
      </v-footer>
    </v-navigation-drawer>
    <main>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <v-layout column
                    align-center>
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
      question: ''
    }
  }
}
</script>

<style>
.footer {
  background: transparent !important;
}
</style>
