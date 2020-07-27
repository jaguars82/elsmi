<template>
  <div>

    <v-dialog v-model="editProfileDialog.dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        
        <template v-slot:activator="{ on: dialog }">
          <div class="pa-2 text-center">
            <v-tooltip bottom :disabled="!$vuetify.breakpoint.xs">
              <template v-slot:activator="{ on: tooltip, attrs }">
                <v-btn
                    color="primary lighten-1"
                    :icon="$vuetify.breakpoint.xs"
                    dark
                    v-on="{ ...dialog, ...tooltip }"
                    v-bind="attrs"
                    text
                >
                  <v-icon :left="!$vuetify.breakpoint.xs">mdi-account-cog</v-icon>
                  <span class="hidden-sm-and-down">{{ local.forms.profile.profileSettings }}</span>
                  <span v-if="!$vuetify.breakpoint.xs" class="hidden-md-and-up">{{ local.forms.buttons.settings }}</span>
                </v-btn>
              </template>
              <span>{{ local.forms.profile.profileSettings }}</span>
            </v-tooltip>
          </div>
        </template>
        
        <v-card>

        <v-toolbar dark color="primary">
          <v-toolbar-title>{{ local.forms.profile.profileSettings }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon dark @click="onClose">
          <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>

        <ValidationObserver ref="obs" v-slot="{ invalid, validated, passes }">

        <v-tabs>

          <v-tab v-for="tab in mainTabs" :key="tab.n">
            <v-tooltip bottom :disabled="!$vuetify.breakpoint.xs">
              <template v-slot:activator="{on, attr}">
              <v-icon
                :left="!$vuetify.breakpoint.xs"
                v-on="on"
                v-bind="attr"
              >
                {{ tab.icon }}
              </v-icon>
              </template>
              <span>{{ tab.label }}</span>
            </v-tooltip>
            <span v-if="!$vuetify.breakpoint.xs">{{ tab.label }}</span>
          </v-tab>

            <v-tab-item :key="1">

              <v-container v-if="editProfileDialog.changeAvaFlag" :fluid="!$vuetify.breakpoint.lg">
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

                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          class="text--secondary"
                          small
                          text
                          v-on="on"
                          v-bind="attrs"
                          @click="cancelAvaChange"
                        >
                          <v-icon left small>mdi-cancel</v-icon>
                          Не загружать фото
                        </v-btn>
                      </template>
                      <span>Отменить загрузку фотографии в профиль</span>
                    </v-tooltip>

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

                    <v-btn small text v-on:click="resetAvatar">{{ local.forms.buttons.reset }}</v-btn>

                    
                  </v-col>

                  <v-col cols="12">
                    <v-divider></v-divider>
                  </v-col>

                </v-row>
              </v-container>

              <v-container v-else :fluid="!$vuetify.breakpoint.lg">
                <v-row>
                  <v-col cols="12" align="center">

                      <v-avatar v-if="user.avatarSrc" size="120">
                        <img :src="user.avatarSrc">
                      </v-avatar>
                      <v-icon v-else size="120">mdi-account-circle</v-icon>

                  </v-col>
                  
                  <v-col cols="12" align="center">

                      <v-btn
                        color="primary lighten-1"
                        text
                        @click="editProfileDialog.changeAvaFlag = true"
                      >
                        <v-icon left>mdi-camera</v-icon>
                        Загрузить фотографию
                      </v-btn>

                  </v-col>
                </v-row>
              </v-container>

              <v-container :fluid="!$vuetify.breakpoint.lg">
                <v-row>

                  <v-col cols="12" sm="4">
                    <ValidationProvider rules="required|alpha" v-slot="{ errors }">
                      <v-text-field
                      v-model="personalData.new.firstName"
                      :error-messages="errors"
                      :label="local.userFirstName + '*'"
                      @change="fieldChangeCheck('firstName')"
                      filled
                      required
                      ></v-text-field>
                    </ValidationProvider>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <ValidationProvider rules="required|alpha" v-slot="{ errors }">
                      <v-text-field
                      v-model="personalData.new.middleName"
                      :error-messages="errors"
                      :label="local.userMiddleName + '*'"
                      @change="fieldChangeCheck('middleName')"
                      filled
                      required
                      ></v-text-field>
                    </ValidationProvider>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <ValidationProvider rules="required|alpha" v-slot="{ errors }">
                      <v-text-field
                      v-model="personalData.new.lastName"
                      :error-messages="errors"
                      :label="local.userLastName + '*'"
                      @keyup="fieldChangeCheck('lastName')"
                      filled
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
                          :label="local.forms.profile.birthday"
                          prepend-icon="mdi-calendar"
                          v-bind="attrs"
                          v-on="on"
                          readonly
                          filled
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="personalData.new.birthday" no-title scrollable first-day-of-week=1>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="editProfileDialog.birthdayMenu = false">{{ local.forms.buttons.cancel }}</v-btn>
                        <v-btn text color="primary" @click="$refs.birthdayMenu.save(personalData.new.birthday); fieldChangeCheck('birthday')">{{ local.forms.buttons.ok }}</v-btn>
                      </v-date-picker>
                    </v-menu>

                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-select
                        v-model="personalData.new.gender"
                        :items="[{ text: 'мужской', value: 'male'}, {text: 'женский', value: 'female'}]"
                        filled
                        prepend-icon="mdi-human-male-female"
                        label="Пол"
                        @change="fieldChangeCheck('gender')"
                      >
                    </v-select>
                  </v-col>

                  <v-col cols="3" sm="2">
                    <v-combobox
                      v-model="personalData.new.countryCode"
                      :items="editProfileDialog.countryCodes"
                      :label="local.forms.profile.countryCode"
                      filled
                      type="text"
                      prepend-icon="mdi-phone"
                      prepend-inner-icon="mdi-plus"
                      @change="fieldChangeCheck('countryCode')"
                    >
                    </v-combobox>
                  </v-col>


                  <v-col cols="9" sm="4">
                    <v-text-field
                      v-model="personalData.new.phone"
                      :label="local.forms.profile.phone"
                      filled
                      v-mask="'(###) ### - ## - ##'"
                      @change="fieldChangeCheck('phone')"
                    ></v-text-field>
                  </v-col>

                </v-row>
              </v-container>

            </v-tab-item>

            <v-tab-item :key="2">

              <v-container :fluid="!$vuetify.breakpoint.lg">
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

        

        <v-card-actions>
          <v-container :fluid="!$vuetify.breakpoint.lg">
            <v-row>
              <v-col cols="12" align="right">
                <v-spacer></v-spacer>
                <!--<v-btn @click="tryAXIOS">AXIOS</v-btn>-->
                <v-btn class="mr-2" depressed rounded @click="onClose" :icon="$vuetify.breakpoint.xs"><v-icon :left="!$vuetify.breakpoint.xs">mdi-close</v-icon><span class="hidden-xs-only pr-2">{{ local.close }}</span></v-btn>
                <v-btn depressed rounded color="primary" @click="passes(saveChanges)" :disabled="invalid || !editProfileDialog.changesMade"><v-icon left>mdi-login-variant</v-icon><span class="pr-2">{{ local.enterAccount2 }}</span></v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-actions>

        </ValidationObserver>

        </v-card>

    </v-dialog>

    <v-dialog
      persistent
      v-model="editProfileDialog.preventCloseDialog"
      max-width="290px"
    >
      <v-card>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" align="center">
                <v-icon size="120" color="warning lighten-2">mdi-alert-circle-outline</v-icon>
        <p>Некоторые настройки профиля были изменены</p>
        <p>Вы уверены, что хотите закрыть окно, не сохранив эти изменения?</p>

              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text>Да</v-btn>
          <v-btn color="blue darken-1" text @click="editProfileDialog.preventCloseDialog = false">Нет</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>





<script>
import { VueAvatar } from 'vue-avatar-editor-improved'
import { VueMaskDirective } from 'v-mask'
import { required, alpha, digits } from "vee-validate/dist/rules"
import { extend } from "vee-validate"
//import axios from 'axios'
//import * as fb from 'firebase' 

export default {
  components: {
    VueAvatar
  },
  directives: {
    mask: VueMaskDirective
  },
  props: ['user'],
  data () {
    return {
      editProfileDialog: {
        dialog: false,
        changesMade: false,
        changeAvaFlag: false,
        birthdayMenu: false,
        countryCodes: ['1', '7', '20', '27', '30', '31', '32', '33', '34', '36', '39', '40', '41', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '60', '61', '62', '63', '64', '65', '66', '81', '82', '84', '86', '90', '91', '92', '93', '94', '95', '98', '211', '212', '213', '216', '218', '220', '221', '222', '223', '224', '225', '226', '227', '228', '229', '230', '231', '232', '233', '234', '235', '236', '237', '238', '239', '240', '241', '242', '243', '244', '245', '246', '247', '248', '249', '250', '251', '252', '253', '254', '255', '256', '257', '258', '260', '261', '262', '263', '264', '265', '266', '267', '268', '269', '290', '291', '297', '298', '299', '350', '351', '352', '353', '354', '355', '356', '357', '358', '359', '370', '371', '372', '373', '374', '375', '376', '377', '378', '380', '381', '382', '385', '386', '387', '389', '420', '421', '423', '501', '502', '503', '504', '505', '506', '507', '508', '509', '590', '591', '592', '593', '594', '595', '596', '597', '598', '599', '670', '672', '673', '674', '675', '676', '677', '678', '679', '680', '681', '682', '683', '685', '686', '687', '688', '689', '690', '691', '692', '699', '850', '852', '853', '855', '856', '880', '886', '960', '961', '962', '963', '964', '965', '966', '967', '968', '970', '971', '972', '973', '974', '975', '976', '977', '992', '993', '994', '995', '996', '998'],
        preventCloseDialog: false,
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
          gender: this.user.gender,
          countryCode: this.user.countryCode,
          phone: this.user.phone,
          position: ""
        },
        new: {
          firstName: this.user.name,
          middleName: this.user.middleName,
          lastName: this.user.surname,
          birthday: this.user.birthday,
          gender: this.user.gender,
          countryCode: this.user.countryCode,
          phone: this.user.phone,
          position: ""
        },
        updateFlags: {
          firstName: false,
          middleName: false,
          lastName: false,
          birthday: false,
          gender: false,
          countryCode: false,
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
    mainTabs () {
        return [
          { n: 1, icon: 'mdi-account', label: this.local.forms.profile.tabs[0] },
          { n: 2, icon: 'mdi-home-city', label: this.local.forms.profile.tabs[1] },
          { n: 3, icon: 'mdi-school', label: this.local.forms.profile.tabs[2] },
          { n: 4, icon: 'mdi-map-marker', label: this.local.forms.profile.tabs[3] },
        ]
    }
  },
  methods: {
      onSelectFile (files) {
          //console.log(files)
          this.avatar.loaded = files
          this.personalData.updateFlags.avatar = true
          this.checkChanges()
      },
      /*async tryAXIOS () {
        await axios.post('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/fio', {
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              "Authorization": "Token cf9c40d286a75705399d8e34d6ebf826de368e7a"
          },
          body: JSON.stringify({query: "Иванов Виктор Михайлович"})
        })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
      },*/
      async saveChanges () {
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

          if(this.avatar.loaded) {
            let img = this.$refs.vueavatar.getImageScaled()
            profileData.avatar = img.toDataURL()
          }

          console.log(fields)
          console.log(profileData)

          this.$store.dispatch('editUserProfile', profileData)
      },
      resetAvatar () {
        this.$refs.vueavatar.resetImage()
        this.avatar.scale = 1
        this.avatar.rotation = 0
        this.personalData.updateFlags.avatar = false
        this.checkChanges()
        //this.avatar.loaded = false
      },
      cancelAvaChange () {
        this.resetAvatar()
        this.editProfileDialog.changeAvaFlag = false
      },
      fieldChangeCheck (field) { // check if data in particular field has been changed

        if(!this.personalData.current[field] && !this.personalData.new[field]) { 
          this.personalData.updateFlags[field] = false
        } else if(this.personalData.current[field] !== this.personalData.new[field]) {
          this.personalData.updateFlags[field] = true
        } else {
          this.personalData.updateFlags[field] = false
        }

        this.checkChanges()

      },
      checkChanges () { // check if some data in the entire form has been changed
        
        const flagValues = []
        for (let flag in this.personalData.updateFlags) {
            flagValues.push(this.personalData.updateFlags[flag])
        }
        if (flagValues.includes(true)) {
          this.editProfileDialog.changesMade = true
        } else {
          this.editProfileDialog.changesMade = false
        }

      },
      onClose () {
        if (this.editProfileDialog.changesMade === true) {
          this.editProfileDialog.preventCloseDialog = true
        } else {
           this.editProfileDialog.dialog = false
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

    extend("digits", {
      ...digits,
      message: () => { return this.$store.getters.local.validation.phone }
    })
  }
}
</script>