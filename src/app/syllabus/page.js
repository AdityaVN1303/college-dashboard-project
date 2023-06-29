import React from 'react'

const Syllabus = () => {
  return (
    <div class="syllabus mx-5 max-w-6xl py-28 text-center lg:mx-auto">
  <h1 class="mb-5 text-center text-4xl">Get Up to Date Syllabus here</h1>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga beatae suscipit hic delectus nulla repudiandae assumenda cumque inventorei</p>
  <h2 class="mb-5 mt-10 text-3xl">Select Year</h2>
  <div class="flex flex-wrap justify-center space-x-6 ">
    <span class="rounded-lg bg-blue-300 px-5 py-2">FE</span>
    <span class="rounded-lg bg-blue-300 px-5 py-2">SE</span>
    <span class="rounded-lg bg-blue-300 px-5 py-2">TE</span>
    <span class="rounded-lg bg-blue-300 px-5 py-2">BE</span>
  </div>
  <h2 class="mb-5 mt-16 text-3xl">Select Branch</h2>
  <div class="flex flex-wrap justify-center space-x-6 [&>span]:mb-3 md:[&>span]:mb-0">
    <span class="rounded-lg bg-blue-300 px-5 py-2">E&Tc</span>
    <span class="rounded-lg bg-blue-300 px-5 py-2">CS</span>
    <span class="rounded-lg bg-blue-300 px-5 py-2">IT</span>
    <span class="rounded-lg bg-blue-300 px-5 py-2">Bio Tech</span>
    <span class="rounded-lg bg-blue-300 px-5 py-2">Civil</span>
    <span class="rounded-lg bg-blue-300 px-5 py-2">Mechanical</span>
    <span class="rounded-lg bg-blue-300 px-5 py-2">AIMS</span>
  </div>
  <div class="mt-32 text-4xl mb-5 ">Syllabus</div>
  <div class="bg-slate-200 w-full h-screen"></div>
</div>

  )
}

export default Syllabus