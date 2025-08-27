<template>
    <aside>
        <hgroup>
            <h1>Workflow Engine</h1>
            <font-awesome-icon icon="fa-solid fa-house"  size="2x" />
            <font-awesome-icon icon="fa-solid fa-dog" />
            <font-awesome-icon icon="fa-regular fa-circle-user" />
            <!-- <font-awesome-icon icon="fa-brands fa-threads" /> -->
            <hr>
        </hgroup>
        <nav>
            <ul>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#" aria-current="page">Workflows</a></li>
                <li><a href="#">Tasks</a></li>
                <li><a href="#">Users</a></li>
                <li><a href="#">Settings</a></li>
            </ul>
        </nav>
        <div class="actions">
            <h2>Actions</h2>
            <div class="grid">
                <button>Approve</button>
                <button class="secondary">Reject</button>
                <button class="outline">Reassign</button>
            </div>
        </div>
    </aside>
</template>

<script setup>
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { fas } from '@fortawesome/free-solid-svg-icons'
    import { far } from '@fortawesome/free-regular-svg-icons'

    library.add(fas,far)
</script>