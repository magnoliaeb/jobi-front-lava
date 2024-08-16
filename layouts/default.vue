<template>
  <v-app style="background-color: #fafafa">
    <!-- Barra lateral izquierda -->
    <v-navigation-drawer
      app
      permanent
      class="navbar pt-8 pb-10"
    >
      <!-- Logo -->
      <div class="mb-10">
        <v-img
          contain
          class="d-block mx-auto"
          height="60px"
          width="auto"
          src="../public/images/logo.png"
          alt="logo"
        />
      </div>
      <!-- Avatar y Nombre de Usuario -->
      <div class="d-flex justify-center flex-column mb-6">
        <div class="mx-auto d-block">
          <v-img
            src="https://randomuser.me/api/portraits/men/85.jpg"
            width="80px"
            height="80px"
            class="bg-grey-lighten-3 rounded-circle"
          ></v-img>
        </div>
        <div class="text-center">
          <h3 class="fs-lg font-weight-normal">Zubayer Hasan</h3>
        </div>
      </div>

      <!-- Menú de navegación -->
      <ul class="px-4">
        <li
          class="my-3"
          v-for="(item, index) in menuItems"
          :key="index"
        >
          <router-link
            class="pa-3 d-flex align-center rounded-lg"
            :class="{ 'bg-primary': $route.path === item.link }"
            :to="item.link"
            v-slot="{ isActive }"
          >
            <v-icon
              :color="isActive ? 'white' : 'grey-darken-3'"
              class="mr-3"
            >{{ item.icon }}</v-icon>
            <div class="font-weight-normal">{{ item.title }}</div>
          </router-link>
        </li>
        <li
          class="my-3 pa-3 d-flex align-center rounded-lg cursor-pointer"
        >
          <v-icon color="grey-darken-3" class="mr-3">mdi-account-remove</v-icon>
          <div class="font-weight-normal">Eliminar cuenta</div>
        </li>
      </ul>

      <!-- Cerrar sesión -->
      <ul class="px-4 mt-16">
        <v-hover v-slot:default="{ isHovering, props }">
          <li
            v-bind="props"
            class="my-3 pa-3 d-flex align-center rounded-lg cursor-pointer"
          >
            <v-icon color="grey-darken-3" class="mr-3">mdi-logout</v-icon>
            <div :class="{ 'text-red': isHovering }" class="font-weight-normal">
              Cerrar sesión
            </div>
          </li>
        </v-hover>
      </ul>
    </v-navigation-drawer>

    <!-- Barra de navegación superior -->
    <v-app-bar
      flat
      color="#fafafa"
      app
      class="align-center pa-2"
      
    >
    <v-row class="justify-end">
      <v-col cols="auto">
         <!-- Barra de búsqueda -->
    <!-- <v-text-field
      v-model="searchQuery"
      placeholder="Search here.."
      hide-details
      flat
      class="mr-4"
      prepend-inner-icon="mdi-magnify"
      solo
      background-color="#E8ECEB"
      rounded
    ></v-text-field> -->
        <!-- Notificación -->
        <!-- <v-btn icon>
          <v-badge content="1" color="red" overlap>
            <v-icon>mdi-bell-outline</v-icon>
          </v-badge>
        </v-btn> -->
  
        <!-- Botón para publicar empleo -->
         <v-hover v-slot:default="{ isHovering, props }">
        <v-btn v-bind="props" size="large" :color="isHovering ? 'secondary' : 'primary'" variant="flat"  class="rounded-pill ">
          <span class="font-weight-bold fs-sm" >Publicar un trabajo</span>
        </v-btn>
         </v-hover>

      </v-col>
    </v-row>
    </v-app-bar>

    <!-- Contenido principal -->
    <v-main>
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const menuItems = ref([
  { title: "Dashboard", icon: "mdi-view-dashboard-outline", link: "/home" },
  { title: "Mi perfil", icon: "mdi-account-outline", link: "/profile" },
  { title: "Mi currículum", icon: "mdi-briefcase-outline", link: "/resume" },
  {
    title: "Alerta de empleos",
    icon: "mdi-clipboard-alert-outline",
    link: "/job-alert",
  },
  {
    title: "Trabajos guardados",
    icon: "mdi-account-multiple-outline",
    link: "/saved-jobs",
  },
  {
    title: "Configuraciones de la cuenta",
    icon: "mdi-cog-outline",
    link: "/settings",
  },
]);
</script>

<style lang="scss" scoped>
.v-container {
  // background-color: #f3f8f4;
  width: 95% !important;
}

a {
  color: black;

}


.navbar {
  border: 0 !important;
}
</style>
