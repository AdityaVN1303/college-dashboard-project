import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CoverPage = () => {
  return (
    <div class="main h-screen w-full bg-gradient-to-tr from-purple-900 to-green-700">
        <Image src="https://media.istockphoto.com/id/1142713797/photo/gym-blur-background-fitness-center-workout-personal-training-studio-health-club-with-blurry.webp?b=1&s=170667a&w=0&k=20&c=hq1R2kRKOhU3e4Ilx3PZ_7LI-ILxGrsdKQDnVIqr4Xk=" width={100000} height={100000} class="absolute h-full w-full object-cover mix-blend-multiply" alt="" />
        <div class="flex h-screen items-center justify-center text-center">
          <div class="collect relative">
            <h1 class="text-4xl font-extrabold md:text-8xl text-white">Digital Dashboard</h1>
            <p class="mt-7 md:text-xl font-thin text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa fugiat asperiores suscipit, aut dolorum tenetur. Lorem ipsum dolor sit amet.</p>
            <Link href="/aboutUs"><button class="mt-6 bg-blue-600 font-semibold text-lg rounded-md px-6 py-4 text-white">Know More</button></Link>
          </div>
        </div>
      </div>
  )
}

export default CoverPage