<script setup lang="ts">
import { computed } from 'vue'

const double = computed<string>(() => {
  return `5`;
})
</script>

<template>
 {{double}}
</template>