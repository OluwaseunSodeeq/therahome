import ContactBanner from "../../components/Ui-components/ContactBanner";
import ContactForm from "../../components/Ui-components/ContactForm";
import ContactHero from "../../components/Ui-components/ContactHero";
import ContactInfo from "../../components/Ui-components/ContactInfo";
import TrustBars from "../../components/Ui-components/TrustBars";
import WhyLoveUs from "../../components/Ui-components/WhyLoveUs";

export default function page() {
  return (
    <div>
      <ContactHero />
      <div
        className="relative max-w-360 mx-auto 
          bg-white
          py-10
          grid
          grid-cols-1
          gap-8
          md:grid-cols-2
          lg:grid-cols-[1fr_1fr_500px]
          lg:px-12
          2xl:px-0
"
      >
        <ContactInfo />
        <WhyLoveUs />
        <div className="md:col-span-2 lg:col-span-1">
          <ContactForm />
        </div>
      </div>
      <ContactBanner />
      <TrustBars />
    </div>
  );
}
