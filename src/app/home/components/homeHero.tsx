import { baklashka, ocean } from "@/assets";
import { Button } from "@/components/ui/button";

export default function HomeHero() {
  return (
    <div className="relative overflow-hidden lg:h-[800px] md:h-[750px] h-[500px] bg-gradient-to-br from-[#f3efed] via-[#f4f8fd] to-[#f3efed]">
      <div className="relative md:h-[700px] h-[500px]">
        {/* Eng orqa fon - ocean tasviri (1-qatlam) */}
        <img
          src={ocean}
          alt="back image ocean"
          className="absolute bottom-0 h-[50%] w-full object-bottom opacity-70"
        />

        {/* Gradient fon va kontent (2-qatlam) */}
        <div className="absolute z-10 h-[70%] w-full bg-gradient-to-t from-[#ffffff] to-[#c3d9f8] shadow-[0px_60px_50px_#fff]">
          <div className="main-container lg:pt-50 pt-20 flex items-center justify-center">
            <div className="w-full flex flex-col max-lg:items-center">
              <h1 className="bg-gradient-to-b from-[#000000] via-[#1A367C] to-[#1A367C] bg-clip-text lg:text-[60px] sm:text-[40px] text-[25px] font-bold text-transparent">
                Chere Water
              </h1>
              <h1 className="bg-gradient-to-b from-[#000000] via-[#1A367C] to-[#1A367C] bg-clip-text lg:text-[50px] sm:text-[30px] text-[20px] font-bold text-transparent">
                Yangi Ta'm, Sog'lom Hayot
              </h1>
              <p className="lg:my-10 my-5 w-full max-w-[550px] sm:text-[20px] text-[17px] max-lg:text-center text-[#4D566A]">
                Sog'lom turmush tarzingizni biz bilan boshlang. Toza suv-musaffo
                hayot. Chanqoqni kutmang, Buyurtma Bering
              </p>
              <Button className="bg-[#1A367C] lg:py-8 py-4 lg:text-2xl text-xl font-medium lg:max-w-[250px] max-w-[200px] w-full">
                Batafsil o'rganish
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Old qismdagi tasvir (3-qatlam) */}
      <img
        src={baklashka}
        alt="right image"
        className="absolute max-md:hidden lg:top-10 md:top-80 top-65 xl:-right-70 lg:-right-50 right-10 z-20 xl:w-[1300px] lg:w-[800px] max-lg:max-w-[700px] w-full object-cover"
      />
    </div>
  );
}