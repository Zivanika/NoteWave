import React, { useState } from 'react'
import QuickNote from './QuickNote'
import { useEffect } from 'react';

const Heading = () => {
  const [timeOfDay, setTimeOfDay] = useState('day');
  const currentDate = new Date();
  const currentHour = currentDate.getHours();

  useEffect(() => {
    setTimeOfDay(currentHour >= 6 && currentHour < 18 ? 'day' : 'night');
  }, [])
  
  
  // Get the day of the week (0-6 corresponds to Sunday-Saturday)
  const dayOfWeek = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
  // Get the date (1-31)
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const image={
    day:"https://img.freepik.com/free-vector/tropical-island-illustration-with-sky-coast-palm-trees-sailing-boat-sea_575670-1199.jpg?w=1380&t=st=1710660873~exp=1710661473~hmac=dfe6c903040142ee2cf162bb442ccba0e0cef556762c00be2b61ace6dcfee11b",
    night:"https://img.freepik.com/free-vector/night-moonlight-sea-beach-island-vector-background-scene-star-full-moon-reflection-calm-blue-ocean-water-nighttime-tropical-nature-horizon-seascape-view-paradise-hawaii-panorama_107791-24424.jpg?w=1380&t=st=1711665984~exp=1711666584~hmac=58962764d23e64cf93be90317dafdbdc71ad5fc1c61b3f9e4b81fe0282437031"
  }

  return (
    <div className='h-48 w-full relative flex spacing'>
      <img className='h-44 w-full relative object-fill' src={timeOfDay === 'day' ? image.day : image.night} alt="" srcset="" />
      <h1 className={`absolute top-24 left-20 font-extrabold text-5xl font-serif ${timeOfDay === 'day'?'text-slate-800':'text-white'}`}>{timeOfDay==='day'?"Good Morning!":"Good Night!"}</h1>
      <h1 className={`absolute top-36 mt-1 left-24 font-semibold ${timeOfDay === 'day'?'text-slate-800':'text-white'}`}>{dayOfWeek}, {formattedDate}</h1>
     <div className='absolute translate-x-9 right-12 top-12'><QuickNote/></div> 
    </div>
  )
}

export default Heading
