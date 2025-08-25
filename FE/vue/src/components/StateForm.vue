<template>
    <div class="state-form">
        <h3>{{ state ? 'Edit State' : 'Add New State' }}</h3>
        <form @submit.prevent="submitForm">
            <div>
                <label for="state-name">Name</label>
                <input id="state-name" v-model="form.name" required />
            </div>
            <div>
                <label for="state-desc">Description</label>
                <textarea id="state-desc" v-model="form.description"></textarea>
            </div>
            <div>
                <label>
                    <input type="checkbox" v-model="form.isInitial" />
                    Is Initial State
                </label>
            </div>
            <div>
                <label>
                    <input type="checkbox" v-model="form.isFinal" />
                    Is Final State
                </label>
            </div>
            <button type="submit">Save State</button>
            <button v-if="state" @click="emit('delete', state.id)" type="button">Delete</button>
        </form>
    </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue';

const props = defineProps({
    state: {
        type: Object,
        default: null
    }
});

const emit = defineEmits(['save', 'delete']);

const form = ref({
    id: null,
    name: '',
    description: '',
    isInitial: false,
    isFinal: false,
});

watch(() => props.state, (newState) => {
    if (newState) {
        Object.assign(form.value, newState);
    } else {
        // Reset form for a new state
        form.value = {
            id: null,
            name: '',
            description: '',
            isInitial: false,
            isFinal: false,
        };
    }
}, { immediate: true });

const submitForm = () => {
    emit('save', { ...form.value });
};
</script>

<style scoped>
.state-form {
    padding: 1rem;
}

form div {
    margin-bottom: 1rem;
}
</style>
