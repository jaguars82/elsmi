<template>
    <v-container fluid>
        <v-row>
            <v-col>
            <h1 v-if="newUser" class="text-center">Привет!</h1>
            <div class="text-center">
                <v-btn class="mx-2" x-large rounded outlined color="primary" @click="triggerLogin" :icon="$vuetify.breakpoint.xs">
                    <v-icon :left="!$vuetify.breakpoint.xs">mdi-login-variant</v-icon>
                    <span class="hidden-xs-only">{{ local.enterAccount2 }}</span>
                </v-btn>
                <v-btn class="mx-2" x-large rounded outlined color="primary" :icon="$vuetify.breakpoint.xs" :to="'/'">
                    <v-icon :left="!$vuetify.breakpoint.xs">mdi-home</v-icon>
                    <span class="hidden-xs-only">{{ local.goToMainPage }}</span>
                </v-btn>
            </div>
            </v-col>         
        </v-row>
    </v-container>
</template>

<script>
import eventBus from '@/bus'

export default {
    data: () => ({
        //newUser: false
    }),
    computed: {
        newUser () {
            return this.$store.getters.userJustRegisteredFlag
        },
        local () {
            return this.$store.getters.local
        }
    },
    methods: {
        triggerLogin () {
            eventBus.$emit('trigger-login-dialog')
        }
    },
    beforeDestroy () {
        this.$store.dispatch('setUserJustRegisteredFlag', false)
    }
}
</script>