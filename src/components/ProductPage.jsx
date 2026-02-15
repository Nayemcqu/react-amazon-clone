import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { callApi } from "../utils/CallApi";
import ProductsDetails from "./ProductsDetails";
export default function ProductPage(){
const {id}=useParams();

const[product,setProduct]=useState(null);

 
useEffect(()=>{
const getProduct=async()=>{
const data=await callApi(`data/products.json`);
setProduct(data[id]);
  }  

 
  getProduct();

},[id])

if(!product?.title) return <h1 className="flex items-center justify-center text-2xl font-bold ">Loading product...</h1>

return( product && 

<div className="h-screen bg-amazon-background">
<div className="min-w-[1000px] max-w-[1500px] m-auto bg-orange-400">
<div className="grid grid-cols-10 gap-2">

{/*left  */}

<div className="col-span-3  p-8 rounded bg-white m-auto">
<img src={product.image} alt="" />
</div>

{/*Middle  */}
<div className="col-span-5 p-4 rounded bg-white divide-gray-400">


<div className="mb-3 ">
<ProductsDetails product={product} rating={true}/>
</div>
<div className="text-base xl:text-lg mt-3">{product.description}</div>
</div>

{/*Right  */}
<div className="col-span-2 bg-white p-4 rounded ">
<div>{product.price}</div>
<div>{product.oldPrice}</div>
<div>Free Returns</div>
<div>Free Delivery</div>
<div>In Stock</div>
<div>Quantity:
<select >
<option>
    1
</option>
<option>
    2
</option>
<option>
    3
</option>

</select>

</div>

<button>Add to Cart</button>

</div>

</div>

</div>

</div>

);

}