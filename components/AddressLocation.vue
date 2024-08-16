<!-- src/components/AddressLocation.vue -->

<template>
    <v-card tag="section" class="pa-4 pa-md-8 mb-8 rounded-xl" variant="flat">
      <v-row>
        <v-col cols="12">
          <h2 class="fs-xl text-primary">Dirección y Ubicación</h2>
        </v-col>
      </v-row>
      <v-form>
        <v-row>
          <v-col cols="12">
            <v-text-field 
              label="Dirección*" 
              v-model="address" 
              :rules="addressRules" 
              required
            />
          </v-col>
          <v-col cols="12" md="6" lg="3">
            <v-select 
              :items="countries" 
              label="País*" 
              v-model="country" 
              :rules="countryRules" 
              required
            />
          </v-col>
          <v-col cols="12" md="6" lg="3">
            <v-select 
              :items="cities" 
              label="Ciudad*" 
              v-model="city" 
              :rules="cityRules" 
              required
            />
          </v-col>
          <v-col cols="12" md="6" lg="3">
            <v-text-field 
              label="Código Postal*" 
              v-model="zipCode" 
              :rules="zipCodeRules" 
              required
            />
          </v-col>
          <v-col cols="12" md="6" lg="3">
            <v-select 
              :items="states" 
              label="Estado*" 
              v-model="state" 
              :rules="stateRules" 
              required
            />
          </v-col>
          <v-col cols="12">
            <v-text-field 
              label="Ubicación en el mapa*" 
              v-model="mapLocation" 
              :rules="mapLocationRules" 
              required
            />
          </v-col>
          <v-col cols="12">
            <div class="bg-grey bg-grey-lighten-3">
                <iframe :src="mapUrl" width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy"></iframe>

            </div>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
      <v-row>
        <v-col cols="12" sm="auto">
            <v-btn variant="flat" color="primary" size="large" class="px-6 font-weight-bold rounded-pill" @click="save">Guardar</v-btn>
        </v-col>
        <v-col cols="12" sm="auto">
            <v-btn variant="text" color="primary" size="large" class=" font-weight-bold" @click="cancel">Cancelar</v-btn>

        </v-col>
      </v-row>
  </template>
  
  <script setup>
  import { ref, computed, watch } from 'vue';
  
  // Variables reactivas para los campos del formulario
  const address = ref('');
  const country = ref('');
  const city = ref('');
  const state = ref('');
  const zipCode = ref('');
  const mapLocation = ref('');
  
  // Listas de ejemplo
  const countries = ref(['Afganistán', 'Bangladesh', 'India', 'Pakistán', 'Sri Lanka']);
  const cities = ref(['Kabul', 'Daca', 'Nueva Delhi', 'Islamabad', 'Colombo']);
  const states = ref(['Kandahar', 'Chittagong', 'Mumbai', 'Sindh', 'Galle']);
  
  // Reglas de validación
  const addressRules = [v => !!v || 'La dirección es obligatoria'];
  const countryRules = [v => !!v || 'El país es obligatorio'];
  const cityRules = [v => !!v || 'La ciudad es obligatoria'];
  const stateRules = [v => !!v || 'El estado es obligatorio'];
  const zipCodeRules = [
    v => !!v || 'El código postal es obligatorio',
    v => /^[0-9]{5}$/.test(v) || 'El código postal debe ser un número de 5 dígitos'
  ];
  const mapLocationRules = [v => !!v || 'La ubicación en el mapa es obligatoria'];
  
  // Computed para generar la URL del mapa
  const mapUrl = computed(() => {
    return `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(mapLocation.value)}`;
  });
  
  // Emitir el cambio de dirección
  const emitAddressUpdate = () => {
    const addressDetails = {
      address: address.value,
      country: country.value,
      city: city.value,
      state: state.value,
      zipCode: zipCode.value,
      mapLocation: mapLocation.value,
    };
    // Emitir el evento de actualización de dirección
    // emit('update-address', addressDetails);
  };
  
  // Watchers para detectar cambios en los campos y emitir la actualización
  watch([address, country, city, state, zipCode, mapLocation], emitAddressUpdate);
  </script>
  
  <style scoped></style>
  