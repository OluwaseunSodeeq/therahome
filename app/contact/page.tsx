import ContactBanner from "../components/ContactBanner";
import ContactForm from "../components/ContactForm";
import ContactHero from "../components/ContactHero";
import ContactInfo from "../components/ContactInfo";
import TrustBars from "../components/TrustBars";
import WhyLoveUs from "../components/WhyLoveUs";

export default function page() {
  return (
    <div className="px-6 xl:px-12">
      <ContactHero />
      <div className="bg-white py-10 grid grid-cols-[500px_1fr_1fr] gap-8 ">
        <ContactForm />
        <ContactInfo />
        <WhyLoveUs />
      </div>
      <ContactBanner />
      <TrustBars />
    </div>
  );
}
