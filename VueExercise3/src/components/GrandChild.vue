<template>
  <h4>Componente Nieto</h4>
  <div>
    <p>Mensaje desde el hijo: {{ mensajeHijo }}</p>
    <button @click="sendToChild">Enviar mensaje al hijo</button>
  </div>
</template>

<script setup>
defineProps(['mensajeHijo']);
const emit = defineEmits(['nietoEvent']);

function sendToChild() {
  emit('nietoEvent', 'Hola desde el nieto');
}
</script>
