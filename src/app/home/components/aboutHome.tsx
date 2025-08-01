import { img1, img2, img3, img4, img5, img6 } from "@/assets";
import { useTranslations } from "@/hooks/useTranslations"

export default function AboutHome() {
    const t = useTranslations();
    
    return (
        <div className="mx-auto w-full max-w-[1200px] pt-10 px-4">
            {/* Sarlavha va tavsif */}
            <div className="flex flex-col gap-4 items-start mb-8">
                <p className="bg-gradient-to-b from-[#000000] via-[#1A367C] to-[#1A367C] bg-clip-text text-transparent lg:text-[60px] md:text-[40px] text-[30px] font-bold">
                    {t.homePage.homeAbout.title}
                </p>
                <p className="text-[#4D566A] md:text-[20px] text-[18px]">
                    {t.homePage.homeAbout.desc}
                </p>
            </div>

            {/* Tasvirlar gridi */}
            <div className="min-[640px]:grid flex flex-col grid-cols-3 grid-rows-3 gap-3 min-[900px]:h-[600px] min-[640px]:h-[400px] mt-10">
                <img 
                    src={img1} 
                    alt='about works' 
                    loading="lazy"
                    className="min-[640px]:row-span-2 min-[640px]:col-span-1 min-[640px]:w-full w-[80%] max-[400px]:w-full mx-auto min-[640px]:h-full h-[300px] object-cover rounded-lg"
                />
                <img 
                    src={img3} 
                    alt='about works' 
                    loading="lazy"
                    className="min-[640px]:row-span-1 min-[640px]:col-span-1 min-[640px]:h-full h-[300px] object-cover rounded-lg min-[640px]:w-full w-[80%] max-[400px]:w-full mx-auto"
                />
                <img 
                    src={img5} 
                    loading="lazy"
                    alt='about works' 
                    className="min-[640px]:row-span-2 min-[640px]:col-span-1 min-[640px]:w-full w-[80%] max-[400px]:w-full mx-auto min-[640px]:h-full h-[300px] object-cover rounded-lg"
                />
                <img 
                    src={img4} 
                    loading="lazy"
                    alt='about works' 
                    className="min-[640px]:row-span-2 min-[640px]:col-span-1 min-[640px]:w-full w-[80%] max-[400px]:w-full mx-auto min-[640px]:h-full h-[300px] object-cover rounded-lg"
                />
                <img 
                    src={img2} 
                    loading="lazy"
                    alt='about works' 
                    className="min-[640px]:row-span-1 min-[640px]:col-span-1 min-[640px]:w-full w-[80%] max-[400px]:w-full mx-auto min-[640px]:h-full h-[300px] object-cover rounded-lg"
                />
                <img 
                    src={img6} 
                    loading="lazy"
                    alt='about works' 
                    className="min-[640px]:row-span-1 min-[640px]:col-span-1 min-[640px]:w-full w-[80%] max-[400px]:w-full mx-auto min-[640px]:h-full h-[300px] object-cover object-center rounded-lg"
                />
            </div>
        </div>
    )
}