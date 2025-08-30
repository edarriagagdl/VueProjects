<template lang="">
    <h3> Segundo componente !!! </h3>
    <button @click="incrementarContador">Incrementar contador</button>
    <p>Contador: {{ getterContador() }}</p>
    <button @click="resetContador">Resetear contador</button>

</template>
<script setup>
import { ref } from 'vue';

// Composition
/* 2 maneras para crear variables reactivas */
/* ref() -> Tipos de datos primitivos */
/* reative() -> Tipos objeto  */

    const mensaje = ref('Hola desde Vue 3')
    const mensajeHtml = ref('<strong> Hola mundo HTML </strong>')
    const valor = ref(345)
    var contador = ref(111)
    const incrementarContador = () => {
        contador.value++
    }

    const getterContador = () => {
        return contador.value;
    }

    const resetContador = () => {
        contador.value = 0;
    }



</script>
<style lang="">
    
</style>