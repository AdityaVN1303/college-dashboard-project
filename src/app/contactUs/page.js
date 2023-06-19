import React from 'react'

const page = () => {
  return (
    <div class="all my-40">
<div class="heading my-12 w-1/2 mx-auto">
  <h1 class="text-4xl text-center">Drop Us A Line</h1>
  <p class="text-gray-400 mt-1 text-center">We'd Love to Hear from You</p>
</div>
<div class="input-field max-w-lg sm:mx-auto l mx-5">
  <form action="" class="">
    <label class="block">
      <span class="text-gray-400">Name :</span>
      <input type="text" class="w-96" />
    </label>
    <hr class="block bg-gray-400 my-2" style={{height : "1.5px"}}/>
    <label class="block mb-4"/>
      <span class="text-gray-400">Email :</span>
      <input type="email" class="w-96"/>
    <hr class="block bg-gray-400 my-2 w-full" style={{height : "1.5px"}}/>
    <label class="block mb-4">
      <span class="text-gray-400 block">Comments :</span>
      <input type="text" class="h-12 w-full"/>
          <hr class="block bg-gray-400 my-2 w-full" style={{height : "1.5px"}}/>
    </label>
  </form>
  <button class="bg-green-400 text-white w-full py-2">Send Message</button>
</div>
</div>

  )
}

export default page