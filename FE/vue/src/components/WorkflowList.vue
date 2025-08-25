<template>
  <div class="workflow-list">
    <h4>Workflows</h4>
    <ul>
      <li v-for="workflow in workflows" :key="workflow.id">
        <span @click="emit('select-workflow', workflow.id)">{{ workflow.name }}</span>
        <button @click="emit('delete-workflow', workflow.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  workflows: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(['select-workflow', 'delete-workflow']);
</script>