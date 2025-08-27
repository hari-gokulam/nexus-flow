<template>
    <div class="login-screen">
        <div class="login-card">
            <h3 class="text-center">NexusFlow account</h3>
            <form>
                <label for="username">Username</label>
                <input autocomplete="username" id="username" name="username" placeholder="e.g., jane.doe" required=""
                    type="text" />

                <label for="password">Password</label>
                <input autocomplete="current-password" id="password" name="password" placeholder="••••••••" required=""
                    type="password" />

                <button type="submit">Login</button>
            </form>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .login-screen {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
    }

    .login-card {
        max-width: 25rem;
        /* Equivalent to max-w-md */
        background-color: var(--pico-surface-color);
        padding: 2rem;
        border-radius: var(--pico-border-radius);
        /* box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1); */
        /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    }

    .login-card h2 {
        font-size: 1.875rem;
        /* Equivalent to text-3xl */
        font-weight: bold;
    }

    .login-card p {
        font-size: 1rem;
        color: var(--pico-secondary-color);
    }

    .text-center {
        text-align: center;
    }
</style>