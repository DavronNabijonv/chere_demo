import Contact from "@/components/contact/contact";
import AboutHero from "./components/aboutHero";
import Galary from "./components/galary";
import Video from "./components/video";

function AboutPage() {
  return (
    <div>
      <AboutHero />
      <div className="bg-gradient-to-br from-[#fff] via-[#f4f8fd] to-[#dee4f3]">
        <Video />
        <Galary />
        <div id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
