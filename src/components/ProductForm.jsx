"use client";
import { useRef, useState,useEffect } from "react";
import axios from "axios";
import { useRouter,useParams } from "next/navigation";
function ProductForm() {
  const [product, setProduct] = useState({
    name: "",
    price: null,
    description: "",
  });
  const form = useRef(null);
  const router = useRouter();
  const params = useParams()
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value }); 
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!params.id){
      const res = await axios.post('/api/products', product)
      form.current.reset();
    }else{
      const res = await axios.put(`/api/products/${params.id}`,product)
    }
    router.push('/')
    router.refresh()
  }
  useEffect(()=>{
    if(params.id){
      axios.get(`/api/products/${params.id}`)
      .then(res=>{
        setProduct({
          name:res.data[0].name,
          price:res.data[0].price,
          description:res.data[0].description
        })
      })
      }
  },[])
  return (
    <div>
      <form className="productForm" onSubmit={handleSubmit} ref={form}>
        <label htmlFor="name" className="label_form">
          Product name:
        </label>
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={handleChange}
          value={product.name}
          className="input_form"
        />

        <label htmlFor="price" className="label_form">
          Product price:
        </label>
        <input
          name="price"
          type="text"
          placeholder="0.00"
          onChange={handleChange}
          value={product.price}
          className="input_form"
        />

        <label htmlFor="description" className="label_form">
          Product description:
        </label>
        <textarea
          name="description"
          rows={3}
          placeholder="description"
          onChange={handleChange}
          value={product.description}
          className="input_form"
        />
        <button type="submit" className="btn_form">
          {params.id ? "Update Product" : "Add product"}
        </button>
      </form>
    </div>
  );
}

export default ProductForm;
