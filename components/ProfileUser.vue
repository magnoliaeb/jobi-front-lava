<template>
  <section class="mb-8">
    <v-row>
      <v-col cols="12">
        <h1 class="fs-5xl font-weight-black  mb-6">Mi perfil</h1>
      </v-col>
    </v-row>
    <v-card class="pa-4 pa-md-8 rounded-xl" variant="flat">
      <v-row>
        <v-col cols="12" md="4" class="d-flex align-center">
          <v-avatar size="100" class="bg-grey bg-grey-lighten-2 mr-5">
            <img src="" alt="User Photo" />
          </v-avatar>
          <v-btn variant="flat" color="secondary  font-weight-bold" @click="uploadPhoto">Subir nueva foto</v-btn>
          <v-btn variant="text" color=" black font-weight-bold" class="ml-2" @click="deletePhoto">Borrar</v-btn>
        </v-col>
        <v-col cols="12" md="12">
          <v-form ref="profileForm" v-model="valid" @submit.prevent="submitProfile">
            <v-row>
              <v-col cols="12">
                <v-text-field 
                  v-model="fullName" 
                  :rules="nameRules"
                  label="Nombre completo*" 
                  outlined 
                  dense 
                  required 
                />
              </v-col>
              <v-col cols="12">
                <v-textarea 
                  v-model="bio" 
                  :rules="bioRules"
                  label="Biografía*" 
                  outlined 
                  dense 
                  rows="4" 
                  required
                  hint="Breve descripción de tu perfil. Las URL están hiper-vinculadas." 
                />
              </v-col>
            </v-row>
            <!-- <v-btn type="submit" :disabled="!valid">Guardar cambios</v-btn> -->
          </v-form>
        </v-col>
      </v-row>
    </v-card>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// Variables de estado
const fullName = ref('El señor Rashed Kabir');
const bio = ref('Escribe algo interesante sobre ti...');
const valid = ref(false);

// Reglas de validación
const nameRules = [
  v => !!v || 'El nombre es obligatorio',
  v => v.length >= 3 || 'El nombre debe tener al menos 3 caracteres',
];

const bioRules = [
  v => !!v || 'La biografía es obligatoria',
  v => v.length <= 200 || 'La biografía no debe exceder los 200 caracteres',
];

const uploadPhoto = () => {
  // Lógica para subir una nueva foto
};

const deletePhoto = () => {
  // Lógica para borrar la foto
};

const submitProfile = () => {
  if (valid.value) {
    // Lógica para enviar el formulario del perfil
    console.log('Formulario enviado:', { fullName: fullName.value, bio: bio.value });
  } else {
    console.log('Formulario no válido');
  }
};
</script>
