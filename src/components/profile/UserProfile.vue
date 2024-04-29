<script setup lang="ts">
import axios from 'axios'
import { onBeforeMount, onMounted, onUpdated, ref } from 'vue'
import type { User } from '@/types'



const user = ref<User | null>(null)
const errors = ref<Error | null>(null)
const loading = ref<boolean>(false)


const getUser = async () => {
  try {
    errors.value = null
    loading.value = true

    const userLocalStorage  = JSON.parse(localStorage.getItem('user')!);
    if (userLocalStorage) return user.value = userLocalStorage;

    const response = await axios.get('https://api.github.com/users/BOBKOVSERGEY')
    user.value = response.data

    localStorage.setItem('user', JSON.stringify(user.value));
  } catch (error) {
    errors.value = error as Error
  } finally {
    loading.value = false
  }
}

onBeforeMount(async () => {
  console.log('created')
  await getUser()
})

onMounted(() => {
  console.log("mounted");
});
onUpdated(() => {
  console.log("updated");
})

getUser()

</script>

<template>

  <div v-if="loading">Loading...</div>
  <div class="user-profile" v-else-if="user">
    <img :src="user.avatar_url" alt="`${user.name} Avatar`" width="200" />
    <div>
      <h1>{{ user.name }}</h1>
      <p>{{ user.bio }}</p>
      <p>Twitter: {{ user.twitter_username }}</p>
      <p>Blog: {{ user.blog }}</p>
    </div>
  </div>
  <div class="error" v-else-if="errors">
    {{ errors.message }}
  </div>
</template>