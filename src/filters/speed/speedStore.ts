import type { Speed } from "@/types/Speed";
import { defineStore } from "pinia";

import mockSpeeds from "@/mockData/speeds";
import { useResultsStore } from "@/stores/resultStore";
import type { Result } from "@/types/Result";

interface State {
  speeds: Speed[];
  selectedSpeedId: number | null;
}

export const useSpeedStore = defineStore("speeds", {
  state: (): State => {
    return {
      speeds: mockSpeeds,
      selectedSpeedId: null,
    };
  },
  getters: {
    getSpeeds: (state) => {
      const resultsStore = useResultsStore();
      const speeds = state.speeds;

      speeds.forEach((speed) => {
        speed.amountOfFilteredDealsMatching =
          resultsStore.getfilteredResults.filter(
            (x) => x.speed.id === speed.id
          ).length;
      });

      return speeds;
    },
    getSelectedSpeed: (state) =>
      state.speeds.find((x) => x.id === state.selectedSpeedId),
  },
  actions: {
    selectSpeed(selectedId: number) {
      this.selectedSpeedId = selectedId;
    },
    clear() {
      this.selectedSpeedId = null;
    },
    filterResults(results: Result[]): Result[] {
      return results.filter(
        (x) =>
          this.getSelectedSpeed == null || x.speed.id === this.getSelectedSpeed.id
      );
    },
    filterResult(result: Result): boolean {
      return this.getSelectedSpeed == null || result.speed.id === this.getSelectedSpeed.id
    },
  },
});
