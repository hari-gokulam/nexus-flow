<template>
  <div class="tenant-selector">
    <label for="tenant-select">Select Tenant:</label>
    <select id="tenant-select" :value="selectedTenantId" @change="emit('tenant-change', $event.target.value)">
      <option v-for="tenant in tenants" :key="tenant.id" :value="tenant.id">
        {{ tenant.name }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  tenants: {
    type: Array,
    required: true
  },
  selectedTenantId: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['tenant-change']);
</script>