<script setup lang="ts">
 import Button from '@/components/ui/button/Button.vue'
 import Base from '@/components/common/Base.vue'
</script>

<template>
  <div class="container p-8">
    <Button>Button</Button>
    <br>
    <Base foo="somefoo" bar="bar" />
  </div>
</template>
