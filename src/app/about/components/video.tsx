export default function Video() {
  return (
    <div className="max-w-[1200px] w-full mx-auto flex flex-col items-center justify-center gap-10 py-10">
      <p className="max-w-[800px] w-full mx-auto bg-gradient-to-r from-[#1A3B8D] via-[#000000] to-[#CCA55D] bg-clip-text text-transparent font-[500] text-[30px] text-center">
        Videoda kompaniyamizning rivojlanish yo‘lini va suv ishlab chiqarish
        jarayonini qanday boshqarayotganimizni ko‘ring. Biz qadriyatlarimiz va
        sizning ishonchingizga suyanamiz!
      </p>
      <video
        src={'https://youtu.be/x6GxcslSMFc?si=rMqF7HF7FvgZoDAV'}
        controls
        className="w-full h-full rounded-lg object-cover shadow-md cursor-pointer"
      />
    </div>
  );
}
