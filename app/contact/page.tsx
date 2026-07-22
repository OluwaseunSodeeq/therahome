import ContactBanner from "../../components/Ui-components/ContactBanner";
import ContactHero from "../../components/Ui-components/ContactHero";
import TrustBars from "../../components/Ui-components/TrustBars";
import ContactForm from "../../components/Ui-components/ContactForm";
import ContactInfo from "../../components/Ui-components/ContactInfo";
import WhyLoveUs from "../../components/Ui-components/WhyLoveUs";

export default function page() {
  return (
    <div>
      <ContactHero />
      <div
        className="relative w-full mx-auto 
          bg-white
          py-10
          grid
          grid-cols-1
          gap-8
          md:grid-cols-2
          lg:grid-cols-[1fr_1fr_minmax(320px,450px)]
          lg:px-12
          2xl:px-0
"
      >
        <ContactInfo />
        <WhyLoveUs />
        <div className=" min-w-0 md:col-span-2 lg:col-span-1">
          <ContactForm />
        </div>
      </div>
      <ContactBanner />
      <TrustBars />
    </div>
  );
}
