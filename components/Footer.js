import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
      <footer className="mt-24 border-t">
  <div className="max-w-7xl mx-auto px-6 py-12">

    <div className="grid md:grid-cols-3 gap-10">

  
      <div>
        <h2 className="text-3xl font-bold">
          <span>PD</span>
          <span className="text-red-600">/</span>
          <span>Pawan Dhaka</span>
        </h2>

        <p className="text-gray-600 mt-4 leading-7">
          Passionate Full Stack Developer focused on building modern,
          responsive, and user-friendly web applications with clean code
          and meaningful user experiences.
        </p>
      </div>


      <div>
        <h3 className="text-xl font-semibold mb-4">
          Quick Links
        </h3>

        <ul className="space-y-3 text-gray-600">
          <li className='hover:text-blue-600 hover:underline'>
            <Link  href="/">Home</Link>
          </li>

          <li>
            <Link className='hover:text-blue-600 hover:underline' href="/About">About</Link>
          </li>

          <li>
            <Link className='hover:text-blue-600 hover:underline' href="/Projects">Projects</Link>
          </li>

          <li>
            <Link className='hover:text-blue-600 hover:underline' href="/Hobbies">Hobbies</Link>
          </li>

          <li>
            <Link className='hover:text-blue-600 hover:underline' href="/Connect">Connect</Link>
          </li>
        </ul>
      </div>

   
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Get in Touch
        </h3>

        <div className="space-y-3 text-gray-600">
          <Link href="/Connect" className='underline text-blue-500'>Let's connect</Link>
          <p className='mt-3'>India🇮🇳</p>
          <p>Open for Opportunities</p>
        </div>

       
      </div>

    </div>

    <div className="border-t mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-gray-900 text-sm">
      <p>© 2026 Pawan Dhaka. All Rights Reserved.</p>

      <p className="mt-3 md:mt-0">
        Designed & Developed by <span className="font-semibold">Pawan Dhaka❤️</span>
      </p>
    </div>

  </div>
</footer>
    </div>
  )
}

export default Footer
