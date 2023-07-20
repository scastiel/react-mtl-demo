import Link from 'next/link'

export default function HomePage() {
  return (
    <ul>
      <li>
        <Link href="/popular-movies">Popular Movies</Link>
      </li>
      <li>
        <Link href="/search-movies">Search Movies (1st version)</Link>
      </li>
      <li>
        <Link href="/search-movies-2">Search Movies (2nd version)</Link>
      </li>
      <li>
        <Link href="/my-favorite-movies">My Favorite Movies</Link>
      </li>
    </ul>
  )
}
