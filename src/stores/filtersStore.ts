import type { Result } from "@/types/Result";
import { defineStore } from "pinia";

type dealFilter = (result: Result) => boolean;

interface State {
    activeFilters: dealFilter[];
}

export const useFiltersStore = defineStore("filters", {
  state: (): State => {
    return {
        activeFilters: [],
    };
  },
  getters: {
    getActiveFilters: (state) => state.activeFilters,
  },
  actions: {
    registerFilter(filter: dealFilter) {
      this.activeFilters.push(filter);
    },
  },
});
