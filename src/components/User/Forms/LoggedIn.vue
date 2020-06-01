<template>
      <v-btn text :icon="$vuetify.breakpoint.sm" @click="logOut">
        <v-icon>mdi-login-variant</v-icon>
        <span class="ml-2 hidden-sm-and-down">Выход</span>
      </v-btn>

</template>

<script>
export default {
    methods: {
        logOut () {
            this.$store.dispatch('userLogOut')
        }
    }
}
</script>