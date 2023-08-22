import Link from 'next/link';
import React from 'react'

export const NavBar = () => {
  return (
    <nav>
      <ul className='flex gap-8 justify-end p-8'>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/api/auth/signin">Sign In</Link></li>
        <li><Link href="/api/auth/signout">Sign Out</Link></li>
        <li><Link href="/about">About</Link></li>
        </ul>
    </nav>
  )
}
