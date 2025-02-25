import React from 'react'
// Data for the reasons list
const reasons = [
    {
      title: "Exclusive Show-Only",
      description: "Special pricing, rebates, and financing offers available only at the show. Dealers competing means better prices on new and used RVs.",
    },
    {
      title: "Latest RV Models",
      description: "Explore brand-new 2025 RVs, campers, and trailers from top manufacturers. Discover the latest luxury interiors, solar power solutions, and off-grid technology.",
    },
    {
      title: "One-Stop Shop",
      description: "Browse hundreds of vendors offering RV essentials, outdoor gear, and camping must-haves. Find upgrades, solar kits, awnings, towing accessories, and more.",
    },
    {
      title: "Connect with Campgrounds",
      description: "Meet representatives from top-rated campgrounds and RV resorts. Plan your next adventure with exclusive discounts on campsites and memberships.",
    },
    {
      title: "Fun for Whole Family",
      description: "Giveaways, contests, and interactive exhibits throughout the show. Kid-friendly activities and live product demonstrations. Connect with fellow RVers and outdoor enthusiasts.",
    },
  ];
const Reasons = () => {
  return (
    <>
    <div className='container mx-auto  flex flex-col  gap-6 items-start px-5 py-16 lg:py-20'>
      {/* Heading */}
      <h2 className="text-[70px] lg:text-[80px] font-bold text-center w-full text-green uppercase pb-4 leading-none">
        5 REASONS 
      </h2>
      <h1 className='text-4xl lg:text-5xl text-center w-full'>
      <span className="text-gray-800 font-normal">To Attend</span>{" "}
      <span className="text-green-700 font-semibold ">Greater Philadelphia RV Show</span>
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        {/* Left Side - Image */}
        <div>
          <img
            src="/assets/reasons.png" // Update with correct image path
            alt="RV Show"
            className="w-full rounded-lg shadow-lg max-h-[600px]"
          />
        </div>

        {/* Right Side - Reasons List */}
        <div className="space-y-2">
          {reasons.map((reason, index) => (
              <div key={index} className="flex items-start">
              <span className="text-2xl lg:text-3xl font-medium  mr-3 lg:mr-10">
                {String(index + 1).padStart(2, "0")}.
              </span>
              <div>
                <h3 className="text-2xl lg:text-3xl font-medium  ">{reason.title}</h3>
                <p className="text-gray-600 mt-4">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
         
         <div className='h-[200px] lg:h-[249px] flex justify-center items-center px-5 bg-green text-white'>
            <p className='text-3xl md:text-4xl lg:text-5xl text-center'>The show is completely <span className='font-bold'>indoors </span>so don't let the weather stop you.</p>


         </div>
         
          </>
  )
}

export default Reasons
