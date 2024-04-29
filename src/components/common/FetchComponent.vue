<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const props = defineProps({
  url: {
    type: String,
    required: true,
  },
  method: {
    type: String,
    default: "GET",
  },
});

const data = ref<Object | null>();
const errors = ref<Error | null>();
const loading = ref<boolean>(false);

async function fetchData () {
  try {
    loading.value = true;
    const response = await axios(props.url, {
      method: props.method,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    data.value = response.data;
  } catch (error) {
    errors.value = error as Error;
  } finally {
    loading.value = false;
  }
}

fetchData();

</script>

<template>
  <slot name="loading" v-if="loading">
    <div class="loading-message">Loading...</div>
  </slot>
  <slot :data="data" v-if="data"></slot>
  <slot name="error" :error="errors" v-if="errors">
    <div class="error">
      <p>Error: {{ errors.message }}</p>
    </div>
  </slot>
</template>