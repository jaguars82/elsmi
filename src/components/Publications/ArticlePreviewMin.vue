<template>

    <v-hover>
        <template v-slot="{ hover }">
          <v-card
            :elevation="hover ? 9 : 3"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                  v-text="article.title"
                ></v-card-title>

                <v-card-subtitle v-text="article.title"></v-card-subtitle>
              </div>

              <v-avatar
                v-if="article.appearance.showMainImg && article.appearance.mainImgSrc"
                class="ma-3"
                size="125"
                tile
              >
                <v-img :src="article.appearance.mainImgSrc"></v-img>
              </v-avatar>

            </div>
          </v-card>
        </template>
    </v-hover>
    
</template>

<script>
export default {
    props: ['article', 'local', 'noAuthor']
}
</script>