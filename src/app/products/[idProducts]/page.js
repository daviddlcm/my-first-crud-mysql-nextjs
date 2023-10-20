import axios from "axios"
import Buttons from "./Buttons";
async function loadProduct(idProduct) {
    const {data} = await axios.get(`http://localhost:3000/api/products/${idProduct}`)
    return data
}
async function ProductsPage({params}) {
    const product = await loadProduct(params.idProducts);
    console.log(product);
  return (
    <section className="one__container">
        <div className="one">
        <h1>Name:{product[0].name}</h1>
        <h3>Price:{product[0].description}</h3>
        <p>Description:{product[0].price}</p>
        <Buttons idProduct={product[0].id}/>
    </div>
    </section>
  )
}

export default ProductsPage