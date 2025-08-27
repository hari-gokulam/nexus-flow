<template>
    <ListPage title="Roles">
        <thead>
            <tr>
                <th scope="col">Role Name</th>
                <th scope="col">Permissions</th>
                <th scope="col" style="text-align: right;">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                        <td scope="row">Administrator</td>
                        <td>Full access to all features and data.</td>
                        <td>
                            <div class="actions">
                                <button class="secondary">
                                    <span class="material-symbols-outlined">edit</span>
                                    <span>Edit</span>
                                </button>
                                <button class="secondary delete">
                                    <span class="material-symbols-outlined">delete</span>
                                    <span>Delete</span>
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td scope="row">Workflow Manager</td>
                        <td>Manage workflows, tasks, and reports.</td>
                        <td>
                            <div class="actions">
                                <button class="secondary">
                                    <span class="material-symbols-outlined">edit</span>
                                    <span>Edit</span>
                                </button>
                                <button class="secondary delete">
                                    <span class="material-symbols-outlined">delete</span>
                                    <span>Delete</span>
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td scope="row">Task Assignee</td>
                        <td>View and complete assigned tasks.</td>
                        <td>
                            <div class="actions">
                                <button class="secondary">
                                    <span class="material-symbols-outlined">edit</span>
                                    <span>Edit</span>
                                </button>
                                <button class="secondary delete">
                                    <span class="material-symbols-outlined">delete</span>
                                    <span>Delete</span>
                                </button>
                            </div>
                        </td>
                    </tr>
        </tbody>

    </ListPage>
</template>

<script setup>
    import ListPage from '@/components/layout/ListPage.vue';
</script>

<style scoped></style>
