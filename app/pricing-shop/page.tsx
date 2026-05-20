// import GlobalStyles from "../components/GlobalStyles";
import FeaturedProducts from "../components/FeaturedShopProducts";
import HeroShop from "../components/HeroShop";
import ShopBanner from "../components/ShopBanner";
import TrustBars from "../components/TrustBars";

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
