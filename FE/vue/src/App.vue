<template>
  <div class="application">
    <header class="header">
      <TopBar />
    </header>
    <main class="page-container">
      <section class="content-area">
        <router-view />
      </section>
      <footer class="footer">
        <p>Designed by <a href="https://github.com/hari-gokulam">Hari Gokulam</a></p>
      </footer>
    </main>
  </div>
</template>

<script setup>
  import { onMounted } from 'vue';
  import { provideUserRoleContext } from './providers/userRoleProvider';
  import { provideTenantContext } from './providers/tenantProvider';
  //import { provideTenantContext } from './providers/tenantProvider';
  import TopBar from './components/layout/TopBar.vue';

  provideUserRoleContext();
  //provideTenantContext();
  provideTenantContext

  onMounted(() => {
    // Use the injected functions to set initial data
    // For example: const { setUser } = injectUserRoleContext();
    // setUser({ name: 'John Doe', roles: ['admin', 'manager'] });
  });
</script>
<style>
  .application {
    font-size: .7rem;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    min-height: 100vh;
  }

  .page-container {
    min-height: 100vh;
    padding-left: 2rem;
    padding-right: 2rem;
    border: 1px solid var(--pico-border-color);
  }

  .content-area {
    padding-top: 2rem;
    border: 1px solid var(--pico-border-color);
  }



</style>
