<template>
  <div>
    <div>

      <h3>Filters</h3>
      
      <div>
        <button @click="clearFilters()">Clear All</button>
      </div>
      <div>
        <button @click="filterProvider(null)">All Providers</button>
        <button v-for="provider in providers" @click="filterProvider(provider.id)">{{provider.name}} {{provider.id === providerStore.getSelectedProvider?.id ? '-' : ''}}</button>
      </div>
      <div>
        <button @click="filterColor(null)">All Colors</button>
        <button v-for="color in colors" @click="filterColor(color.id)">{{color.name}} {{color.id === colorStore.getSelectedColor?.id ? '-' : ''}}</button>
      </div>
    </div>

    <h3>Results</h3>

    <ul>
      <li v-for="result in filteredResults">
        <ResultRow :result="result" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import ResultRow from "./ResultRow.vue";
import providers from "../data/providers";
import colors from "../data/colors";
import type { Result } from "../types/Result";

import { mapState } from 'pinia'
import { useProviderStore } from '../stores/providers'
import { useColorStore } from '../stores/colors'

const selectedColorId = ref(null);

const providerStore = useProviderStore();
const colorStore = useColorStore();

const results = [
  { id: 1, name: "item 1", provider: providers[0], color: colors[1] },
  { id: 2, name: "item 2", provider: providers[0], color: colors[0] },
  { id: 3, name: "item 3", provider: providers[1], color: colors[0] }
];

const filteredResults = computed(() => {
  return results.filter(x => filterProviders(x) && filterColors(x));
})

const filterProviders = (result: any) => {
  return providerStore.getSelectedProvider == null || result.provider.id === providerStore.getSelectedProvider.id;
}

const filterColors = (result: any) => {
  return colorStore.getSelectedColor == null || result.color.id === colorStore.getSelectedColor.id;
}

function filterProvider(id: number) {
  providerStore.selectProvider(id);
}

function filterColor(id: number) {
  colorStore.selectColor(id);
}

function clearFilters() {
  colorStore.clear();
  providerStore.clear();
}
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}
</style>
