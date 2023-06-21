import React from 'react'

async function getData(){
  const res = await fetch("http://localhost:3000/api/leaderboards",
  {cache : "no-store"}
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const LeaderBoards = async () => {
      const data = await getData();
      let ans = await data.sort(function(a, b){
        return a.attendance - b.attendance;
    });
const reversedItems = ans.map(item => item).reverse();

  return (
    
    <div class="flex flex-col items-center py-32 bg-purple-950 text-white">
    <div class="text-5xl md:text-7xl font-bold my-5">Leaderboards</div>
    <div className="top text-2xl">Top High Attendance Students of F.E</div>
    <div class="main my-20">
   {reversedItems.map((item)=>{
          return <div class="section bg-orange-600 rounded-full h-28 md:h-32 mb-16 w-80 md:w-screen max-w-4xl px-10 items-center flex justify-between">
          <div class="det flex flex-col">
            <span class="text-2xl md:text-4xl mb-2">{item.name}</span><span class="text-sm font-semibold">{item.rollno}</span>
          </div>
          <div class="att text-4xl md:text-6xl">{item.attendance}</div>
        </div>
        })}
      </div>
    </div>
  )
}

export default LeaderBoards