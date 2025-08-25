<template>
  <div class="transition-history-panel">
    <h4>Transition History</h4>
    <ul>
      <li v-for="record in history" :key="record.timestamp">
        <strong>{{ record.fromStateName }} -> {{ record.toStateName }}</strong>
        <p>By {{ record.actor }} at {{ new Date(record.timestamp).toLocaleString() }}</p>
        <p v-if="record.comments">Comments: {{ record.comments }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  history: {
    type: Array,
    default: () => []
  }
});
</script>