interface Movie {
  id: string
  title: string
  overview: string
}

export async function fetchMovies() {
  const apiKey = process.env.TMDB_API_KEY
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
  const res = await fetch(url)
  const { results: movies } = (await res.json()) as { results: Movie[] }
  return movies
}

export async function fetchMovie(movieId: string): Promise<Movie | null> {
  // await delay(Math.random() * 5000)
  const apiKey = process.env.TMDB_API_KEY
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
  const res = await fetch(url)
  if (res.status === 404) return null
  const movie: Movie = await res.json()
  return movie
}

export async function searchMovies(query: string): Promise<Movie[]> {
  // await delay(Math.random() * 5000)
  const apiKey = process.env.TMDB_API_KEY
  const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
    query
  )}&api_key=${apiKey}`
  const res = await fetch(url)
  const { results: movies } = (await res.json()) as { results: Movie[] }
  return movies
}

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
