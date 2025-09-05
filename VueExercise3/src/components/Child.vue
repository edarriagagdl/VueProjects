<template>
    <div>
        <h3> Child Component </h3>
        <p> Message from parent : {{ message }}</p>
        <p> Nieto dice : {{ nietoReply }}</p>
        <button @click="notifyParent" > Notify parent </button>

        <GrandChild mensajeHijo="Hola desde el hijo" @nietoEvent="handleChildEvent" />

    </div>
</template>

<script setup>
    import { defineEmits, defineProps, ref } from 'vue';
    import GrandChild from './GrandChild.vue';
    const props = defineProps(['message']);

    // Setup event emitter for parent communication
    const emit = defineEmits(['childEvent']);

    // State for reply from GrandChild
    const nietoReply = ref('');

    // Method to notify parent
    function notifyParent() {
        emit('childEvent', 'Hello from Child!');
    }

    function handleChildEvent (msg) {
        nietoReply.value = msg
    }

</script>

