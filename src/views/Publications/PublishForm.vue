<template>
   <v-container :fluid="$vuetify.breakpoint.md || $vuetify.breakpoint.sm || $vuetify.breakpoint.xs">

      <v-row>
         <v-col cols="12">

            <v-stepper v-model="e1">

               <v-row>
                  <v-col cols="12">

                     <v-toolbar extended flat tag="div">

                     <p
                        class="text-h5 text-sm-h4 text-md-h3 text-lg-h2 text--secondary my-5"
                     >
                        {{ local.forms.publicationForm.formTitle }}
                     </p>
                        <v-spacer></v-spacer>
                        <v-btn icon @click="close"><v-icon>mdi-close</v-icon></v-btn>
                     </v-toolbar>

                     <v-stepper-header>
                           
                        <v-stepper-step :complete="e1 > 1" step="1">{{ local.forms.publicationForm.stepNames[0] }}</v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step :complete="e1 > 2" step="2">{{ local.forms.publicationForm.stepNames[1] }}</v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step step="3">{{ local.forms.publicationForm.stepNames[2] }}</v-stepper-step>
                              
                     </v-stepper-header>

                  </v-col>
               </v-row>

               <v-row>
                  <v-col cols="12">

                     <ValidationObserver ref="obs" v-slot="{ invalid, validated, passes }">

                     <v-stepper-items>

                        <v-row>
                           <v-col cols="12" class="py-0">
                              <v-stepper-content step="1" class="py-0">
                                 <ValidationObserver v-if="e1 === 1" v-slot="{ invalid }" slim>
                                 <fieldset>
                                 <v-row>

                                    <v-col cols="12">
                                       <p class="text-subtitle-1 text-sm-h6 text-md-h5 text-lg-h4 text--secondary text-center">{{ local.forms.publicationForm.stepTitles[0] }}</p>
                                    </v-col>

                                    <v-col cols="12" sm="6">
                                       <v-select
                                          :items="local.forms.publicationForm.categorySelectItems"
                                          :label="local.forms.publicationForm.categorySelect"
                                          v-model="category"
                                          clearable
                                          outlined
                                          :dense="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"
                                          hide-details="auto"
                                       ></v-select>
                                    </v-col>

                                    <v-col cols="12" sm="6">
                                       <v-select
                                          :items="local.forms.publicationForm.typeSelectItems"
                                          :label="local.forms.publicationForm.typeSelect"
                                          v-model="type"
                                          clearable
                                          outlined
                                          :dense="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"
                                          hide-details="auto"
                                       ></v-select>
                                    </v-col>

                                    <v-col cols="12">
                                       <v-combobox
                                          :items="local.forms.sharedData.subjects"
                                          :label="local.forms.publicationForm.subjectSelect"
                                          v-model="subject"
                                          clearable
                                          outlined
                                          chips
                                          multiple
                                          :hint="local.forms.publicationForm.subjectSelectHint"
                                          persistent-hint
                                          :dense="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"
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

                                    <v-col cols="12" md="6">
                                       <ValidationProvider name="title" rules="required" v-slot="{ errors }">
                                          <v-text-field
                                             :label="local.forms.publicationForm.title + '*'"
                                             v-model="title"
                                             :error-messages="errors"
                                             outlined
                                             :dense="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"
                                             hide-details="auto"
                                          ></v-text-field>
                                       </ValidationProvider>
                                       
                                    </v-col>

                                    <v-col cols="12" md="6">
                                       <v-text-field
                                          :label="local.forms.publicationForm.subtitle"
                                          v-model="subtitle"
                                          outlined
                                          :dense="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"
                                          hide-details="auto"
                                       ></v-text-field>
                                    </v-col>

                                    <v-col cols="12">
                                       <v-textarea
                                          :label="local.forms.publicationForm.description"
                                          v-model="description"
                                          outlined
                                          :dense="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"
                                          hide-details="auto"
                                       ></v-textarea>
                                    </v-col>


                                    <v-col cols="12">
                                       <v-btn
                                          color="primary"
                                          @click="e1 = 2"
                                          rounded
                                          :disabled="invalid"
                                       >
                                          {{ local.forms.buttons.continue }}
                                          <v-icon right>mdi-arrow-right-circle</v-icon>
                                       </v-btn>
                                    </v-col>

                                 </v-row>
                                 </fieldset>
                                 </ValidationObserver>
                              </v-stepper-content>
                           </v-col>
                        </v-row>

                        <v-row>
                           <v-col cols="12" class="py-0">
                              <v-stepper-content step="2" class="py-0">
                                 
                                 <ValidationObserver v-if="e1 === 2" v-slot="{ invalid }" slim>
                                 <fieldset>
                                 <v-row>

                                    <v-col cols="12">
                                       <p class="text-subtitle-1 text-sm-h6 text-md-h5 text-lg-h4 text--secondary text-center">{{ local.forms.publicationForm.stepTitles[1] }}</p>
                                    </v-col>

                                    
                                    
                                    <v-col cols="12">
                                       <ValidationProvider name="contentType" rules="required" v-slot="{ errors }">
                                          <v-select
                                             :label="local.forms.publicationForm.contentTypeSelect + '*'"
                                             v-model="contentType"
                                             :error-messages="errors"
                                             :items="[{text: local.forms.publicationForm.contentTypeItems[0], value: 'file'}, {text: local.forms.publicationForm.contentTypeItems[1], value: 'html'}]"
                                             outlined
                                             :dense="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"
                                          >
                                          </v-select>
                                       </ValidationProvider>
                                    </v-col>
                                    
                                    <v-col cols="12">
                                       <!--<ValidationProvider v-if="contentType === 'file'" name="mainFile" :rules="{ required: true, size: 5120, ext: [doc,docx] }">-->
                                       <ValidationProvider v-if="contentType === 'file'" name="mainFile" rules="required|size:5120">

                                       <VueFileAgent v-if="contentType === 'file'"
                                          width="50px"
                                          class="mb-5"
                                          ref="mainFile"
                                          v-model="mainFile"
                                          :accept="'.doc,.docx,.odt,.pdf,.rtf,.txt,.html,.xls,.xlsx,.ppt,.pptx,.pages,.xps,.sxw'"
                                          :helpText="local.forms.publicationForm.mainFileText"
                                          :multiple="false"
                                          :deletable="true"
                                          :maxSize="'5MB'"
                                          :maxFiles="1"
                                          :errorText="{
                                             type: local.forms.publicationForm.mainFileErrText[0],
                                             size: local.forms.publicationForm.mainFileErrText[1],
                                          }"
                                          @select="chckFileType($event)"
                                          @beforedelete="mainFileDelete($event)"
                                       ></VueFileAgent>
                                       </ValidationProvider>

                                       <ValidationProvider v-else-if="contentType === 'html'" name="html" :rules="{ required: true, is_not: '<p></p>' }">
                                       <tiptap-vuetify
                                          class="mb-5"
                                          v-model="content"
                                          :extensions="extensions"
                                          :placeholder="local.forms.publicationForm.wysiwygPlaceholder"
                                       />
                                       </ValidationProvider>

                                    </v-col>
                                 </v-row>
                                 <v-row>
                                    <v-col cols="12">
                                       <v-btn
                                          color="primary"
                                          @click="e1 = 1"
                                          rounded
                                          outlined
                                       >
                                          <v-icon left>mdi-arrow-left-circle</v-icon>
                                          {{ local.forms.buttons.back }}
                                       </v-btn>
                                       <v-btn
                                          class="ml-2"
                                          color="primary"
                                          @click="e1 = 3"
                                          rounded
                                          :disabled="invalid || (contentType === 'file' && wrongMainFileType)"
                                       >
                                          {{ local.forms.buttons.continue }}
                                          <v-icon right>mdi-arrow-right-circle</v-icon>
                                       </v-btn>
                                    </v-col>

                                 </v-row>
                                 </fieldset>
                                 </ValidationObserver>

                              </v-stepper-content>
                           </v-col>
                        </v-row>
                              
                        <v-row>
                           <v-col cols="12" class="py-0">
                              <v-stepper-content step="3" class="py-0">

                                 <ValidationObserver v-if="e1 === 3" slim>
                                 <fieldset>
                                 <v-row>

                                    <v-col cols="12">
                                       <p class="text-subtitle-1 text-sm-h6 text-md-h5 text-lg-h4 text--secondary text-center">{{ local.forms.publicationForm.stepTitles[2] }}</p>
                                    </v-col>

                                    <v-col cols="12">

                                       <v-checkbox v-model="image" :label="local.forms.publicationForm.imgChkLabel"></v-checkbox>

                                       <ValidationProvider v-if="image" name="mainImage" rules="required|size:3072">
                                          <VueFileAgent v-if="image"
                                             class="mb-5"
                                             ref="mainImg"
                                             v-model="mainImg"
                                             :accept="'image/*'"
                                             :helpText="local.forms.publicationForm.mainImgText"
                                             :multiple="false"
                                             :deletable="true"
                                             :maxSize="'3MB'"
                                             :maxFiles="1"
                                             :errorText="{
                                                type: local.forms.publicationForm.mainImgErrText[0],
                                                size: local.forms.publicationForm.mainImgErrText[1],
                                             }"
                                             @select="chckImgType($event)"
                                             @beforedelete="mainImgDelete($event)"
                                          ></VueFileAgent>
                                       </ValidationProvider>
                                       
                                    </v-col>
                                    
                                    <v-col cols="12">
                                       <v-combobox multiple
                                          v-model="tags" 
                                          :label="local.forms.publicationForm.tagsLabel"
                                          :hint="local.forms.publicationForm.tagsHint"
                                          outlined
                                          clearable
                                          chips
                                          class="tag-input"
                                       >
                                          <template v-slot:selection="data">
                                             <v-chip
                                                :key="JSON.stringify(data.item)"
                                                v-bind="data.attrs"
                                                :input-value="data.selected"
                                                :disabled="data.disabled"
                                                close
                                                @click:close="data.parent.selectItem(data.item)"
                                             >
                                                <v-avatar left>
                                                   <v-icon>mdi-tag-outline</v-icon>
                                                </v-avatar>
                                                {{ data.item }}
                                             </v-chip>
                                          </template>                                       
                                       </v-combobox>
                                    </v-col>

                                    <v-col cols="12">

                                       <v-checkbox v-model="appendix" :label="local.forms.publicationForm.appndxChkLabel"></v-checkbox>

                                       <ValidationProvider v-if="appendix" name="appendixFiles" rules="required|size:1024">
                                          <VueFileAgent v-if="appendix"
                                             class="mb-5"
                                             ref="appendixFiles"
                                             v-model="appendixFiles"
                                             :helpText="local.forms.publicationForm.appndxText"
                                             :multiple="true"
                                             :deletable="true"
                                             :maxSize="'1MB'"
                                             :maxFiles="5"
                                             :theme="'list'"
                                             :errorText="{
                                                type: local.forms.publicationForm.appndxErrText[0],
                                                size: local.forms.publicationForm.appndxErrText[1],
                                             }"
                                             @beforedelete="appendixFilesDelete($event)"
                                          ></VueFileAgent>
                                       </ValidationProvider>
                                       
                                    </v-col>

                                 </v-row>
                                 </fieldset>
                                 </ValidationObserver>

                                 <v-row>
                                    <v-col cols="12">
                                       <v-btn color="primary"
                                          @click="e1 = 2"
                                          rounded
                                          outlined
                                       >
                                          <v-icon left>mdi-arrow-left-circle</v-icon>
                                          {{ local.forms.buttons.back }}
                                       </v-btn>
                                       <v-btn
                                          class="ml-2"
                                          color="primary"
                                          :disabled="invalid || (image && wrongMainImgType)"
                                          @click="passes(publish)"
                                          rounded
                                       >
                                          <v-icon left>mdi-text-box-check-outline</v-icon>
                                          {{ local.forms.buttons.publishMaterial }}
                                       </v-btn>
                                    </v-col>
                                 </v-row>

                              </v-stepper-content>
                           </v-col>
                        </v-row>

                     </v-stepper-items>

                     </ValidationObserver>

                  </v-col>
               </v-row>
            
            </v-stepper>
         </v-col>
      </v-row>

      <v-row>
         <v-col cols="12"><small class="text--secondary">*{{ local.requiredField }}</small></v-col>
      </v-row>

    <m-dialog-confirm
      :model="preventCloseDialog"
      :look="false"
      :icon="{icon: 'mdi-alert-circle-outline'}"
      :text="{headers: ['Публикация материала не завершена'], strings: ['Вы уверены, что хотите закрыть окно, не сохранив изменения?']}"
      :buttons="[{action: closeUnsaved, text: 'Да'}, {action: closePreventCloseDialog, text: 'Нет'}]"
    >
    </m-dialog-confirm>

   </v-container>     
</template>

<script>

import { required, is_not, image, size } from "vee-validate/dist/rules"
import { extend } from "vee-validate"
import { TiptapVuetify, Heading, Bold, Italic, Strike, Underline, Code, Paragraph, BulletList, OrderedList, ListItem, Link, Blockquote, HardBreak, HorizontalRule, History } from 'tiptap-vuetify'

export default {
   components: {
      TiptapVuetify,
   },
   data () {
      return {
         e1: 1,
         category: null,
         type: null,
         subject: null,
         title: null,
         subtitle: null,
         description: null,
         contentType: null,
         mainFile: [],
         wrongMainFileType: false,
         image: false,
         wrongMainImgType: false,
         mainImg: [],
         appendix: false,
         appendixFiles: [],
         extensions: [
            History,
            Blockquote,
            Link,
            Underline,
            Strike,
            Italic,
            ListItem,
            BulletList,
            OrderedList,
            [Heading, {
            options: {
               levels: [1, 2, 3]
            }
            }],
            Bold,
            Code,
            HorizontalRule,
            Paragraph,
            HardBreak
         ],
         content: ``, // editor's content
         tags: [],
         preventCloseDialog: false,
         prevRoute: null
      }
   },
   computed: {
      local () {
         return this.$store.getters.local
      },
      userActive () {
         return this.$store.getters.userActive
      }
   },
   methods: {
      chckFileType (fileRecord) {
         if(fileRecord[0].error.type === true) {
            this.wrongMainFileType = true
         } else {
            this.wrongMainFileType = false
         }
      },
      chckImgType (fileRecord) {
         if(fileRecord[0].error.type === true) {
            this.wrongMainImgType = true
         } else {
            this.wrongMainImgType = false
         }
      },
      mainFileDelete: function (fileRecord) {
         this.$refs.mainFile.deleteFileRecord(fileRecord)
      },
      mainImgDelete: function (fileRecord) {
         this.$refs.mainImg.deleteFileRecord(fileRecord)
      },
      appendixFilesDelete: function (fileRecord) {
         this.$refs.appendixFiles.deleteFileRecord(fileRecord)
      },
      publish() {

         let mainFile = null
         let mainFileInfo = null

         if(this.contentType === 'file' && this.mainFile) {
            mainFile = this.mainFile[0].file
            mainFileInfo = {size: this.mainFile[0].sizeText, extention: this.mainFile[0].ext, type: this.mainFile[0].type}
         }

         let mainImg = null
         let mainImgInfo = null

         if(this.image && this.mainImg) {
            mainImg = this.mainImg[0].file
            mainImgInfo = {size: this.mainImg[0].sizeText, extention: this.mainImg[0].ext, type: this.mainImg[0].type}
         }

         let appndxFiles = []
         let appndxFilesInfo =  []

         if(this.appendix && this.appendixFiles) {
            this.appendixFiles.forEach(function (item) {
               appndxFiles.push(item.file)
               appndxFilesInfo.push({size: item.sizeText, extention: item.ext, type: item.type})
            })
         }

         const article = {
            authorId: this.userActive.id,
            title: this.title,
            subtitle: this.subtitle,
            description: this.description,
            category: this.category,
            type: this.type,
            subject: this.subject,
            contentType: this.contentType,
            html: this.content,
            tags: this.tags,
            mainFile,
            mainFileInfo,
            mainImg,
            mainImgInfo,
            appndxFiles,
            appndxFilesInfo
         }
         this.$store.dispatch('articleCreate', article)
      },
      close () {
         if (this.title === null
            && this.subtitle === null
            && this.description === null
            && this.category === null
            && this.type === null
            && this.subject === null
            && this.contentType === null) {
               this.closeUnsaved()
            } else {
               this.preventCloseDialog = true
            }
      },
      closePreventCloseDialog () {
         this.preventCloseDialog = false
      },
      closeUnsaved () {
         let routeNext
         if(this.prevRoute) {
            routeNext = this.prevRoute
         } else {
            routeNext = '/'
         }
         this.$router.push(routeNext)
      }
   },
   beforeRouteEnter(to, from, next) {
      next(vm => {
         vm.prevRoute = from
      })
   },
   created () {
    extend("required", {
      ...required,
      message: () => { return this.$store.getters.local.validation.required }
    });

    extend("is_not", {
      ...is_not,
      message: () => { return this.$store.getters.local.validation.required }
    });
    extend("image", {
      ...image
    });
    extend("size", {
      ...size
    });
   }
}

</script>

<style scoped>

fieldset {
   border: none
}

</style>