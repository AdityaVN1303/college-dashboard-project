import React from 'react'
import Image from 'next/image'

const AboutUs = () => {
  return (
    <div class="about py-32 ">
  <h1 class="text-5xl md:text-7xl font-bold text-center mb-10">About Us</h1>
  <div class="bg-gray-100">
  <div class="grid grid-cols-1 max-w-6xl  mx-auto w-fit md:grid-cols-3 px-10 py-10">
    <Image src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" width={1000} height={1000} class="h-96 object-cover py-5 order-2 " alt=""/>
    <div class="sub-text col-span-2 md:px-24 md:order-3">
      <h3 class="text-5xl py-5 ">Hello</h3>
      <p class="data">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, perferendis? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia amet doloribus, ratione maxime dignissimos officiis nihil ut molestiae facere voluptatibus.</p>
    </div>
    </div>
  </div>
    <div>
  <div class="grid grid-cols-1 max-w-6xl  mx-auto w-fit md:grid-cols-3 px-10 py-10">
    <div class="sub-text col-span-2 md:px-24">
      <h3 class="text-5xl py-5 ">Hello</h3>
      <p class="data">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, perferendis? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia amet doloribus, ratione maxime dignissimos officiis nihil ut molestiae facere voluptatibus.</p>
    </div>
    <Image src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" width={1000} height={1000} class="h-96 object-cover py-5  order-2 " alt=""/>
    </div>
  </div>
  <div class="bg-gray-100">
  <div class="grid grid-cols-1 max-w-6xl  mx-auto w-fit md:grid-cols-3 px-10 py-10">
  <Image src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" width={1000} height={1000} class="h-96 object-cover py-5  order-2 " alt=""/>
    <div class="sub-text col-span-2 md:px-24 md:order-3">
      <h3 class="text-5xl py-5 ">Hello</h3>
      <p class="data">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, perferendis? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia amet doloribus, ratione maxime dignissimos officiis nihil ut molestiae facere voluptatibus.</p>
    </div>
    </div>
  </div>
      <div>
  <div class="grid grid-cols-1 max-w-6xl  mx-auto w-fit md:grid-cols-3 px-10 py-10">
    <div class="sub-text col-span-2 md:px-24">
      <h3 class="text-5xl py-5 ">Hello</h3>
      <p class="data">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, perferendis? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia amet doloribus, ratione maxime dignissimos officiis nihil ut molestiae facere voluptatibus.</p>
    </div>
    <Image src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" width={1000} height={1000} class="h-96 object-cover py-5  order-2 " alt=""/>
    </div>
  </div>
</div>
  )
}

export default AboutUs