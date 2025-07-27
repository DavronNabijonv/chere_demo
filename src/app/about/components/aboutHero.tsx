import { back_hero } from "@/assets";
import { useTranslations } from "@/hooks/useTranslations";

export default function AboutHero() {
  const t = useTranslations();
  return (
    <div
      className="flex h-[600px] items-center justify-center bg-gradient-to-br from-[#f1ece7] via-[#f4f8fd] to-[#bdcbed] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${back_hero})` }}
    >
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="bg-gradient-to-b from-[#000000] via-[#1A367C] to-[#1A367C] bg-clip-text text-[20px] font-bold text-transparent sm:text-[30px] lg:text-[50px]">
          {t.aboutPage.title}
        </h1>
        <p className="w-full max-w-[550px] text-center text-[17px] text-[#4D566A] max-lg:text-center sm:text-[20px]">
          {t.aboutPage.desc}
        </p>
      </div>
    </div>
  );
}
