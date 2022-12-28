<template>
  <div>
    <button @click="filterSpeed(null)">All Speeds</button>
    <button v-for="speed in speeds" @click="filterSpeed(speed.id)">
      {{ speed.name }}
      {{ speed.id === speedStore.getSelectedSpeed?.id ? "-" : "" }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

import speeds from "@/data/speeds";

import { mapState } from "pinia";
import { useSpeedStore } from "@/stores/speeds";

const selectedSpeedId = ref(null);

const speedStore = useSpeedStore();

function filterSpeed(id: number) {
  speedStore.selectSpeed(id);
}
</script>
