<template>
    <div class="transition-form">
        <h3>{{ transition ? 'Edit Transition' : 'Add New Transition' }}</h3>
        <form @submit.prevent="submitForm">
            <div>
                <label for="from-state">From State</label>
                <select id="from-state" v-model="form.fromStateId" required>
                    <option v-for="state in workflowStates" :key="state.id" :value="state.id">
                        {{ state.name }}
                    </option>
                </select>
            </div>
            <div>
                <label for="to-state">To State</label>
                <select id="to-state" v-model="form.toStateId" required>
                    <option v-for="state in workflowStates" :key="state.id" :value="state.id">
                        {{ state.name }}
                    </option>
                </select>
            </div>
            <div>
                <label>Allowed Roles</label>
                <div v-for="role in workflowRoles" :key="role.name">
                    <label>
                        <input type="checkbox" :value="role.name" v-model="form.allowedRoles" />
                        {{ role.name }}
                    </label>
                </div>
            </div>
            <div>
                <label for="conditions">Conditions (optional)</label>
                <textarea id="conditions" v-model="form.conditions"></textarea>
            </div>
            <button type="submit">Save Transition</button>
            <button v-if="transition" @click="emit('delete', transition.id)" type="button">Delete</button>
        </form>
    </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue';

const props = defineProps({
    transition: {
        type: Object,
        default: null
    },
    workflowStates: {
        type: Array,
        required: true
    },
    workflowRoles: {
        type: Array,
        required: true
    }
});

const emit = defineEmits(['save', 'delete']);

const form = ref({
    id: null,
    fromStateId: null,
    toStateId: null,
    allowedRoles: [],
    conditions: ''
});

watch(() => props.transition, (newTransition) => {
    if (newTransition) {
        Object.assign(form.value, newTransition);
    } else {
        // Reset form for new transition
        form.value = {
            id: null,
            fromStateId: null,
            toStateId: null,
            allowedRoles: [],
            conditions: ''
        };
    }
}, { immediate: true });

const submitForm = () => {
    emit('save', { ...form.value });
};
</script>
