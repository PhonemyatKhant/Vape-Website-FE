import React from 'react'
import Image from 'next/image'
import { FaSearch, FaShoppingCart, FaBars } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="absolute z-40  top-0 left-0 w-full bg-transparent max-w-[1200px] px-[25px] max-sm:px-[15px] mx-auto ">
      <div className="  flex items-center justify-between p-4">
        {/* Left Logo */}
        <div className="text-2xl font-bold text-white">
          MyLogo
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <button className="text-white hover:text-gray-300">
            <FaSearch size={20} />
          </button>
          <button className="text-white hover:text-gray-300">
            <FaShoppingCart size={20} />
          </button>
          <button className="text-white hover:text-gray-300">
            <FaBars size={20} />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
