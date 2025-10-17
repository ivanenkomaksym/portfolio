import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Achievements from "@/components/sections/Achievements";
import Footer from "@/components/sections/Footer";
import { portfolioData } from "@/data/portfolio-data";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero data={portfolioData.basicInfo} />
      <Skills data={portfolioData.skills} />
      <Projects data={portfolioData.projects} />
      <Education data={portfolioData.education} />
      <Achievements data={portfolioData.achievements} />
      <Footer data={portfolioData.socialLinks} />
    </div>
  );
}
