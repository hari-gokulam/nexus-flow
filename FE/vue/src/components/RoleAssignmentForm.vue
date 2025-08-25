<template>
  <div class="role-assignment-form">
    <h3>Roles</h3>
    <ul>
      <li v-for="role in roles" :key="role.name">
        {{ role.name }}
        <button @click="editRole(role)">Edit</button>
        <button @click="emit('delete-role', role.name)">Delete</button>
      </li>
    </ul>

    <form @submit.prevent="submitForm">
      <h4>{{ editingRole ? 'Edit Role' : 'Add New Role' }}</h4>
      <div>
        <label for="role-name">Name</label>
        <input id="role-name" v-model="form.name" required :disabled="!!editingRole" />
      </div>
      <div>
        <label for="role-desc">Description</label>
        <input id="role-desc" v-model="form.description" />
      </div>
      <button type="submit">{{ editingRole ? 'Update Role' : 'Add Role' }}</button>
      <button v-if="editingRole" type="button" @click="cancelEdit">Cancel</button>
    </form>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
  roles: {
    type: Array,
    default: () => []
  }
});

const emit = defineEmits(['add-role', 'update-role', 'delete-role']);

const form = ref({ name: '', description: '' });
const editingRole = ref(null);

const editRole = (role) => {
  editingRole.value = role;
  Object.assign(form.value, role);
};

const cancelEdit = () => {
  editingRole.value = null;
  form.value = { name: '', description: '' };
};

const submitForm = () => {
  if (editingRole.value) {
    emit('update-role', { ...form.value });
  } else {
    emit('add-role', { ...form.value });
  }
  cancelEdit();
};
</script>
