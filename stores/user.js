import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    isMenuOverlay: false,
    isLoading: false,
    cart: [],
    checkout: [],
  }),
  persist: true,
});

export const useToggleStore = defineStore('toggle', {
  state: () => ({
    isToggleSelected: false,
  }),
  persist: true,
});
