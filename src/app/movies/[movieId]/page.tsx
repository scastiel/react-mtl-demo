import { fetchMovie } from '@/lib/tmdb'
import { notFound } from 'next/navigation'

export default async function MoviePage({
  params: { movieId },
}: {
  params: { movieId: string }
}) {
  const movie = await fetchMovie(movieId)
  if (!movie) notFound()

  return (
    <>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
    </>
  )
}
