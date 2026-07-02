"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [showNav, setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showHam, setshowHam] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setShowNav(false);
            } else {
                setShowNav(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const closeMenu = () => setshowHam(true);


    return (
        <>
            <nav className={`bg-violet-50 top-6 w-[98vw] left-[1vw] fixed rounded-full py-3 min-[700px]:p-3 z-20 transition-transform duration-1500 ${showNav ? "translate-y-0" : "-translate-y-64"}`}>
                <div className="top">
                    <div className="left w-full flex items-center justify-between text-black w-full ">
                        <Link href={"/"}><div className="logo text-2xl ml-7 flex gap-0 items-center "><span className='text-black font-bold '>PD</span><span className='text-red-700  font-bold'>/</span><span className='text-black font-bold'>Pawan Dhaka</span></div></Link>
                        <div className="options hidden xl:flex w-3/4 ">
                            <ul className='flex justify-between text-lg font-semibold items-center  w-full text-slate-500 mr-5 '>
                                <li> <Link className='hover:text-slate-950 ' href={"/"} >Home</Link></li>
                                <li> <Link className='hover:text-slate-950 ' href={"/About"} >About</Link></li>
                                <li> <Link className='hover:text-slate-950 ' href={"/Projects"} >Projects</Link></li>
                                <li> <Link className='hover:text-slate-950 ' href={"/Skills"} >Skills</Link></li>
                                {/* <li> <Link className='hover:text-slate-950 ' href={"/help"} >Experence</Link></li> */}
                                <li> <Link className='hover:text-slate-950 ' href={"/Hobbies"} >Hobbies</Link></li>
                                <li> <Link className='hover:text-slate-950 ' href={"/Connect"} >Connect</Link></li>
                            </ul>
                        </div>
                        <div className="right flex gap-1 min-[700px]:gap-5">

                            <div className="hideded hamburger xl:hidden  mr-3 min-[700px]:mr-10 flex items-center  ">
                                <img className='w-7 ' src={showHam ? "/more.png" : "/close.png"} alt="" onClick={() => { setshowHam(!showHam) }} />
                            </div>
                        </div>
                    </div>

                </div>

            </nav>
            {!showHam && <div className="options  fixed z-10 xl:hidden ">
                <div className=" flex flex-col w-screen  h-[150vh]  bg-amber-50 pt-40">
                    <ul className='flex flex-col gap-8 text-md items-center mx-20'>
                        {/* <li className='bg-slate-950 w-full text-center p-3 rounded-4xl text-white font-bold text-2xl '> <Link onClick={closeMenu} href={"/"} >Home</Link></li> */}
                        <li  className='bg-slate-950 w-full text-center p-3 rounded-4xl text-white font-bold text-2xl '> <Link className='hover:text-slate-950 ' onClick={closeMenu} href={"/"} >Home</Link></li>
                        <li  className='bg-slate-950 w-full text-center p-3 rounded-4xl text-white font-bold text-2xl '> <Link className='hover:text-slate-950 ' onClick={closeMenu} href={"/About"} >About</Link></li>
                        <li  className='bg-slate-950 w-full text-center p-3 rounded-4xl text-white font-bold text-2xl '> <Link className='hover:text-slate-950 ' onClick={closeMenu} href={"/Projects"} >Projects</Link></li>
                        <li  className='bg-slate-950 w-full text-center p-3 rounded-4xl text-white font-bold text-2xl '> <Link className='hover:text-slate-950 ' onClick={closeMenu} href={"/Skills"} >Skills</Link></li>
                        {/* <li> <Link className='hover:text-slate-950 ' href={"/help"} >Experence</Link></li> */}
                        <li  className='bg-slate-950 w-full text-center p-3 rounded-4xl text-white font-bold text-2xl '> <Link className='hover:text-slate-950 ' onClick={closeMenu} href={"/Hobbies"} >Hobbies</Link></li>
                        <li  className='bg-slate-950 w-full text-center p-3 rounded-4xl text-white font-bold text-2xl '> <Link className='hover:text-slate-950 ' onClick={closeMenu} href={"/Connect"} >Connect</Link></li>
                    </ul>
                </div>
            </div>}
        </>
    )
}

export default Navbar



