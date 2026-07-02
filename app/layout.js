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
  description: "This is Portfolio website of Pawan Dhaka, Software Engineer",
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
