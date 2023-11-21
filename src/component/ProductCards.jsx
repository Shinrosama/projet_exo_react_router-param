import {Link} from "react-router-dom"

function ProductCards ({productToShow}) {

    return (
        // Je viens copier la partie que j'ai extraite de mes pages et qui se répète afin de pouvoir la rappeler en diminuant la quantité de code
        <article>
        <h3>{productToShow.title}</h3>
        <p>{productToShow.price}</p>
        <Link to={`/products/${productToShow.id}`}>
          <button>Voir le produit</button>
        </Link>
      </article>

    )

}

export default ProductCards