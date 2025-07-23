import { box, contact_bg } from "@/assets";
import { useTranslations } from "@/hooks/useTranslations";
import { FaArrowRight } from "react-icons/fa";

export default function Cargo() {
  const t = useTranslations();
  return (
    <div
      className="bg-[#0d1015] bg-cover bg-center bg-no-repeat py-30"
      style={{ backgroundImage: `url(${contact_bg})` }}
    >
      <div className="relative mx-auto max-w-[1200px]">
        <div className="flex flex-col items-start gap-5">
          <p className="bg-gradient-to-b from-[#FFFFFF] to-[#BDC7E1] bg-clip-text text-[20px] font-bold text-transparent sm:text-[30px] md:text-[40px] lg:text-[50px]">
            {t.homePage.homeCargo.title}
          </p>
          <p className="w-full max-w-[500px] text-[#8DA1D0] md:text-[20px]">
            {t.homePage.homeCargo.desc}
          </p>
          <button className="hidden items-center gap-3 rounded-[100px] border-2 border-white bg-linear-to-r from-[#1A367C] to-[#AF8C4B] p-2 px-6 text-[16px] text-white min-lg:flex">
              {t.buttons.order} <FaArrowRight size={16} />
            </button>
        </div>
      </div>
    </div>
  );
}
