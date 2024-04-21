<script setup lang="ts">
 import Button from '@/components/ui/button/Button.vue'
 import Base from '@/components/common/Base.vue'
 import BaseWithInterface from '@/components/common/BaseWithInterface.vue'
 import BaseExportPropsFromFile from '@/components/common/BaseExportPropsFromFile.vue'
</script>

<template>
  <div class="container p-8">
    <Button>Button</Button>
    <br>
    <Base foo="somefoo" bar="bar" />
    <br>
    <BaseWithInterface foo="111" :bar="22+5" />
    <BaseExportPropsFromFile   _id="1" local-path="url" url="rrrr"/>
  </div>
</template>
