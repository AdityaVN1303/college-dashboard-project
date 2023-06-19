"use client"

import React from 'react'
import Link from 'next/link'

const Attendance = () => {

  function toDisplay(){
    const displayer = document.getElementById('black');
    const expt = document.getElementById('expt').value
    let lect = document.getElementById('lectures')
    let currLec = document.getElementById('currLec').value
    let currPrac = document.getElementById('currPrac').value
    let totalLecMom = document.getElementById('totalLecMom').value
    let totalPracMom = document.getElementById('totalPracMom').value
    let days = document.getElementById('days')
    
    const totalAttend = 150;
    const totalAttendPrac = 45;
    let varit = (Number(currPrac) + Number(totalAttendPrac) - Number(totalPracMom))/(Number(totalAttendPrac));
    let lectures = (((Number(expt)/50)*Number(totalLecMom))-Number(currLec)-varit*Number(totalLecMom))/((1-Number(expt)/50)+varit);
    lectures = Math.round(lectures);
    let daysMain = Math.round(lectures/4);
    let currAttendance = ((Number(currLec)/Number(totalLecMom))+ (Number(currPrac)/Number(totalPracMom)))*50

    if (expt>100 || Number(totalLecMom) > totalAttend || Number(totalPracMom) > totalAttendPrac) {
      alert("Enter Valid Value");
    }

    else if(currLec, currPrac, totalLecMom, totalPracMom, expt === ''){
      alert("Please Fill the required field")
    }

    else if(Number(currAttendance) > expt){
      alert(" : Enter expected attendance above your current Attendance")
    }

    else{
      lect.innerText = lectures;
      days.innerText = daysMain;
      
      displayer.style.display = "block";
    }
  }


  return (
    <>
    <div class="all my-36">
<div class="heading pb-10 w-1/2 mx-auto">
  <h1 class="text-6xl text-center">Predict Your Attendance
  </h1>
  <p class="text-gray-400 mt-1 text-xl text-center">Manage Your Time Smartly</p>
</div>
<div class="field max-w-lg sm:mx-auto l mx-5">
  <form action="" class="">
    <label class="block">
      <span class="text-gray-400">Total Lectures till Date :</span>
      <input type="number" class="w-80" id='totalLecMom' />
    </label>
    <hr class="block bg-gray-400 my-2" style={{height: '1.5px'}}/>

    <label class="block">
      <span class="text-gray-400">Total Practicals till Date :</span>
      <input type="number" class="w-80" id='totalPracMom' />
    </label>
    <hr class="block bg-gray-400 my-2" style={{height: '1.5px'}}/>

    <label class="block">
      <span class="text-gray-400">Your Total Lecture Attendance Count :</span>
      <input type="number" class="w-72" id='currLec' />
    </label>
    <hr class="block bg-gray-400 my-2" style={{height: '1.5px'}}/>

    <label class="block">
      <span class="text-gray-400">Your Total Practical Attendance Count :</span>
      <input type="number" class="w-72" id='currPrac' />
    </label>
    <hr class="block bg-gray-400 my-2" style={{height: '1.5px'}}/>

    <label class="block mb-4">
      <span class="text-gray-400">Expected Attendance :</span>
      <input type="number" class="w-80" id='expt'/>
    </label>
    <hr class="block bg-gray-400 my-2" style={{height: '1.5px'}}/>
  </form>
<button onClick={toDisplay} class="bg-green-400 text-white w-full py-2">Check Now</button> 
  <div class="box bg-black rounded-md text-yellow-400 mt-14 p-5 space-y-10 hidden" id='black'>
    <p class="text-xl"> Attend All Practicals Compulsory</p>
    <div class="partition flex justify-between">
    <p class="text-xl">Number of Lectures to attend :</p>
    <span class="text-2xl" id='lectures'></span>
    </div>
    <div class="partition flex justify-between">
    <p class="text-xl">Total Days :</p>
    <span class="text-2xl" id='days'></span>
    </div>
    
  </div>
</div>
</div>
</>


  )
}

export default Attendance