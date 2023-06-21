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
      <p class="text-left">Lorem Lorem ipsum dolor sit amet. Lorem, i  ipsum dolor sit amet consectetur, adipisicing elit. Esse similique pariatur doloremque
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, similique.  beatae tenetur ipsum.</p>
      <Link href= '/leaderboards'>
      <button class="px-7 py-4  bg-slate-400 text-white rounded-md mt-5">Check Now</button>
      </Link>
    </div>
  </div>

    <div class="grid grid-cols-1 text-center sm:grid-cols-2 items-center gap-10 mb-10 ">
      <Image src="https://media.istockphoto.com/id/1353578581/photo/may-i-ask-something.webp?b=1&s=170667a&w=0&k=20&c=fWYmAlKVRx1r3pyyRzexyZobymRxbrkEJnWFzX2K7i0=" alt="" width={1000} height={100} class="h-[70vh]   object-cover mx-auto sm:order-last"/>
    
      <div class="text flex flex-col sm:flex-col items-center justify-center">
      <h1 class="text-3xl md:text-6xl my-5">Attendance Predictor</h1>
      <p class="text-left">Lorem Lorem ipsum dolor sit amet. Lorem, i  ipsum dolor sit amet consectetur, adipisicing elit. Esse similique pariatur doloremque
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, similique.  beatae tenetur ipsum.</p>
      <Link href= '/attendance'>
      <button class="px-7 py-4  bg-slate-400 text-white rounded-md mt-5">Check Now</button>
      </Link>
    </div>
  </div>

    <div class="grid grid-cols-1 text-center sm:grid-cols-2 items-center gap-10 mb-10">
      <Image src="https://media.istockphoto.com/id/1065782416/photo/online-news-in-mobile-phone-close-up-of-smartphone-screen-man-reading-articles-in-application.webp?b=1&s=170667a&w=0&k=20&c=3sEfQJpggmkOhFRisDiwqO3GGDNnholVOmA15956ViE=" width={1000} height={100} alt="" class="h-[70vh]   object-cover mx-auto"/>
    
      <div class="text flex flex-col sm:flex-col items-center justify-center">
      <h1 class="text-3xl md:text-6xl my-5">Trending News</h1>
      <p class="text-left">Lorem Lorem ipsum dolor sit amet. Lorem, i  ipsum dolor sit amet consectetur, adipisicing elit. Esse similique pariatur doloremque
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, similique.  beatae tenetur ipsum.</p>
      <Link href= '/news'>
      <button class="px-7 py-4  bg-slate-400 text-white rounded-md mt-5">View More</button>
      </Link>
    </div>
  </div>

      <div class="grid grid-cols-1 text-center sm:grid-cols-2 items-center gap-10 mb-10 ">
      <Image src="https://images.unsplash.com/photo-1519337265831-281ec6cc8514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" width={1000} height={100} alt="" class="h-[70vh]   object-cover mx-auto sm:order-last"/>
    
      <div class="text flex flex-col sm:flex-col items-center justify-center">
      <h1 class="text-3xl md:text-6xl my-5">Sinhgad Diaries</h1>
      <p class="text-left">Lorem Lorem ipsum dolor sit amet. Lorem, i  ipsum dolor sit amet consectetur, adipisicing elit. Esse similique pariatur doloremque
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, similique.  beatae tenetur ipsum.</p>
      <Link href= '/blogs'>
      <button class="px-7 py-4  bg-slate-400 text-white rounded-md mt-5">See More</button>
      </Link>
    </div>
  </div>
</div>
  )
}

export default IntroToPages