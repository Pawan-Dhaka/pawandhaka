import React from "react";
import Link from "next/link";
import Image from "next/image";

const page = () => {
    return (
        <main className="overflow-hidden bg-white text-slate-800">

            {/* ================= HEADER ================= */}
            <section className="px-6 pt-32 pb-12 md:pt-36 md:pb-16 text-center">
                

                <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                    Have a look on my{" "}
                    <span className="text-sky-900">
                        Interests & Hobbies
                    </span>
                </h1>

                
            </section>


            <section className="mx-auto mb-20 grid w-[90%] max-w-7xl items-center gap-8 md:grid-cols-2 lg:gap-16">


                <div className="group relative h-[300px] overflow-hidden rounded-3xl bg-slate-100 sm:h-[380px] lg:h-[440px]">
                    <Image
                        src="/yt.webp"
                        alt="YouTube Content Creator"
                        fill
                        sizes="(max-width: 768px) 90vw, 45vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                    <span className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-white/90 px-4 py-2 text-sm font-semibold text-slate-800 backdrop-blur-sm">
                        Creativity & Content
                    </span>
                </div>

                {/* Content */}
                <div className="py-4 md:py-8">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-900">
                        01 / Create
                    </p>

                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        YouTube Content Creator
                    </h2>

                    <div className="my-6 h-1 w-16 rounded-full " />

                    <p className="text-base leading-8 text-slate-600 sm:text-lg">
                        I enjoy creating YouTube videos in my free time. My content is mostly based on fun vlogs, comedy, and light-hearted roast videos made for entertainment. It allows me to express my creativity, improve my editing skills, and connect with people through content that is simple, enjoyable, and authentic.
                    </p>

                    <Link
                        href="https://youtube.com/@arisepawan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex items-center gap-3 rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-sky-700"
                    >
                        View more
                        <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </section>


            {/* ================= FOOTBALL ================= */}
            <section className="relative isolate flex min-h-[85svh] items-center overflow-hidden bg-slate-900 sm:min-h-[90svh] lg:min-h-screen">

                {/* Full-screen football image */}
                <Image
                    src="/football.webp"
                    alt="Football"
                    fill
                    priority
                    sizes="100vw"
                    className="absolute inset-0 -z-20 object-cover object-[center_30%]"
                />

                {/* Overlay to keep text readable */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-slate-950/10" />

                {/* Football content */}
                <div className="mx-auto w-[88%] max-w-7xl py-24 sm:py-28 lg:py-32">
                    <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
                        02 / The Game
                    </p>

                    <h2 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
                        Football:
                        <br />
                        <span className="text-sky-300">
                            Beyond the Goalposts
                        </span>
                    </h2>

                    <div className="my-8 h-1 w-20 rounded-full " />

                    <p className="max-w-2xl text-base leading-8 text-white/85 sm:text-lg sm:leading-9">
                        Football is more than just a game for me—it’s a way to stay active, challenge myself, and enjoy every moment on the field. I love the teamwork, fast-paced action, and the excitement that comes with every match. Playing football keeps me physically fit while teaching discipline, focus, and sportsmanship.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-3">
                        <span className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm">
                            Teamwork
                        </span>

                        <span className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm">
                            Discipline
                        </span>

                        <span className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm">
                            Sportsmanship
                        </span>
                    </div>
                </div>

                {/* Bottom transition */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/15 to-transparent" />
            </section>


            
            {/* ================= NCC ================= */}
<section className="relative isolate flex min-h-[85svh] items-center overflow-hidden bg-slate-900 sm:min-h-[90svh] lg:min-h-screen">

    <Image
        src="/ncc.webp"
        alt="National Cadet Corps"
        fill
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-[center_30%]"
    />

    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-slate-950/10" />

    <div className="mx-auto w-[88%] max-w-7xl py-24 sm:py-28 lg:py-32">

        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
            03 / Character
        </p>

        <h2 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            National Cadet Corps (NCC)
        </h2>

        <div className="my-8 h-1 w-20 rounded-full " />

        <p className="max-w-2xl text-base leading-8 text-white/85 sm:text-lg sm:leading-9">
            Being an NCC Cadet has been one of the most valuable experiences in my life. It has helped me develop discipline, responsibility, leadership, and the ability to work effectively as part of a team. Through regular drills, physical training, and various activities, I have learned the importance of punctuality, dedication, and maintaining a positive attitude in every situation.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm">
                Leadership
            </span>

            <span className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm">
                Discipline
            </span>

            <span className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm">
                Responsibility
            </span>
        </div>

    </div>
</section>


            {/* ================= MOUNTAINS ================= */}
<section className="relative isolate flex min-h-[85svh] items-center overflow-hidden bg-slate-900 sm:min-h-[90svh] lg:min-h-screen">

    <Image
        src="/pawan.webp"
        alt="Pawan Dhaka exploring the mountains"
        fill
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover  object-right"
    />

    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-slate-950/10" />

    <div className="mx-auto w-[88%] max-w-7xl py-24 sm:py-28 lg:py-32">

        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
            04 / Explore
        </p>

        <h2 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Chasing the Mountains
        </h2>

        <div className="my-8 h-1 w-20 rounded-full " />

        <p className="max-w-2xl text-base leading-8 text-white/85 sm:text-lg sm:leading-9">
            I love visiting the mountains for their peaceful silence, breathtaking landscapes, and snow-covered peaks. I have visited Jammu & Kashmir many times, where I enjoyed not only the natural beauty but also experienced the local culture and hospitality. Every trip to the mountains gives me a sense of peace, adventure, and a fresh perspective.
        </p>

        <div className="mt-10">
            <span className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm">
                Peace • Adventure • Perspective
            </span>
        </div>

    </div>
</section>

        </main>
    );
};

export default page;