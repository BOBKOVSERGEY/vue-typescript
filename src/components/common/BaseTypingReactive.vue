<script setup lang="ts">
import { reactive } from 'vue'

interface Book {
  title: string,
  year?: number,
}

const book: Book = reactive({
  title: 'Somer title',
});
</script>

<template>
 {{book.title}}
</template>