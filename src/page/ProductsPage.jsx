import { Link } from "react-router-dom";
import Header from "../component/Header";
import { productSortedByPrice } from "../utils/products-utils";

function ProductsPage() {

  return (
    <>
      <Header />
      <main>
        <h1>Les produits les moins chers pour les grosses pinces : </h1>

        {productSortedByPrice.map((product) => {
          return (
            <article>
              <h2>{product.title}</h2>
              <p>{product.price} euros</p>
              <Link to={`/products/${product.id}`}>
                <button>Voir le produit</button>
              </Link>
            </article>
          );
        })}
      </main>
    </>
  );
}

export default ProductsPage;
