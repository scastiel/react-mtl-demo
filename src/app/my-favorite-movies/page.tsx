import { SigninButton, SignoutButton } from '@/components/auth-buttons'
import { getUserFavoriteMovieIds } from '@/lib/favorite'
import { fetchMovie } from '@/lib/tmdb'
import { getServerSession } from 'next-auth'
import Link from 'next/link'

export default async function MyLibraryPage() {
  const session = await getServerSession()

  if (!session) {
    return (
      <>
        <p>You are not logged in.</p>
        <p>
          <SigninButton />
        </p>
      </>
    )
  }

  const movieIds = await getUserFavoriteMovieIds(session)
  const movies = await Promise.all(movieIds.map(fetchMovie))

  return (
    <>
      <p>Welcome, {session.user?.name}!</p>
      <p>
        <SignoutButton />
      </p>
      <ul>
        {movies.map(
          (movie) =>
            movie && (
              <li key={movie.id}>
                <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            )
        )}
      </ul>
    </>
  )
}
