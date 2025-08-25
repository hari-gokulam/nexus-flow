<template>
  <div class="action-trigger-form">
    <h4>Available Actions</h4>
    <form @submit.prevent="trigger">
      <div v-if="availableTransitions.length > 0">
        <label for="transition-select">Select an action:</label>
        <select id="transition-select" v-model="selectedTransitionId" required>
          <option disabled value="">Please select one</option>
          <option v-for="t in availableTransitions" :key="t.id" :value="t.id">
            Transition to {{ getToStateName(t.toStateId) }}
          </option>
        </select>
      </div>
      <div>
        <label for="comments">Comments (optional)</label>
        <textarea id="comments" v-model="comments"></textarea>
      </div>
      <button type="submit" :disabled="!selectedTransitionId">Trigger</button>
    </form>
    <p v-if="availableTransitions.length === 0">No actions available for you in this state.</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  availableTransitions: {
    type: Array,
    required: true
  },
  workflow: { // Added for helper function
    type: Object,
    required: true
  }
});

const emit = defineEmits(['trigger']);

const selectedTransitionId = ref('');
const comments = ref('');

const getToStateName = (toStateId) => {
  const toState = props.workflow.states.find(s => s.id === toStateId);
  return toState ? toState.name : 'Unknown State';
};

const trigger = () => {
  emit('trigger', selectedTransitionId.value, comments.value);
  selectedTransitionId.value = '';
  comments.value = '';
};
</script>
