'use client'
import { signIn, signOut } from 'next-auth/react'

export function SigninButton() {
  return <button onClick={() => signIn('github')}>Sign in</button>
}

export function SignoutButton() {
  return <button onClick={() => signOut()}>Sign out</button>
}
