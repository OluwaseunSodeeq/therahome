import HomeHero from "../components/HomeHero";
import HomeServiceSection from "../components/HomeServiceSection";
import HowItWorks from "../components/HowItWorks";
import HomePricing from "../components/HomePricing";
export default function Page() {
  return (
    <div>
      <HomeHero />
      <HomeServiceSection />
      <HowItWorks />
      <HomePricing />
    </div>
  );
}
