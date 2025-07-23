import { baklashka1L } from "@/assets";

export default function OurProducts() {
  return (
    <div className="mx-auto w-full max-w-[1200px] px-2 py-10">
      {/* title part */}
      <div className="mb-20 flex w-full flex-col items-center justify-center gap-2 font-bold">
        <h1 className="mx-auto w-full max-w-[800px] bg-gradient-to-r from-[#1A3B8D] via-[#000000] to-[#CCA55D] bg-clip-text text-center text-[45px] font-[500] text-transparent">
          Yo‘lda, Uyda va Ishda. Chere Water
        </h1>
        <h1 className="mx-auto w-full max-w-[800px] bg-gradient-to-r from-[#1A3B8D] via-[#000000] to-[#CCA55D] bg-clip-text text-center text-[60px] font-[500] text-transparent">
          Har Joyda Siz Bilan Birga!
        </h1>
      </div>

      {/* produxts part */}
      <div className="flex w-full items-start justify-around gap-5 max-md:flex-wrap rounded-2xl min-sm:px-10 px-3 py-5 shadow-[0px_1px_10px_#0b305c]">
        <img
          src={baklashka1L}
          alt="1L baker image"
          className=" w-full max-w-[120px] sm:h-[320px] h-[200px] object-cover object-center"
        />

        <div className="flex flex-col items-start gap-5 py-5 max-w-[700px] w-full">
          <h1 className="text-black sm:text-[35px] text-[25px]">1L</h1>

          <p className="text-[#4D566A] sm:text-[18px] text-[16px]">
            Kun davomida kompyuter oldida ishlayotganingizda bir qultum suv
            ichib, diqqatni oshiring va o‘zingizni yaxshiroq his eting.
          </p>

          <div className="flex w-full items-start justify-between gap-2 max-sm:flex-wrap">
            <div className="flex sm:h-[100px] sm:w-[100px] w-[60px] h-[60px] flex-col items-start justify-start border border-[#CDD0DC] bg-gradient-to-b from-[#FFFFFF] to-[#ECE7ED] px-2 sm:leading-[45px] max-sm:pt-[5px]">
              <p className="sm:text-[14px] text-[10px] font-[500] text-[#4D566A]">KALSIY</p>
              <p className="w-full text-center sm:text-[50px] text-[30px] text-[#4D566A]">
                80
              </p>
            </div>
            <div className="flex sm:h-[100px] sm:w-[120px] w-[60px] h-[60px] flex-col items-start justify-start border border-[#CDD0DC] bg-gradient-to-b from-[#FFFFFF] to-[#CDD0DC] px-2 sm:leading-[45px] max-sm:pt-[5px]">
              <p className="sm:text-[14px] text-[10px] font-[500] text-[#4D566A]">
                BIOKARBONAT
              </p>
              <p className="w-full text-center sm:text-[50px] text-[30px] text-[#4D566A]">
                360
              </p>
            </div>
            <div className="flex sm:h-[100px] sm:w-[100px] w-[60px] h-[60px] flex-col items-start justify-start border border-[#CDD0DC] bg-gradient-to-b from-[#FFFFFF] to-[#D3DBEB] px-2 sm:leading-[45px] max-sm:pt-[5px]">
              <p className="sm:text-[14px] text-[10px] font-[500] text-[#4D566A]">MAGNIY</p>
              <p className="w-full text-center sm:text-[50px] text-[30px] text-[#4D566A]">
                70
              </p>
            </div>
            <div className="flex sm:h-[100px] sm:w-[100px] w-[60px] h-[60px] flex-col items-start justify-start border border-[#CDD0DC] bg-gradient-to-b from-[#FFFFFF] to-[#EDECE7] px-2 sm:leading-[45px] max-sm:pt-[5px]">
              <p className="sm:text-[14px] text-[10px] font-[500] text-[#4D566A]">KALIY</p>
              <p className="w-full text-center sm:text-[50px] text-[30px] text-[#4D566A]">
                25
              </p>
            </div>
            <div className="flex sm:h-[100px] sm:w-[100px] w-[60px] h-[60px] flex-col items-start justify-start border border-[#CDD0DC] bg-gradient-to-b from-[#FFFFFF] to-[#E8EDE7] px-2 sm:leading-[45px] max-sm:pt-[5px]">
              <p className="sm:text-[14px] text-[10px] font-[500] text-[#4D566A]">XLORID</p>
              <p className="w-full text-center sm:text-[50px] text-[30px] text-[#4D566A]">
                25
              </p>
            </div>
          </div>
          <button className="border-4 border-[#5d75b19d] bg-gradient-to-r from-[#808288] to-[#D0CEC8] text-[16px] px-10 py-2 text-white rounded-[18px] ">
            Buyurtma berish
          </button>
        </div>
      </div>
    </div>
  );
}
