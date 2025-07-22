import { Button } from "@/components/ui/button";

function HomePage() {
  return (
    <div className="bg-radial-[at_75%_50%] from-[#BFD7FF] h-[700px]">
      <div className="main-container pt-20">
        {/* home hero texts */}
        <div className="" >
          <h1>Chere Water</h1>
          <h1>Yangi Ta’m, Sog’lom Hayot</h1>
          <p>
            Sog'lom turmush tarzingizni biz bilan boshlang. Toza suv-musaffo
            hayot. Chanqoqni kutmang, Buyurtma Bering
          </p>
          <Button className="text-2xl font-medium">Batafsil o’rganish</Button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
