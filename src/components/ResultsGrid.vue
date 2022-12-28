<template>
  <div class="results-grid">
    <div class="results-grid__filters">
      <FiltersList />
    </div>

    <div class="results-grid__deals">
      <ul>
        <li v-for="result in results">
          <ResultRow :result="result" />
        </li>
      </ul>
    </div>
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
.results-grid {
  display: flex;
}

.results-grid__filters {
  width: 20%;
}

.results-grid__deals {
  width:80%;
}
</style>
