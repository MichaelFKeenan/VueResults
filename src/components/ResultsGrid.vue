<template>
  <div>
    <div>

      <h3>Filters</h3>
      
      <div>
        <button @click="clearFilters()">Clear All</button>
      </div>

      <ProviderFilter />

      <SpeedFilter />

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
import ProviderFilter from "./filters/ProviderFilter.vue";
import SpeedFilter from "./filters/SpeedFilter.vue";

import type { Result } from "../types/Result";

import { mapState } from 'pinia'
import { useSpeedStore } from '../stores/speeds'
import { useResultsStore } from '../stores/results'
import { useProviderStore } from '../stores/providers'

const selectedSpeedId = ref(null);

const speedStore = useSpeedStore();
const resultsStore = useResultsStore();
const providerStore = useProviderStore();

const filteredResults = computed(() => {
  return resultsStore.getfilteredResults;
})

function clearFilters() {
  speedStore.clear();
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
