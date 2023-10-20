import Link from 'next/link'
function ProductCard({product}) {
  return (
    <Link href={`/products/${product.id}`} style={{textDecoration:"none",color:"black"}}>
        <div className="card">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
    </Link>
  )
}

export default ProductCard