<template>
  <div>
    <button @click="filterProvider(null)">All Providers</button>
    <button v-for="provider in providers" @click="filterProvider(provider.id)">
      {{ provider.name }}
      {{ provider.id === providerStore.getSelectedProvider?.id ? "-" : "" }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import providers from "@/data/providers";

import { mapState } from "pinia";
import { useProviderStore } from "@/stores/providers";

const providerStore = useProviderStore();

function filterProvider(id: number) {
  providerStore.selectProvider(id);
}
</script>
