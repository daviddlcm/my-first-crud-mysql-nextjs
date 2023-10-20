"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
function Buttons({idProduct}) {
    const router = useRouter()
  return (
    <div className="button_together">
      <button className="delete" onClick={async()=>{
        if(confirm('are you sure you want to delete this product?')){
            const res = await axios.delete(`/api/products/${idProduct}`)
            if(res.status===204){
              router.push('/')
              router.refresh()
            }
        }
      }}>Delete</button>
      <button className="edit"
      onClick={()=>{
        router.push(`/products/edit/${idProduct}`)
      }}>Edit</button>
    </div>
  );
}

export default Buttons;
