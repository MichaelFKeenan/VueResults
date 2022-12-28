<template>
  <div>
    <p><b>Provider</b></p>
    <button @click="filterProvider(null)">All</button>
    <button v-for="provider in providers" @click="filterProvider(provider.id)" class="filter-btn">
      {{ provider.name }}
      {{ provider.id === providerStore.getSelectedProvider?.id ? "-" : "" }}
      ({{ provider.amountOfFilteredDealsMatching }})
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

import { mapState } from "pinia";
import { useProviderStore } from "./providerStore";
import { useFiltersStore } from "@/stores/filtersStore";

const providerStore = useProviderStore();
const filterStore = useFiltersStore();

const filterFunction = (result: Result) =>
  providerStore.getSelectedProvider == null ||
  result.provider.id === providerStore.getSelectedProvider.id;

onMounted(() => {
  filterStore.registerFilter(filterFunction);
});

const providers = computed(() => {
  return providerStore.getProviders;
});

function filterProvider(id: number) {
  providerStore.selectProvider(id);
}
</script>

<style scoped>
.filter-btn {
  display: block;
}
</style>
