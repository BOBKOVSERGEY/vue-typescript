<script setup lang="ts">
import { onMounted, ref } from 'vue'

   const el = ref<HTMLInputElement | null>(null);

   onMounted(() => {
     el.value?.focus()
   })
</script>

<template>
  <input class="border" ref="el" />
</template>