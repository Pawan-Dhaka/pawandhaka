"use client"
import React from 'react'
import Link from 'next/link'


const obj = [
    {
        name: "Get Me a Mango - A crowdfunding platform.",
        status: "Deployed",
        Tech: "React, Express.js, Node.js, Tailwind CSS",
        database: "MongoDB Atlas",
        live: "https://get-me-a-mango.vercel.app/",
        gitgub: "https://github.com/Pawan-Dhaka/get-me-a-mango"
    },
    {
        name: "Social – All your social links in one place.",
        status: "Deployed",
        Tech: "React, Next.js, Node.js, Tailwind CSS",
        database: "MongoDB Atlas",
        live: "https://social-six-blond.vercel.app/",
        gitgub: "https://github.com/Pawan-Dhaka/social"
    },
    {
        name: "LinkShortener – Shorten your links in just 2 seconds.",
        status: "Deployed",
        Tech: "React, Next.js, Node.js, Tailwind CSS",
        database: "MongoDB Atlas",
        live: "https://linkshortner-nu.vercel.app/",
        gitgub: "https://github.com/Pawan-Dhaka/Linkshorter"
    },
    {
        name: "PassManager – Manage all your passwords securely.",
        status: "Deployed",
        Tech: "React, Express.js, Node.js, Tailwind CSS",
        database: "MongoDB Atlas & Local Storage",
        live: "https://pass-manager-tau-three.vercel.app/",
        gitgub: "https://github.com/Pawan-Dhaka/PassManager"
    },
    {
        name: "Todo List – An advanced task management application.",
        status: "Deployed",
        Tech: "React, Express.js, Node.js, Tailwind CSS",
        database: "MongoDB Atlas & Local Storage",
        live: "https://todos-sigma-taupe.vercel.app/",
        gitgub: "https://github.com/Pawan-Dhaka/todos"
    },
    {
        name: "Twitter (X) Clone",
        status: "Available on GitHub",
        Tech: "HTML, CSS, JavaScript",
        database: "Local Storage",
        live: "NA",
        gitgub: "https://github.com/Pawan-Dhaka/X.com-Twitter-Responsive-UI"
    },
    {
        name: "Spotify Clone – A modern music streaming UI.",
        status: "Available on GitHub",
        Tech: "HTML, CSS, JavaScript",
        database: "Local Storage",
        live: "NA",
        gitgub: "https://github.com/Pawan-Dhaka/Spotify-web"
    },
    {
        name: "Netflix Clone – Responsive UI",
        status: "Available on GitHub",
        Tech: "HTML, CSS",
        database: "Local Storage",
        live: "NA",
        gitgub: "https://github.com/Pawan-Dhaka/Netflix-UI-"
    },
    {
        name: "Amazon Clone – Responsive UI",
        status: "Available on GitHub",
        Tech: "HTML, CSS",
        database: "Local Storage",
        live: "NA",
        gitgub: "https://github.com/Pawan-Dhaka/Amazon-Clone-UI"
    },
]

const page = () => {
    return (
        <>

            <div className="flex flex-col gap-12 mt-30">
                {/* <h2>Here You can see my projects</h2> */}
                {obj.map((i, index) => {
                    return <div key={index} className='grid sm:grid-cols-2 w-[80vw] mx-auto text-lg border-1 p-4 bg-sky-50 rounded-3xl gap-y-4 px-8'>
                        <h2 className='font-extrabold text-xl flex items-baseline-last text-center'>{obj[index].name}</h2>
                        <h2 className='flex justify-center sm:justify-end items-center bg-green-600 sm:bg-transparent rounded-2xl ' > <span className={`${obj[index].status=="Deployed"?'sm:bg-green-600 text-white':'sm:bg-yellow-500 text-black'} p-1 px-2.5 rounded-4xl font-semibold `}>{obj[index].status}</span></h2>
                        <p><span className='font-semibold'>Tech:</span> {obj[index].Tech}</p>
                        <p className='flex  items-center sm:justify-end'><span className='font-semibold'>Database:</span> {obj[index].database}</p>
                        <Link href={obj[index].live=="NA"?obj[index].gitgub:obj[index].live} className=' text-white flex bg-blue-800 sm:bg-transparent rounded-2xl justify-center sm:justify-start    '><span className='sm:bg-blue-800 p-1 px-4 rounded-4xl flex items-center '>Live Demo <img className='h-8 invert pt-1' src="/right-up.png" alt="" /></span></Link>
                        <Link href={obj[index].gitgub} className=' text-white flex sm:justify-end justify-center bg-blue-800 sm:bg-transparent rounded-2xl '><span className='bg-blue-800 p-1 px-4 rounded-4xl flex items-center '>Github repo<img className='h-8 invert pt-1' src="/right-up.png" alt="" /></span></Link>
                    </div>
                })}


            </div>
        </>
    )
}

export default page

