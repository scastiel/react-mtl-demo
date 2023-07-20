import { fetchMovies } from '@/lib/tmdb'
import Link from 'next/link'

export default async function PopularMoviesPage() {
  const movies = await fetchMovies()

  return (
    <>
      <h1>Popular Movies</h1>
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
