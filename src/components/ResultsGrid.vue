<template>
  <div>
    <div>
      <h3>Filters</h3>

      <FiltersList />
    </div>

    <h3>Results</h3>

    <ul>
      <li v-for="result in results">
        <ResultRow :result="result" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

import ResultRow from "./ResultRow.vue";
import FiltersList from "./filters/FiltersList.vue";

import type { Result } from "@/types/Result";

import { mapState } from "pinia";
import { useResultsStore } from "@/stores/resultStore";

const resultsStore = useResultsStore();

const results = computed(() => {
  return resultsStore.getfilteredResults;
});
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}
</style>
