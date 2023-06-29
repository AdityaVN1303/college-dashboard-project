import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
    <nav className="fixed grid w-screen grid-cols-1 z-10 px-5  bg-black py-5 text-center text-white md:py-3">
  <ul className="flex flex-wrap items-center justify-center space-x-7 text-xl mx-10 text-center [&>li]:flex-1 md:col-span-2">
  <li><Link href='/'>Home</Link></li>
    <li><Link href='/attendance'>Predictor</Link></li>
    <li><Link href='/contactUs'>Contact</Link></li>
    <li><Link href='/leaderboards'>Leaderboards</Link></li>
    <li><Link href='/aboutUs'>About</Link></li>
    <li><Link href='/blogs'>Blogs</Link></li>
    <li><Link href='/news'>News</Link></li>
    <li><Link href='/alumini'>Aluminis</Link></li>
    <li><Link href='/navigation'>Navigate</Link></li>
    <li><Link href='/events'>Events</Link></li>
    <li><Link href='/achievement'>Achievements</Link></li>
    <li><Link href='/admission'>Admission</Link></li>
    <li><Link href='/faculty'>Faculty</Link></li>
    <li><Link href='/syllabus'>Syllabus</Link></li>
  </ul>
</nav>

    </>
  )
}

export default Navbar