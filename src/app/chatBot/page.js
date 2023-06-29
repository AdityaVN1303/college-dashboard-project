import React from 'react'

const ChatBot = () => {
  return (
    <div class="chat max-w-4xl text-center mx-auto py-36 px-5">
  <div class="title text-4xl md:text-5xl font-bold">Scoe ChatBot</div>
  <div class="paras my-36 space-y-5 text-white">
    <div class="left  grid grid-cols-2 md:mr-32">
      <p class="bg-blue-800 rounded-lg py-2">Hello, How can I help You?</p>
    </div>
    <div class="right grid grid-cols-2 ">
      <p class="bg-blue-400 rounded-lg col-end-3 py-2">What's the intake for CS branch in scoe?</p>
    </div>
    <div class="left  grid grid-cols-2 ">
      <p class="bg-blue-800 rounded-lg py-2">It is 120</p>
    </div>
    <div class="right grid grid-cols-2">
      <p class="bg-blue-400 rounded-lg col-end-3 py-2">is there a seperate library for sinhgad college?</p>
    </div>
    <div class="left  grid grid-cols-2 ">
      <p class="bg-blue-800 rounded-lg py-2">Yes there is. It is located near SKN college.</p>
    </div>
</div>
</div>
  )
}

export default ChatBot