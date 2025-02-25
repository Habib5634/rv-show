import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
const TicketCard = ({ title, image, price, details,iconImage,det }) => {
    return (
        <div className="w-full">
            <div className="relative  h-auto flex flex-col items-center">
                {/* Top Notch Background */}
                <Image src="/assets/price-card-bg.png" alt="Top BG" width={288} height={550} className="absolute top-0 h-[580px] left-0 w-full" />

                {/* Ticket Main Body */}
                <div className="relative  text-white p-4 pt-40 rounded-md  w-full">
                    <h2 className="text-[26px] lg:text-[32px] font-bold text-center">{title}</h2>
                    <Image src="/assets/herobg.png" alt="RV Image" width={208} height={126} className="mx-auto my-2" />
                    <p className="text-sm mx-auto text-center max-w-[235px]">{details}</p>
                    <div className="w-full flex justify-between mt-8">
                    <div>

                        <div className="flex justify-between items-center mt-4">
                            <span className="text-sm flex items-center font-semibold gap-2"><FaLocationDot /> Great Expo Center</span>
                            
                        </div>
                        {iconImage &&
                        <div className="flex justify-between items$13.0-center mt-4">
                            <span className="text-sm flex items-center font-semibold gap-2"><img src={iconImage} alt="icon" /> {det}</span>
                            <h1></h1>
                        </div>
                        }
                    </div>

                    <div>
                        <p className="font-semibold text-lg text-white ">From</p>
                        <h1 className="text-4xl lg:text-5xl font-bold">$13.0</h1>
                    </div>

                    </div>
                </div>

                {/* Bottom Zig-Zag Image */}
            </div>
            <Image src="/assets/price-card-bot.png" alt="Bottom BG" width={288} height={108} className=" mt-14 md:mt-10  h-[108px] left-0 w-full" />
        </div>
    );
};

const TicketPrices = () => {
    return (
        <section id="discount" className="container mx-auto  flex flex-col gap-6  px-5 py-16 lg:py-20">
            <h1 className="text-[70px] lg:text-[80px] font-bold text-green uppercase pb-4 text-center leading-none">TICKET PRICES</h1>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 justify-center w-full">
                <TicketCard
                    title="ADULTS"
                    image="/rv-image.png"
                    price="13.0"
                    details="Lorem epsum orem Ipsum is simply dummy text of the printing and typesetting industry"
                />
                <TicketCard
                    title="ADULTS"
                    image="/rv-image.png"
                    price="13.0"
                    details="Lorem epsum orem Ipsum is simply dummy text of the printing and typesetting industry"
                iconImage='/assets/panda.png'
                det='Kids Under 12 Free'
                />
                <TicketCard
                    title="FAMILY"
                    image="/rv-image.png"
                    price="13.0"
                    details="Lorem epsum orem Ipsum is simply dummy text of the printing and typesetting industry"
                    iconImage='/assets/p.png'
                    det='Free Parking'
                />
            </div>
            <p className="text-3xl lg:text-[32px] font-bold text-black">*Tickets can be purchased at the door</p>
        </section>
    );
};

export default TicketPrices;
