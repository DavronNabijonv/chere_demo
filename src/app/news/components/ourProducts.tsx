import { baklashka1L } from "@/assets";
import { useTranslations } from "@/hooks/useTranslations";

export default function OurProducts() {
  const t = useTranslations();
  return (
    <div className="mx-auto w-full max-w-[1200px] px-2 py-10">
      {/* title part */}
      <div className="mb-20 flex w-full flex-col items-center justify-center gap-2 font-bold">
        <h1 className="mx-auto w-full max-w-[800px] bg-gradient-to-r from-[#1A3B8D] via-[#000000] to-[#CCA55D] bg-clip-text text-center text-[45px] font-[500] text-transparent">
          {t.productsPage.productsTitle.title1}
        </h1>
        <h1 className="mx-auto w-full max-w-[800px] bg-gradient-to-r from-[#1A3B8D] via-[#000000] to-[#CCA55D] bg-clip-text text-center text-[60px] font-[500] text-transparent">
          {t.productsPage.productsTitle.title2}
        </h1>
      </div>

      {/* produxts part */}
      <div className="flex w-full items-start justify-around gap-5 rounded-2xl px-3 py-5 shadow-[0px_1px_10px_#0b305c] max-md:flex-wrap min-sm:px-10">
        <img
          src={baklashka1L}
          alt="1L baker image"
          className="h-[200px] w-full max-w-[120px] object-cover object-center sm:h-[320px]"
        />

        <div className="flex w-full max-w-[700px] flex-col items-start gap-5 py-5">
          <h1 className="text-[25px] text-black sm:text-[35px]">1L</h1>

          <p className="text-[16px] text-[#4D566A] sm:text-[18px]">
            Kun davomida kompyuter oldida ishlayotganingizda bir qultum suv
            ichib, diqqatni oshiring va o‘zingizni yaxshiroq his eting.
          </p>

          <div className="flex w-full items-start justify-between gap-2 max-sm:flex-wrap">
            <div className="flex h-[60px] w-[60px] flex-col items-start justify-start border border-[#CDD0DC] bg-gradient-to-b from-[#FFFFFF] to-[#ECE7ED] px-2 max-sm:pt-[5px] sm:h-[100px] sm:w-[100px] sm:leading-[45px]">
              <p className="text-[10px] font-[500] text-[#4D566A] sm:text-[14px]">
                KALSIY
              </p>
              <p className="w-full text-center text-[30px] text-[#4D566A] sm:text-[50px]">
                80
              </p>
            </div>
            <div className="flex h-[60px] w-[60px] flex-col items-start justify-start border border-[#CDD0DC] bg-gradient-to-b from-[#FFFFFF] to-[#CDD0DC] px-2 max-sm:pt-[5px] sm:h-[100px] sm:w-[120px] sm:leading-[45px]">
              <p className="text-[10px] font-[500] text-[#4D566A] sm:text-[14px]">
                BIOKARBONAT
              </p>
              <p className="w-full text-center text-[30px] text-[#4D566A] sm:text-[50px]">
                360
              </p>
            </div>
            <div className="flex h-[60px] w-[60px] flex-col items-start justify-start border border-[#CDD0DC] bg-gradient-to-b from-[#FFFFFF] to-[#D3DBEB] px-2 max-sm:pt-[5px] sm:h-[100px] sm:w-[100px] sm:leading-[45px]">
              <p className="text-[10px] font-[500] text-[#4D566A] sm:text-[14px]">
                MAGNIY
              </p>
              <p className="w-full text-center text-[30px] text-[#4D566A] sm:text-[50px]">
                70
              </p>
            </div>
            <div className="flex h-[60px] w-[60px] flex-col items-start justify-start border border-[#CDD0DC] bg-gradient-to-b from-[#FFFFFF] to-[#EDECE7] px-2 max-sm:pt-[5px] sm:h-[100px] sm:w-[100px] sm:leading-[45px]">
              <p className="text-[10px] font-[500] text-[#4D566A] sm:text-[14px]">
                KALIY
              </p>
              <p className="w-full text-center text-[30px] text-[#4D566A] sm:text-[50px]">
                25
              </p>
            </div>
            <div className="flex h-[60px] w-[60px] flex-col items-start justify-start border border-[#CDD0DC] bg-gradient-to-b from-[#FFFFFF] to-[#E8EDE7] px-2 max-sm:pt-[5px] sm:h-[100px] sm:w-[100px] sm:leading-[45px]">
              <p className="text-[10px] font-[500] text-[#4D566A] sm:text-[14px]">
                XLORID
              </p>
              <p className="w-full text-center text-[30px] text-[#4D566A] sm:text-[50px]">
                25
              </p>
            </div>
          </div>
          <button className="rounded-[18px] border-4 border-[#5d75b19d] bg-gradient-to-r from-[#808288] to-[#D0CEC8] px-10 py-2 text-[16px] text-white">
            {t.buttons.order}
          </button>
        </div>
      </div>
    </div>
  );
}
