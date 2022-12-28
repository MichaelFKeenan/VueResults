import speeds from "@/data/speeds";
import providers from "@/data/providers";
import type { Result } from "@/types/Result";
import { defineStore } from "pinia";

import { useProviderStore } from "../stores/providers";
import { useSpeedStore } from "./speeds";

import providerFilter from "@/filters/providerFilter";
import speedFilter from "@/filters/speedFilter";

interface State {
  results: Result[];
}

export const useResultsStore = defineStore("results", {
  state: (): State => {
    return {
      results: [
        { id: 1, name: "item 1", provider: providers[0], speed: speeds[1] },
        { id: 2, name: "item 2", provider: providers[0], speed: speeds[0] },
        { id: 3, name: "item 3", provider: providers[1], speed: speeds[0] },
      ],
    };
  },
  getters: {
    getfilteredResults: (state) => {
      const providerStore = useProviderStore();
      const speedStore = useSpeedStore();

      return state.results.filter(
        (x) =>
          providerFilter(x, providerStore.getSelectedProvider) &&
          speedFilter(x, speedStore.getSelectedSpeed)
      );
    },
  },
});
