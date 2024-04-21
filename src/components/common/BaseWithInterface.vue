<script setup lang="ts">
interface Props {
  foo: string
  bar?: number
}

defineProps<Props>()
</script>

<template>
  {{ foo }}<br>
  {{ bar }}
</template>