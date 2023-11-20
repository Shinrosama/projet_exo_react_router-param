import { Link } from "react-router-dom";
import Header from "../component/Header";

function Home() {
  const products = [
    {
      id: 1,
      title: "micro-onde",
      publicationDate: "2021-09-01",
      price: 100,
      description: "chauffe les aliments",
      category: "cuisine",
    },
    {
      id: 2,
      title: "four",
      publicationDate: "2021-10-01",
      price: 150,
      description: "chauffe les aliments",
      category: "cuisine",
    },
    {
      id: 3,
      title: "lave-linge",
      publicationDate: "2021-11-01",
      price: 400,
      description: "lave les linges",
      category: "salle de bain",
    },
    {
      id: 4,
      title: "lave-vaisselle",
      publicationDate: "2021-08-01",
      price: 200,
      description: "lave les vaisselles",
      category: "salle de bain",
    },
    {
      id: 5,
      title: "aspirateur",
      publicationDate: "2022-02-01",
      price: 720,
      description: "aspire les poussières",
      category: "salle de bain",
    },
    {
      id: 6,
      title: "cuisinière",
      publicationDate: "2022-12-01",
      price: 350,
      description: "cuit les aliments",
      category: "cuisine",
    },
    {
      id: 7,
      title: "réfrigérateur",
      publicationDate: "2022-03-01",
      price: 600,
      description: "refroidit les aliments",
      category: "cuisine",
    },
    {
      id: 8,
      title: "congélateur",
      publicationDate: "2022-04-01",
      price: 450,
      description: "congèle les aliments",
      category: "cuisine",
    },
    {
      id: 9,
      title: "télévision",
      publicationDate: "2022-10-10",
      price: 700,
      description: "affiche des images",
      category: "salon",
    },
    {
      id: 10,
      title: "ordinateur",
      publicationDate: "2022-06-01",
      price: 1000,
      description: "affiche des images",
      category: "salon",
    },
  ];

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

  const productSortedByPrice = products.sort((product1, product2) => product1.price - product2.price);

  // cette fois ci on se sert de slice afin de prendre les trois premiers produits
  const cheapestProducts = productSortedByPrice.slice(0, 3);

  return (
    <>
      <Header />
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
              <article>
                <h3>{product.title}</h3>
                <p>{product.price}</p>
                <Link to={`/products/${product.id}`}>
                  <button>Voir le produit</button>
                </Link>
              </article>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default Home;
