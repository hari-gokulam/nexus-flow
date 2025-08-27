<template>

    <div class="designer">
        <h2>Designer</h2>
        <WorkflowDesigner workflow-list="workflows" tenant-id=""/>
    </div>  
</template>

<script setup>
import WorkflowDesigner from '@/components/WorkflowDesigner.vue';
import { onMounted, ref } from 'vue';

const workflows = ref([]);

const fetchWorkflows = async () => {
    try {
        const response = await fetch('http://localhost:3000/workflows');
        if (!response.ok) {
            throw new Error('Failed to fetch workflows');
        }
        const data = await response.json();
        console.log('Fetched workflows:', data);
        workflows.value = data;
    } catch (error) {
        console.error('Error fetching workflows:', error);
    }
};
onMounted( async () => {
    await fetchWorkflows();
});

</script>

<style scoped>
.designer {
    text-align: center;
}    
</style>