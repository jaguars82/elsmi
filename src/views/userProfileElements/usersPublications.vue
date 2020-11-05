<template>
    <v-container>
      <v-row>

        <v-col cols="12">
          <v-toolbar
            dense
            elevation="0"
          >
            <!--<v-app-bar-nav-icon></v-app-bar-nav-icon>-->

            <v-toolbar-title>Публикации</v-toolbar-title>

            <v-spacer></v-spacer>

            <!--<v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>-->

            <v-btn-toggle
              :value="userPublicationsViewMode"
              borderless
              @change="toggleArticlesView"
            >
              <v-btn>
                <v-icon>mdi-view-list</v-icon>
              </v-btn>
              <v-btn>
                <v-icon>mdi-view-comfy</v-icon>
              </v-btn>
              <v-btn>
                <v-icon>mdi-view-grid</v-icon>
              </v-btn>
            </v-btn-toggle>

            <!--<v-btn icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>-->

          </v-toolbar>          
        </v-col>

        <v-col
          v-if="userPublicationsViewMode === 0"
        >
          <m-article-preview-list :articles="articles" :local="local" :noAuthor="true"></m-article-preview-list>
        </v-col>
        <v-col
          v-else
          v-for="(article, i) in articles"
          :key="i"
          cols="12"
          md="6"
          lg="4"
        >
          <m-article-preview-min v-if="userPublicationsViewMode === 1" :article="article" :local="local" :noAuthor="true"></m-article-preview-min>
          <m-article-preview v-else-if="userPublicationsViewMode === 2" :article="article" :local="local" :noAuthor="true"></m-article-preview>
          
        </v-col>
      </v-row>
    </v-container>
</template>

<script>

export default {
  /*data () {
    return {
      viewToggle: 1
    }
  },*/
  computed: {
    local () {
      return this.$store.getters.local
    },
    articles () {
      return this.$store.getters.articles
    },
    userPublicationsViewMode () {
      return this.$store.getters.userPublicationsViewMode
    }
  },
  methods: {
    toggleArticlesView (e) {
      this.$store.dispatch('setUserPublicationsViewMode', e)
    }
  },
  beforeCreate () {
    this.$store.dispatch(
      'fetchArticles',
      {
          filterBy: 'user',
          id: this.$route.params.id
      }
    )
  }
}

</script>