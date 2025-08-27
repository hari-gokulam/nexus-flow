<script setup>
    import SideMenu from '@/components/dashboard/SideMenu.vue';
    import StatusBlock from '@/components/dashboard/StatusBlock.vue';
    import WorkflowSummary from '@/components/dashboard/WorkflowSummary.vue';
    import KeyMatrics from '@/components/dashboard/KeyMatrics.vue';
    import QuickActions from '@/components/dashboard/QuickActions.vue';

</script>

<template>
    <main class="container">
        <div class="mainpanel">
            <div class="">
                <SideMenu />
            </div>

            <main class="container">
                <header class="dashboard-header">
                    <hgroup>
                        <h1>Dashboard</h1>
                        <p>Overview of active and pending workflows</p>
                    </hgroup>
                </header>
                <StatusBlock />
                <WorkflowSummary />
                <KeyMatrics />
                <QuickActions />
            </main>
        </div>
    </main>
</template>


<style scoped>
    .mainpanel {
        display: grid;
        grid-template-columns: 1fr 4fr repeat(3, 0);
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        min-height: 100vh;
    }


</style>