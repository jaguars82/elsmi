<template>
    <v-container>
      <v-row>
        <v-col
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
    local () {
      return this.$store.getters.local
    },
    articles () {
      return this.$store.getters.articles
    }
  },
  beforeCreate () {
    this.$store.dispatch(
       'fetchArticles',
        {
            filterBy: this.$route.params.filter,
            id: this.$route.params.id
        }
    )
  }
}

</script>