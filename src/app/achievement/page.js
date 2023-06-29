import React from 'react'

const Achievement = () => {
  return (
    <div class="bg-slate-900 text-white">
  <div class="achievements mx-5 max-w-5xl py-32 text-center md:mx-auto">
    <h1 class="mb-5 font-serif text-4xl font-bold md:text-6xl">Our Achievements</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ducimus dolores minima quaerat adipisci maiores saepe facilis iste veniam, dignissimos iure in dolorum soluta aut magni blanditiis voluptatem, eligendi, voluptas recusandae laborum vitae necessitatibus. Dolore nemo soluta vel quia quos.</p>
    <div class="main mx-auto mt-24 grid w-full max-w-2xl grid-cols-1 gap-y-10 md:grid-cols-2">
      <div class="box mx-auto h-72 w-72 bg-yellow-400 py-6">
        <div class="1 text-8xl">★</div>
        <p class="mb-3 text-3xl font-semibold">Rank</p>
        <p class="text-6xl">7</p>
      </div>
      <div class="box mx-auto h-72 w-72 bg-blue-600 py-6">
        <div class="1 text-8xl">▲</div>
        <p class="mb-3 text-3xl font-semibold">Years Completed</p>
        <p class="text-6xl">30+</p>
      </div>
      <div class="box mx-auto h-72 w-72 bg-blue-600 py-6">
        <div class="1 text-8xl">∞</div>
        <p class="mb-3 text-3xl font-semibold">Awards</p>
        <p class="text-6xl">123</p>
      </div>
      <div class="box mx-auto h-72 w-72 bg-yellow-400 py-6">
        <div class="1 text-8xl">▣</div>
        <p class="mb-3 text-3xl font-semibold">Placement Guarantee</p>
        <p class="text-6xl">100%</p>
      </div>
    </div>
  </div>
</div>

  )
}

export default Achievement