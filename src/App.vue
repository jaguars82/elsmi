<template>
  <v-app>
    <v-app-bar
      app
      clipped-left
      color="primary"
      dark
    >
      
      <v-btn class="ml-2" icon to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      
      <!--
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>
      -->

      <v-spacer></v-spacer>

      <reg-form></reg-form>

      <login-form></login-form>
      <!--
      <v-btn text :icon="$vuetify.breakpoint.sm">
        <v-icon>mdi-account-plus-outline</v-icon>
        <span class="ml-2 hidden-sm-and-down">{{ local.createAccount }}</span>
      </v-btn>
      
      <v-btn text :icon="$vuetify.breakpoint.sm">
        <v-icon>mdi-login-variant</v-icon>
        <span class="ml-2 hidden-sm-and-down">{{ local.enterAccount }}</span>
      </v-btn>
      -->
      <v-menu offset-y transition="slide-y-transition">
        <template v-slot:activator="{ on: menu }">
          <v-tooltip left>
            <template v-slot:activator="{ on: tooltip }">
              <v-btn
                v-on="{ ...tooltip, ...menu }"
                text
                :icon="$vuetify.breakpoint.sm"
              >
              <lang-flag :iso='local.lng' />
              <span class="ml-2 hidden-sm-and-down">{{ local.language }}</span>
              <v-icon class="hidden-sm-and-down">mdi-menu-down</v-icon>
              </v-btn>
            </template>
            <span>{{ local.chooseLanguage }}</span>
          </v-tooltip>
        </template>
        <v-list dense>
          <v-list-item
            v-for="(lang, i) in aviableLanguages"
            :key="i"
            @click="changeLanguage(lang.lng)"
          >
            <lang-flag class="mr-3" :iso='lang.lng' />
            <v-list-item-title>{{ lang.language }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

    </v-app-bar>

    <v-content>
      
      <router-view></router-view>

    </v-content>

  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
  computed: {
    local () {
      return this.$store.getters.local
    },
    aviableLanguages () {
      return this.$store.getters.aviableLanguages
    }
},
  methods: {
    changeLanguage (lng) {
      this.$store.commit('setLanguage', lng)
    }
  }
};

</script>
