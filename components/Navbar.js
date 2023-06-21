import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
    <nav className="fixed grid w-screen grid-cols-1 z-10  bg-black py-5 text-center text-white md:grid-cols-3 md:py-3">
  <Link href="/"><div className="head mb-2 text-5xl font-bold">StaTrack</div></Link>
  <ul className="flex flex-wrap items-center justify-center space-x-5 text-xl md:col-span-2">
    <li></li>
    <li><Link href='/attendance'>Predictor</Link></li>
    <li><Link href='/contactUs'>Contact</Link></li>
    <li><Link href='/leaderboards'>Leaderboards</Link></li>
    <li><Link href='/aboutUs'>About</Link></li>
    <li><Link href='/blogs'>Blogs</Link></li>
    <li><Link href='/news'>News</Link></li>
  </ul>
</nav>

    </>
  )
}

export default Navbar