<template>
    <header class="container-fluid">
        <nav>
            <ul>
                <li>
                    <div class="logo-group">
                        <h1>NexusFlow</h1>
                    </div>
                </li>
            </ul>
            <ul>
                <li><router-link to="/">Home</router-link> </li>
                <li><router-link to="/login">Login</router-link> </li>
                <li><router-link to="/roles">Roles</router-link> </li>
                <li><router-link to="/designer">Designer</router-link> </li>
                <li><router-link to="/tenants">Tenants</router-link> </li>
                 <li><router-link to="/dashboard">Dashboard</router-link> </li>
                 <li><router-link to="/workflow-designer">Workflow Designer</router-link> </li>
                 <li><router-link to="/workflow-instance">Workflow Instance</router-link> </li>
            </ul>
            <ul>
                <li>
                    <a href="#" role="button" class="contrast">
                        <span class="material-symbols-outlined">notifications</span>
                    </a>
                </li>
            </ul>
        </nav>
    </header>
   
</template>

<script setup>
    import { ref, onMounted } from 'vue';

</script>


<style scoped>
    header {
        background-color: white;
        border-bottom: 1px solid var(--pico-border-color);
    }

    header .logo-group {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    header .logo-group h1 {
        color: var(--pico-color);
        font-size: 1.25rem;
        font-weight: bold;
    }

    header nav a {
        font-size: 0.875rem;
        font-weight: 500;
    }

    header nav a:not(.active) {
        color: var(--pico-secondary-color);
    }

    header nav a.active {
        color: var(--pico-color);
        background-color: #f3f4f6;
    }

    main {
        padding-top: 2rem;
    }

    .header-section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
    }

    .header-section h2 {
        font-size: 1.875rem;
        font-weight: bold;
    }

</style>