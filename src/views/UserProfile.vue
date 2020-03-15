<template>

  <div>

    <v-navigation-drawer clipped app permanent>

      <div align="center" class="pt-5">
      <v-avatar v-if="user.avatarSrc" size="200">
        <img :src="user.avatarSrc">
      </v-avatar>
      </div>

      <div class="title text-center py-3">{{ user.name }} {{ user.middleName }} {{ user.surname }}</div>
      <!-- TODO <div class="subtitle-2 text--secondary text-center pb-2">Logged In</div> -->

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
      
      </v-row>

    </v-container>

  </div>

</template>

<script>
export default {
    computed: {
        user () {
            return this.$store.getters.userUnderFocus
        }
    }    
}
</script>