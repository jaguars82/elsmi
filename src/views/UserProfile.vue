<template>
  <div class="fill-height">
    
    <div v-if="loading" class="fill-height">
      <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col cols="12"> 
              <m-loading :size="$vuetify.breakpoint.xs ? 100 : 150"></m-loading>
            </v-col>
          </v-row>
      </v-container>
    </div>
    
    <div v-else>
      <div v-if="user.id">

        <v-navigation-drawer
          clipped
          app
          permanent
          :mini-variant="$vuetify.breakpoint.xs"
          :width="$vuetify.breakpoint.sm ? 190 : 256"
        >

          <div v-if="!$vuetify.breakpoint.xs" align="center" class="pt-5">
            <v-avatar v-if="user.avatarSrc" :size="$vuetify.breakpoint.sm ? 160 : 220">
              <img :src="user.avatarSrc">
            </v-avatar>
          </div>

          <div v-if="!$vuetify.breakpoint.xs" class="title text-center py-3">{{ user.name }} {{ user.middleName }} {{ user.surname }}</div>
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

            <v-col>
              
              <div v-if="$vuetify.breakpoint.xs" align="center" class="pt-5">
                <v-avatar v-if="user.avatarSrc" size="160">
                  <img :src="user.avatarSrc">
                </v-avatar>
              </div>

              <div v-if="$vuetify.breakpoint.xs" class="title text-center py-3">{{ user.name }} {{ user.middleName }} {{ user.surname }}</div>
              
            </v-col>
            
            <v-col>
            <v-btn to="/publish">Опубликовать материал</v-btn>
            </v-col>

            <v-col cols="12" v-if="$route.name === 'user'">
              
              <user-publications></user-publications>

            </v-col>

            <router-view></router-view>

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
  </div>
</template>

<script>
import ProfileEditForm from '@/components/User/Forms/ProfileEdit.vue'
import userPublications from '@/views/userProfileElements/usersPublications.vue'

export default {
    components: {
      ProfileEditForm,
      userPublications
    },
    computed: {
      loading () {
        return this.$store.getters.loading
      },
      user () {
          return this.$store.getters.userUnderFocus
      },
      local () {
        return this.$store.getters.local
      }
    },
    beforeMount () {
      //console.log(this.$route.params.id)
      //this.$store.dispatch('setLoading', true)
      this.$store.dispatch('setUserUnderFocus', this.$route.params.id)
      

    },
    beforeDestroy () {
      this.$store.commit('unsetUserUnderFocus')
    }
}
</script>