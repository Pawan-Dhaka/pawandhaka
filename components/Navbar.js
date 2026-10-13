"use client";

import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [showNav, setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showHam, setshowHam] = useState(true);

    const pathname = usePathname();

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

    // Active link styling
    const getLinkClass = (path) => {
        const isActive = pathname === path;

        return `relative py-1 transition-colors duration-300 ${
            isActive
                ? "text-slate-950 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-slate-950"
                : "hover:text-slate-950"
        }`;
    };

    // Mobile active link styling
    const getMobileLinkClass = (path) => {
        const isActive = pathname === path;

        return `block ${
            isActive
                ? "text-blue-900 underline underline-offset-8"
                : "hover:text-blue-500"
        }`;
    };

    return (
        <>
            <nav
                className={`bg-violet-50 top-6 w-[98vw] left-[1vw] fixed rounded-full py-3 min-[700px]:p-3 z-20 transition-transform duration-1500 ${
                    showNav ? "translate-y-0" : "-translate-y-64"
                }`}
            >
                <div className="top">
                    <div className="left w-full flex items-center justify-between text-black">
                        {/* Logo */}
                        <Link href="/">
                            <div className="logo text-2xl ml-7 flex gap-0 items-center">
                                <span className="text-black font-bold">PD</span>
                                <span className="text-red-700 font-bold">/</span>
                                <span className="text-black font-bold">
                                    Pawan Dhaka
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navbar */}
                        <div className="options hidden xl:flex w-3/4">
                            <ul className="flex justify-between text-lg font-semibold items-center w-full text-slate-500 mr-5">
                                <li>
                                    <Link
                                        href="/"
                                        className={getLinkClass("/")}
                                    >
                                        Home
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/About"
                                        className={getLinkClass("/About")}
                                    >
                                        About
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/Projects"
                                        className={getLinkClass("/Projects")}
                                    >
                                        Projects
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/Skills"
                                        className={getLinkClass("/Skills")}
                                    >
                                        Skills
                                    </Link>
                                </li>

                                {/* <li>
                                    <Link href="/help">Experience</Link>
                                </li> */}

                                <li>
                                    <Link
                                        href="/Hobbies"
                                        className={getLinkClass("/Hobbies")}
                                    >
                                        Hobbies
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/Connect"
                                        className={getLinkClass("/Connect")}
                                    >
                                        Connect
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Hamburger Button */}
                        <div className="right flex gap-1 min-[700px]:gap-5">
                            <div className="hideded hamburger xl:hidden mr-3 min-[700px]:mr-10 flex items-center">
                                <Image
                                    width={28}
                                    height={28}
                                    className="w-7 h-7"
                                    src={showHam ? "/more.png" : "/close.png"}
                                    alt={showHam ? "Open menu" : "Close menu"}
                                    onClick={() => setshowHam(!showHam)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Navbar */}
            {!showHam && (
                <div className="options fixed z-10 xl:hidden">
                    <div className="flex flex-col w-screen h-[150vh] bg-amber-50 pt-40">
                        <ul className="flex flex-col gap-8 text-md items-center mx-20">
                            <li className="bg-slate-950 w-full text-center p-3 rounded-4xl text-white font-bold text-2xl">
                                <Link
                                    className={getMobileLinkClass("/")}
                                    onClick={closeMenu}
                                    href="/"
                                >
                                    Home
                                </Link>
                            </li>

                            <li className="bg-slate-950 w-full text-center p-3 rounded-4xl text-white font-bold text-2xl">
                                <Link
                                    className={getMobileLinkClass("/About")}
                                    onClick={closeMenu}
                                    href="/About"
                                >
                                    About
                                </Link>
                            </li>

                            <li className="bg-slate-950 w-full text-center p-3 rounded-4xl text-white font-bold text-2xl">
                                <Link
                                    className={getMobileLinkClass("/Projects")}
                                    onClick={closeMenu}
                                    href="/Projects"
                                >
                                    Projects
                                </Link>
                            </li>

                            <li className="bg-slate-950 w-full text-center p-3 rounded-4xl text-white font-bold text-2xl">
                                <Link
                                    className={getMobileLinkClass("/Skills")}
                                    onClick={closeMenu}
                                    href="/Skills"
                                >
                                    Skills
                                </Link>
                            </li>

                            <li className="bg-slate-950 w-full text-center p-3 rounded-4xl text-white font-bold text-2xl">
                                <Link
                                    className={getMobileLinkClass("/Hobbies")}
                                    onClick={closeMenu}
                                    href="/Hobbies"
                                >
                                    Hobbies
                                </Link>
                            </li>

                            <li className="bg-slate-950 w-full text-center p-3 rounded-4xl text-white font-bold text-2xl">
                                <Link
                                    className={getMobileLinkClass("/Connect")}
                                    onClick={closeMenu}
                                    href="/Connect"
                                >
                                    Connect
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;