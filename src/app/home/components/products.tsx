import { ser } from "@/assets";
import { useTranslations } from "@/hooks/useTranslations";
import { FaHandHoldingHeart } from "react-icons/fa";

export default function Products() {
  const t = useTranslations();
  return (
    <div className="mx-auto max-w-[1200px] px-2">
      {/* title */}

      {/* sertificate */}
      <div className="relative h-[200px] max-[650px]:mt-65 ">
        <div className="absolute -bottom-40 flex w-full items-center justify-around rounded-[30px] bg-white p-10 max-sm:flex-col max-sm:gap-10">
          <div className="-top-15 left-20 flex h-[100px] w-[100px] items-center justify-center rounded-[100%] bg-[#DDAE57] min-sm:absolute">
            <span className="rounded-[100%] border border-white p-5 text-white">
              <FaHandHoldingHeart size={30} />
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <p className="w-full max-w-[380px] bg-gradient-to-b from-[#000000] to-[#DDAE57] bg-clip-text text-[40px] leading-[45px] font-medium text-transparent">
              {t.homePage.homeSer.title}
            </p>
            <p className="w-full max-w-[600px] text-[18px] font-[400] text-[#4D566A]">
              {t.homePage.homeSer.desc}
            </p>
          </div>
          <img src={ser} alt="sertificate image" loading="lazy" className="w-[300px]" />
        </div>
      </div>
    </div>
  );
}
