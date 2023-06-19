import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


async function getData(id){
  const res = await fetch(`http://localhost:3000/api/blogPosts/${id}`,
  {cache : "no-store"}
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const BlogPost = async ({params}) => {
  const data = await getData(params.SlugId);
  return (
    <div className="">
    <div class="main m-auto max-w-6xl py-32 ">
  <div class="blog mx-6 md:flex md:space-x-8 md:text-left">
    <div class="data">
      <h1 class="my-5 text-4xl md:text-5xl font-bold">{data.title}</h1>
      <p class="desc mb-5 text-xl ">{data.desc}</p>
      <p class="author">🔵 {data.author}</p>
    </div>
    <div class="img mt-5">
      <Image src={data.img} class="h-64 w-screen object-cover" alt='' width={1000} height={1000} />
    </div>
  </div>
  <p class="content mt-5 mx-5 md:mx-0 text-left text-lg">
  {data.content}
  </p>
</div>
</div>

  )
}

export default BlogPost