import HomeHero from "../components/HomeHero";
import HomeServiceSection from "../components/HomeServiceSection";
import HowItWorks from "../components/HowItWorks";
import HomePricing from "../components/HomePricing";
import HomeWhyChooseUs from "../components/HomeWhyChooseUs";
import HomeProduct from "../components/HomeProduct";
import HmTestimonials from "../components/HmTestimonials";
import HmBanner from "../components/HmBanner";
import HmTrustBar from "../components/HmTrustBar";
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
