import speeds from '@/data/speeds';
import providers from '@/data/providers';
import type { Result } from '@/types/Result';
import { defineStore } from 'pinia'

import { useProviderStore } from '../stores/providers'
import { useSpeedStore } from './speeds'

interface State {
  results: Result[]
}
  
export const useResultsStore = defineStore('results', {
  state: (): State => {
    return {
      results: [
        { id: 1, name: "item 1", provider: providers[0], speed: speeds[1] },
        { id: 2, name: "item 2", provider: providers[0], speed: speeds[0] },
        { id: 3, name: "item 3", provider: providers[1], speed: speeds[0] }
      ]
    }
  },
  getters: {
    getfilteredResults: (state) => {
      const providerStore = useProviderStore();
      const speedStore = useSpeedStore();
      //move these into getters on individual stores (isResultProviderActive) with result argument that return true or false
      //inseatd of having them both in here
      //then register filters an do each.filters(state.results) or state.results.filter(filters) if possible
      return state.results.filter(
        x => 
          filterProviders(x, providerStore.getSelectedProvider) 
          && filterSpeeds(x, speedStore.getSelectedSpeed)
      );
    },
  }
})

const filterProviders = (result: any, selectedProvider: any) => {
  return selectedProvider == null || result.provider.id === selectedProvider.id;
}

//move these into their filters
const filterSpeeds = (result: any, selectedSpeed: any) => {
  return selectedSpeed == null || result.speed.id === selectedSpeed.id;
}