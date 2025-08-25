import { reactive, provide, inject } from 'vue';

const UserRoleContextSymbol = Symbol('userRoles');

export function provideUserRoleContext() {
  const state = reactive({
    currentUser: null,
    // Add any other user-related state
  });

  const setUser = (user) => {
    state.currentUser = user;
  };

  provide(UserRoleContextSymbol, {
    state,
    setUser,
  });
}

export function injectUserRoleContext() {
  const context = inject(UserRoleContextSymbol);
  if (!context) {
    throw new Error('UserRoleContext not provided');
  }
  return context;
}