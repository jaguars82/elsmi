<template>

    <v-list three-line>
        <template v-for="(article, index) in articles">

            <v-list-item
            :key="index"
            :to="'/article/' + article.id"
            >
            <v-list-item-avatar tile size="65">
                <v-img :src="article.appearance.mainImgSrc"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title v-html="article.title"></v-list-item-title>
                <v-list-item-subtitle v-html="article.title"></v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>
        </template>
    </v-list>

    
</template>

<script>
export default {
    props: ['articles', 'local', 'noAuthor']
}
</script>