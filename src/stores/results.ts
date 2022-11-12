import colors from '@/data/colors';
import providers from '@/data/providers';
import type { Result } from '@/types/Result';
import { defineStore } from 'pinia'

import { useProviderStore } from '../stores/providers'
import { useColorStore } from '../stores/colors'

interface State {
  results: Result[]
}
  
export const useResultsStore = defineStore('results', {
  state: (): State => {
    return {
      results: [
        { id: 1, name: "item 1", provider: providers[0], color: colors[1] },
        { id: 2, name: "item 2", provider: providers[0], color: colors[0] },
        { id: 3, name: "item 3", provider: providers[1], color: colors[0] }
      ]
    }
  },
  getters: {
    getfilteredResults: (state) => {
      const providerStore = useProviderStore();
      const colorStore = useColorStore();
      //move these into getters on individual stores (isResultProviderActive) with result argument that return true or false
      //inseatd of having them both in here
      return state.results.filter(
        x => 
          filterProviders(x, providerStore.getSelectedProvider) 
          && filterColors(x, colorStore.getSelectedColor)
      );
    },
  }
})

const filterProviders = (result: any, selectedProvider: any) => {
  return selectedProvider == null || result.provider.id === selectedProvider.id;
}

const filterColors = (result: any, selectedColor: any) => {
  return selectedColor == null || result.color.id === selectedColor.id;
}