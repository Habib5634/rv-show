"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle Sidebar
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Menu Button */}
      <div className="text-white  cursor-pointer" onClick={toggleSidebar}>
        <FaBars size={25} />
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 flex flex-col"
      >
        {/* Close Button */}
        <div className="flex justify-between items-center pl-4">
          <img src="/assets/logo.png" alt="" className="h-[71px] w-[71px] mt-7" />
          <FaTimes size={22} className="absolute top-4 left-4 cursor-pointer" onClick={toggleSidebar} />
        </div>

        {/* Sidebar Items */}
        <nav className="flex flex-col gap-6 p-4 text-gray-800">
          <a href="#" className="hover:text-blue-500 flex items-center gap-6"><img src="/assets/home.png" alt="" />Home</a>
          <a href="#" className="hover:text-blue-500 flex items-center gap-6"><img src="/assets/direction.png" alt="" />Directions</a>
          <a href="#" className="hover:text-blue-500 flex items-center gap-6"><img src="/assets/discount.png" alt="" />Discount Coupon</a>
          <a href="#" className="hover:text-blue-500 flex items-center gap-6"><img src="/assets/gallery.png" alt="" />Gallery</a>
          <a href="#" className="hover:text-blue-500 flex items-center gap-6"><img src="/assets/dealers.png" alt="" />Dealers</a>
          <a href="#" className="hover:text-blue-500 flex items-center gap-6"><img src="/assets/camp.png" alt="" />Campgrounds</a>
          <a href="#" className="hover:text-blue-500 flex items-center gap-6"><img src="/assets/pet.png" alt="" />Pet Policy</a>
        </nav>
      </motion.div>
    </div>
  );
}
