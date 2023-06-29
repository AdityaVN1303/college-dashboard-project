import React from 'react'
import Link from 'next/link'

const ChatBot = () => {
  return (
    <Link href='/chatBot'>
    <div class="round fixed flex h-16 w-16 text-3xl items-center z-50 justify-center rounded-full right-10 bottom-10 bg-slate-700 text-white">
    <div class="text">🤖</div>
  </div>
  </Link>
  )
}

export default ChatBot