<template>
  <section class="mb-8">
    <v-row>
      <v-col cols="12">
        <h1 class="fs-5xl font-weight-black">Mi currículum</h1>
      </v-col>
      <v-col cols="12">
        <v-card class="pa-4 pa-md-8 rounded-xl" variant="flat">
          <v-row>
            <v-col cols="12">
              <h2 class="fs-lg text-primary font-weight-bold">
                Anexo de currículum
              </h2>
            </v-col>
          </v-row>
          <v-col cols="12">
            <v-form ref="cvForm" v-model="formValid" @submit.prevent="uploadCV">
              <v-row>
                <v-col cols="12">
                  <v-file-input
                    label="Adjunto CV*"
                    v-model="cvFiles"
                    multiple
                    show-size
                    truncate-length="20"
                    accept=".pdf, .doc, .docx"
                    prepend-icon="mdi-paperclip"
                    outlined
                    dense
                    :rules="cvRules"
                    required
                  />
                </v-col>
                <v-col cols="12">
                  <ul>
                    <li
                      class="d-flex justify-space-between align-center mb-3 rounded-lg px-6 py-2 bg-grey-lighten-4"
                      v-for="(file, index) in cvFiles"
                      :key="index"
                    >
                      <p>{{ file.name }}</p>
                      <v-btn
                        class=""
                        variant="text"
                        icon
                        @click="removeFile(index)"
                      >
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                    </li>
                  </ul>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                
                  <v-btn
                    color="grey-lighten-2"
                    variant="flat"
                    @click="uploadCV" class="mr-4" :disabled="!formValid"
                  >
                    <span class="font-weight-bold text-primary"
                      >+ Agregar más enlace</span
                    >
                  </v-btn>
                  <p class="fs-xs text-grey">Subir archivo .pdf, .doc, .docx</p>
                </v-col>
              </v-row>
            </v-form>
          </v-col>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script setup>
import { ref } from "vue";

const cvFiles = ref([]);
const formValid = ref(false);

// Reglas de validación para el campo de archivos
const cvRules = [
  (v) => !!v.length || "Se requiere al menos un archivo.",
  (v) => v.length <= 3 || "Puedes subir un máximo de 3 archivos.",
  (v) =>
    v.every((file) =>
      [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ].includes(file.type)
    ) || "Solo se permiten archivos .pdf, .doc, .docx.",
];

const removeFile = (index) => {
  cvFiles.value.splice(index, 1);
};

const uploadCV = () => {
  if (cvFiles.value.length > 0) {
    console.log("CV files uploaded:", cvFiles.value);
  } else {
    console.log("No se ha seleccionado ningún archivo.");
  }
};
</script>
