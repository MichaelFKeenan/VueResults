import type { Provider } from "@/types/Provider";
import { defineStore } from "pinia";
import mockProviders from "@/mockData/providers";
import { useResultsStore } from "@/stores/resultStore";
import type { Result } from "@/types/Result";

interface State {
  providers: Provider[];
  selectedProviderId: number | null;
}

export const useProviderStore = defineStore("providers", {
  state: (): State => {
    return {
      providers: mockProviders,
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
    filterResults(results: Result[]): Result[] {
      return results.filter(
        (x) =>
          this.getSelectedProvider == null ||
          x.provider.id === this.getSelectedProvider.id
      );
    },
    filterResult(result: Result): boolean {
      return (
        this.getSelectedProvider == null ||
        result.provider.id === this.getSelectedProvider.id
      );
    },
  },
});
