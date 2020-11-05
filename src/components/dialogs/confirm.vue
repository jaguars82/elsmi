<template>

    <v-dialog
      :persistent="buttons?true:false"
      v-model="model"
      :max-width="look.maxWidth?look.maxWidth:'290px'"
    >
      <v-card>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" align="center">
                <v-icon :size="icon.size?icon.size:120" :color="icon.color?icon.color:'warning lighten-2'">{{ icon.icon }}</v-icon>
                  
                <div v-if="text.headers">
                  <p v-for="(header, index) in text.headers" :key="index">
                    {{ header }}
                  </p>
                </div>

                <div v-if="text.strings">
                  <p v-for="(string, index) in text.strings" :key="index">
                    {{ string }}
                  </p>
                </div>

              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions v-if="buttons">
          <v-spacer></v-spacer>
          <v-btn v-for="(button, index) in buttons" :key="index" :color="button.color?button.color:'blue darken-1'" text @click="button.action">{{ button.text }}</v-btn>
          <!--<v-btn color="blue darken-1" text @click="closeUnsaved">Да</v-btn>
          <v-btn color="blue darken-1" text @click="editProfileDialog.preventCloseDialog = false">Нет</v-btn>-->
        </v-card-actions>
      </v-card>
    </v-dialog>

</template>

<script>

    export default {
        props: ['model', 'look', 'icon', 'text', 'buttons']
    }

</script>