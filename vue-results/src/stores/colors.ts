import type { Color } from '@/types/Color'
import { defineStore } from 'pinia'

interface State {
  colors: Color[],
  selectedColorId: number | null
}
  
export const useColorStore = defineStore('colors', {
  state: (): State => {
    return {
      colors: [
        {
          id: 1,
          name: "green",
        },
        {
          id: 2,
          name: "blue",
        },
      ],
      selectedColorId: null
    }
  },
  getters: {
    getColors: (state) => state.colors,
    getSelectedColor: (state) => state.colors.find(x=>x.id === state.selectedColorId),
  },
  actions: {
    selectColor(selectedId: number) {
      this.selectedColorId = selectedId;
    },
    clear() {
      this.selectedColorId = null;
    }
  },
})