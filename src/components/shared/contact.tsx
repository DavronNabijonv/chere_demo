import { contact_bg } from "@/assets";
import { useTranslations } from "@/hooks/useTranslations";
import { useState } from "react";

export default function Contact() {

    // form  values
    const [userName,setUserName] = useState<string>();
    const [pNumber,setPNumber] = useState<string>();

  // language
  const t = useTranslations();
  return (
    <div className="mx-auto w-full max-w-[1200px] max-lg:px-2">
      <div className="rounded-[20px] bg-[#1A367C]">
        <div
          className="flex flex-col items-center gap-2 rounded-[20px] bg-cover bg-center bg-no-repeat py-8"
          style={{ backgroundImage: `url(${contact_bg})` }}
        >
          <p className="bg-gradient-to-b from-[#fff] to-[#BDC7E1] bg-clip-text text-[50px] text-white">
            {t.contact_comp.title}
          </p>
          <p className="mx-auto w-full max-w-[350px] text-[20px] text-[#8DA1D0]">
            {t.contact_comp.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
