<template>
  <v-container fluid>
    
    <v-toolbar flat tag="div">
      <m-user-badge :local="local" :article="article"></m-user-badge>
      <v-spacer></v-spacer>
      <v-btn icon><v-icon>mdi-close</v-icon></v-btn>
    </v-toolbar>
    
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">{{ article.title }}</h1>
      </v-col>
      <v-col cols="12" class="px-0">
        <v-parallax
          v-if="article.appearance.showMainImg && article.appearance.mainImgSrc"
          :src="article.appearance.mainImgSrc"
          height="400"
        ></v-parallax>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    article () {
      return this.$store.getters.articleOpened
    },
    local () {
      return this.$store.getters.local
    }
  },
  beforeCreate () {
    this.$store.dispatch('setOpenedArticle', this.$route.params.id)
  }
}
</script>