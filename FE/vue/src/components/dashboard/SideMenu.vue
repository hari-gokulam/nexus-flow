<template>
    <aside class="w-24 border-right">
        <a href="#" aria-label="Stitch">
            <hgroup>
                <h1 style="color: var(--pico-primary-hover);">W</h1>
            </hgroup>
        </a>
        <nav>
            <a href="#" class="active">
                <span class="material-symbols-outlined">dashboard</span>
                <span>Dashboard</span>
            </a>
            <a href="#">
                <span class="material-symbols-outlined">lan</span>
                <span>Workflows</span>
            </a>
            <a href="#">
                <span class="material-symbols-outlined">task_alt</span>
                <span>Tasks</span>
            </a>
            <a href="#">
                <span class="material-symbols-outlined">monitoring</span>
                <span>Reports</span>
            </a>
            <a href="#">
                <span class="material-symbols-outlined">settings</span>
                <span>Settings</span>
            </a>
        </nav>
        <div style="margin-top: auto;">
            <a href="#">
                <span class="material-symbols-outlined">notifications</span>
            </a>
            <a href="#">
                <!-- <img alt="User avatar"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDz7tKtgDTiZk4FUHOmQ3zGsv6tueFscok0hEUF_se2Uoo6KI1_DPtntBzp7XIKS1s4NLFF8xInpI41LQhJ1tcuFrwNvD6Crt41L6h1kPAgToWuqQ5w7kPgbmBUfrw5HnRTQFjDgUlAhEX2mcEwmYSKQZEhMOPqQUfIjNMFLyR93HujHIuTKD10e58J7rsEmvndV69oipxf4uOsCdWnb38TnXZBD5-TNR1ONvFLZxeeURbY0O6CBApvotmC9YXFgj8jjTOfDbpMJuE"
                    class="circle"> -->
            </a>
        </div>
    </aside>
</template>

<style scoped>
    aside a.active {
        background-color: var(--pico-primary);
        color: #fff;
    }

    aside nav a {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: var(--pico-spacing);
    }

    aside nav span {
        font-weight: bold;
        font-size: 0.75rem;
        /* Equivalent to text-xs */
    }

    .material-symbols-outlined {
        font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    }
</style>