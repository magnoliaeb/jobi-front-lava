<template>
    <section>
      <v-card class="pa-4 pa-md-8 rounded-xl mb-8" variant="flat">
        <v-row>
          <v-col cols="12">
            <h2 class="fs-xl text-primary">Portafolio</h2>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            v-for="(image, index) in portfolioImages"
            :key="index"
            cols="12"
            md="3"
            class="mb-4"
          >
            <v-card
              variant="flat"
              class="bg-grey-lighten-2 pa-0 rounded-lg overflow-hidden"
              height="200"
            >
              <v-img
                cover
                :src="image.src"
                height="100%"
                width="100%"
                class=""
              ></v-img>
              <v-btn
                icon
                size="x-small"
                variant="tonal"
                color=""
                class="position-absolute top-0 right-0 mt-2 mr-2"
                @click="removeImage(index)"
              >
                <v-icon color="black">mdi-close</v-icon>
              </v-btn>
            </v-card>
          </v-col>
          <v-col cols="12" md="3" class="mb-4">
            <v-card
              variant="flat"
              class="bg-grey-lighten-2 pa-0 rounded-lg overflow-hidden d-flex align-center justify-center"
              height="200"
              @click="openAddImageDialog"
            >
              <v-row align="center" justify="center">
                <v-icon size="40">mdi-plus</v-icon>
                <span class="ml-2">Añadir más</span>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
      <v-row>
        <v-col cols="12" sm="auto">
          <v-btn
            variant="flat"
            color="primary"
            size="large"
            class="px-6 font-weight-bold rounded-pill"
            @click="savePortfolio"
            >Guardar</v-btn
          >
        </v-col>
        <v-col cols="12" sm="auto">
          <v-btn
            variant="text"
            color="primary"
            size="large"
            class="font-weight-bold"
            @click="cancelPortfolio"
            >Cancelar</v-btn
          >
        </v-col>
      </v-row>
  
      <!-- Dialogo para añadir imágenes -->
      <v-dialog v-model="addImageDialog" max-width="600px">
        <v-card class="rounded-lg" variant="flat">
          <v-card-title>
            <span class="fs-xl font-weight-bold">Añadir imagen</span>
          </v-card-title>
          <v-card-text>
            <v-file-input
              v-model="newImage"
              label="Selecciona una imagen"
              accept="image/*"
              clearable
            ></v-file-input>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" variant="flat" @click="confirmAddImage">Añadir</v-btn>
            <v-btn color="primary" variant="text"  @click="closeAddImageDialog">Cancelar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Imágenes iniciales del portafolio
  const portfolioImages = ref([
    { src: 'https://picsum.photos/id/11/500/300' },
    { src: 'https://picsum.photos/id/12/500/300' },
    { src: 'https://picsum.photos/id/13/500/300' },
    { src: 'https://picsum.photos/id/14/500/300' },
  ]);
  
  // Estado del diálogo y nueva imagen seleccionada
  const addImageDialog = ref(false);
  const newImage = ref('');
  
  // Función para abrir el diálogo de añadir imagen
  function openAddImageDialog() {
    addImageDialog.value = true;
  }
  
  // Función para cerrar el diálogo de añadir imagen
  function closeAddImageDialog() {
    addImageDialog.value = false;
    newImage.value = '';
  }
  
  // Función para confirmar la adición de la imagen
  function confirmAddImage() {
    if (newImage.value) {
      portfolioImages.value.push({ src: URL.createObjectURL(newImage.value) });
      closeAddImageDialog();
    }
  }
  
  // Función para eliminar una imagen
  function removeImage(index) {
    portfolioImages.value.splice(index, 1);
  }
  
  // Función para guardar el portafolio
  function savePortfolio() {
    // Lógica para guardar el portafolio
    console.log('Portafolio guardado:', portfolioImages.value);
  }
  
  // Función para cancelar cambios en el portafolio
  function cancelPortfolio() {
    // Lógica para cancelar cambios
    console.log('Cambios cancelados');
  }
  </script>
  