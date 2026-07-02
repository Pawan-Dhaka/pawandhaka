import React from 'react'
import Link from 'next/link'

const page = () => {
    return (
        <>
            <h2 className='font-bold text-2xl mt-24 text-center'>Have a look on my <span className='text-sky-700 underline'>Interests & Hobbies</span></h2>
             <div className='flex lg:flex-row flex-col justify-center  mt-5 gap-3  w-[90vw] mx-auto'>
                <img className='rounded-2xl border-1 h-[300px] object-cover' src="/yt.png" alt="NCC Photo" />
                <div className="flex flex-col lg:w-[44vw] xl:w-[34vw] items-center bg-gray-200 rounded-2xl gap-3">
                    <h2 className='font-bold text-2xl mt-2'>YouTube Content Creator</h2>
                    <p className='text-center px-3 text-xl'>I enjoy creating YouTube videos in my free time. My content is mostly based on fun vlogs, comedy, and light-hearted roast videos made for entertainment. It allows me to express my creativity, improve my editing skills, and connect with people through content that is simple, enjoyable, and authentic.</p>
                    <Link className='text-blue-700 bg-gray-50 p-1 rounded-2xl px-2 text-lg '  href="https://youtube.com/@arisepawan">View more→</Link>
                </div>
                <img className='rounded-2xl border-1 hidden lg:flex h-[300px]' src="/yt.png" alt="NCC Photo" />
            </div>
            <div className='flex  lg:flex-row flex-col  justify-center  mt-5 gap-3  w-[90vw] mx-auto '>
                <img className='rounded-2xl border-1 h-[300px] object-cover' src="/football.png" alt="NCC Photo" />
                <div className="flex flex-col lg:w-[44vw] xl:w-[34vw] items-center bg-gray-200 rounded-2xl gap-3">
                    <h2 className='font-bold text-2xl mt-2'>Football:Beyond the Goalposts</h2>
                    <p className='text-center px-3 text-xl'>Football is more than just a game for me—it’s a way to stay active, challenge myself, and enjoy every moment on the field. I love the teamwork, fast-paced action, and the excitement that comes with every match. Playing football keeps me physically fit while teaching discipline, focus, and sportsmanship.</p>
                </div>
                <img className='rounded-2xl border-1 hidden lg:flex h-[300px] object-cover' src="/football.png" alt="NCC Photo" />
            </div>
            <div className='flex lg:flex-row flex-col justify-center  mt-5 gap-3  w-[90vw] mx-auto '>
                <img className='rounded-2xl border-1 h-[360px] object-cover' src="/ncc.jpg" alt="NCC Photo" />
                <div className="flex flex-col lg:w-[44vw] xl:w-[34vw] items-center bg-gray-200 rounded-2xl gap-3">
                    <h2 className='font-bold text-2xl mt-2'>National Cadet Corps (NCC)</h2>
                    <p className='text-center px-3 text-xl'>Being an NCC Cadet has been one of the most valuable experiences in my life. It has helped me develop discipline, responsibility, leadership, and the ability to work effectively as part of a team. Through regular drills, physical training, and various activities, I have learned the importance of punctuality, dedication, and maintaining a positive attitude in every situation.</p>
                </div>
                <img className='rounded-2xl border-1 hidden lg:flex h-[360px] object-cover' src="/ncc.jpg" alt="NCC Photo" />
            </div>
           
            <div className='flex lg:flex-row flex-col justify-center  mt-5 gap-3  w-[90vw] mx-auto lg:mb-14'>
                <img className='rounded-2xl border-1 h-[300px] object-cover' src="/pawan.jpeg" alt="NCC Photo" />
                <div className="flex flex-col lg:w-[44vw] xl:w-[34vw] items-center bg-gray-200 rounded-2xl gap-3">
                    <h2 className='font-bold text-2xl mt-2'>Chasing the Mountains</h2>
                    <p className='text-center px-3 text-xl'>I love visiting the mountains for their peaceful silence, breathtaking landscapes, and snow-covered peaks. I have visited Jammu & Kashmir many times, where I enjoyed not only the natural beauty but also experienced the local culture and hospitality. Every trip to the mountains gives me a sense of peace, adventure, and a fresh perspective.</p>
                </div>
                <img className='rounded-2xl border-1 hidden lg:flex h-[300px] object-cover' src="/pawan.jpeg" alt="NCC Photo" />
            </div>
        </>
    )
}

export default page
