import { useParams } from "react-router-dom";
import { useState } from "react";
export default function ProductPage(){
const {id}=useParams();

const[product,setProduct]=useState(null);


return(

<div>ProductsPage:{id}</div>
);

}