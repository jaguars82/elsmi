<template>
    <v-container>
      <v-row>
        <v-col
          v-for="(article, i) in articles"
          :key="i"
          :cols="article.appearance.flex"
        >
          <v-card hover min-height="300px">
            <v-img
              v-if="article.appearance.showMainImg && article.appearance.mainImgSrc"
              :src="article.appearance.mainImgSrc"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="150px"
            >
              <v-card-title v-text="article.title"></v-card-title>
            </v-img>

            <v-card-title v-else>{{ article.title }}</v-card-title>

            <v-card-text>{{ article.description | truncate(180, '...') }}</v-card-text>

            <v-card-actions>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>

              <v-spacer></v-spacer>
              
              <v-list>
                <v-list-item>
                  <v-list-item-avatar v-if="article.author.avatarSrc" size="34">
                    <img
                      :src="article.author.avatarSrc"
                      :alt="article.author.name"
                    >
                  </v-list-item-avatar>
                  <v-list-item-subtitle>
                    <strong>{{ article.author.name }} {{ article.author.surname }}</strong>
                    <br />
                    {{ article.date }}
                  </v-list-item-subtitle>
                  
                </v-list-item>
              </v-list>
              
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <v-icon v-on="on">mdi-dots-vertical</v-icon>
                </template>
                <span>{{ local.moreAboutTheAuthor }}</span>
              </v-tooltip>

            </v-card-actions>
          </v-card>
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
}
</script>