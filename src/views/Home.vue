<template>
    <v-container>
      <v-row>
        <v-col
          v-for="(article, i) in articles"
          :key="i"
          :cols="article.appearance.flex"
        >
          <v-card>
            <v-img
              :src="article.appearance.mainImgSrc"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="article.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
  computed: {
    articles () {
      return this.$store.getters.articles
    }
  },
}
</script>