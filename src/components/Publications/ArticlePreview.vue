<template>

    <v-hover>
        <template v-slot="{ hover }">
            <v-card
            min-height="300px"
            :elevation="hover ? 9 : 3"
            >
            <router-link
                v-if="article.appearance.showMainImg && article.appearance.mainImgSrc"
                :to="'/article/' + article.id"
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

            <router-link v-else :to="'/article/' + article.id" tag="div" class="pointer"><v-card-title>{{ article.title }}</v-card-title></router-link>

            <v-card-text>{{ article.description | truncate(180, '...') }}</v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn :to="'/article/' + article.id" text>
                {{ local.open }}
                </v-btn>
            </v-card-actions>
            
            <v-card-actions>

                  <!--
                  <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>

                  <v-btn icon>
                    <v-icon>mdi-bookmark</v-icon>
                  </v-btn>

                  <v-btn icon>
                    <v-icon>mdi-share-variant</v-icon>
                  </v-btn>
                  -->

                <v-spacer></v-spacer>
                
                <m-user-badge v-if="!noAuthor" :local="local" :article="article"></m-user-badge>

            </v-card-actions>
            </v-card>
        </template>
    </v-hover>
    
</template>

<script>
export default {
    props: ['article', 'local', 'noAuthor']
}
</script>