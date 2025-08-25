import { reactive, provide, inject } from 'vue';

const TenantContextSymbol = Symbol('tenant');

export function provideTenantContext() {
    const state = reactive({
        currentTenant: null,
    });

    const setTenant = (tenant) => {
        state.currentTenant = tenant;
    };

    provide(TenantContextSymbol, {
        state,
        setTenant,
    });
}

export function injectTenantContext() {
    const context = inject(TenantContextSymbol);
    if (!context) {
        throw new Error('TenantContext not provided');
    }
    return context;
}