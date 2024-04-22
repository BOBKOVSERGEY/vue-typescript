<script setup lang="ts">
function handleChange(event: Event) {
  console.log((event.target as HTMLInputElement).value)
}
</script>

<template>
  <input class="border" type="text" @input="handleChange" />
</template>