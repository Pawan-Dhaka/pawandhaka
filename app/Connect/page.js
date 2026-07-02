"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Connect() {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [rating, setrating] = useState("")
    const [msg, setmsg] = useState("")
    const submit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch("/api/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                rating,
                msg,
            }),
        });

        const result = await response.json();

        if (response.ok) {
            toast.success("Feedback submitted successfully!");

            // Clear form
            setname("");
            setemail("");
            setrating("");
            setmsg("");
        } else {
            toast.error(result.message || "Failed to submit feedback.");
        }
    } catch (error) {
        toast.error("Something went wrong!");
    }
};

    return (
        <>
            <div className="   mt-24 w-[95vw] mx-auto bg-gray-50/30">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold italic">Let's Connect</h1>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Have an idea, project, or opportunity? I'd love to hear from you.
                        Feel free to reach out through any of the platforms below.
                    </p>
                </div>

                <div className="main grid md:grid-cols-2 gap-2">
                    <div className="left flex flex-col gap-5 ">
                        <div className="w-full max-w-2xl mx-auto  shadow-lg rounded-2xl p-8 border text-center">
                            <h2 className="text-3xl font-bold mb-3">
                                My Resume
                            </h2>

                            <p className="text-gray-600 mb-8">
                                Interested in my experience, skills, and projects? You can view or download my resume below.
                            </p>

                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition"
                            >
                                View Resume
                            </a>
                        </div>

                        <div className="w-full max-w-2xl mx-auto  shadow-lg rounded-2xl p-8 border text-center">
                            <h2 className="text-3xl font-bold mb-3">
                                My Social Media
                            </h2>

                            <p className="text-gray-600 mb-8">
                                Stay connected and follow my journey across different platforms.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4">

                                <Link
                                    href="https://github.com/Pawan-Dhaka"

                                    className="px-6 py-3 border rounded-lg hover:bg-black hover:text-white transition"
                                >
                                    GitHub
                                </Link>

                                <Link
                                    href="https://in.linkedin.com/in/pawan-dhaka-32a299327"

                                    className="px-6 py-3 border rounded-lg hover:bg-blue-600 hover:text-white transition"
                                >
                                    LinkedIn
                                </Link>

                                <Link
                                    href="https://youtube.com/@arisepawan"

                                    className="px-6 py-3 border rounded-lg hover:bg-red-600 hover:text-white transition"
                                >
                                    YouTube
                                </Link>

                                <Link
                                    href="https://instagram.com/arisepawan"

                                    className="px-6 py-3 border rounded-lg hover:bg-pink-600 hover:text-white transition"
                                >
                                    Instagram
                                </Link>

                            </div>
                        </div>



                        <div className="w-full max-w-2xl mx-auto  shadow-lg rounded-2xl p-8 border text-center">
                            <h2 className="text-3xl font-bold mb-3">
                                Available For
                            </h2>

                            <p className="text-gray-600 mb-8">
                                I’m currently open to new opportunities, freelance work, and exciting collaborations.
                                If you have an idea or a project in mind, feel free to get in touch.
                            </p>

                            <div className="grid grid-cols-2 gap-4 text-left">
                                <div className="border rounded-lg p-4">✔ Full Stack Development</div>
                                <div className="border rounded-lg p-4">✔ Frontend Development</div>
                                <div className="border rounded-lg p-4">✔ Freelance Projects</div>
                                <div className="border rounded-lg p-4">✔ Collaborations</div>
                            </div>

                        </div>






                    </div>
                    <div className="right">
                        <div className="w-full max-w-2xl mx-auto   rounded-2xl p-6 border">
                            <h2 className="text-3xl font-bold text-center mb-2">
                                Feedback
                            </h2>

                            <p className="text-gray-500 text-center mb-8">
                                I'd love to hear your thoughts and suggestions.
                            </p>

                            <form className="space-y-4">
                                <input
                                    value={name}
                                    type="text"
                                    placeholder="Your Name"
                                    onChange={e => { setname(e.target.value) }}
                                    className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    value={email}
                                    type="email"
                                    placeholder="Your Email"
                                    onChange={e => { setemail(e.target.value) }}
                                    className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <select value={rating} onChange={e => { setrating(e.target.value) }} className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500">
                                    <option>Rate my Portfolio</option>
                                    <option>Excellent</option>
                                    <option>Good</option>
                                    <option>Average</option>
                                </select>
                                <textarea
                                    value={msg}
                                    rows="6"
                                    onChange={e => { setmsg(e.target.value) }}
                                    placeholder="Write your feedback.(Maximum 200 characters)"
                                    className="w-full  border rounded-lg px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                                
                                <button
                                    onClick={submit}
                                    type="submit"
                                    className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition disabled:bg-slate-500"
                                    disabled={name.length<1 || msg.length<3 || !rating || msg.length>200}
                                    
                                >
                                    Submit Feedback
                                </button>
                                <div className="flex justify-center">
                                    <Link className="text-blue-700 border p-1 rounded-lg" href="/Feedback">View all Feedbacks</Link>
                                </div>
                            </form>

                        </div>
                        <div className="w-full max-w-2xl mx-auto mt-5 shadow-lg rounded-2xl p-4 border text-center">
                            <h2 className="text-3xl font-bold mb-3">
                                Email Me
                            </h2>

                            <p className="text-gray-600 mb-5">
                                Have a question, project idea, or collaboration opportunity? Feel free to
                                reach out.
                            </p>

                            <a
                                href="mailto:yourmail@gmail.com"
                                className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition"
                            >
                                askpawan22@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-2xl mx-auto text-black rounded-2xl p-8 text-center">
                    <h2 className="text-3xl font-bold mb-3">
                        Thank You for Visiting!
                    </h2>

                    <p className="leading-7">
                        I truly appreciate you taking the time to explore my portfolio. Your visit
                        means a lot to me. I hope you enjoyed learning about my work, projects, and
                        journey. Wishing you a wonderful day, and I look forward to connecting with
                        you soon!
                    </p>

                    <p className="mt-6 text-lg font-semibold">
                        ~Pawan Dhaka
                    </p>
                </div>
            </div>
            <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={true}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover={false}
theme="dark"
// transition={Bounce}
/>
        </>
    );
}
