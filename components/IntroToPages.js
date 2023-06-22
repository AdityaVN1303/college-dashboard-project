import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const IntroToPages = () => {
  return (
    <div class="main py-10 px-7 sm:px-5 md:px-20 lg:px-20 ">
  <div class="grid grid-cols-1 text-center sm:grid-cols-2 items-center gap-10 mb-10">
      <Image src="https://images.unsplash.com/photo-1535046584154-094e08fbe61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2Fsa2luZyUyMHVwJTIwc3RhaXJzfGVufDB8fDB8fHww&w=1000&q=80" width={1000} height={100} alt="" class="h-[70vh]   object-cover mx-auto"/>
    
    <div class="text flex flex-col sm:flex-col items-center justify-center">
      <h1 class="text-3xl md:text-6xl my-5">LeaderBoards</h1>
      <p class="text-center">
The Leaderboards app is a simple yet powerful tool that ranks students based on their attendance. By analyzing attendance records, it creates a fair and transparent leaderboard that showcases the most dedicated and punctual students. Inspire healthy competition and motivate students to maintain excellent attendance records with this user-friendly app.
</p>
      <Link href= '/leaderboards'>
      <button class="px-7 py-4  bg-slate-400 text-white rounded-md mt-5">Check Now</button>
      </Link>
    </div>
  </div>

    <div class="grid grid-cols-1 text-center sm:grid-cols-2 items-center gap-10 mb-10 ">
      <Image src="https://media.istockphoto.com/id/1353578581/photo/may-i-ask-something.webp?b=1&s=170667a&w=0&k=20&c=fWYmAlKVRx1r3pyyRzexyZobymRxbrkEJnWFzX2K7i0=" alt="" width={1000} height={100} class="h-[70vh]   object-cover mx-auto sm:order-last"/>
    
      <div class="text flex flex-col sm:flex-col items-center justify-center">
      <h1 class="text-3xl md:text-6xl my-5">Attendance Predictor</h1>
      <p class="text-center">The Attendance Predictor app utilizes your current attendance data and desired attendance goal to accurately predict the number of lectures you need to attend. With a user-friendly interface, it helps you stay on track and make informed decisions to achieve your attendance targets. Take control of your attendance with ease and efficiency.</p>
      <Link href= '/attendance'>
      <button class="px-7 py-4  bg-slate-400 text-white rounded-md mt-5">Check Now</button>
      </Link>
    </div>
  </div>

    <div class="grid grid-cols-1 text-center sm:grid-cols-2 items-center gap-10 mb-10">
      <Image src="https://media.istockphoto.com/id/1065782416/photo/online-news-in-mobile-phone-close-up-of-smartphone-screen-man-reading-articles-in-application.webp?b=1&s=170667a&w=0&k=20&c=3sEfQJpggmkOhFRisDiwqO3GGDNnholVOmA15956ViE=" width={1000} height={100} alt="" class="h-[70vh]   object-cover mx-auto"/>
    
      <div class="text flex flex-col sm:flex-col items-center justify-center">
      <h1 class="text-3xl md:text-6xl my-5">Trending News</h1>
      <p class="text-center">
The News app keeps you up-to-date with the latest happenings in your college. From events and announcements to important news, it provides a convenient platform to stay informed. With a sleek design and real-time updates, never miss out on the buzz around campus. Stay connected with your college community effortlessly.</p>
      <Link href= '/news'>
      <button class="px-7 py-4  bg-slate-400 text-white rounded-md mt-5">View More</button>
      </Link>
    </div>
  </div>

      <div class="grid grid-cols-1 text-center sm:grid-cols-2 items-center gap-10 mb-10 ">
      <Image src="https://images.unsplash.com/photo-1519337265831-281ec6cc8514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" width={1000} height={100} alt="" class="h-[70vh]   object-cover mx-auto sm:order-last"/>
    
      <div class="text flex flex-col sm:flex-col items-center justify-center">
      <h1 class="text-3xl md:text-6xl my-5">Sinhgad Diaries</h1>
      <p class="text-center">The Blog app is a treasure trove of captivating stories and insights shared by faculty and students of your college. Discover a diverse range of topics and perspectives, as talented writers bring their experiences to life. Engage with thought-provoking content and immerse yourself in a world of knowledge and creativity, all within a single app.</p>
      <Link href= '/blogs'>
      <button class="px-7 py-4  bg-slate-400 text-white rounded-md mt-5">See More</button>
      </Link>
    </div>
  </div>
</div>
  )
}

export default IntroToPages