import { searchMovies } from '@/lib/tmdb'
import Link from 'next/link'

export default async function SearchMoviePage({
  searchParams: { query },
}: {
  searchParams: { query: string }
}) {
  const movies = query ? await searchMovies(query) : []

  return (
    <>
      <h1>Search Movies (1st version)</h1>
      <form action="/search-movies">
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
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
