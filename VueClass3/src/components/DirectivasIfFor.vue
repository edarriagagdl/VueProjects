<template>
    <h1 class="text-center my-4">Directivas If y For</h1>
    <h2>Directiva v-if</h2>
    <button class="btn btn-danger my-3" @click="mostrar=toggleMostrar()">Mostrar</button>
    <p class="alert alert-info" v-if="mostrar">El valor de mostrar es true</p>
    <p class="alert alert-warning" v-else>El valor de mostrar es false</p>
    <button class="btn btn-primary my-3" @click="toggleMostrar()">Toggle Mostrar</button>
    <p class="alert alert-success" v-if="mostrar">¡El contenido se muestra porque mostrar es true!</p>
    <p class="alert alert-danger" v-else>¡El contenido no se muestra porque mostrar es false!</p>
    <br>
    <h2>Directiva v-show</h2>
    <button class="btn btn-secondary my-3" @click="mostrar=toggleMostrar()">Toggle Mostrar con v-show</button>
    <p class="alert alert-info" v-show="mostrar">Este contenido se muestra con v-show</p>
    <p class="alert alert-info" v-show="!mostrar">Este contenido se oculta con v-show</p>

    <h2>Directiva v-for</h2>
    <ul class="list-group">
        <li class="list-group-item" v-for="(item, index) in mostrarItems()" :key="index">
            {{ item }}
        </li>
        <li class="list-group-item" v-for="(num, index) in mostrarNumeros()" :key="index">
            {{ num }}
        </li>
        <li class="list-group-item" v-for="(letra, index) in mostrarLetras()" :key="index">
            {{ letra }}
        </li>
    </ul>
    <h2>Directiva v-for con un array de objetos</h2>
    <ul class="list-group">
        <li class="list-group-item" v-for="usuario in usuarios" :key="usuario.id">
            {{ usuario.nombre }} - Edad: {{ usuario.edad }} - Curso: {{ usuario.curso }} 
            <img :src="usuario.avatar" alt="Avatar" class="img-thumbnail" width="50">            
        </li>
    </ul>

    <button class ="btn btn-primary my-3">
        Agregar usuario
    </button>

    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Curso</th>
                <th>Avatar</th>
            </tr>
        </thead>
        <tbody table-striped >
            <tr scope="row" v-for="usuario in usuarios" :key="usuario.id">
                <td>{{ usuario.id }}</td>
                <td>{{ usuario.nombre }}</td>
                <td>{{ usuario.edad }}</td>
                <td>{{ usuario.curso ? 'Sí' : 'No' }}</td>
                <td><img :src="usuario.avatar" alt="Avatar" class="img-thumbnail" width="50"></td>
            </tr>
        </tbody>
      </table>
    </div>
    …
</template>
<script setup>
import { ref } from 'vue';
import usuariosDb from '../constants/usuarios-db';

var mostrar = ref(false);

function toggleMostrar() {
    mostrar.value = !mostrar.value; // Usar .value para modificar el valor reactivo
    console.log("el nuevo valor de mostrar", mostrar.value); // Usar .value para acceder al valor
    return mostrar.value;
}

// Ejemplo de v-for con un array de objetos
const items = ref([
    { id: 1, nombre: 'Item 1' },
    { id: 2, nombre: 'Item 2' },
    { id: 3, nombre: 'Item 3' }
]);

const usuarios = ref(usuariosDb);

const mostrarItems = () => {
    return items.value.map(item => item.nombre);
};

// Ejemplo de v-for con un array de números
const numeros = ref([10, 20, 30, 40, 50]);
const mostrarNumeros = () => {
    return numeros.value.map(num => `Número: ${num}`);
};

// Ejemplo de v-for con un array de letras
const letras = ref(['A', 'B', 'C', 'D', 'E']);
const mostrarLetras = () => {
    return letras.value.map(letra => `Letra: ${letra}`);
};
</script>
<!-- <style>
/* !! Estilos Definidos asi para toda la aplicacion */
h1 {
    color: #2c3e50; // Este estilo impacta a todos los h1 de la aplicacion
}
</style> -->

<style scoped>
/* !! Estilos Definidos asi para este componente */
h1 {
    color: #e91111; /* Este estilo impacta solo a los h1 de este componente */
}
</style>

