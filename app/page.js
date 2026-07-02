"use client"
import { useEffect, useState } from "react";
import Link from "next/link";



const words = ["Software Engineer","Full-Stack Developer","Frontend Developer","Backend Developer","Next.js Developer","React Developer","C++ Programmer","Data Structures & Algorithms"];

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
    <section className=" mb-20 mt-24 xl:mt-0 ">
    <div className="main-page grid md:grid-cols-2   ">
      <div className="text flex flex-col items-center justify-center">
        <div className=" myFont text-[50px] lg:text-[90px] font-extrabold  text-center flex flex-col"><span>Hey I'm</span> <span className="text-[#0f03ba] -mt-6 myFont">Pawan Dhaka.</span></div>
        <h1 className="text-[#000000] text-3xl font-semibold  text-center ">{words[index]}.</h1>
        <div className="flex justify-around items-center gap-10 mt-8 ">
          <Link href="/Skills" className="bg-[#0f03ba] text-lg text-white opacity-90 p-2 rounded-full font-bold px-4 hover:scale-102">Know more </Link>
          <Link href="/Connect" className="bg-[#0f03ba] text-lg text-white opacity-90 p-2 rounded-full font-bold px-4 hover:scale-102 flex items-center">Connet now <img className="h-6 invert" src="/right-up.png" alt="" /></Link>
        </div>
       </div> 
      <div className="phto flex justify-center mt-8"><img className="w-full h-full object-cover border-b-4 border-b-black  " src="/pic.png" alt="" /></div>
    </div>
    </section>
    <section>
      <h2 className="text-center font-bold text-4xl ">Know more about me</h2>
      <div className="grid  md:grid-cols-2 xl:grid-cols-3 w-[90vw] mx-auto gap-5 mt-9">
        <div className="card1 border-1 flex flex-col items-center gap-1.5 bg-sky-200 rounded-2xl py-2.5">
          <h2 className="font-bold text-xl">More about me</h2>
          <p className="px-4 text-lg">I am a passionate Full Stack Developer who enjoys building meaningful digital experiences and solving real-world problems. I believe in continuous learning, creativity, and writing clean, reliable solutions. My goal is to grow as a developer while creating applications that make a positive impact.</p>
          <Link href="/About" className="bg-[#0f03ba] text-white rounded-2xl px-3 p-1.5 flex items-center" > Who I Am <img className="h-6 invert" src="/right-up.png" alt="" /></Link>
        </div>
        <div className="card1 border-1 flex flex-col items-center gap-1.5 bg-sky-200 rounded-2xl py-2.5">
          <h2 className="font-bold text-xl">    Skills </h2>
          <p className="px-4 text-lg ">My skill set includes modern web development technologies used to build fast, responsive, and user-friendly applications. I enjoy learning new tools, improving my technical knowledge, and applying best practices to create clean, efficient, and reliable solutions.</p>
          <Link href="/Skills" className="bg-[#0f03ba] text-white rounded-2xl px-3 p-1.5 flex items-center" > My Expertise <img className="h-6 invert" src="/right-up.png" alt="" /></Link>
        </div>
        <div className="card1 border-1 flex flex-col items-center gap-1.5 bg-sky-200 rounded-2xl py-2.5">
          <h2 className="font-bold text-xl">    Projects </h2>
          <p className="px-4 text-lg ">My projects reflect my passion for building practical and user-focused web applications. Each project has helped me strengthen my problem-solving skills, explore new technologies, and gain hands-on experience by turning ideas into functional, real-world solutions.</p>
          <Link href="/Projects" className="bg-[#0f03ba] text-white rounded-2xl px-3 p-1.5 flex items-center" >Featured Work<img className="h-6 invert" src="/right-up.png" alt="" /></Link>
        </div>
        <div className="card1 border-1 flex flex-col items-center gap-1.5 bg-sky-200 rounded-2xl py-2.5">
          <h2 className="font-bold text-xl">    Hobbies </h2>
          <p className="px-4 text-lg">My hobbies help me stay creative, active, and motivated beyond coding. I enjoy playing football, creating YouTube content, exploring the mountains, and being an NCC Cadet. These activities inspire me, improve my discipline, and bring balance to my daily life.</p>
          <Link href="/Hobbies" className="bg-[#0f03ba] text-white rounded-2xl px-3 p-1.5 flex items-center" > Beyond the Code<img className="h-6 invert" src="/right-up.png" alt="" /></Link>
        </div>
        <div className="card1 border-1 flex flex-col items-center gap-1.5 bg-sky-200 rounded-2xl py-2.5">
          <h2 className="font-bold text-xl">    Education </h2>
          <p className="px-4 text-lg">My educational journey has provided me with a strong academic foundation and a passion for continuous learning. Along with my studies, I have focused on developing practical knowledge, improving my problem-solving abilities, and preparing for real-world challenges.</p>
          <Link href="/About" className="bg-[#0f03ba] text-white rounded-2xl px-3 p-1.5 flex items-center" >Academic Journey <img className="h-6 invert" src="/right-up.png" alt="" /></Link>
        </div>
        <div className="card1 border-1 flex flex-col items-center gap-1.5 bg-sky-200 rounded-2xl py-2.5">
          <h2 className="font-bold text-xl">    Connect & Resume </h2>
          <p className="px-4 text-lg">If you’d like to learn more about my background, projects, and experience, feel free to explore my resume or get in touch. I’m always open to new opportunities, collaborations, and meaningful conversations. You can view my resume using the link provided below.</p>
          <Link href="/Connect" className="bg-[#0f03ba] text-white rounded-2xl px-3 p-1.5 flex items-center" >Let’s Connect<img className="h-6 invert" src="/right-up.png" alt="" /></Link>
        </div>
      </div>
    </section>
   
    </>
  );
}
