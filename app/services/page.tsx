import HeroService from "../../components/Ui-components/HeroService";
import ServiceBanner from "../../components/Ui-components/ServiceBanner";
import ServicePricingSection from "../../components/Ui-components/ServicePricingSection";
import Services from "../../components/Ui-components/Services";

export default function Page() {
  return (
    <div className="">
      <HeroService />
      <Services />
      <ServicePricingSection />
      <ServiceBanner />
    </div>
  );
}
