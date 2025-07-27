import HomeHero from "./components/homeHero";
import Contact from "@/components/contact/contact";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import AboutHome from "./components/aboutHome";
import Cargo from "./components/cargo";
import Whyus from "./components/whyus";
import Products from "./components/products";
import { useTranslations } from "@/hooks/useTranslations";
import HomeProducts from "./components/homeProducts";

function HomePage() {
  const t = useTranslations();
  return (
    <>
      <HomeHero />
      <div className="bg-gradient-to-tr from-[#f3efed] via-[#f4f8fd] to-[#f3efed]">
        <HomeProducts/>
        <Products />
        <Whyus />
        <div className="h-[100px] w-full bg-white"></div>
        <Cargo />
        <AboutHome />
        <Contact />

        {/* contact information , phone , location , work hours */}
        <div className="relative mx-auto h-[170px] w-full max-w-[1200px] max-[340px]:h-[220px] min-[740px]:h-[80px]">
          <div className="px-auto absolute top-10 flex w-full flex-wrap items-center justify-center gap-5 rounded-[24px] bg-white py-5 max-[400px]:px-2 min-[740px]:py-3 min-[1085px]:gap-1">
            <div className="flex items-center gap-3">
              <span className="rounded-[100%] bg-[#DDAE57] p-2.5 text-white">
                <IoLocationSharp size={20} />
              </span>
              <p className="w-full max-w-[300px]">{t.suvContact.location}</p>
            </div>
            {/* stick */}
            <div className="mr-10 hidden h-[60px] w-[1px] bg-[#CCCCCC] min-[801px]:flex"></div>

            <div className="flex items-center gap-3">
              <span className="rounded-[100%] bg-[#DDAE57] p-2.5 text-white">
                <FaPhoneAlt size={20} />
              </span>
              <p className="w-full max-w-[180px]">
                <p>{t.suvContact.phone}</p>
                +99892 200 33 55 +99892 566 22 77
              </p>
            </div>

            {/* stick */}
            <div className="mr-10 hidden h-[60px] w-[1px] bg-[#CCCCCC] min-[1085px]:flex"></div>

            <div className="flex items-center gap-3">
              <span className="rounded-[100%] bg-[#DDAE57] p-2.5 text-white">
                <FaClock size={20} />
              </span>
              <p className="w-full max-w-[120px]">
                <p>{t.suvContact.time}</p>
                09:00 - 18:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
