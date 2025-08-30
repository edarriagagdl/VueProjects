<template>
    <h2> Repaso de Directivas </h2>
    <hr>
    <!-- Variable Reactiva -->
    <p>{{mensaje}}</p>
    <!-- Variable de JS con HTML -->
    <p>{{ mensajeHTML }}</p>
    <!-- Variable Reactiva con HTML  -->
    <p v-html="mensaje2"></p>
    <button class="btn btn-primary" @click="cambiarTexto()">Cambiar Mensaje</button>
    
    <h2 class="my4 text-info"> Doble Data Binding </h2>
    <h3> Manual </h3>
    <input type="text" class="form-control" :value ="valor" @input="actualizarValor($event)">
    <p class="display-5">Valor: {{ valor }}</p>
    <h3> Reactivo </h3>
    <input type="text" class="form-control" v-model="valor2">
    <p class="display-5">Valor: {{ valor2 }}</p>

</template>

<script setup>
    import { ref } from 'vue'
    // ! Composition Vue 3 
    // variable de JS
    const mensajeHTML = '<h3>Mensaje con HTML</h3>'
    // variable Reactiva
    const mensaje = ref('Mensaje Reactivo')
    // variable Reactiva con HTML
    const mensaje2 = ref('<h3>Mensaje Reactivo con HTML</h3>')
    const cambiarTexto = () => {
        mensaje.value = 'Nuevo Mensaje Reactivo'
        mensaje2.value = '<h3>Nuevo Mensaje Reactivo con HTML</h3>'
    }
    const valor = ref(555)
    const actualizarValor = (event) => {
        console.log("valor recibido",  event.target.value)
        valor.value = event.target.value
        console.log("valor actualizado", valor.value)   
    }
    const valor2 = ref(777)

    
</script>