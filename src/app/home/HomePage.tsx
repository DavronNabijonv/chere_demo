import HomeHero from "./components/homeHero";
import Contact from "@/components/contact/contact";
import { IoLocationSharp } from "react-icons/io5";
import AboutHome from "./components/aboutHome";

function HomePage() {
  return (
    <>
      <HomeHero />
      <div className="bg-gradient-to-tr from-[#f3efed] via-[#f4f8fd] to-[#f3efed] max-[1200px]:px-2">
        <Contact />
        <AboutHome />

        {/* contact information , phone , location , work hours */}
        <div className="mx-auto w-full max-w-[1200px]  relative min-[740px]:h-[80px] h-[170px] max-[340px]:h-[220px]">
          <div className="absolute top-10 flex w-full flex-wrap min-[1085px]:gap-1 gap-5  items-center justify-center rounded-[24px] bg-white px-auto max-[400px]:px-2 min-[740px]:py-3 py-5">

            <div className="flex items-center gap-3">
              <span className="rounded-[100%] bg-[#DDAE57] p-2.5 text-white">
                <IoLocationSharp size={20} />
              </span>
              <p className="max-w-[300px] w-full">
                Manzil: Toshkent shahar, Uchtepa tumaniBog‘ishamol koz-‘chasi,
                3-uy
              </p>
            </div>
            {/* stick */}
            <div className="h-[60px] w-[1px] bg-[#CCCCCC] mr-10 min-[801px]:flex hidden"></div>

            <div className="flex items-center gap-3">
              <span className="rounded-[100%] bg-[#DDAE57] p-2.5 text-white">
                <IoLocationSharp size={20} />
              </span>
              <p className="max-w-[300px] w-full">
                Manzil: Toshkent shahar, Uchtepa tumaniBog‘ishamol koz-‘chasi,
                3-uy
              </p>
            </div>

            {/* stick */}
            <div className="h-[60px] w-[1px] bg-[#CCCCCC] min-[1085px]:flex hidden mr-10"></div>

            <div className="flex items-center gap-3">
              <span className="rounded-[100%] bg-[#DDAE57] p-2.5 text-white">
                <IoLocationSharp size={20} />
              </span>
              <p className="max-w-[300px] w-full">
                Manzil: Toshkent shahar, Uchtepa tumaniBog‘ishamol koz-‘chasi,
                3-uy
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
