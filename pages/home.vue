<template>
   <v-btn @click="showAlert">Mostrar Alerta</v-btn>
 </template>
 
 <script setup>
 const { $swal } = useNuxtApp();
 
 const showAlert = () => {
   $swal.fire({
     title: '¡Hola!',
     text: 'Esto es una alerta de SweetAlert2',
     icon: 'success',
     confirmButtonText: 'Aceptar'
   });
 };
 </script>
 