import { back_hero_products } from "@/assets";
import { useTranslations } from "@/hooks/useTranslations";

export default function ProductHero() {
  const t = useTranslations();
  return (
    <div
      className="flex h-[600px] items-center justify-center bg-gradient-to-br from-[#f1ece7] via-[#f4f8fd] to-[#bdcbed] bg-contain bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${back_hero_products})` }}
    >
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="bg-gradient-to-b from-[#000000] via-[#1A367C] to-[#1A367C] bg-clip-text font-bold text-transparent text-[30px] lg:text-[50px]">
          {t.productsPage.titelePart.title}
        </h1>
        <p className="w-full max-w-[550px] text-center text-[#4D566A] max-lg:text-center text-[20px]">
          {t.productsPage.titelePart.desc}
        </p>
      </div>
    </div>
  );
}
