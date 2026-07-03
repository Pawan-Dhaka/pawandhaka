import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pawan Dhaka - Software Engg.",
  description: "Portfolio of Pawan Dhaka, Full Stack Developer specializing in Next.js, React, Node.js, Express.js, and MongoDB.",
  keywords: [
    "Pawan Dhaka",
    "pawandhaka",
    "pawandhaka.com",
    "pawandhaka.in",
    "pawandhaka website",
    "pawandhaka portfolio",
    "Pawan dhaka",
    "Pawan Kumar",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Express.js",
    "MongoDB",
    "JavaScript Developer",
    "Portfolio",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "MERN Stack Developer"

  ],

  authors: [{ name: "Pawan Dhaka" }],
};



export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
  <div className="fixed inset-0 -z-10 bg-white [background:radial-gradient(125%_125%_at_50%_10%,#ffffff_25%,#e0f2fe_45%,#7dd3fc_65%,#0ea5e9_85%,#075985_100%)]" />
  <Navbar />
  {children}
  <Footer />
</body>
    </html>
  );
}
