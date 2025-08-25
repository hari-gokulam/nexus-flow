<template>
    <div class="workflow-designer">
        <h1>Workflow Designer</h1>
        <div class="header-controls">
            <TenantSelector :tenants="tenants" :selectedTenantId="tenantId" @tenant-change="handleTenantChange" />
            <WorkflowList :workflows="workflowList" @select-workflow="loadWorkflow" @delete-workflow="deleteWorkflow" />
        </div>

        <div v-if="workflow" class="designer-area">
            <div class="left-panel">
                <RoleAssignmentForm :roles="workflow.roles" @add-role="addRole" @update-role="updateRole"
                    @delete-role="deleteRole" />
            </div>

            <div class="main-canvas">
                <h2>{{ workflow.name }}</h2>
                <p>{{ workflow.description }}</p>
                <div class="states-and-transitions">
                    <div v-for="state in workflow.states" :key="state.id" class="state-node"
                        @click="selectState(state.id)">
                        {{ state.name }}
                    </div>
                </div>
            </div>

            <div class="right-panel">
                <div v-if="selectedStateId">
                    <StateForm :state="findState(selectedStateId)" @save="saveState" @delete="deleteState" />
                </div>
                <div v-else-if="selectedTransitionId">
                    <TransitionForm :transition="findTransition(selectedTransitionId)" :workflowStates="workflow.states"
                        :workflowRoles="workflow.roles" @save="saveTransition" @delete="deleteTransition" />
                </div>
                <div v-else>
                    <p>Select a state or transition to edit.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, defineProps } from 'vue';
import WorkflowList from './WorkflowList.vue';
import StateForm from './StateForm.vue';
import TransitionForm from './TransitionForm.vue';
import RoleAssignmentForm from './RoleAssignmentForm.vue';
import TenantSelector from './TenantSelector.vue';

const props = defineProps({
    workflowList: {
        type: Array,
        default: () => []
    },
    tenantId: {
        type: String,
        required: true
    }
});

const workflow = ref(null);
const selectedStateId = ref(null);
const selectedTransitionId = ref(null);
const selectedRoleName = ref(null);

const findState = (id) => workflow.value.states.find(s => s.id === id);
const findTransition = (id) => workflow.value.transitions.find(t => t.id === id);

const loadWorkflow = (id) => {
    // In a real app, this would fetch data from an API
    const selectedWorkflow = props.workflowList.find(w => w.id === id);
    if (selectedWorkflow) {
        workflow.value = JSON.parse(JSON.stringify(selectedWorkflow)); // deep copy to avoid direct mutation
        selectedStateId.value = null;
        selectedTransitionId.value = null;
    }
};

const deleteWorkflow = (id) => {
    // Logic to delete workflow, e.g., via API
    console.log(`Deleting workflow with ID: ${id}`);
    // Then update workflowList
};

const selectState = (id) => {
    console.log(selectedRoleName);
    selectedStateId.value = id;
    selectedTransitionId.value = null;
};

const saveState = (updatedState) => {
    const index = workflow.value.states.findIndex(s => s.id === updatedState.id);
    if (index !== -1) {
        Object.assign(workflow.value.states[index], updatedState);
    } else {
        // Add new state
        workflow.value.states.push({ ...updatedState, id: `state-${Date.now()}` });
    }
};

const deleteState = (stateId) => {
    workflow.value.states = workflow.value.states.filter(s => s.id !== stateId);
    selectedStateId.value = null;
};

const saveTransition = (updatedTransition) => {
    const index = workflow.value.transitions.findIndex(t => t.id === updatedTransition.id);
    if (index !== -1) {
        Object.assign(workflow.value.transitions[index], updatedTransition);
    } else {
        // Add new transition
        workflow.value.transitions.push({ ...updatedTransition, id: `transition-${Date.now()}` });
    }
};

const deleteTransition = (transitionId) => {
    workflow.value.transitions = workflow.value.transitions.filter(t => t.id !== transitionId);
    selectedTransitionId.value = null;
};

const addRole = (newRole) => {
    if (!workflow.value.roles.find(r => r.name === newRole.name)) {
        workflow.value.roles.push(newRole);
    }
};

const updateRole = (updatedRole) => {
    const index = workflow.value.roles.findIndex(r => r.name === updatedRole.name);
    if (index !== -1) {
        Object.assign(workflow.value.roles[index], updatedRole);
    }
};

const deleteRole = (roleName) => {
    workflow.value.roles = workflow.value.roles.filter(r => r.name !== roleName);
};

const handleTenantChange = (newTenantId) => {
    console.log(`Tenant changed to: ${newTenantId}`);
    // In a real app, this would trigger a refetch of workflowList
};

watch(() => props.workflowList, (newList) => {
    if (!workflow.value && newList.length > 0) {
        loadWorkflow(newList[0].id); // Optionally load the first workflow on initial render
    }
}, { immediate: true });
</script>

<style scoped>
.workflow-designer {
    display: flex;
    flex-direction: column;
    height: 100vh;
}

.header-controls {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background-color: #f0f0f0;
}

.designer-area {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    flex-grow: 1;
    gap: 1rem;
    padding: 1rem;
}

.left-panel,
.right-panel {
    border: 1px solid #ccc;
    padding: 1rem;
    overflow-y: auto;
}

.main-canvas {
    border: 1px solid #ccc;
    padding: 1rem;
}

.state-node {
    border: 2px solid blue;
    border-radius: 8px;
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    display: inline-block;
    cursor: pointer;
}
</style>
