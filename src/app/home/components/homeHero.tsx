import { ocean } from "@/assets";
import { Button } from "@/components/ui/button";

export default function HomeHero() {
  return (
    <div className="relative h-[780px] ">
      {/* back ocean image */}
      <img
        src={ocean}
        alt="back image ocean"
        className="absolute bottom-0 -z-50 w-full  h-[50%] object-bottom opacity-70"
      />

      <div className="bg-gradient-to-t to-[#c3d9f8] from-[#ffffff] h-[70%] absolute -z-50 w-full shadow-[0px_60px_50px_#fff]">
        <div className="main-container pt-20">
          {/* home hero texts */}
          <div className="">
            <h1>Chere Water</h1>
            <h1>Yangi Ta’m, Sog’lom Hayot</h1>
            <p>
              Sog'lom turmush tarzingizni biz bilan boshlang. Toza suv-musaffo
              hayot. Chanqoqni kutmang, Buyurtma Bering
            </p>
            <Button className="text-2xl font-medium">Batafsil o’rganish</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
