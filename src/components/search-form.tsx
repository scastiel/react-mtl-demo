'use client'
import { useRouter } from 'next/navigation'

export function SearchForm({ query }: { query: string }) {
  const router = useRouter()

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        const data = new FormData(event.target as HTMLFormElement)
        const query = (data.get('query') as string) ?? ''
        router.push(`/search-movies-2/${encodeURIComponent(query)}`)
      }}
    >
      <label htmlFor="query">Search:</label>
      <input
        id="query"
        type="search"
        name="query"
        placeholder="e.g. Mission Impossible"
        defaultValue={query}
        required
      />
      <button type="submit">Search</button>
    </form>
  )
}
