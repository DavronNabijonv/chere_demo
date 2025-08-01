import { useTranslations } from "@/hooks/useTranslations";

export default function Video() {
  const t = useTranslations();
  return (
    <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-center gap-10 py-10 px-2">
    <p className="mx-auto w-full max-w-[800px] bg-gradient-to-r from-[#1A3B8D] via-[#000000] to-[#CCA55D] bg-clip-text text-center text-[30px] font-[500] text-transparent">
      {t.aboutPage.videoText}
    </p>
    <iframe
      width="100%"
      height="500"
      src="https://www.youtube.com/embed/cWD4YD9BMNY"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="rounded-lg shadow-md"
    ></iframe>
  </div>
  );
}
