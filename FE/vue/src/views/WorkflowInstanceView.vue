<template>
    <div class="container">
        <main class="mainpanel">
            <section class="leftpanel">
                <SideMenu />
            </section>
            <section class="rightpanel">

                <div>
                    <header>
                        <h1>New Marketing Campaign Approval</h1>
                        <p>Workflow Instance #WF-2024-00123</p>
                    </header>
                    <article class="card">
                        <h2>Workflow History</h2>
                        <ul class="timeline">
                            <li>
                                <p><strong>Workflow Started</strong></p>
                                <p class="date">by Admin - August 15, 2023, 10:00 AM</p>
                            </li>
                            <li>
                                <p><strong>Task "Create Brief" assigned to Alice</strong></p>
                                <p class="date">August 15, 2023, 11:00 AM</p>
                            </li>
                            <li>
                                <p><strong>Task "Create Brief" completed by Alice</strong></p>
                                <p class="date">August 15, 2023, 04:00 PM</p>
                            </li>
                            <li>
                                <p><strong>Task "Review Brief" assigned to Bob</strong></p>
                                <p class="date">August 16, 2023, 09:00 AM</p>
                            </li>
                        </ul>
                    </article>
                </div>
                <div>
                    <article class="card">
                        <h2>Instance Details</h2>
                        <div class="grid">
                            <span>Status</span>
                            <span class="status-badge">In Progress</span>
                            <span>Created At</span>
                            <span>Aug 15, 2023</span>
                            <span>Last Updated</span>
                            <span>Aug 16, 2023</span>
                        </div>
                        <hr>
                        <h2>Assigned Users</h2>
                        <div class="grid">
                            <div class="user-profile">
                                <img alt="Alice's profile picture"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHNT2pr0jh2PDHGRS_Sg_HItdYrvH97a-xRIWJSRNnBZKmgx5iZXPezWK_ufiG6mohFblx3oPTIuZGf0NPaZIS0ykuvm4jQln1WXeSWKhrqbbhnYcafcsUULQjRTkAVzDOqTC7C-l1dQkIBAoi1YA_MhL8uvG7yo6025dwT7bxwrxNziQnq6_bnkDf9pYtyYZvXv7U1b8Yvs_vt7bcsy8e0aPX3-rYKeXWCN3b8W53kA4qi449RW--798sMxOuPci4sXyfzYisMlA" />
                                <p>Alice</p>
                                <small>Content Creator</small>
                            </div>
                            <div class="user-profile">
                                <img alt="Bob's profile picture"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAR2JK3hDF__fDtw5ldWAFsdDJK5TwQYWIFbxF0G9iBfus-gI8BQs0tMu4BNjvr49FFMVi0VbDqWlRPyjxhOqGrRk7nrIffj-4tRNb8iZd6ndsYUjbPIu8DlMi37nFhB6pShZr548kzwKchZQLbHBdfY6G685QBnfMRyWhf0xDPNUKR1rTn-owB_4QQeohst2EFGwTwyFFGXNFU69VLkB_a6dyNlFIDkIK72zTViP3VPzJXSeQpq1t_1BCQO7ti1vXVROEGRqEIIvg" />
                                <p>Bob</p>
                                <small>Marketing Manager</small>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
           
        </main>
    </div>
</template>

<script setup>
    import SideMenu from '@/components/instance/SideMenu.vue';
</script>

<style scoped>
    .mainpanel {
        display: grid;
        grid-template-columns: 1fr 4fr;
        grid-template-rows: 1fr;
        grid-column-gap: 5px;
        grid-row-gap: 0px;
        min-height: 100vh;
    }
    .rightpanel {
       display: grid;
        grid-template-columns: 4fr 1fr;
        grid-template-rows: 1fr;
        grid-column-gap: 5px;
        grid-row-gap: 0px;
       
    }
</style>