import core from '../public/core.png'
// export default function Home() {
//   return (
//     <div className='bg-red-300'>hello</div>
//   );
// }


import React from "react";
import BackgroundGradientAnimation from "./components/ui/bg-animation";
import Image from "next/image";
import Countdown from './components/Countdown';


export default function BackgroundGradientAnimationDemo() {
  return (
    <BackgroundGradientAnimation>
      <div
        className="absolute z-50 inset-0 flex flex-col gap-10 md:gap-5 xl:gap-14 pt-36 md:pt-20 xl:pt-24 items-center text-white  px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        {/* <p
          className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          
        </p> */}
        <div ><Image src={core} width={240} height={240} className="size-40 md:size-60"/></div>

        <Countdown/>

        <div className='text-2xl absolute bottom-5 font-sterion text-[#686868]'>COMING SOON...</div>
      </div>
    </BackgroundGradientAnimation>
  );
}
