import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ProductsDetails from "./ProductsDetails";
import { GB_Currency } from "../utils/constants";
import { removeFromCart } from "../redux/cartSlice";
export default function CheckOut(){

const products=useSelector((state)=>state.cart.prodcuts);
const itemsNumber=useSelector((state)=>state.cart.productNumber);
const subTotal=useSelector((state)=>state.cart.prodcuts.reduce((subTotal,product)=>subTotal+(product.price*product.quantity),0));
const dispatch=useDispatch();
return (
<div className="h-screen bg-amazon-background">
<div className="min-w-[1000px] max-w-[1500px] m-auto pt-8">
<div className="grid grid-cols-8 gap-10">

{/**products */}

<div className="col-span-6 bg-white">

<div className="text-2xl xl:text-3xl m-4"> Shopping Cart </div>

{
    products.map((product)=>{

return(
<div key={product.id}>
<div className="grid grid-cols-12 divide-y divide-gray-400 mr-4">

<div className="col-span-10  grid grid-cols-8 ">
<div className="col-span-2">
<Link to={`/product/${product.id}`}>
<img src={product.image_small} alt=""  className="p-4 m-auto"/>
</Link>

</div>

<div className="col-span-6 ">
<div className="font-medium text-black mt-2">
<Link to={`/product/${product.id}`}>
<ProductsDetails product={product} rating={false}/>
</Link>
</div>
<div>
<button  onClick={()=> dispatch(removeFromCart(product.id) )} className="text-sm xl:text-base 
font-semibold rounded  text-red-500 mt-2 mb-1 cursor-pointer">
Delete
</button>
</div>

<div className="grid grid-cols-3 w-20 text-center"> 

<div className="text-xl xl:text-2xl bg-gray-400 rounded ">-</div>
<div className="text-lg xl:text-xl bg-gray-200">{product.quantity} </div>
<div className="text-xl xl:text-2xl bg-gray-400 rounded">+</div>

</div>

</div>

</div>

<div className="col-span-2">
<div className="text-lg xl:text-xl mt-2 mr-4">
{GB_Currency.format(product.price)}
</div>

</div>

</div>

</div>

);

    })
}

{ products.length > 0 && <div className="text-lg xl:text-xl text-right mb-4 ">
     Subtotal ({itemsNumber} items): 
     <span className="font-semibold"> {GB_Currency.format(subTotal)}</span></div>} 

</div> 

{/*Checkout */}
{ products.length>0 &&  <div className="col-span-2 bg-white h-[250px] rounded p-7">
 <div className="text-xs xl:text-sm text-green-800 ">Your order qualifies for 
    <span  className="font-bold capitalize"> free delivery </span>.Delivery Details </div>
     
<div className="text-base xl:text-lg  mb-4 ">
     Subtotal ({itemsNumber} items): 
     <span className="font-semibold"> {GB_Currency.format(subTotal)}</span></div> 
    
   <button className="btn"> procced to Checkout</button>

</div>
   }

</div>


</div>


</div>
);

}