<template>

   <v-container>
      <v-row>
         <v-col align="center">
            <div v-if="title" class="text-h5 text-sm-h4 text-md-h3 text-lg-h2 text--secondary" v-text="title"></div>
            <div v-if="title" class="text-subtitle-1" v-text="subtitle"></div>
         </v-col>
      </v-row>
   </v-container>

</template>

<script>

export default {
   props: ['title', 'subtitle', 'buttons'],
}

</script>