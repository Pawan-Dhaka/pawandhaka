"use client"
import React from 'react'

const skills = [
  {
    pic:"/png1.png",
    name: "Programming Languages",
    langs: ["C", "C++", "Java", "JavaScript"],
  },
  {
    pic:"/png2.png",
    name: "Frontend Development",
    langs: [
      "HTML",
      "CSS",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "Fetch API",
    ],
  },
  {
    pic:"/png3.png",
    name: "Backend Development",
    langs: [
      "Node.js",
      "Express.js",
      "REST API",
      "OAuth",
    ],
  },
  {
    pic:"/png4.png",
    name: "Database",
    langs: [
      "MongoDB",
      "Mongoose",
      "MySQL",
    ],
  },
  {
    pic:"/png5.png",
    name: "Computer Science Fundamentals",
    langs: [
      "DSA(C++)",
      "LeetCode",
      "Problem Solving",
    ],
  },
  {
    pic:"/png6.png",
    name: "Tools & DevOps",
    langs: [
      "Git",
      "GitHub",
      "Docker",
      "Vercel",
      "Postman",
    ],
  },
];

const page = () => {
    return (
        <>
            <div className='flex lg:flex-row flex-col  w-[90vw] mx-auto mt-30 justify-center gap-3 '>
                <div className="text lg:w-[70%] flex flex-col bg-gray-200 rounded-xl p-4 gap-4">
                    <h2 className='font-bold text-3xl '>My Skills Overview</h2>
                    <p className='text-xl font-[500]'>I am a <span className='text-sky-900 font-semibold'>Full Stack Developer</span> with a strong foundation in modern web technologies and problem-solving. I specialize in building responsive, scalable, and high-performance web applications using <span className='text-sky-900 font-semibold'>Next.js, React, Node.js, Express.js, and MongoDB</span>. Alongside full-stack development, I have a solid understanding of C, C++, Java, Data Structures & Algorithms, and regularly practice problem-solving on LeetCode. I am passionate about writing clean, maintainable code and continuously learning new technologies to build efficient and impactful software solutions.</p>
                </div>
                <img className='lg:w-[20%] rounded-xl' src="/pawan.jpeg" alt="" />
            </div>
            <h1 className='text-2xl font-extrabold mt-8  bg-sky-200 text-black rounded-full w-[84vw] mx-auto px-4 p-2 text-center border-1'>The Skills</h1>
            <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 w-[85vw] m-auto gap-3 mb-6">

                {skills.map((item , index)=>{
                    return  <div key={index} className="card bg-sky-900 border border-white/10 rounded-2xl p-6">
                    <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                        <div className=" rounded-xl  flex items-center justify-center">
                            <img className="h-11" src={item.pic} alt="Programming Languages" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white">
                                {item.name}
                            </h2>
                        </div>
                    </div>
                    <ul className="grid grid-cols-2 gap-3 mt-6">
                        {item.langs.map((skills) => (
                            <li
                                key={skills}
                                className="bg-sky-200 text-lg border border-white/10 rounded-lg py-2 text-center text-gray-900 font-medium  hover:border-black hover:bg-sky-400 hover:text-xl transition-all duration-300"
                            >
                                {skills}
                            </li>
                        ))}
                    </ul>
                </div>

                })

                }



            </div>


        </>
    )
}

export default page


