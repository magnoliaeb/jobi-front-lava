<template>
  <v-card tag="section" class="pa-4 pa-md-8 rounded-xl mb-8" variant="flat">
    <v-row>
      <v-col cols="12">
        <h2 class="fs-xl text-primary">Educación</h2>
      </v-col>

      <v-col cols="12">
        <v-form ref="educationForm" v-model="valid">
          <v-row>
            
            <v-col cols="12">
              <v-text-field
                label="Título*"
                v-model="degreeTitle"
                outlined
                dense
                required
                :rules="[rules.required]"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Academia*"
                v-model="institution"
                outlined
                dense
                required
                :rules="[rules.required]"
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-select
                label="Año*"
                v-model="startYear"
                :items="yearList"
                outlined
                dense
                required
                :rules="[rules.required]"
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-select
                label="Año*"
                v-model="endYear"
                :items="yearList"
                outlined
                dense
                required
                :rules="[rules.required]"
              />
            </v-col>
            <v-col cols="12">
              <v-textarea
                label="Descripción*"
                v-model="educationDescription"
                rows="3"
                outlined
                dense
                required
                :rules="[rules.required]"
              />
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
import { ref } from "vue";

// const educationList = ref(["Añadir Educación"]);
// const selectedEducation = ref("");
const degreeTitle = ref("");
const institution = ref("");
const startYear = ref("");
const endYear = ref("");
const yearList = ref(
  Array.from({ length: 50 }, (_, i) =>
    (new Date().getFullYear() - i).toString()
  )
);
const educationDescription = ref("");
const valid = ref(false);

const rules = {
  required: (v) => !!v || "Este campo es obligatorio",
};
</script>

<style scoped>
.education-container {
  background-color: #f3f8f4;
}
.font-weight-bold {
  color: #1c3b35;
}
</style>
