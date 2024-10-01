"use client"
import React, { useEffect, useState } from "react";

const Countdown = () => {
  const targetDate = new Date("2024-10-25T00:00:00").getTime();
  const [time, setTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const timeLeft = targetDate - now

      setTime(timeLeft > 0 ? timeLeft : 0);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const getInFormat = (milliseconds) => {
    let total_seconds = parseInt(Math.floor(milliseconds / 1000));
    let total_minutes = parseInt(Math.floor(total_seconds / 60));
    let total_hours = parseInt(Math.floor(total_minutes / 60));
    let days = parseInt(Math.floor(total_hours / 24));

    let seconds = parseInt(total_seconds % 60);
    let minutes = parseInt(total_minutes % 60);
    let hours = parseInt(total_hours % 24);
    const pad = (num) => String(num).padStart(2, "0");

    return {
      days: pad(days),
      hours: pad(hours),
      minutes: pad(minutes),
      seconds: pad(seconds),
    };

  };

  const {days,hours,minutes,seconds} = getInFormat(time);

  return (
    <div className="bg-[#515151] py-5 md:py-9 md:text-6xl xl:text-8xl w-full md:w-fit md:px-10 xl:px-20 flex justify-center items-center gap-1 md:gap-10 xl:gap-20 rounded-xl font-nothing">
      {/* {getInFormat(time)} */}
      <div className='flex flex-col w-16 md:w-32'>
        <div>{days}</div>
        <div className='text-xs md:text-xl font-thin'>DAYS</div>
      </div>

      <div className='flex flex-col w-16 md:w-32'>
        <div>{hours}</div>
        <div className='text-xs md:text-xl font-thin'>HOURS</div>
      </div>

      <div className='flex flex-col w-16 md:w-32'>
        <div>{minutes}</div>
        <div className='text-xs md:text-xl font-thin'>MINUTES</div>
      </div>

      <div className='flex flex-col w-16 md:w-32'>
        <div>{seconds}</div>
        <div className='text-xs md:text-xl font-thin'>SECONDS</div>
      </div>
    </div>
  );
};

export default Countdown;