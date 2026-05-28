import HomeHero from "../../components/Ui-components/HomeHero";
import HomeServiceSection from "../../components/Ui-components/HomeServiceSection";
import HowItWorks from "../../components/Ui-components/HowItWorks";
import HomePricing from "../../components/Ui-components/HomePricing";
import HomeWhyChooseUs from "../../components/Ui-components/HomeWhyChooseUs";
import HomeProduct from "../../components/Ui-components/HomeProduct";
import HmTestimonials from "../../components/Ui-components/HmTestimonials";
import HmBanner from "../../components/Ui-components/HmBanner";
import HmTrustBar from "../../components/Ui-components/HmTrustBar";
export default function Page() {
  return (
    <div className="relative z-10">
      <HomeHero />
      <HmTrustBar />
      <HomeServiceSection />
      <HowItWorks />
      <HomePricing />
      <HomeWhyChooseUs />
      <HomeProduct />
      <HmTestimonials />
      <HmBanner />
    </div>
  );
}
