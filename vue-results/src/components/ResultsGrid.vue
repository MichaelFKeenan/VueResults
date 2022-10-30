<template>
  <div>
    <div>
      <h3>Filters</h3>
      <div>
        <button @click="clearFilters()">Clear All</button>
      </div>
      <div>
        <button @click="filterProvider(null)">All Providers</button>
        <button v-for="provider in providers" @click="filterProvider(provider.id)">{{provider.name}}</button>
      </div>
      <div>
        <button @click="filterColor(null)">All Colors</button>
        <button v-for="color in colors" @click="filterColor(color.id)">{{color.name}}</button>
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

const selectedProviderId = ref(null);
const selectedColorId = ref(null);

const results = [
  { id: 1, name: "item 1", provider: providers[0], color: colors[1] },
  { id: 2, name: "item 2", provider: providers[0], color: colors[0] },
  { id: 3, name: "item 3", provider: providers[1], color: colors[0] }
];

const filteredResults = computed(() => {
  return results.filter(x => filterProviders(x) && filterColors(x));
})

const filterProviders = (result: any) => {
  return selectedProviderId.value == null || result.provider.id === selectedProviderId.value;
}

const filterColors = (result: any) => {
  return selectedColorId.value == null || result.color.id === selectedColorId.value;
}

function filterProvider(id: number) {
  this.selectedProviderId = id;
}

function filterColor(id: number) {
  this.selectedColorId = id;
}

function clearFilters() {
  this.selectedProviderId = null;
  this.selectedColorId = null;
}
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}
</style>
