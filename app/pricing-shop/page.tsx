// import GlobalStyles from "../components/GlobalStyles";
import FeaturedProducts from "../../components/Ui-components/FeaturedShopProducts";
import HeroShop from "../../components/Ui-components/HeroShop";
import ShopBanner from "../../components/Ui-components/ShopBanner";
import TrustBars from "../../components/Ui-components/TrustBars";

export default function page() {
  return (
    <div>
      <HeroShop />
      <FeaturedProducts />
      <TrustBars />
      <ShopBanner />
    </div>
  );
}

//   /*  <GlobalStyles>
//  <h1 className="text-center text-primary-black">Pricing and Shoping</h1> */
//  </GlobalStyles>
//  */
