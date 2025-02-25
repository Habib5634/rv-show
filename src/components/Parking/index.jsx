import React from 'react'

const Parking = () => {
    return (
        <div className="container mx-auto  flex flex-col gap-6  px-5 py-16 lg:py-20">
            {/* Header */}
            <h1 className="text-[70px] lg:text-[96px] font-bold text-green uppercase pb-4 leading-none text-center mt-10">PARKING</h1>

            {/* Google Map Embed */}
            <div className="w-full max-w-3xl mt-6 mx-auto">
                <iframe
                    className="w-full h-96 rounded-lg shadow-lg"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.1001238984536!2d-75.45101728465505!3d40.13436607940053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c68d53e01f3df9%3A0x6c56db5cb5e3b8b4!2sThe%20Greater%20Philadelphia%20Expo%20Center!5e0!3m2!1sen!2sus!4v1628888888888!5m2!1sen!2sus"
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>

            {/* Parking Info */}
            <p className="text-2xl text-black font-medium text-center mt-4">Plenty of parking on site</p>

            {/* Contact Information */}
            <p className="mt-6 text-lg text-center font-semibold">
                Please call <span className="font-bold text-black">(800) 290-6886</span> for additional information
            </p>
        </div>
    )
}

export default Parking
