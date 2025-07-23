import { back_hero_products } from "@/assets";


export default function ProductHero() {
  return (
    <div
      className="flex items-center justify-center bg-gradient-to-br from-[#f1ece7] via-[#f4f8fd] to-[#bdcbed] bg-contain bg-no-repeat bg-center  h-[600px]"
      style={{ backgroundImage: `url(${back_hero_products})` }}
    >
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="bg-gradient-to-b from-[#000000] via-[#1A367C] to-[#1A367C] bg-clip-text text-[20px] font-bold text-transparent sm:text-[30px] lg:text-[50px]">
          Bizning Mahsulotlar
        </h1>
        <p className="text-center w-full max-w-[550px] text-[17px] text-[#4D566A] max-lg:text-center sm:text-[20px]">
          Har bir qultumda yoqimli kashfiyot va foydali minerallar. Ta'tib
          ko'ring, tetik va sog'lom bo'ling!
        </p>
      </div>
    </div>
  )
}
