<template>
  <div>
    <button @click="filterSpeed(null)">All Speeds</button>
    <button v-for="speed in speeds" @click="filterSpeed(speed.id)">
      {{ speed.name }}
      {{ speed.id === speedStore.getSelectedSpeed?.id ? "-" : "" }}
      ({{ speed.amountOfFilteredDealsMatching }})
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

import { mapState } from "pinia";
import { useSpeedStore } from "./speedStore";
import { useFiltersStore } from "@/stores/filtersStore";

const speedStore = useSpeedStore();

const filterStore = useFiltersStore();

const filterFunction = (result: Result) =>
  speedStore.getSelectedSpeed == null ||
  result.speed.id === speedStore.getSelectedSpeed.id;

onMounted(() => {
  filterStore.registerFilter(filterFunction);
});

const speeds = computed(() => {
  return speedStore.getSpeeds;
});

function filterSpeed(id: number) {
  speedStore.selectSpeed(id);
}
</script>
