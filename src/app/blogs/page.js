import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


async function getData(){
  const res = await fetch("http://localhost:3000/api/blogPosts",
  {cache : "no-store"}
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Blogs = async () => {
  const data = await getData();
  return (
    <>
    <h1 className='text-center text-6xl mt-28 mb-16 font-extrabold'>Sinhgad Diaries</h1>
    <div class="grid grid-col-1 mx-5 my-5 md:grid-cols-3 gap-5 md:gap-10 ">
      {data.map((item)=>{
         return <div class="img relative h-96">
         <Image src={item.img} width={1000} height={1000} class="h-full w-full object-cover" alt=""/>
         <Link href={`/blogs/${item.slugId}`}>
         <div class="bg-black w-full md:text-xl md:py-2 text-yellow-500 absolute bottom-0 right-0 left-0 text-left px-5 py-5">
           <h2 class="text-xl md:text-4xl font-semibold">{item.title}</h2>
           <p>{item.desc}</p>
         </div>
         </Link>
       </div>
      })}
</div>
</>
  )
}

export default Blogs