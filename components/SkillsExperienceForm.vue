<template>
  <v-card class="pa-4 pa-md-8 rounded-xl mb-8" variant="flat">
    <v-row>
      <v-col cols="12">
        <h2 class="fs-xl text-primary">Habilidades y experiencia</h2>
      </v-col>
      <v-col cols="12">
        <!-- Habilidades -->
        <v-autocomplete
          v-model="skills"
          :items="availableSkills"
          chips
          multiple
          label="Añadir habilidades*"
          clearable
          chip-color="secondary"
          :rules="skillsRules"
        ></v-autocomplete>
      </v-col>
    </v-row>
    <!-- Experiencia laboral -->
    <v-row v-for="(experience, index) in experiences" :key="index" class="mb-4">
      <v-col cols="12">
        <v-text-field
          v-model="experience.title"
          label="Título*"
          placeholder="Diseñador principal de productos"
          clearable
          :rules="titleRules"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="experience.company"
          label="Compañía*"
          placeholder="Amazon Inc"
          clearable
          :rules="companyRules"
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-select
          v-model="experience.startYear"
          :items="years"
          label="Año de inicio*"
          placeholder="2023"
          :rules="startYearRules"
        ></v-select>
      </v-col>
      <v-col cols="6">
        <v-select
          v-model="experience.endYear"
          :items="years"
          label="Año de finalización*"
          placeholder="2023"
          :rules="[...endYearRules, () => endYearOrderRule(experience.startYear, experience.endYear)]"
        ></v-select>
      </v-col>
      <v-col cols="12">
        <v-textarea
          v-model="experience.description"
          label="Descripción*"
          placeholder="Describe tu experiencia..."
          rows="3"
          clearable
          :rules="descriptionRules"
        ></v-textarea>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="">
        <!-- Añadir más experiencia -->
        <v-btn color="grey-lighten-2" variant="flat" @click="addExperience">
          <span class=" font-weight-bold text-primary">+ Agregar más experiencia</span>
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
import { ref } from "vue";

const skills = ref(["HTML5", "CSS", "JavaScript"]);
const availableSkills = ref([
  "HTML5",
  "CSS",
  "JavaScript",
  "Vue.js",
  "Vuetify",
  "React",
  "Node.js",
]);

const experiences = ref([
  { title: "", company: "", startYear: "", endYear: "", description: "" },
]);

const years = ref(
  Array.from({ length: new Date().getFullYear() - 1999 }, (_, i) => i + 2000)
);

// Reglas de validación
const skillsRules = [v => !!v.length || 'Añade al menos una habilidad.'];
const titleRules = [v => !!v || 'El título es obligatorio.'];
const companyRules = [v => !!v || 'La compañía es obligatoria.'];
const startYearRules = [v => !!v || 'Selecciona un año de inicio.'];
const endYearRules = [v => !!v || 'Selecciona un año de finalización.'];
const endYearOrderRule = (startYear, endYear) => !startYear || endYear >= startYear || 'El año de finalización debe ser mayor o igual al año de inicio.';
const descriptionRules = [v => !!v || 'La descripción es obligatoria.'];

function addExperience() {
  experiences.value.push({
    title: "",
    company: "",
    startYear: "",
    endYear: "",
    description: "",
  });
}
</script>
