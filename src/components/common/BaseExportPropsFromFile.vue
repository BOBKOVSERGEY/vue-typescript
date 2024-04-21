<script setup lang="ts">
import type { Image} from '@/types'

defineProps<Image>()
</script>

<template>
  {{ localPath }}<br>
  {{ url }}<br>
  {{ _id }}<br>
</template>