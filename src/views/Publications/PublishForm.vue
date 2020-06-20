<template>
   <v-container fluid>

      <v-row>
         <v-col cols="12">

            <v-stepper v-model="e1">

               <v-row>
                  <v-col cols="12">

                     <p
                        class="text-h5 text-sm-h4 text-md-h3 text-lg-h2 text--secondary text-center my-5"
                     >
                        {{ local.forms.publicationForm.formTitle }}
                     </p>
                     
                     <v-stepper-header>
                           
                        <v-stepper-step :complete="e1 > 1" step="1">Name of step 1</v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step :complete="e1 > 2" step="2">Name of step 2</v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step step="3">Name of step 3</v-stepper-step>
                              
                     </v-stepper-header>

                  </v-col>
               </v-row>

               <v-row>
                  <v-col cols="12">
                     <v-stepper-items>

                        <v-row>
                           <v-col cols="12">
                              <v-stepper-content step="1">

                                 <v-row>

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

                                    <v-col cols="12" md="6">
                                       <v-text-field
                                          :label="local.forms.publicationForm.title"
                                          v-model="title"
                                          outlined
                                          :dense="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"
                                          hide-details="auto"
                                       ></v-text-field>
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
                                       <v-btn color="primary" @click="e1 = 2">Continue</v-btn>
                                       <v-btn text>Cancel</v-btn>
                                    </v-col>

                                 </v-row>

                              </v-stepper-content>
                           </v-col>
                        </v-row>

                        <v-row>
                           <v-col cols="12">
                              <v-stepper-content step="2">
                                 <VueFileAgent ></VueFileAgent>
                                    <v-btn color="primary" @click="e1 = 3">Continue</v-btn>
                                    <v-btn color="primary" @click="e1 = 1">Back</v-btn>
                              </v-stepper-content>
                           </v-col>
                        </v-row>
                              
                        <v-row>
                           <v-col cols="12">
                              <v-stepper-content step="3">
                                 
                              </v-stepper-content>
                           </v-col>
                        </v-row>

                     </v-stepper-items>
                  </v-col>
               </v-row>
            
            </v-stepper>
         </v-col>
      </v-row>

   </v-container>     
</template>

<script>

export default {

    data () {
        return {
            e1: 1,
            category: null,
            type: null,
            title: null,
            subtitle: null,
            description: null
        }
    },
    computed: {
        local () {
          return this.$store.getters.local
        }
    }

}

</script>