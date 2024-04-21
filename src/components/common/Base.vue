<script setup lang="ts">
defineProps<{
  foo: string,
  bar?: null
}>();
</script>

<template>
  {{ foo }}<br>
  {{ bar }}
</template>