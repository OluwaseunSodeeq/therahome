import HeroService from "../components/HeroService";
import Services from "../components/Services";
import PricingSection, { CTABanner } from "../components/Test";

export default function Page() {
  return (
    <div className="">
      <HeroService />
      <Services />
      <PricingSection />
      <CTABanner />
    </div>
  );
}
