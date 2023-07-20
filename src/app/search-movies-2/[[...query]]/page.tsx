import { SearchForm } from '@/components/search-form'
import { searchMovies } from '@/lib/tmdb'
import Link from 'next/link'

export default function SearchMoviePage({
  params: { query },
}: {
  params: { query: string[] | undefined }
}) {
  const query_ = decodeURIComponent(query?.[0] ?? '')

  return (
    <>
      <h1>Search Movies (2nd version)</h1>

      <SearchForm query={query_} />

      <MovieResults query={query_} />
    </>
  )
}

async function MovieResults({ query }: { query: string }) {
  const movies = query ? await searchMovies(query) : []
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  )
}
