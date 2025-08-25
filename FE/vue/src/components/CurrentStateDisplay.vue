<template>
  <div class="current-state-display">
    <h3>Current State:</h3>
    <p><strong>{{ currentState.name }}</strong></p>
    <p>{{ currentState.description }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  currentState: {
    type: Object,
    required: true
  }
});
</script>