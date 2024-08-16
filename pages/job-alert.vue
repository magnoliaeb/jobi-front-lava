<template>
  <section class="py-10">
    <v-row class="justify-space-between align-center mb-4">
      <v-col cols="12" md="auto">
        <h1 class="fs-5xl font-weight-black">Alertas de trabajo</h1>
      </v-col>
      <v-col cols="12" md="3">
        <v-select
          hide-details
          v-model="sortBy"
          :items="sortOptions"
          label="Ordenar por*"
        ></v-select>
      </v-col>
    </v-row>
    <v-card class="pa-4 pa-md-8 rounded-xl" variant="flat">
      <v-row>
        <v-col cols="12" md="7">
          <!-- Barra de búsqueda -->
          <v-text-field
            v-model="searchQuery"
            placeholder="Busca aquí.."
            hide-details
            flat
            prepend-inner-icon="mdi-magnify"
            solo
            background-color="#E8ECEB"
            rounded
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <!-- Tabla utilizando v-data-table-virtual -->
          <v-data-table-virtual
            :headers="headers"
            :items="filteredJobs"
            height="auto"
            item-value="title"
          >
            <template v-slot:item.status="{ item }">
              <v-chip :color="getStatusColor(item.status)" dark>
                {{ item.status }}
              </v-chip>
            </template>
          </v-data-table-virtual>
        </v-col>
      </v-row>
    </v-card>
    <v-pagination v-model="page" rounded="circle" :length="pageCount"></v-pagination>
  </section>
</template>

<script setup>
import { ref, computed, watch } from "vue";

// Estado y opciones
const searchQuery = ref("");
const sortBy = ref("Todos"); // Inicialmente seleccionado "Todos"
const sortOptions = ["Todos", "Pending", "Completed", "Date"];
const page = ref(1);
const itemsPerPage = 3; // Cambia este valor según la cantidad de elementos que quieres por página
const pageCount = ref(1);

// Cabeceras de la tabla
const headers = [
  { title: "Title", key: "title" },
  { title: "Type", key: "type" },
  { title: "Location", key: "location" },
  { title: "Job Created", key: "jobCreated" },
  { title: "Applicants", key: "applicants" },
  { title: "Status", key: "status" },
];

// Datos de los trabajos
const jobs = ref([
  {
    title: "Brand & Producer Designer",
    type: "Fulltime",
    location: "Spain",
    jobCreated: "13 Aug, 2022",
    applicants: "130 Applications",
    status: "Active",
  },
  {
    title: "Marketing Specialist",
    type: "Part-time",
    location: "UK",
    jobCreated: "05 Jun, 2022",
    applicants: "20 Applicants",
    status: "Pending",
  },
  {
    title: "Accounting Manager",
    type: "Fulltime",
    location: "USA",
    jobCreated: "27 Sep, 2021",
    applicants: "273 Applicants",
    status: "Expired",
  },
  {
    title: "Developer for IT company",
    type: "Fulltime",
    location: "Germany",
    jobCreated: "14 Feb, 2021",
    applicants: "70 Applicants",
    status: "Active",
  },
]);

// Filtrar los trabajos según la búsqueda y el filtro de estado
const filteredJobs = computed(() => {
  let filtered = jobs.value;

  // Filtrar por la búsqueda
  if (searchQuery.value) {
    filtered = filtered.filter((job) =>
      job.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }

  // Filtrar por el estado solo si se selecciona una opción distinta a "Todos"
  if (sortBy.value && sortBy.value !== "Todos") {
    filtered = filtered.filter((job) =>
      job.status.toLowerCase().includes(sortBy.value.toLowerCase())
    );
  }

  // Calcular la cantidad de páginas
  pageCount.value = Math.ceil(filtered.length / itemsPerPage);

  // Filtrar por paginación
  return filtered.slice((page.value - 1) * itemsPerPage, page.value * itemsPerPage);
});

// Función para obtener el color del estado
function getStatusColor(status) {
  switch (status) {
    case "Active":
      return "green";
    case "Pending":
      return "yellow";
    case "Expired":
      return "red";
    default:
      return "grey";
  }
}

// Resetear la paginación al filtrar
watch([searchQuery, sortBy], () => {
  page.value = 1;
});
</script>

<style scoped>
/* Estilos personalizados */
</style>
