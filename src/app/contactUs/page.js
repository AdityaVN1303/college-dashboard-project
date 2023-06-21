"use client"

import React from 'react'

import {useState} from "react"

const page = () => {
  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState([])

  const handleSubmit = async (e) =>{
    console.log(fullname);
    console.log(email);
    console.log(message)

    const res = await fetch("/api/contact", {
      method : "POST",
      headers : {
        "Content-type" : "application/json",
      },
      body: JSON.stringify({
        fullname, 
        email,
        message,
      }),
    })
    const {msg} = await res.json();
    setError(msg);
    console.log(error)
  }






  return (
    <div class="all my-40">
<div class="heading my-12 w-1/2 mx-auto">
  <h1 class="text-4xl text-center">Drop Us A Line</h1>
  <p class="text-gray-400 mt-1 text-center">We'd Love to Hear from You</p>
</div>
<div class="input-field max-w-lg sm:mx-auto l mx-5">
  <form onSubmit={handleSubmit} class="">
    <label class="block" htmlFor='fullname'></label>
      <span class="text-gray-400">Name :</span>
      <input type="text" id='fullname' onChange={(e)=> setFullname(e.target.value)} value={fullname} class="w-96" />
    <hr class="block bg-gray-400 my-2" style={{height : "1.5px"}}/>
    <label class="block" htmlFor='email'></label>
      <span class="text-gray-400">Email :</span>
      <input type="email" class="w-96" id='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
    <hr class="block bg-gray-400 my-2 w-full" style={{height : "1.5px"}}/>
    <label class="block" htmlFor='message'></label>
      <span class="text-gray-400 block">Comments :</span>
      <input type="text" class="h-12 w-full" value={message} id='message' onChange={(e)=> setMessage(e.target.value)}/>
          <hr class="block bg-gray-400 my-2 w-full" style={{height : "1.5px"}}/>
  <button type='submit' class="bg-green-400 text-white w-full py-2">Send Message</button>
  </form>
</div>
</div>

  )
}

export default page