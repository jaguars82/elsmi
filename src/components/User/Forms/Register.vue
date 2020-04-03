<template>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        
        <v-btn text v-on="on" :icon="$vuetify.breakpoint.sm">
            <v-icon>mdi-account-plus-outline</v-icon>
            <span class="ml-2 hidden-sm-and-down">{{ local.createAccount }}</span>
        </v-btn>

        <!--<v-btn color="primary" dark v-on="on">Open Dialog</v-btn>-->

      </template>
      <v-card>
        <v-card-title>
          <span class="headline">{{ local.createAccountText }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field :label="local.userFirstName + '*'" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field :label="local.userMiddleName + '*'" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field :label="local.userLastName + '*'" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field :label="local.email + '*'" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field :label="local.password + '*'" type="password" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field :label="local.passwordConfirm + '*'" type="password" required></v-text-field>
              </v-col>
              <!--
              <v-col cols="12" sm="6">
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                ></v-autocomplete>
              </v-col>
              -->
            </v-row>
          </v-container>
          <small>*{{ local.requiredField }}</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">{{ local.close }}</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">{{ local.createAccount }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
    }),
  computed: {
      local () {
        return this.$store.getters.local
      },
    },
  }
</script>