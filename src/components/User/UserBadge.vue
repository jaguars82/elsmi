<template>
  <div>
    <v-list class="float-left">
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
            <v-icon  class="mt-5" v-on="{ ...tooltip, ...menu }">mdi-dots-vertical</v-icon>
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
  </div>
</template>

<script>

export default {
  props: ['article', 'local'],
}

</script>