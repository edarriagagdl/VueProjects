<template>
    <div>
        <h2> Parent Component </h2>
         <p> Child says : {{ childReply }}</p>
         <Child :message="parentMessage" @childEvent="handleChildEvent"/>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import Child from './Child.vue'

    const parentMessage = ref("Hello Child")
    const childReply = ref('')

    function handleChildEvent(msg) {
        childReply.value = msg
    }
</script>

