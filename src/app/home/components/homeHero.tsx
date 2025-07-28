import { baklashka, ocean } from "@/assets";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/hooks/useTranslations";

export default function HomeHero() {
  const t = useTranslations();
  return (
    <div className="relative h-[500px] overflow-hidden bg-gradient-to-br from-[#f3efed] via-[#f4f8fd] to-[#f3efed] md:h-[750px] lg:h-[800px]">
      <div className="relative h-[500px] md:h-[700px]">
        {/* Eng orqa fon - ocean tasviri (1-qatlam) */}
        <img
          src={ocean}
          alt="back image ocean"
          className="absolute bottom-0 h-[50%] w-full object-bottom opacity-70"
        />

        {/* Gradient fon va kontent (2-qatlam) */}
        <div className="absolute z-10 h-[70%] w-full bg-gradient-to-t from-[#ffffff] to-[#c3d9f8] shadow-[0px_60px_50px_#fff]">
          <div className="main-container flex items-center justify-center pt-20 lg:pt-50">
            <div className="flex w-full flex-col max-lg:items-center">
              <h1 className="bg-gradient-to-b from-[#000000] via-[#1A367C] to-[#1A367C] bg-clip-text text-[25px] font-bold text-transparent sm:text-[40px] lg:text-[60px]">
                Chere Water
              </h1>
              <h1 className="bg-gradient-to-b from-[#000000] via-[#1A367C] to-[#1A367C] bg-clip-text text-[20px] font-bold text-transparent sm:text-[30px] lg:text-[50px]">
                {t.homePage.homeHero.title}
              </h1>
              <p className="my-5 w-full max-w-[550px] text-[17px] text-[#4D566A] max-lg:text-center sm:text-[20px] lg:my-10">
                {t.homePage.homeHero.desc}
              </p>
              <a href="#contact" >
                <Button className="w-full max-w-[200px] bg-[#1A367C] py-4 text-xl font-medium lg:max-w-[250px] lg:py-8 lg:text-2xl">
                  {t.buttons.order}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Old qismdagi tasvir (3-qatlam) */}
      <img
        src={baklashka}
        alt="right image"
        className="absolute top-65 right-10 z-20 w-full object-cover max-lg:max-w-[700px] max-md:hidden md:top-80 lg:top-10 lg:-right-50 lg:w-[800px] xl:-right-70 xl:w-[1300px]"
      />
    </div>
  );
}
