<template>
  <h1>Página de Productos</h1>
  <ListaProductos  
    v-if="!route.params.view === 'lista'"
  />
  <DetalleProducto
    v-if="route.params.view === 'detalle'"
  />

  <Formulario
    v-if="route.params.view === 'editar'"
  />

</template>

<script setup>
    import { ref } from 'vue';
    import db from '../constants/db.js';
    import ListaProductos from '@/componentes/ListaProductos.vue';
    import DetalleProducto from '@/componentes/DetalleProducto.vue';
    import { useRoute } from 'vue-router';
import Formulario from '@/componentes/Formulario.vue';

    const route = useRoute();

    console.log(db);
    const productos = ref(db); 
    console.log(productos);

    // Metodos CRUD

    const agregarProducto = (producto) => {
      productos.value.push(producto);
    };

    const editarProducto = (id, productoActualizado) => {
      const index = productos.value.findIndex(p => p.id === id);
      if (index !== -1) {
        productos.value[index] = productoActualizado;
      }
    };

    const eliminarProducto = (id) => {
      productos.value = productos.value.filter(p => p.id !== id);
    };

</script>

<style scoped>
</style>
