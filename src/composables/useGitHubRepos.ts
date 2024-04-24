import { useFetch} from '@/composables/useFetch'
import { ref } from 'vue'

type Repo = { /**... */ }

export const useGitHubRepos = (username: string) => {
  const response = useFetch<Repo>(
    `https://api.github.com/users/${username}/repos`
  )

  return {
    repos: response.data,
    loading: response.loading,
    error: response.error
  }
}