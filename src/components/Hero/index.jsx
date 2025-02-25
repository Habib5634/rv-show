import React from 'react'

const Hero = () => {
  return (
    <>
    <div className="h-screen overflow-x-hidden relative -mt-32">

          <div className="absolute inset-0 z-0 bg-black bg-opacity-20 "></div>
          <div className="bg-herobg bg-center bg-no-repeat bg-cover h-screen   " >
         {/* Content */}
      <div className="relative z-10 container mx-auto flex flex-col items-start justify-center h-full text-center text-white px-6">
        <h1 className="text-5xl md:text-6xl lg:text-[80px] text-start font-bold max-w-3xl">
          The 2025 Greater Philadelphia RV Show
        </h1>
        <p className="mt-4 text-xl font-bold text-start max-w-2xl font-nunito">
          Find the perfect RV, plan your adventure, and experience the freedom of the open road like never before.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <button className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition">
            Two Day Pass
          </button>
          <button className="px-6 py-3 underline  rounded-full font-semibold hover:bg-white hover:text-black transition">
            Show Display Map
          </button>
        </div>

        {/* Features Section */}
        <div className="hidden absolute bottom-0 left-0 right-0 px-6 lg:flex flex-col md:flex-row gap-6 justify-end font-nunito">
          {/* Feature Cards */}
          <div className="bg-black bg-opacity-50 p-6 rounded-2xl text-center w-full md:w-[295px] h-[215px] border border-white ">
            <h3 className="font-bold text-[26px] pb-4 mb-2 border-b border-white">Latest RV Models</h3>
            <p className="text-sm">Explore Brand-New 2025 RVs, Campers, And Trailers From Top Manufacturers.</p>
          </div>
          <div className="bg-black bg-opacity-40 p-6 rounded-2xl text-center w-full md:w-[295px] h-[215px] border border-white ">
            <h3 className="font-bold text-[26px] pb-4 mb-2 border-b border-white">One-Stop Shop</h3>
           
            <p className="text-sm">Browse Hundreds Of Vendors & Offering RV Essentials.</p>
          </div>
          <div className="bg-black bg-opacity-10 p-6 rounded-2xl text-center w-full md:w-[295px] h-[215px] border border-white ">
            <h3 className="font-bold text-[26px] pb-4 mb-2 border-b border-white">Easy Bookings</h3>
            <p className="text-sm">Best in class ticket booking system.</p>
          </div>
        </div>
      </div>
          </div>
    </div>
    <div className="lg:hidden py-10 text-black px-6 flex flex-col md:flex-row gap-6 justify-end font-nunito">
          {/* Feature Cards */}
          <div className=" p-6 rounded-2xl text-center w-full md:w-[295px] h-[215px] border border-black ">
            <h3 className="font-bold text-[26px] pb-4 mb-2 border-b border-black">Latest RV Models</h3>
            <p className="text-sm">Explore Brand-New 2025 RVs, Campers, And Trailers From Top Manufacturers.</p>
          </div>
          <div className=" p-6 rounded-2xl text-center w-full md:w-[295px] h-[215px] border border-black ">
            <h3 className="font-bold text-[26px] pb-4 mb-2 border-b border-black">One-Stop Shop</h3>
           
            <p className="text-sm">Browse Hundreds Of Vendors & Offering RV Essentials.</p>
          </div>
          <div className=" p-6 rounded-2xl text-center w-full md:w-[295px] h-[215px] border border-black ">
            <h3 className="font-bold text-[26px] pb-4 mb-2 border-b border-black">Easy Bookings</h3>
            <p className="text-sm">Best in class ticket booking system.</p>
          </div>
        </div>
    </>
  )
}

export default Hero
