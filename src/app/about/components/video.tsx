import { useTranslations } from "@/hooks/useTranslations";

export default function Video() {
  const t = useTranslations();
  return (
    <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-center gap-10 py-10">
      <p className="mx-auto w-full max-w-[800px] bg-gradient-to-r from-[#1A3B8D] via-[#000000] to-[#CCA55D] bg-clip-text text-center text-[30px] font-[500] text-transparent">
        {t.aboutPage.videoText}
      </p>
      <video
        src={"https://youtu.be/x6GxcslSMFc?si=rMqF7HF7FvgZoDAV"}
        controls
        className="h-full w-full cursor-pointer rounded-lg object-cover shadow-md"
      />
    </div>
  );
}
