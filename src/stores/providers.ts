import type { Provider } from "@/types/Provider";
import { defineStore } from "pinia";

import { useResultsStore } from "./results";

interface State {
  providers: Provider[];
  selectedProviderId: number | null;
}

export const useProviderStore = defineStore("providers", {
  state: (): State => {
    return {
      providers: [
        {
          id: 1,
          name: "provider 1",
          amountOfFilteredDealsMatching: 0,
        },
        {
          id: 2,
          name: "provider 2",
          amountOfFilteredDealsMatching: 0,
        },
      ],
      selectedProviderId: null,
    };
  },
  getters: {
    getProviders: (state) => {
      const resultsStore = useResultsStore();
      const providers = state.providers;

      providers.forEach((provider) => {
        provider.amountOfFilteredDealsMatching =
          resultsStore.getfilteredResults.filter(
            (x) => x.provider.id === provider.id
          ).length;
      });
      return providers;
    },
    getSelectedProvider: (state) =>
      state.providers.find((x) => x.id === state.selectedProviderId),
  },
  actions: {
    selectProvider(providerId: number) {
      this.selectedProviderId = providerId;
    },
    clear() {
      this.selectedProviderId = null;
    },
  },
});
