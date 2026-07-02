import React from 'react'

const page = () => {
    return (
        <>
        
            <section className='mt-30  flex flex-col gap-10 px-5 '>
                <div className="about border sm:border-0 p-1.5 rounded-2xl ">
                    <div className="detaiils grid sm:grid-cols-3 gap-2">
                        <div className=" flex flex-col gap-5 text-center  sm:items-end xl:-mr-[3vw] ">
                            <h1 className='text-2xl font-extrabold mt-3  bg-gray-800 text-white rounded-xl px-4 p-2'>About me</h1>
                            <p className='text-xl font-bold  bg-gray-200 text-black rounded-xl px-4 p-2'>Pawan Dhaka</p>
                            <p className='text-xl font-bold  bg-gray-200 text-black rounded-xl px-4 p-2'>Software Engineer</p>
                            <p className='text-xl font-bold  bg-gray-200 text-black rounded-xl px-4 p-2'>B.Tech in CSE</p>
                            <p className='text-xl font-bold  bg-gray-200 text-black rounded-xl px-4 p-2'>CGPA:<span className='text-2xl text-green-900'>9.33</span></p>
                            <p className='text-xl font-bold  bg-gray-200 text-black rounded-xl px-4 p-2'>RTU Kota</p>
                        </div>
                        <div className="img  mx-auto  ">
                            <img className='h-[390px] rounded-xl border-1 object-cover ' src="/pawan.jpeg" alt="" />
                        </div>
                    </div>
                </div>
                 <h1 className='text-2xl font-extrabold mt-3  bg-sky-700 text-white rounded-full w-full mx-auto  p-2 text-center'>Education</h1>
                <div className="about border sm:border-0 p-1.5 rounded-2xl ">
                    <div className="detaiils grid sm:grid-cols-3 gap-2">
                        <div className=""></div>
                        <div className="img  mx-auto  ">
                            <img className='h-[330px] rounded-xl border-2 object-cover' src="/btech.webp" alt="" />
                        </div>
                        <div className=" order-first sm:order-last flex flex-col gap-5  text-center sm:items-start xl:-ml-[5vw] ">
                            <h1 className='text-2xl font-extrabold mt-3  bg-gray-800 text-white rounded-xl px-4 p-2'>B.Tech</h1>
                            <p className='text-xl font-bold  bg-gray-200 text-black rounded-xl px-4 p-2'>2024-2028</p>
                            <p className='text-xl font-bold  bg-gray-200 text-black rounded-xl px-4 p-2'>Computer Science Engg.(CSE)</p>
                            <p className='text-xl font-bold  bg-gray-200 text-black rounded-xl px-4 p-2'>RTU Kota</p>
                            <p className='text-xl font-bold  bg-gray-200 text-black rounded-xl px-4 p-2'>CGPA:<span className='text-2xl text-green-900'>9.33</span></p>
                        </div>
                    </div>
                </div>

                <div className="about border sm:border-0 p-1.5 rounded-2xl ">
                    <div className="detaiils grid sm:grid-cols-3 gap-2">
                        <div className=" flex flex-col gap-5 text-center  sm:items-end xl:-mr-[5vw] ">
                            <h1 className='text-2xl font-extrabold mt-3  bg-gray-800 text-white rounded-xl px-4 p-2'>JEE</h1>
                            <p className='text-xl font-bold  bg-gray-200 text-black rounded-xl px-4 p-2'>2023-2024</p>
                            <p className='text-xl font-bold  bg-gray-200 text-black rounded-xl px-4 p-2'>JEE-Mains 2024</p>
                            <p className='text-xl font-bold  bg-gray-200 text-black rounded-xl px-4 p-2'>ALLEN Kota</p>
                            <p className='text-xl font-bold  bg-gray-200 text-black rounded-xl px-4 p-2'>Result:<span className='text-2xl text-green-900'>94.5%ile</span></p>
                        </div>
                        <div className="img  mx-auto  ">
                            <img className='h-[330px] border-2 rounded-xl object-cover' src="/jee.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="about border sm:border-0 p-1.5 rounded-2xl ">
                    <div className="detaiils grid sm:grid-cols-3 gap-2">
                        <div className=""></div>
                         <div className="img  mx-auto  ">
                           <img className='h-[330px] border-2 rounded-xl object-cover' src="/12th.png" alt="" />
                        </div>
                        <div className=" order-first sm:order-last flex flex-col gap-5 text-center  sm:items-start xl:-ml-[5vw] ">
                            <h1 className='text-2xl font-extrabold mt-3  bg-gray-800 text-white rounded-xl px-4 p-2'>Class XII</h1>
                            <p className='text-xl font-bold  bg-gray-200 text-black rounded-xl px-4 p-2'>2022-2023</p>
                            <p className='text-xl font-bold  bg-gray-200 text-black rounded-xl px-4 p-2'>Scinece-Mathamatics</p>
                            <p className='text-xl font-bold  bg-gray-200 text-black rounded-xl px-4 p-2'>RBSE Board</p>
                            <p className='text-xl font-bold  bg-gray-200 text-black rounded-xl px-4 p-2'>Result:<span className='text-2xl text-green-900'>91.40%</span></p>
                        </div>
                    </div>
                </div>

                <div className="about border sm:border-0 p-1.5 rounded-2xl ">
                    <div className="detaiils grid sm:grid-cols-3 gap-2 ">
                        <div className=" flex flex-col gap-5 text-center  sm:items-end xl:-mr-[5vw] ">
                            <h1 className='text-2xl font-extrabold mt-3  bg-gray-800 text-white rounded-xl px-4 p-2'>Class X</h1>
                            <p className='text-xl font-bold  bg-gray-200 text-black rounded-xl px-4 p-2'>2020-2021</p>
                            <p className='text-xl font-bold  bg-gray-200 text-black rounded-xl px-4 p-2'>Secondary Education</p>
                            <p className='text-xl font-bold  bg-gray-200 text-black rounded-xl px-4 p-2'>RBSE Board</p>
                            <p className='text-xl font-bold  bg-gray-200 text-black rounded-xl px-4 p-2'>Result:<span className='text-2xl text-green-900'>95%</span></p>
                        </div>
                        <div className="img  mx-auto  ">
                            <img className='h-[330px] border-2 rounded-xl object-cover' src="/10th.png" alt="" />
                        </div>
                    </div>
                </div>



                
            </section>
           
            
           
        </>
    )
}

export default page
