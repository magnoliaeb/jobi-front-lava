<!-- src/components/SocialMedia.vue -->

<template>
  <v-card tag="section" class="pa-8 mb-8 rounded-xl" variant="flat">
    <v-row>
      <v-col cols="12">
        <h2 class="fs-xl text-primary">Redes Sociales</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" v-for="(link, index) in socialMediaLinks" :key="index">
        <v-text-field 
          :label="'Red Social ' + (index + 1)" 
          v-model="socialMediaLinks[index]"
          :rules="linkRules"
          @input="updateSocialMediaLinks" 
          outlined
          dense
          required
        />
      </v-col>
      <v-col cols="12">
        <v-btn color="grey-lighten-2" variant="flat" @click="addSocialMediaLink">
          <span class=" font-weight-bold text-primary">+ Agregar más enlace</span>
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
import { ref, watch } from 'vue';

// Propiedad inicial
const initialLinks = ref(['']); // Comienza con un campo visible por defecto

// Variables de estado
const socialMediaLinks = ref([...initialLinks.value]);

// Reglas de validación
const linkRules = [
  v => !!v || 'El enlace es obligatorio',
  v => (v && v.length <= 100) || 'El enlace no debe exceder los 100 caracteres',
  v => isValidURL(v) || 'El enlace debe ser una URL válida'
];

// Métodos
const addSocialMediaLink = () => {
  socialMediaLinks.value.push('');  // Agrega un nuevo campo vacío
};

const updateSocialMediaLinks = () => {
  // Aquí puedes emitir el evento si es necesario
  // Emitirías algo como: emit('update-links', socialMediaLinks.value);
};

// Valida si la URL es válida
const isValidURL = (url) => {
  const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocolo
    '((([a-zA-Z0-9\\-])+\\.)+[a-zA-Z]{2,})'+ // dominio
    '(\\/[a-zA-Z0-9\\-._~:?#[\\]@!$&\'()*+,;=]*)*'+ // ruta
    '(\\?[a-zA-Z0-9\\-._~:?#[\\]@!$&\'()*+,;=]*)?'+ // query string
    '(#[a-zA-Z0-9\\-._~:?#[\\]@!$&\'()*+,;=]*)?$'); // fragmento
  return pattern.test(url);
};

// Watcher para detectar cambios en socialMediaLinks y emitirlos
watch(socialMediaLinks, (newLinks) => {
  updateSocialMediaLinks(newLinks);
});
</script>

<style scoped>

</style>
