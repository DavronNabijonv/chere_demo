import { box, contact_bg } from "@/assets";
import { useTranslations } from "@/hooks/useTranslations";
import { FaArrowRight } from "react-icons/fa";

export default function Cargo() {
  const t = useTranslations();
  return (
    <div
      className="bg-[#0d1015] bg-cover bg-center bg-no-repeat lg:py-30 md:py-20 max-md:pt-10"
      style={{ backgroundImage: `url(${contact_bg})` }}
    >
      <div className="relative flex items-center max-md:flex-wrap mx-auto max-w-[1200px] px-2 max-md:gap-10">
        <div className="flex flex-col items-start gap-5">
          <p className="bg-gradient-to-b from-[#FFFFFF] to-[#BDC7E1] bg-clip-text font-bold text-transparent text-[30px] md:text-[40px] lg:text-[50px]">
            {t.homePage.homeCargo.title}
          </p>
          <p className="w-full max-w-[500px] text-[#8DA1D0] text-[20px]">
            {t.homePage.homeCargo.desc}
          </p>
          <a href="#contact" className=" hover:cursor-pointer items-center gap-3 rounded-[100px] border-2 border-white bg-linear-to-r from-[#1A367C] to-[#AF8C4B] p-2 px-6 text-[16px] text-white flex">
              {t.buttons.order} <FaArrowRight size={16} />
            </a>
        </div>
        <img src={box} alt="" loading="lazy" className=" lg:max-w-[400px] md:max-w-[300px] max-w-[200px] mx-auto max-md:h-[300px] object-cover object-top md:absolute right-0 w-full" />
      </div>
    </div>
  );
}
