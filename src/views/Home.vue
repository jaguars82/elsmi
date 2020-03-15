<template>
    <v-container>
      <v-row>
        <v-col
          v-for="(article, i) in articles"
          :key="i"
          :cols="article.appearance.flex"
        >
          
          <v-hover>
            <template v-slot="{ hover }">
              <v-card
                min-height="300px"
                :elevation="hover ? 9 : 3"
              >
                <router-link
                  v-if="article.appearance.showMainImg && article.appearance.mainImgSrc"
                  :to="'article/' + article.id"
                  tag="div"
                  class="pointer"
                >
                  <v-img
                  
                    :src="article.appearance.mainImgSrc"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="150px"
                  >
                    <v-card-title v-text="article.title"></v-card-title>
                  </v-img>
                </router-link>

                <router-link v-else :to="'article/' + article.id" tag="div" class="pointer"><v-card-title>{{ article.title }}</v-card-title></router-link>

                <v-card-text>{{ article.description | truncate(180, '...') }}</v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn :to="'article/' + article.id" text>
                    {{ local.open }}
                  </v-btn>
                </v-card-actions>
                
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
                  
                  <v-menu offset-y transition="slide-y-transition">
                    <template v-slot:activator="{ on: menu }">
                      <v-tooltip top>
                        <template v-slot:activator="{ on: tooltip }">
                          <v-icon v-on="{ ...tooltip, ...menu }">mdi-dots-vertical</v-icon>
                        </template>
                        <span>{{ local.moreAboutTheAuthor }}</span>
                      </v-tooltip>
                    </template>
                    <v-list dense>
                      <v-list-item @click="()=>{}" :to="'/user/' + article.author.id">
                        
                        <v-icon class="mr-3">mdi-account-details</v-icon>
                        <v-list-item-title>{{ local.viewProfile }}</v-list-item-title>
                        
                      </v-list-item>
                      <v-list-item>
                        <v-icon class="mr-3">mdi-book-open-page-variant</v-icon>
                        <v-list-item-title>{{ local.viewAllPublications }}</v-list-item-title>
                      </v-list-item>
                    </v-list>              
                  </v-menu>

                </v-card-actions>
              </v-card>
            </template>
          </v-hover>
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

<style scoped>
.pointer {
  cursor: pointer;
}
</style>