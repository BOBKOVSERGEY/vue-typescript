<script setup lang="ts">
  import { useGitHubRepos } from '@/composables/useGitHubRepos';

  const { repos, loading, error } = useGitHubRepos('BOBKOVSERGEY');

</script>

<template>
  <h2>Repos</h2>
  <div v-if="loading">
    Loading...
  </div>
  <div v-else-if="error">
    {{ error}}
  </div>
  <div v-else>
    <pre>{{ repos }}</pre>
  </div>

  <ul>

  </ul>
</template>