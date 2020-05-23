<template>
    <v-dialog v-model="dialog" persistent max-width="600px" :fullscreen="$vuetify.breakpoint.xsOnly">
      <template v-slot:activator="{ on }">
        
      <v-btn text v-on="on" :icon="$vuetify.breakpoint.sm">
        <v-icon>mdi-login-variant</v-icon>
        <span class="ml-2 hidden-sm-and-down">{{ local.enterAccount }}</span>
      </v-btn>

      </template>

      <ValidationObserver ref="obs" v-slot="{ invalid, validated, passes }">
      
      <v-card>
        <v-card-title>
          <span class="headline">{{ local.enterAccount2 }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-alert v-if="localErrorStatus" type="error" border="bottom" text>
                  {{ local.errors.error|capitalize }}! {{ localErrorMessage }}
                </v-alert>
                <ValidationProvider mode="eager" name="email" rules="required|email"  v-slot="{ errors, valid }">
                  <v-text-field 
                  v-model="email"
                  :error-messages="errors"
                  :success="valid"
                  :label="local.email + '*'" 
                  required
                  :disabled="localLoading"
                  >
                  </v-text-field>
                </ValidationProvider>
              </v-col>
              <v-col cols="12">
                <ValidationProvider :rules="{ required: true }" vid="confirmation" v-slot="{ errors, valid }">
                  <v-text-field
                  v-model="pass"
                  :error-messages="errors"
                  :success="valid"
                  :label="local.password + '*'"
                  type="password"
                  required
                  :disabled="localLoading"
                  >
                  </v-text-field>
                </ValidationProvider>
              </v-col>
            </v-row>
          </v-container>
          <small>*{{ local.requiredField }}</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn depressed rounded @click="onClose" :icon="$vuetify.breakpoint.xs" :disabled="localLoading"><v-icon :left="!$vuetify.breakpoint.xs">mdi-close</v-icon><span class="hidden-xs-only pr-2">{{ local.close }}</span></v-btn>
          <v-btn depressed rounded color="primary" @click="passes(onSubmit)" :loading="localLoading" :disabled="invalid || !validated"><v-icon left>mdi-login-variant</v-icon><span class="pr-2">{{ local.enterAccount2 }}</span></v-btn>
        </v-card-actions>
      </v-card>

      </ValidationObserver>

    </v-dialog>
</template>

<script>
import eventBus from '@/bus'
import { required, email } from "vee-validate/dist/rules"
import { extend } from "vee-validate"


export default {
  data: () => ({
      dialog: false,
      localLoading: false,
      email: "",
      pass: "",
      rulesAgree: false,
      localErrorStatus: false,
      localErrorMessage: ''
      //uid: null
    }),
  computed: {
    local () {
      return this.$store.getters.local
    }
  },
  methods: {
    async onClose () {
      this.firstName = this.middleName = this.lastName = this.email = this.pass = this.passconfirm = this.localErrorMessage = ''
      this.rulesAgree = null
      this.localLoading = this.localErrorStatus = false
      requestAnimationFrame(() => {
        this.$refs.obs.reset();
      });
      this.dialog = false
    },
    onSubmit () {
      const user = {
        email: this.email,
        password: this.pass
      }
      this.localLoading = true
      this.$store.dispatch('userLogin', user)
        .then(() => { 
          //this.uid = this.$store.getters.userActive
          this.onClose()
          //console.log()
          this.$router.push(`/user/${this.$store.getters.userActive}`) 
        })
        .catch (err => {
          this.localErrorStatus = true
          switch (err.code) {
            case 'auth/invalid-email':
              this.localErrorMessage = this.local.errors.errorCodes.invalidEmail
              break
            case 'auth/user-disabled':
              this.localErrorMessage = this.local.errors.errorCodes.userDisabled
              break
            case 'auth/user-not-found':
              this.localErrorMessage = this.local.errors.errorCodes.userNotFound
              break
            case 'auth/wrong-password':
              this.localErrorMessage = this.local.errors.errorCodes.wrongPassword
              break
            default:
              this.localErrorMessage = this.local.errors.errorCodes.unknown
          }
          this.localLoading = false
          //alert(err.message)
          //console.log(err)
        })
    }
  },
  mounted () {
    eventBus.$on('trigger-login-dialog', () => {
      this.dialog = true
    })
  },
  created () {
    extend("required", {
      ...required,
      message: () => { return this.$store.getters.local.validation.required }
    });

    extend("email", {
      ...email,
      message: () => { return this.$store.getters.local.validation.email }
    });

  },
  beforeDestroy () {
    eventBus.$off('trigger-login-dialog')
  }

}
</script>