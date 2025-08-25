<template>
    <transition name="fade">
        <div v-if="isVisible" :class="['notification', type]">
            <p>{{ message }}</p>
            <button @click="hide">Close</button>
        </div>
    </transition>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
    message: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: 'info',
        validator: (value) => ['success', 'error', 'warning', 'info'].includes(value)
    },
    timeout: {
        type: Number,
        default: 5000
    }
});

const isVisible = ref(false);
let timer = null;

const show = () => {
    isVisible.value = true;
    if (props.timeout > 0) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            hide();
        }, props.timeout);
    }
};

const hide = () => {
    isVisible.value = false;
};

// Expose show/hide methods for parent components
defineExpose({
    show,
    hide
});

watch(() => props.message, (newMessage) => {
    if (newMessage) {
        show();
    }
});
</script>

<style scoped>
.notification {
    padding: 1rem;
    margin: 1rem;
    border-radius: 8px;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.success {
    background-color: #28a745;
}

.error {
    background-color: #dc3545;
}

.warning {
    background-color: #ffc107;
}

.info {
    background-color: #17a2b8;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>