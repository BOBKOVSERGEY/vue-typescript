<script setup lang="ts">
import FetchComponent from '@/components/common/FetchComponent.vue'
import type { User } from '@/types'
import UserProfile from '@/components/profile/UserProfile.vue'
</script>

<template>
  <UserProfile/>
  <!--<FetchComponent url="https://api.github.com/users/BOBKOVSERGEY">
    <template #default="defaultProps">
      <div class="user-profile">
        <img
          :src="(defaultProps.data as User).avatar_url"
          alt="`${defaultProps.data.name} Avatar`"
          width="200"
        />
        <div>
          <h1>{{ (defaultProps.data as User).name }}</h1>
          <p>{{ (defaultProps.data as User).bio }}</p>
          <p>Twitter: {{(defaultProps.data as User).twitter_username }}
          </p>
          <p>Blog: {{ (defaultProps.data as User).blog }}</p>
        </div>
      </div>
    </template>
  </FetchComponent>-->
</template>