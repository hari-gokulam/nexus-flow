
---

### 2. StateForm.vue

A form to add or edit the properties of a workflow state.

```vue

---

### 3. TransitionForm.vue

A form for managing transitions between states. It allows users to select source and destination states and assign roles.

```vue

---

### 4. RoleAssignmentForm.vue

A component for managing the roles associated with a workflow.

```vue

---

### 5. WorkflowList.vue

A simple component to display and manage a list of workflows.

```vue


---

### 6. TenantSelector.vue

A component for selecting the current tenant. It's a "dumb" component that just emits an event when the selection changes.

```vue


---

### 7. WorkflowInstanceViewer.vue

This component displays a specific instance of a workflow, including its current state and available actions for the user.

```vue

---

### 8. CurrentStateDisplay.vue

A straightforward component for displaying the name and description of the current workflow state.

```vue


---

### 9. ActionTriggerForm.vue

A form that allows a user to trigger one of the available transitions.

```vue

---

### 10. TransitionHistoryPanel.vue

A display-only component to show the history of transitions for a workflow instance.

```vue


---

### 11. UserRoleContextProvider & TenantContextProvider

In Vue.js, the "Context API" is implemented using `provide`/`inject`. Here's how you'd set up these providers, typically in a parent component (like `App.vue`) or the main application file.

**`providers/userRoleProvider.js`**
```javascript
