import type { Provider } from '@/types/Provider'
import { defineStore } from 'pinia'

interface State {
  providers: Provider[],
  selectedProviderId: number | null
}
  
export const useProviderStore = defineStore('providers', {
  state: (): State => {
    return {
      providers: [
        {
          id: 1,
          name: "provider 1",
        },
        {
          id: 2,
          name: "provider 2",
        },
      ],
      selectedProviderId: null
    }
  },
  getters: {
    getProviders: (state) => state.providers,
    getSelectedProvider: (state) => state.providers.find(x=>x.id === state.selectedProviderId),
  },
  actions: {
    selectProvider(providerId: number) {
      this.selectedProviderId = providerId;
    },
    clear() {
      this.selectedProviderId = null;
    }
  },
})