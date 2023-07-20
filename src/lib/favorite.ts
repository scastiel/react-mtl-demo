import { getPrisma } from '@/lib/prisma'
import { Session } from 'next-auth'

export async function getUserFavoriteMovieIds(session: Session) {
  const prisma = getPrisma()
  const favorites = await prisma.userFavorite.findMany({
    where: { email: session.user?.email! },
  })
  return favorites.map((favorite) => favorite.movieId)
}

export async function isUserFavorite(session: Session, movieId: string) {
  const prisma = getPrisma()
  const isFavorite =
    session &&
    (await prisma.userFavorite.findUnique({
      where: { email_movieId: { email: session.user?.email!, movieId } },
    })) !== null
  return isFavorite
}

export async function setUserFavorite(
  session: Session,
  movieId: string,
  isFavorite: boolean
) {
  const prisma = getPrisma()

  if (isFavorite) {
    await prisma.userFavorite.delete({
      where: { email_movieId: { email: session.user?.email!, movieId } },
    })
  } else {
    await prisma.userFavorite.create({
      data: { email: session.user?.email!, movieId },
    })
  }
}
