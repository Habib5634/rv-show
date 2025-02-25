import ExpoCenter from "@/components/ExpoCenter";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Parking from "@/components/Parking";
import Reasons from "@/components/Reasons";
import TicketPrices from "@/components/Ticket";
import Image from "next/image";

export default function Home() {
  return (
  <div className="relative">
<Navbar/>
  <Hero/>
  <ExpoCenter/>
  <Reasons/>
  <TicketPrices/>
  <Parking/>
  <Footer/>
  </div>
  );
}
