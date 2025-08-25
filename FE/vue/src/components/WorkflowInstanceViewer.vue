<template>
  <div class="workflow-instance-viewer">
    <h2>Workflow Instance: {{ instance.id }}</h2>
    <CurrentStateDisplay :currentState="currentState" />

    <ActionTriggerForm
      :availableTransitions="availableTransitions"
      @trigger="triggerTransition"
    />

    <TransitionHistoryPanel :history="instance.history" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import CurrentStateDisplay from './CurrentStateDisplay.vue';
import ActionTriggerForm from './ActionTriggerForm.vue';
import TransitionHistoryPanel from './TransitionHistoryPanel.vue';

const props = defineProps({
  instance: {
    type: Object,
    required: true
  },
  userRoles: {
    type: Array,
    required: true
  },
  workflow: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['trigger-transition']);

const currentState = computed(() => {
  return props.workflow.states.find(s => s.id === props.instance.currentStateId);
});

const availableTransitions = computed(() => {
  return props.workflow.transitions.filter(t => {
    const isFromCurrentState = t.fromStateId === props.instance.currentStateId;
    const hasAllowedRole = t.allowedRoles.some(role => props.userRoles.includes(role));
    // Additional logic for conditions could go here
    return isFromCurrentState && hasAllowedRole;
  });
});

const triggerTransition = (transitionId, comments) => {
  emit('trigger-transition', transitionId, comments);
};
</script>
