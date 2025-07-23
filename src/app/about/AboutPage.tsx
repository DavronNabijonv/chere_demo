import AboutHero from "./components/aboutHero";
import Galary from "./components/galary";
import Video from "./components/video";

function AboutPage() {
  return (
    <div>
      <AboutHero />
      <div className="bg-gradient-to-br from-[#fff] via-[#f4f8fd] to-[#bdcbed]">
        <Video />
        <Galary />
      </div>
    </div>
  );
}

export default AboutPage;
