//import {pool} from "@/config/db"
import ProductCard from "@/components/ProductCard";
import axios from "axios";
async function loadProducts(){
  //const result = await pool.query('SELECT * FROM product');
  //console.log(result);
  //otra forma con fetch o axios
 const {data} = await axios.get('http://localhost:3000/api/products')
 return data
}
async function HomePage() {
  const products = await loadProducts();
  return (
    <div className="card__container">
      {products.map(product =>(
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  )
}

export default HomePage