<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  text: String,
});

const emit = defineEmits(['delete']);
function handleDelete() {
  emit('delete');
}
</script>

<template>
  <div>
    <span>{{ text }}</span>
    <button @click="handleDelete">Delete</button>
  </div>
</template>

<style scoped></style>
