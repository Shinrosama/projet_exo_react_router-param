import { Link } from "react-router-dom";
import Header from "../component/Header";
import { productSortedByPrice, products } from "../utils/products-utils";
import SideBar from "../component/SideBar";
import ProductCards from "../component/ProductCards";

function Home() {
 

  // je trie product par catégorie 
  // je filtre les product qui ont la catégorie cuisine
  // j'utilise le triple égal pour une corespondance strictement égale (valeur et type)

  const kitchenProducts = products.filter((product) => {
    return product.category === "cuisine";
  });

  // je compare les produits du tableau filtré afin de les ranger par date de sortie avec sorte
  //j'utilise new date afin de spécifier le format date

  kitchenProducts.sort((product1, product2) => new Date(product1.publicationDate) - new Date(product2.publicationDate));

  //on applique un slice pour ne récupérer q'une partie des éléments du tableau, en l'occurence les trois derniers - pour les derniers et 3 pour le nombre d'éléments
  const lastPublishedKitchenProducts = kitchenProducts.slice(-3);

  // on recommence en rangeant les produits par prix avec sort pour comparer les éléments du tableau

  

  // cette fois ci on se sert de slice afin de prendre les trois premiers produits
  const cheapestProducts = productSortedByPrice.slice(0, 3);

  return (
    <>
      
    {/* j'ajoute au header la valeur de mon titre */}
      <Header pageTitle="HomePage"/>
      <SideBar sidebar= "Titre de la home page" />
      <main>
        <section>
          <h2>Les trois derniers produits cuisine : </h2>
            {/* ici on demande d'afficher les éléments du tableau lastPublishedProduct via map qui retourne tout les élément d'un tableau */}
          {lastPublishedKitchenProducts.map((product) => {
            return (
              <article>
                {/* on demande le titre de produit */}
                <h3>{product.title}</h3>
                {/* on demande le prix */}
                <p>{product.price}</p>
                {/* on crée un lien via un boutton vers la page product qui nous affiche le produit voulu grace a son id*/}
                <Link to={`/products/${product.id}`}>
                  <button>Voir le produit</button>
                </Link>
              </article>
            );
          })}
        </section>
        <section>

          <h3>Produits les moins chers : </h3>

          {/* on recommence comme au dessus mais sur le tableau des prix */}
          {cheapestProducts.map((product) => {
            return (
              // Je retourne mon composant ProductCards via la props productToShow
            <ProductCards productToShow = {product}/>
            );
          })}
        </section>
        
      </main>
    </>
  );
}

export default Home;
