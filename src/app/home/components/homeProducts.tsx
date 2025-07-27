import { useTranslations } from "@/hooks/useTranslations";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";

export default function HomeProducts() {
  const t = useTranslations();
  return (
    <div className="mx-auto w-full max-w-[1200px] px-2 pb-20">
      {/* home products title */}
      <div className="flex flex-col gap-2">
        <h1 className="bg-gradient-to-b from-[#000000] via-[#1A367C] to-[#1A367C] bg-clip-text text-[25px] font-bold text-transparent sm:text-[40px] lg:text-[60px]">
          {t.homePage.homeProducts.title}
        </h1>
        <p className="w-full max-w-[650px] text-[17px] text-[#4D566A] max-lg:text-center sm:text-[20px]">
          {t.homePage.homeProducts.desc}
        </p>
      </div>

      {/* home products slider */}
      <div>
      <Swiper
          slidesPerView={1}
          loop={true}
          breakpoints={{
            800: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          navigation={true}
          modules={[Navigation]}
          className="home_swiper flex h-[500px] items-center justify-center gap-10 max-sm:h-[400px]"
        >
            <SwiperSlide><div></div></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
