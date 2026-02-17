import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { callApi } from "../utils/CallApi";
import ProductsDetails from "./ProductsDetails";
import { GB_Currency } from "../utils/constants";
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
<div className="min-w-[1000px] max-w-[1500px] m-auto p-4">
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
<div className="text-xl xl:text-2xl font-semibold text-red-700 text-right">{GB_Currency.format(product.price)}</div>
<div className="text-base xl:text-xl font-semibold text-gray-500 text-right">
   RRP<span className="line-through"> {GB_Currency.format(product.oldPrice)}  </span> </div>
<div className="text-sm xl:text-base font-semibold  text-blue-500 mt-3">Free Returns</div>
<div className="text-sm xl:text-base font-semibold text-blue-500 mt-1">Free Delivery</div>
<div className="text-base xl:text-xl font-semibold text-green-700 mt-1">In Stock</div>
<div className="text-base xl:text-xl  ">Quantity:
<select className="p-2 bg-white border rounded focus:border-indigo-600" >
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

<button className="bg-yellow-400 w-full p-3 text-xs xl:text-base hover:bg-yellow-500 mt-3">Add to Cart</button>

</div>

</div>

</div>

</div>

);

}