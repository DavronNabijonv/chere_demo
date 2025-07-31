import { useTranslations } from "@/hooks/useTranslations";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { baklashka05L, baklashka1L, baklashka20L } from "@/assets";
import { FaArrowRight } from "react-icons/fa";
import './homePage.css'

export default function HomeProducts() {
  const t = useTranslations();
  return (
    <div className="mx-auto w-full max-w-[1200px] px-2 pb-30">
      {/* home products title */}
      <div className="flex flex-col gap-2 pt-20 ">
        <h1 className="bg-gradient-to-b from-[#000000] via-[#1A367C] to-[#1A367C] bg-clip-text text-[25px] font-bold text-transparent sm:text-[40px] lg:text-[60px]">
          {t.homePage.homeProducts.title}
        </h1>
        <p className="w-full max-w-[650px] text-[17px] text-[#4D566A] sm:text-[20px]">
          {t.homePage.homeProducts.desc}
        </p>
      </div>

      {/* home products slider */}
      <div className="pt-20">
        <Swiper
          slidesPerView={1}
          loop={true}
          breakpoints={{
            700: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          navigation={true}
          modules={[Navigation]}
          className="home_swiper flex h-[600px] items-center justify-center"
        >
          <SwiperSlide>
            <div className="group flex flex-col gap-5 mx-1 rounded-[24px] bg-[#E4E5E7] px-5 py-6 hover:bg-white hover:shadow-[0px_1px_10px_#E4E5E7]">
              <img
                src={baklashka05L}
                loading="lazy"
                alt="baklashka image"
                className="rounded-[24px] group-hover:shadow-[0px_1px_10px_#E4E5E7] w-full h-[335px]"
              />
              <div className="flex flex-col items-start justify-around gap-3">
                <p className="text-[24px] text-black">Chere water 1L</p>
                <p className="text-[16px] text-[#2E3648]">{t.water1Desc}</p>
                <a
                  href="#contact"
                  className="flex items-center gap-2 rounded-[100px] border-3 border-white bg-gradient-to-r from-[#808288] to-[#D0CEC8] px-4 py-2 text-[14px] text-white hover:from-[#1A367C] hover:to-[#AF8C4B]"
                >
                  {t.buttons.order}
                  <span>
                    <FaArrowRight />
                  </span>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="group flex flex-col gap-3 mx-1 rounded-[24px] bg-[#E4E5E7] px-5 py-6 hover:bg-white hover:shadow-[0px_1px_10px_#E4E5E7]">
              <div className="bg-white rounded-[24px]">
                <img
                  src={baklashka1L}
                  loading="lazy"
                  alt="baklashka image"
                  className="rounded-[24px] group-hover:shadow-[0px_1px_10px_#E4E5E7] w-full h-[335px]"
                />
              </div>
              <div className="flex flex-col items-start justify-around gap-4">
                <p className="text-[24px] text-black">Chere water 0.5L</p>
                <p className="text-[16px] text-[#2E3648]">{t.water05Desc}</p>
                <a
                  href="#contact"
                  className="flex items-center gap-2 rounded-[100px] border-3 border-white bg-gradient-to-r from-[#808288] to-[#D0CEC8] px-4 py-2 text-[14px] text-white hover:from-[#1A367C] hover:to-[#AF8C4B]"
                >
                  {t.buttons.order}
                  <span>
                    <FaArrowRight />
                  </span>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="group flex flex-col gap-3 mx-1 rounded-[24px] bg-[#E4E5E7] px-5 py-6 hover:bg-white hover:shadow-[0px_1px_10px_#E4E5E7]">
              <div className="bg-white rounded-[24px]">
                <img
                  src={baklashka20L}
                  alt="baklashka image"
                  loading="lazy"
                  className="rounded-[24px] group-hover:shadow-[0px_1px_10px_#E4E5E7] w-full h-[335px]"
                />
              </div>
              <div className="flex flex-col items-start justify-around gap-4">
                <p className="text-[24px] text-black">Chere water 20L</p>
                <p className="text-[16px] text-[#2E3648]">{t.water20Desc}</p>
                <a
                  href="#contact"
                  className="flex items-center gap-2 rounded-[100px] border-3 border-white bg-gradient-to-r from-[#808288] to-[#D0CEC8] px-4 py-2 text-[14px] text-white hover:from-[#1A367C] hover:to-[#AF8C4B]"
                >
                  {t.buttons.order}
                  <span>
                    <FaArrowRight />
                  </span>
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
