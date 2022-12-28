<template>
  <p>{{ result.id }}, {{ result.name }}, {{result.provider.name}}, {{result.speed.name}}</p>
</template>

<script setup lang="ts">
  import type { Result } from "../types/Result"

  const props = defineProps<{
    result: Result
  }>()
</script>
