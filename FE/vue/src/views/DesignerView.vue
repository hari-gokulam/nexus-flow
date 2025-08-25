<template>

    <div class="designer">
        <h2>Designer</h2>
        <WorkflowDesigner />
    </div>  
</template>

<script>
import WorkflowDesigner from '@/components/WorkflowDesigner.vue';

export default {
    name: 'DesignerView',
    components: {
        WorkflowDesigner,
    },
    data() {
        return {
        }
    },
    methods: {
    },
}
</script>

<style scoped>
.designer {
    text-align: center;
}    
</style>