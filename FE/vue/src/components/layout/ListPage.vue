<template>

    <BasePage :title="title">
        <figure class="table-card">
            <table>
                <slot></slot>
            </table>
        </figure>
    </BasePage>

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

<style>
    .table-card {
        background-color: white;
        border-radius: var(--pico-border-radius);
        box-shadow: var(--pico-box-shadow);
    }

    .table-card table {
        margin: 0;
    }

    .table-card thead {
        background-color: #f9fafb;
    }

    .table-card th {
        /* font-size: 0.75rem; */
        font-weight: 600;
        color: var(--pico-secondary-color);
        text-transform: uppercase;
    }

    .table-card td {
        color: var(--pico-color);
        font-weight: 500;
        white-space: nowrap;
    }

    .table-card .actions {
        display: flex;
        gap: 1rem;
        justify-content: flex-end;
    }

    .table-card .actions button {
        display: flex;
        align-items: center;
        gap: 0.375rem;
        font-size: 0.875rem;
        font-weight: 500;
    }

    .table-card .actions button.delete {
        color: #ef4444;
    }
</style>