<template>
  <section class="mb-8">
    <v-card class="rounded-xl pa-4 pa-md-8" variant="flat">
      <v-row>
        <v-col cols="12">
          <h2 class="fs-xl text-primary">
            Introducción y descripción general
          </h2>
        </v-col>

        <v-col cols="12">
          <v-form ref="introForm">
            <v-row>
              <v-col cols="12">
                <v-textarea
                  label="Descripción general*"
                  v-model="generalDescription"
                  rows="4"
                  outlined
                  dense
                  hint="Breve descripción de tu currículum. Las URL están hipervinculadas."
                  persistent-hint
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-file-input
                  label="+ Agregar imagen de introducción"
                  v-model="introImage"
                  accept="image/*"
                  prepend-icon="mdi-image"
                  outlined
                  dense
                />
              </v-col>
            </v-row>
            <v-row v-if="introImage" class="mt-4">
              <v-col cols="12" md="6" class="">
                <v-card width="100%" height="250" variant="flat" class="bg-grey-lighten-3 rounded-lg">
                  <v-img conatain
                    :src="introImageUrl"
                    alt="Imagen de introducción"
                    width="100%"
                  />

                </v-card>
              </v-col>
              <v-col cols="12" class="d-flex justify-end">
                <v-btn icon @click="removeImage">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </v-card>
  </section>
</template>

<script setup>
import { ref, watch } from "vue";

const generalDescription = ref("");
const introImage = ref(null);
const introImageUrl = ref("");

watch(introImage, (newImage) => {
  if (newImage) {
    introImageUrl.value = URL.createObjectURL(newImage);
  } else {
    introImageUrl.value = "";
  }
});

const removeImage = () => {
  introImage.value = null;
  introImageUrl.value = "";
};
</script>
