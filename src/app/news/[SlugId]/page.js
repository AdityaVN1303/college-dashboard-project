import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

async function getData(id){
    const res = await fetch(`http://localhost:3000/api/newsPosts/${id}`,
    {cache : "no-store"}
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }


const NewsPost = async ({params}) => {
    const data = await getData(params.SlugId);
  return (
    <div class="px-5 text-center max-w-6xl py-32 m-auto">
  <h1 class="text-3xl md:text-4xl font-bold">{data.headline}</h1>
  <Image src={data.img} alt="" class="my-5 md:max-w-3xl m-auto rounded-xl" width={1000} height={1000}/>
  <p class="author my-10 font-semibold text-xl">🔵 {data.author} -Div 5 Scoe FE</p>
  <p class="desc my-10 text-xl">{data.desc}</p>
  <p class="content text-lg text-left mt-5">
   {data.content}
  </p>
</div> 
  )
}

export default NewsPost