import type { Speed } from '@/types/Speed'
import { defineStore } from 'pinia'

interface State {
  speeds: Speed[],
  selectedSpeedId: number | null
}
  
export const useSpeedStore = defineStore('speeds', {
  state: (): State => {
    return {
      speeds: [
        {
          id: 1,
          name: "30mb",
          amountOfFilteredDealsMatching: 0
        },
        {
          id: 2,
          name: "50mb",
          amountOfFilteredDealsMatching: 0
        },
      ],
      selectedSpeedId: null
    }
  },
  getters: {
    getSpeeds: (state) => state.speeds,
    getSelectedSpeed: (state) => state.speeds.find(x=>x.id === state.selectedSpeedId),
  },
  actions: {
    selectSpeed(selectedId: number) {
      this.selectedSpeedId = selectedId;
    },
    clear() {
      this.selectedSpeedId = null;
    }
  },
})