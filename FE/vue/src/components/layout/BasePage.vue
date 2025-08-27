<template>
    <section class="container">
        <header>{{ title }}</header>
        <slot></slot>
    </section>
</template>

<script setup>
    import { ref, defineProps } from 'vue';

    defineProps({
        title: {
            type: String,
            required: true
        }
    })  
</script>

<style scoped>
   

    header {
        font-size: 1.3rem;
        font-weight: bold;
        margin-bottom: 1rem;
        text-align:center;
    }   

</style>