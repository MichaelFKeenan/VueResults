<template>
  <div>
    <div>
      <button @click="clearFilters()">Clear All</button>
    </div>

    <ProviderFilter />

    <SpeedFilter />
  </div>
</template>

<script setup lang="ts">
import ProviderFilter from "@/filters/provider/ProviderFilter.vue";
import SpeedFilter from "@/filters/speed/SpeedFilter.vue";

import { useSpeedStore } from "@/filters/speed/speedStore";
import { useProviderStore } from "@/filters/provider/providerStore";

const speedStore = useSpeedStore();
const providerStore = useProviderStore();

function clearFilters() {
  speedStore.clear();
  providerStore.clear();
}
</script>
