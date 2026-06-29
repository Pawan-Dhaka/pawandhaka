"use client"
import { useEffect, useState } from "react";



const words = ["Software Engineer", "Full stack Devloper", "Front-end Devloper","Back-end Devloper" , "Expert in C++", "DSA in C++"];

export default function Home() {
    const [index, setIndex] = useState(0);


     useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
    <section className="bg-[#f3c6ff] h-screen ">
    <div className="main-page grid grid-cols-2  ">
      <div className="text flex flex-col items-center justify-center">
        <div className="text-[70px] font-extrabold  text-center flex flex-col"><span>Hey I'm</span> <span className="text-[#0f03ba] -mt-6">Pawan Dhaka.</span></div>
        <h1 className="text-[#000000] text-3xl font-semibold  text-center ">{words[index]}.</h1>
        <div className="flex justify-around items-center gap-10 mt-8 ">
          <button className="bg-[#0f03ba] text-lg text-white opacity-90 p-2 rounded-full font-bold px-4 hover:scale-102">Know more </button>
          <button className="bg-[#0f03ba] text-lg text-white opacity-90 p-2 rounded-full font-bold px-4 hover:scale-102 flex items-center">Connet now <img className="h-6 invert" src="/right-up.png" alt="" /></button>
        </div>
       </div> 
      <div className="phto flex justify-center"><img className="w-full h-full object-cover border-b-4 border-b-black  " src="/pic.png" alt="" /></div>
    </div>
    </section>
    </>
  );
}
