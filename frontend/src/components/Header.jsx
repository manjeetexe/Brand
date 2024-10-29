import React, { useState } from 'react'

const Header = () => {
   
    const [selectedHeader, setSelectedHeader] = useState(null);
  
    const headers = ['HOME', 'WORK', 'TESTIMONIALS', 'SERVICES', 'CONTACT US', 'ABOUT US', 'TEAM'];

  return (

    <>
        <div className="relative z-20 py-5">
        <nav className="md:flex justify-center hidden gap-5 z-10 overflow-x-auto px-4">
          {headers.map((header) => (
            <button
              key={header}
              className={`text-white text-sm md:text-sm lg:text-lg font-semibold transition-all duration-300 border-b-2 whitespace-nowrap
                ${selectedHeader === header ? 'border-[#2BDEAC]' : 'border-transparent'}
                 hover:border-[#2BDEAC]`}
              onClick={() => setSelectedHeader(header)}
            >
              {header}
            </button>
          ))}
        </nav>
      </div>
    </>
  )
}

export default Header