import AboutHero from "../../components/Ui-components/AboutHero";
import OurStory from "../../components/Ui-components/OurStory";
import AboutBanner from "../../components/Ui-components/AboutBanner";
import WhatMakesDifferent from "../../components/Ui-components/WhatMakeUsDiffrent";

export default function page() {
  return (
    <div>
      <AboutHero />
      <OurStory />
      <WhatMakesDifferent />
      <AboutBanner />
    </div>
  );
}
