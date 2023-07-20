import { isUserFavorite, setUserFavorite } from '@/lib/favorite'
import { getServerSession } from 'next-auth'
import { revalidatePath } from 'next/cache'

export async function FavoriteButton({ movieId }: { movieId: string }) {
  const session = await getServerSession()
  if (!session) return null

  const isFavorite = await isUserFavorite(session, movieId)

  return (
    <form action={addToFavorites}>
      <input type="hidden" name="movieId" value={movieId} />
      <input
        type="hidden"
        name="isFavorite"
        value={isFavorite ? 'yes' : 'no'}
      />
      <button type="submit">
        {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      </button>
    </form>
  )
}

async function addToFavorites(formData: FormData) {
  'use server'
  const movieId = formData.get('movieId') as string
  const isFavorite = formData.get('isFavorite') === 'yes'

  const session = await getServerSession()
  if (!session) throw new Error('No user')

  await setUserFavorite(session, movieId, isFavorite)

  revalidatePath(`/movies/${movieId}`)
}
