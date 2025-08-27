<template>
    <main class="container">
    <section class="mainpanel">
        <div>
            <SideMenu />
        </div>
        <div>
            <hgroup>
                <h1>Workflow Designer</h1>
                <p>Drag and drop elements to design your workflow.</p>
            </hgroup>

            <div class="dropzone">
                 <font-awesome-icon icon="fa-solid fa-plus"  size="2x" />
                <!-- <svg aria-hidden="true" class="mx-auto h-12 w-12 text-slate-400" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                </svg> -->
                <h3>Drag and drop elements here</h3>
                <p>Start building your workflow by dragging elements from the left panel.</p>
                <button>Create new workflow</button>
            </div>
        </div>
    </section>
    </main>
</template>

<script setup>
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { fas } from '@fortawesome/free-solid-svg-icons'
    import { far } from '@fortawesome/free-regular-svg-icons'

    library.add(fas, far)
    import SideMenu from '@/components/designer/SideMenu.vue';
</script>

<style>
    .mainpanel {
        display: grid;
        grid-template-columns: 1fr 4fr repeat(3, 0);
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        min-height: 100vh;
    }
</style>