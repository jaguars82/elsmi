<template>
    <v-container :class="loading ? 'fill-height' : false">
      <v-row align="center">
        <v-col v-if="loading">
          <m-loading :size="$vuetify.breakpoint.xs ? 100 : 150"></m-loading>
        </v-col>
        <v-col
          v-else
          v-for="(article, i) in articles"
          :key="i"
          cols="12"
          :md="article.appearance.flex"
        >
          <m-article-preview :article="article" :local="local"></m-article-preview>

        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
  computed: {
    loading () {
      return this.$store.getters.loading
    },
    local () {
      return this.$store.getters.local
    },
    articles () {
      return this.$store.getters.articles
    },
    currAuthors () {
      return this.$store.getters.currAuthors
    }
  },
  beforeCreate () {
    this.$store.dispatch({type: 'fetchArticles'})
  }
}
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>