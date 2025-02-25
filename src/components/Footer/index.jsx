import React from 'react'
import { FaGoogle, FaInstagramSquare, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
      <footer className="w-full bg-[#0E261E] text-white mt-12 py-10 md:py-20  lg:py-32">
        <div className="container mx-auto px-5  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 text-left md:text-left">
          {/* Logo Section */}
          <div>
            <h2 className="text-xl font-bold">Logo</h2>
            <p className="mt-2 text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          {/* Product Section */}
          <div>
            <h3 className="text-lg font-semibold">Product</h3>
            <ul className="mt-2 space-y-2 text-gray-300">
              <li>Landingpage</li>
              <li>Features</li>
              <li>Documentation</li>
              <li>Referrel Program</li>
              <li>Pricing</li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="mt-2 space-y-2 text-gray-300">
              <li>Documentation</li>
              <li>Design</li>
              <li>Themes</li>
              <li>Illustration</li>
              <li>UI Kit</li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="mt-2 space-y-2 text-gray-300">
              <li>About</li>
              <li>Terms</li>
              <li>Privacy Policy</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">More</h3>
            <ul className="mt-2 space-y-2 text-gray-300">
              <li>Documentation</li>
              <li>Licience</li>
              <li>Changlog</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="my-8 lg:my-20 text-center text-gray-400 text-sm">
          Copyright © 2024
        </div>

        <div className='flex justify-center items-center gap-6  text-white mt-10 lg:mt-20'>
        <FaGoogle size={20} />
        <FaTwitter size={20} />
        <FaInstagramSquare size={20} />
        <FaLinkedin size={20} />
        </div>
      </footer>
   
  )
}

export default Footer
