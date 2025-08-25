<template>
  <div id="app">
    <router-link to="/">Home</router-link> |
    <router-link to="/designer">Designer</router-link> |
    <router-link to="/dashboard">Dashboard</router-link>
    <router-view />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { provideUserRoleContext } from './providers/userRoleProvider';
import { provideTenantContext } from './providers/tenantProvider';
//import { provideTenantContext } from './providers/tenantProvider';

provideUserRoleContext();
//provideTenantContext();
provideTenantContext

onMounted(() => {
  // Use the injected functions to set initial data
  // For example: const { setUser } = injectUserRoleContext();
  // setUser({ name: 'John Doe', roles: ['admin', 'manager'] });
});
</script>