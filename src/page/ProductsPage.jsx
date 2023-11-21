import { Link } from "react-router-dom";
import Header from "../component/Header";
import { productSortedByPrice } from "../utils/products-utils";
import SideBar from "../component/SideBar";
import ProductCards from "../component/ProductCards";

function ProductsPage() {

  return (
    <>
    {/* j'ajoute au header la valeur de mon titre */}
      <Header pageTitle= "ProductsPage" />
      <SideBar sidebar= "vous consulez la liste des produits"/>
      <main>
        <h1>Les produits les moins chers pour les grosses pinces : </h1>

        {productSortedByPrice.map((product) => {
          return (
             // Je retourne mon composant ProductCards via la props productToShow
           <ProductCards productToShow = {product}/>
          );
        })}
      </main>
    </>
  );
}

export default ProductsPage;
