import React from 'react'

const ExpoCenter = () => {
  return (
    <div className='container mx-auto  flex flex-col gap-6 items-center px-5 py-16 lg:py-20'>
        <img src="/assets/expo-center.png" alt="Expo"  className='max-h-[500px]'/>
        <h1 className='text-3xl lg:text-[40px] font-medium'>Happening at <span className='font-bold'>Greater Philadelphia Expo Center</span></h1>
        <div className="w-full  py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Dates Section */}
        <div className="border rounded-[36px] lg:rounded-[50px] p-6 text-center border-black h-fit">
          <h3 className="text-[70px] lg:text-[80px] font-bold text-green uppercase pb-4 leading-none">Dates</h3>
          <hr className="mb-4 border-t border-green w-1/2 mx-auto" />
          <p className="text-3xl lg:text-[40px] font-medium">
            February <span className="font-bold">27th</span> - March <span className="font-bold">2nd</span>
          </p>
        </div>

        {/* Show Hours Section */}
        <div className="border rounded-[36px] lg:rounded-[50px] p-6 pb-16 text-center border-black">
          <h3 className="text-[70px] lg:text-[80px] font-bold text-green uppercase pb-4 leading-none">Show Hours</h3>
          <hr className="mb-4 border-t border-green w-3/4 mx-auto" />
          <div className="text-3xl lg:text-[40px] flex flex-col gap-6 font-medium">
            <p>Thursday 12:00 pm - 8:00 pm</p>
            <p>Friday 10:00 am - 8:00 pm</p>
            <p>Saturday 10:00 am - 8:00 pm</p>
            <p>Sunday 11:00 am - 5:00 pm</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ExpoCenter
