import { botle, circleDrop, drop } from "@/assets";
import { useTranslations } from "@/hooks/useTranslations";

export default function Whyus() {
  const t = useTranslations();
  return (
    <div className="bg-[#DEE2E9] py-20 pt-40">
      <div className="mx-auto w-full max-w-[1200px] px-2">
        <p className="bg-gradient-to-b min-[600px]:mb-20 mb-10 from-[#000000] via-[#1A367C] to-[#1A367C] bg-clip-text text-[20px] font-bold text-transparent sm:text-[30px] md:text-[40px] lg:text-[60px]">
          {t.homePage.homeWhyUs.title}
        </p>
        <div className="grid min-[1000px]:grid-cols-3 grid-cols-2 w-full min-[1000px]:gap-1 gap-8 max-[720px]:grid-cols-1">
          <div className="flex items-start justify-start gap-3 min-[1000px]:border-r border-[#7F868C] mr-3">
            <span className="bg-[#DDAE57] rounded-[8px] p-2">
              <img src={drop} alt="drop icon" className="!w-[55px] h-[30px]" />
            </span>
            <div className="flex flex-col gap-3">
                <p className="md:text-[30px] text-[20px] font-semibold">{t.homePage.homeWhyUs.title1}</p>
                <p className="md:text-[18px] text-[16px] font-[300]">{t.homePage.homeWhyUs.desc1}</p>
            </div>
          </div>
          <div className="flex items-start justify-start gap-3 min-[1000px]:border-r border-[#7F868C] mr-3">
            <span className="bg-[#DDAE57] rounded-[8px] p-2">
              <img src={botle} alt="drop icon" className="!w-[55px] !h-[30px]" />
            </span>
            <div className="flex flex-col gap-3">
                <p className="md:text-[30px] text-[20px] font-semibold">{t.homePage.homeWhyUs.title2}</p>
                <p className="md:text-[18px] text-[16px] font-[300]">{t.homePage.homeWhyUs.desc2}</p>
            </div>
          </div>
          <div className="flex items-start justify-start gap-3">
            <span className="bg-[#DDAE57] rounded-[8px] p-2">
              <img src={circleDrop} alt="drop icon" className="!w-[55px] !h-[30px]" />
            </span>
            <div className="flex flex-col gap-3">
                <p className="md:text-[30px] text-[20px] font-semibold">{t.homePage.homeWhyUs.title3}</p>
                <p className="md:text-[18px] text-[16px] font-[300]">{t.homePage.homeWhyUs.desc3}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
