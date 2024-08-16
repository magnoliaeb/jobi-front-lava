<template>
  <section class="py-10">
    <v-row>
        <v-col cols="12">
            <h2 class="fs-5xl font-weight-black  mb-6">Cambiar la contraseña</h2>
          </v-col>
    </v-row>
    <v-card class="pa-4 pa-md-8 rounded-xl" variant="flat">
      <!-- <v-card-title class="text-h5">
          Cambiar la contraseña
        </v-card-title> -->

      <v-form ref="form" v-model="valid">
        <v-row>
          
          <v-col cols="12">
            <v-text-field
              label="Contraseña anterior"
              v-model="oldPassword"
              :rules="[rules.required]"
              type="password"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="Nueva contraseña"
              v-model="newPassword"
              :rules="[rules.required, rules.minLength(6)]"
              type="password"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="Confirmar Contraseña"
              v-model="confirmPassword"
              :rules="[rules.required, rules.matchPassword]"
              type="password"
              outlined
              dense
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-btn color="primary" variant="flat" type="submit" :disabled="!valid" size="large" block  @click="updatePassword">
              Guardar y actualizar
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </section>
</template>

<script setup>
import { ref } from "vue";

const valid = ref(true);
const oldPassword = ref("");
const newPassword = ref("");
const confirmPassword = ref("");

const rules = {
  required: (value) => !!value || "Este campo es obligatorio.",
  minLength: (length) => (value) =>
    (value && value.length >= length) ||
    `Debe tener al menos ${length} caracteres.`,
  matchPassword: (value) =>
    value === newPassword.value || "Las contraseñas no coinciden.",
};

const updatePassword = () => {
  if (valid.value) {
    // Implementar la lógica de actualización de la contraseña aquí
    alert("¡Contraseña actualizada con éxito!");
  }
};
</script>
