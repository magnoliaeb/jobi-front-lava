<template>
    <section class="py-10">
        <v-row>
      <v-col cols="12">
        <h1 class="fs-5xl font-weight-black  mb-6">Configuraciones de la cuenta
        </h1>
      </v-col>
    </v-row>
      <v-card class="pa-4 pa-md-8 rounded-xl" variant="flat">
        <v-row>
          <v-col cols="12">
            <h2 class="fs-xl text-primary">Editar y actualizar
            </h2>
          </v-col>
        </v-row>
        <v-form ref="form" v-model="valid">
          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="firstName"
                label="Nombre"
                :rules="[rules.required]"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="lastName"
                label="Apellido"
                :rules="[rules.required]"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="email"
                label="Correo Electrónico"
                :rules="[rules.required, rules.email]"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="phoneNumber"
                label="Número de Teléfono"
                :rules="[rules.required, rules.phoneNumber]"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="password"
                label="Contraseña"
                type="password"
                :rules="[rules.required, rules.minLength(6)]"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="d-flex justify-end">
              <v-btn size="large" variant="flat" color="secondary" to="/change-password"><span class=" font-weight-bold">Cambiar Contraseña</span></v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto">
              <v-btn size="large" variant="flat" color="primary" @click="save">Guardar</v-btn>
            </v-col>
            <v-col cols="auto">
              <v-btn size="large" variant="text" @click="cancel">Cancelar</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const valid = ref(true);
  const firstName = ref('');
  const lastName = ref('');
  const email = ref('');
  const phoneNumber = ref('');
  const password = ref('');
  
  const rules = {
    required: (value) => !!value || "Este campo es obligatorio.",
    email: (value) => /.+@.+\..+/.test(value) || "Correo electrónico inválido.",
    phoneNumber: (value) =>
      /^\d{10}$/.test(value) || "El número de teléfono debe tener 10 dígitos.",
    minLength: (length) => (value) =>
      (value && value.length >= length) || `Debe tener al menos ${length} caracteres.`,
  };
  
  const save = () => {
    if (valid.value) {
      // Lógica para guardar cambios
      alert('¡Formulario guardado con éxito!');
    }
  };
  
  const cancel = () => {
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    phoneNumber.value = '';
    password.value = '';
  };
  
  const changePassword = () => {
    // Lógica para cambiar contraseña
    console.log("Redirigiendo a la página de cambio de contraseña...");
  };
  </script>
  