<script setup>
import { ref } from 'vue';
import TodoItem from './components/TodoItem.vue';

const newTask = ref('');
const tasks = ref([]);

function addTask() {
  if (newTask.value.trim() !== '') {
    tasks.value.push(newTask.value.trim());
    newTask.value = '';
  }
}

function removeTask(index) {
  tasks.value.splice(index, 1);
}
</script>

<template>
  <div>
    <input v-model="newTask" @keyup.enter="addTask" />
    <button @click="addTask">Agregar</button>
    <TodoItem
      v-for="(task, index) in tasks"
      :key="index"
      :text="task"
      @delete="removeTask(index)"
    />
  </div>
</template>

<style scoped></style>
