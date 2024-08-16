<template>
  <section>
    <v-container class="d-flex justify-center align-center fill-height">
      <v-card
        class="pa-10 rounded-xl"
        width="100%"
        max-width="550"
        variant="flat"
      >
        <v-card-title class="fs-xl font-weight-bold mb-10 text-center">
          ¡Hola, Bienvenido de nuevo!
        </v-card-title>

        <v-form
          @submit.prevent="login"
          v-model="valid"
          lazy-validation
          ref="form"
        >
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="Correo electrónico"
                v-model="email"
                :rules="emailRules"
                outlined
                dense
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Contraseña"
                v-model="password"
                :rules="passwordRules"
                :type="showPassword ? 'text' : 'password'"
                outlined
                dense
                required
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="toggleShowPassword"
              ></v-text-field>
            </v-col>
            <!-- <v-col cols="12">
              <v-checkbox
                v-model="keepLoggedIn"
                label="Mantenerme conectado"
                dense
              ></v-checkbox>
            </v-col> -->
            <v-col cols="12">
              <v-btn
                type="submit"
                color="primary"
                block
                size="large"
                variant="flat"
                @click="login"
                :disabled="!valid"
              >
                Iniciar sesión
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card>
    </v-container>
  </section>
</template>

<script setup>
definePageMeta({
  layout: "auth",
});

import useValidation from "@/composables/useValidation";
import useApiService from "@/composables/useApiService";
import { useRouter } from "vue-router";

const { $swal } = useNuxtApp();
const { rules } = useValidation();
const { apiRequest } = useApiService();
const router = useRouter();

const email = ref("Araceli.Weissnat@Nicolas.ca");
const password = ref("password123");

const showPassword = ref(false);
const keepLoggedIn = ref(false);

const form = ref(null);
const valid = ref(false);

// Define las reglas directamente en el componente
const emailRules = [rules.required, rules.email];
const passwordRules = [rules.required, rules.minLength(8)]; // Cambia el 8 por el número de caracteres que desees

const login = async () => {
  if (form.value.validate()) {
    const data = {
      email: email.value,
      password: password.value,
    };
    // Implementa la lógica de inicio de sesión aquí
    // Form submission logic here
    const resp = await apiRequest(
      "POST",
      "http://localhost:4000/api/login-user",
      {},
      data
    );
    if (resp.error) {
      console.log(resp.error);
    } else {
      $swal.fire({
        icon: "success",
        title: "¡Bienvenido!",
        text: `Hola ${resp.data.user.name}, has iniciado sesión exitosamente.`,
        confirmButtonText: "Continuar",
        customClass: {
          confirmButton: "btn btn-green",
        },
        buttonsStyling: false,
      });
      localStorage.setItem("token", resp.data.token);
      form.value.reset();
      router.push("/home");
    }
  }
};

const toggleShowPassword = () => {
  showPassword.value = !showPassword.value;
};
</script>

<style lang="scss" scoped>
section {
  background-color: #f3f8f4;
  height: 100vh;
}
</style>
