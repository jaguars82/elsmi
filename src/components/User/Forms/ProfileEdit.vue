<template>

    <v-dialog v-model="editProfileDialog.dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        
        <template v-slot:activator="{ on }">
          <div class="pa-2 text-center">
            <v-btn
                color="primary"
                dark
                v-on="on"
            >
                Open Dialog
            </v-btn>
          </div>
        </template>
        
        <v-card>
        
                <v-toolbar dark color="primary">
                  <v-toolbar-title>Settings</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-btn icon dark @click="editProfileDialog.dialog = false">
                  <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-toolbar>

                <v-tabs>
                  <v-tab :key="1">Основные данные профиля</v-tab>
                  <v-tab :key="2">Сведения о работе</v-tab>
                

              <!--<v-col class="text-center" :cols="$vuetify.breakpoint.xs ? 12 : avatar.loaded ? 5 : 12">-->
              

              <v-tab-item :key="1">

          <v-container fluid>
            <v-row>

              <v-col class="text-center" :cols="$vuetify.breakpoint.xs ? 12 : avatar.loaded ? $vuetify.breakpoint.sm ? 6 : 4 : 12">
                
                <p v-if="!avatar.loaded" class="text-h6 text-md-h5 text--secondary text-center">Щёлкните, чтобы загрузить файл или перетащите его сюда</p>
                
                <vue-avatar
                  ref="vueavatar"
                  :width=250 
                  :height=250
                  :borderRadius="avatar.loaded ? 250 : 0"
                  :rotation="avatar.rotation"
                  :scale="avatar.scale"
                  @imageLoaded="onSelectFile($event)"
                >
                </vue-avatar>
              </v-col>

              <!--<v-col class="px-5" v-if="avatar.loaded" :cols="$vuetify.breakpoint.xs ? 12 : avatar.loaded ? 7 : 12">-->
              <v-col class="px-5" v-if="avatar.loaded" :cols="$vuetify.breakpoint.xs ? 12 : avatar.loaded ? $vuetify.breakpoint.sm ? 6 : 8 : 12">

                <p v-if="avatar.loaded" class="text-h6 text-md-h5 text--secondary text-center">Настройте изображение</p>

                <v-slider
                  v-model="avatar.scale"
                  min="1"
                  max="3"
                  step="0.02"
                  label="Увеличить"
                  prepend-icon="mdi-magnify"
                  dense
                  :disabled="!avatar.loaded"
                ></v-slider>
            
                <v-slider
                  v-model="avatar.rotation"
                  min="-90"
                  max="90"
                  step="1"
                  label="Повернуть"
                  prepend-icon="mdi-rotate-left"
                  dense
                  :disabled="!avatar.loaded"
                  thumb-label
                >
                  <template v-slot:thumb-label="{ value }">
                    {{ value }}
                  </template>
                </v-slider>

                <button v-on:click="saveClicked">Click</button>
                <v-btn small text v-on:click="resetAvatar">Reset</v-btn>

                
              </v-col>

              <v-col cols="12">
                <v-divider></v-divider>
              </v-col>

              <v-col cols="12" sm="4">
                <ValidationProvider mode="eager" rules="required|alpha" v-slot="{ errors }">
                  <v-text-field
                  v-model="personalData.new.firstName"
                  :error-messages="errors"
                  :label="local.userFirstName + '*'"
                  @change="fieldChangeCheck('firstName')"
                  required
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
              <v-col cols="12" sm="4">
                <ValidationProvider mode="eager" rules="required|alpha" v-slot="{ errors }">
                  <v-text-field
                  v-model="personalData.new.middleName"
                  :error-messages="errors"
                  :label="local.userMiddleName + '*'"
                  @change="fieldChangeCheck('middleName')"
                  required
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
              <v-col cols="12" sm="4">
                <ValidationProvider mode="eager" rules="required|alpha" v-slot="{ errors }">
                  <v-text-field
                  v-model="personalData.new.lastName"
                  :error-messages="errors"
                  :label="local.userLastName + '*'"
                  @change="fieldChangeCheck('lastName')"
                  required
                  ></v-text-field>
                </ValidationProvider>
              </v-col>

              <v-col cols="12" sm="6">
                <v-menu
                  ref="birthdayMenu"
                  v-model="editProfileDialog.birthdayMenu"
                  :close-on-content-click="false"
                  :return-value.sync="personalData.new.birthday"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >           
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="personalData.new.birthday"
                      label="Picker in menu"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="personalData.new.birthday" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="editProfileDialog.birthdayMenu = false">Cancel</v-btn>
                    <v-btn text color="primary" @click="$refs.birthdayMenu.save(personalData.new.birthday); fieldChangeCheck('birthday')">OK</v-btn>
                  </v-date-picker>
                </v-menu>

              </v-col>

              <v-col cols="12" sm="6">
                <ValidationProvider mode="eager" rules="" v-slot="{ errors }">
                  <v-text-field
                    v-model="personalData.new.phone"
                    :error-messages="errors"
                    :label="local.userLastName"
                    mask="#(###)###-##-##"
                    @change="fieldChangeCheck('phone')"
                  ></v-text-field>
                </ValidationProvider>
              </v-col>

            </v-row>
          </v-container>

              </v-tab-item>



              <v-tab-item :key="2">

          <v-container fluid>
            <v-row>

              <v-col cols="12">
                  <v-combobox
                    :items="local.forms.publicationForm.subjectSelectItems"
                    :label="local.forms.publicationForm.subjectSelect"
                    v-model="personalData.position"
                    clearable
                    chips
                    multiple
                    :hint="local.forms.publicationForm.subjectSelectHint"
                    persistent-hint
                    hide-details="auto"
                  >
                    <template v-slot:selection="data">
                        <v-chip
                          :key="JSON.stringify(data.item)"
                          v-bind="data.attrs"
                          :input-value="data.selected"
                          :disabled="data.disabled"
                          close
                          :small="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"
                          @click:close="data.parent.selectItem(data.item)"
                        >
                          {{ data.item }}
                        </v-chip>
                    </template>                                       
                  </v-combobox>
              </v-col>

            </v-row>
          </v-container>

              </v-tab-item>
              </v-tabs>

              


        </v-card>

    </v-dialog>

</template>

<script>
import {VueAvatar} from 'vue-avatar-editor-improved'
import { required, alpha } from "vee-validate/dist/rules"
import { extend } from "vee-validate"
//import * as fb from 'firebase' 

export default {
  components: {
    VueAvatar,
  },
  props: ['user'],
  data () {
    return {
      editProfileDialog: {
        dialog: false,
        birthdayMenu: false
      },
      avatar: {
          loaded: false,
          rotation: 0,
          scale: 1,
      },
      personalData: {
        current: {
          firstName: this.user.name,
          middleName: this.user.middleName,
          lastName: this.user.surname,
          birthday: this.user.birthday,
          phone: this.user.phone,
          position: ""
        },
        new: {
          firstName: this.user.name,
          middleName: this.user.middleName,
          lastName: this.user.surname,
          birthday: this.user.birthday,
          phone: this.user.phone,
          position: ""
        },
        updateFlags: {
          firstName: false,
          middleName: false,
          lastName: false,
          birthday: false,
          phone: false,
          position: false
        }
      }
    }
  },
  computed: {
    local () {
      return this.$store.getters.local
    },
  },
  methods: {
      onSelectFile (files) {
          //console.log(files)
          this.avatar.loaded = files
      },
      async saveClicked () {
          /*const fileData = await fb.storage().ref(`profiles/${this.user.id}.png`).putString(avatar, 'data_url')

          const fileSrc = await fileData.ref.getDownloadURL().then(function(downloadURL) {
              return downloadURL
          })*/
          //console.log(fileSrc)
          //console.log('Uploaded a base64 string!');
          //console.log(snapshot);
          const profileData = {}

          profileData.id = this.user.id

          const fields = Object.keys(this.personalData.updateFlags)

          fields.forEach(field => {
            if(this.personalData.updateFlags[field] === true) {
              profileData[field] = this.personalData.new[field]
            }
          })

          let img = this.$refs.vueavatar.getImageScaled()
          profileData.avatar = img.toDataURL()

          console.log(fields)
          console.log(profileData)

          this.$store.dispatch('editUserProfile', profileData)
      },
      resetAvatar () {
        this.$refs.vueavatar.resetImage()
        this.avatar.scale = 1
        this.avatar.rotation = 0
      },
      fieldChangeCheck (field) {
        if(this.personalData.current[field] !== this.personalData.new[field]) {
          this.personalData.updateFlags[field] = true
        } else {
          this.personalData.updateFlags[field] = false
        }
      }
  },
  created () {
    extend("required", {
      ...required,
      message: () => { return this.$store.getters.local.validation.required }
    })

    extend("alpha", {
      ...alpha,
      message: () => { return this.$store.getters.local.validation.alphabit }
    })
  }
}
</script>