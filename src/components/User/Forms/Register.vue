<template>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        
        <v-btn text v-on="on" :icon="$vuetify.breakpoint.sm">
            <v-icon>mdi-account-plus-outline</v-icon>
            <span class="ml-2 hidden-sm-and-down">{{ local.createAccount }}</span>
        </v-btn>

      </template>

      <ValidationObserver ref="obs" v-slot="{ invalid, validated, passes }">
      
      <v-card>
        <v-card-title>
          <span class="headline">{{ local.createAccountText }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <ValidationProvider mode="eager" rules="required|alpha" v-slot="{ errors, valid }">
                  <v-text-field
                  v-model="firstName"
                  :error-messages="errors"
                  :success="valid"
                  :label="local.userFirstName + '*'"
                  required
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <ValidationProvider mode="eager" rules="required|alpha" v-slot="{ errors, valid }">
                  <v-text-field
                  v-model="middleName"
                  :error-messages="errors"
                  :success="valid"
                  :label="local.userMiddleName + '*'"
                  required></v-text-field>
                </ValidationProvider>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <ValidationProvider mode="eager" rules="required|alpha" v-slot="{ errors, valid }">
                  <v-text-field
                  v-model="lastName"
                  :error-messages="errors"
                  :success="valid"
                  :label="local.userLastName + '*'"
                  required></v-text-field>
                </ValidationProvider>
              </v-col>
              <v-col cols="12">
                <ValidationProvider mode="eager" name="email" rules="required|email"  v-slot="{ errors, valid }">
                  <v-text-field 
                  v-model="email"
                  :error-messages="errors"
                  :success="valid"
                  :label="local.email + '*'" 
                  required
                  >
                  </v-text-field>
                </ValidationProvider>
              </v-col>
              <v-col cols="12" sm="6">
                <ValidationProvider :rules="{ required: true, regex: /^[a-zA-Z0-9_-]+$/, min: { length: 6} }" vid="confirmation" v-slot="{ errors, valid }">
                  <v-text-field
                  v-model="pass"
                  :error-messages="errors"
                  :success="valid"
                  :label="local.password + '*'"
                  type="password"
                  required
                  >
                  </v-text-field>
                </ValidationProvider>
              </v-col>
              <v-col cols="12" sm="6">
                <ValidationProvider v-slot="{ errors, valid }" rules="required|confirmed:confirmation">
                  <v-text-field
                  v-model="passconfirm"
                  :error-messages="errors"
                  :success="valid"
                  :label="local.passwordConfirm + '*'"
                  type="password"
                  required
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
              <v-col cols="12">
                <ValidationProvider :rules="{ required: { allowFalse: false } }">
                  <v-checkbox
                    class="smlabel"
                    v-model="rulesAgree"
                    :label="local.rulesAgree + '*'"
                    required
                  ></v-checkbox>
                </ValidationProvider>
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
          <v-btn depressed rounded @click="onClose"><span class="px-3">{{ local.close }}</span></v-btn>
          <v-btn depressed rounded color="primary" @click="passes(submit)" :disabled="invalid || !validated"><span class="px-3">{{ local.createAccount }}</span></v-btn>
        </v-card-actions>
      </v-card>

      </ValidationObserver>

    </v-dialog>
</template>

<script>

import { required, email, min, confirmed, alpha, regex } from "vee-validate/dist/rules"
import { extend } from "vee-validate"


export default {
  data: () => ({
      dialog: false,
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      pass: "",
      passconfirm: "",
      rulesAgree: false
    }),
  computed: {
    local () {
      return this.$store.getters.local
    },
  },
  methods: {
    async onClose () {
      this.firstName = this.middleName = this.lastName = this.email = this.pass = this.passconfirm = ''
      this.rulesAgree = null
      requestAnimationFrame(() => {
        this.$refs.obs.reset();
      });
      this.dialog = false
    }
  },
  created () {
    extend("required", {
      ...required,
      message: () => { return this.$store.getters.local.validation.required }
    });

    extend("min", {
      ...min,
      message: () => { return this.$store.getters.local.validation.passlength }
    });

    extend("email", {
      ...email,
      message: () => { return this.$store.getters.local.validation.email }
    });
    
    extend("confirmed", {
      ...confirmed,
      message: () => { return this.$store.getters.local.validation.passconfirmed }
    });
    
    extend("alpha", {
      ...alpha,
      message: () => { return this.$store.getters.local.validation.alphabit }
    });
    
    extend("regex", {
      ...regex,
      message: () => { return this.$store.getters.local.validation.passwRegex }
    });

  }
}
</script>

<style>

.smlabel .v-label {
  font-size: 13px;
}

</style>