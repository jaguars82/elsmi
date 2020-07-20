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
      
      <ProfileEditForm :user="user"></ProfileEditForm>

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
import ProfileEditForm from '@/components/User/Forms/ProfileEdit.vue'

export default {
    components: {
      ProfileEditForm
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