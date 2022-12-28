import type { Result } from "@/types/Result";
import { defineStore } from "pinia";

import { useFiltersStore } from "./filtersStore";

import mockDeals from '@/mockData/deals'

interface State {
  results: Result[];
}

export const useResultsStore = defineStore("results", {
  state: (): State => {
    return {
      results: mockDeals,
    };
  },
  getters: {
    getfilteredResults: (state) => {
      const filterStore = useFiltersStore();

      const activeFilters = filterStore.getActiveFilters;

      return state.results.filter(result => activeFilters.every(filter => filter(result)))
    },
  },
});
