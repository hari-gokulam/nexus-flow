<template>
    <section>
        <BasePage title="Detail Page">
            <form>
                <slot></slot>
            </form>
        </BasePage>
    </section>
</template>


<script setup>
    import { ref, defineProps } from 'vue';
    import BasePage from './BasePage.vue';

    defineProps({
        title: {
            type: String,
            required: true
        }
    })
</script>