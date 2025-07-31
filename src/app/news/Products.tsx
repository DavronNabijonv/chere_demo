import Contact from "@/components/contact/contact";
import ProductHero from "./components/productHero";
import OurProducts from "./components/ourProducts";

function Products() {
  return (
    <>
      <ProductHero />
      <OurProducts />
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

export default Products;
