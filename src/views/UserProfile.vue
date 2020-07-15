<template>
<div>
  <div v-if="user.id">

    <v-navigation-drawer
      clipped
      app
      permanent
      :mini-variant="$vuetify.breakpoint.xs"
      :width="$vuetify.breakpoint.sm ? 190 : 256"
    >

      <div align="center" class="pt-5">
      <v-avatar v-if="user.avatarSrc" size="200">
        <img :src="user.avatarSrc">
      </v-avatar>
      </div>

      <div class="title text-center py-3">{{ user.name }} {{ user.middleName }} {{ user.surname }}</div>
      <!-- TODO <div class="subtitle-2 text--secondary text-center pb-2">Logged In</div> -->

      <template>
        <v-dialog v-model="editProfileDialog.dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
          <template v-slot:activator="{ on }">
            <div class="pa-2 text-center">
            <v-btn
              color="primary"
              dark
              v-on="on"
            >
              Open Dialog
            </v-btn>
            </div>
          </template>
          <v-card>
            <v-toolbar dark color="primary">
              <v-toolbar-title>Settings</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon dark @click="editProfileDialog.dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar>
            <v-list three-line subheader>
              <v-subheader>User Controls</v-subheader>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Content filtering</v-list-item-title>
                  <v-list-item-subtitle>Set the content filtering level to restrict apps that can be downloaded</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Password</v-list-item-title>
                  <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list three-line subheader>
              <v-subheader>General</v-subheader>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox v-model="notifications"></v-checkbox>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Notifications</v-list-item-title>
                  <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox v-model="sound"></v-checkbox>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Sound</v-list-item-title>
                  <v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-action>
                  <v-checkbox v-model="widgets"></v-checkbox>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Auto-add widgets</v-list-item-title>
                  <v-list-item-subtitle>Automatically add home screen widgets</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-dialog>
      </template>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
        v-for="item in 10"
        :key="item"
        @click="()=>{}"
        >
        <v-list-item-icon>
            <v-icon>{{ item }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
            <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>


    <v-container fluid>
      <v-row>

        <v-col>{{ user.name }}</v-col>

        <v-btn to="/publish">Опубликовать материал</v-btn>
      
      </v-row>

    </v-container>

  </div>
  <error-info
     v-else
     :title="local.errors.errorInfoScreensMessages.noUserProfile.title"
     :subtitle="local.errors.errorInfoScreensMessages.noUserProfile.subtitle"
  >
  </error-info>
</div>
</template>

<script>
export default {
    data () {
      return {
        editProfileDialog: {
          dialog: false
        }
      }
    },
    computed: {
        user () {
            return this.$store.getters.userUnderFocus
        },
        local () {
          return this.$store.getters.local
        }
    },
    beforeCreate () {
      //console.log(this.$route.params.id)
      this.$store.dispatch('setUserUnderFocus', this.$route.params.id)

    },
    beforeDestroy () {
      this.$store.commit('unsetUserUnderFocus')
    }
}
</script>