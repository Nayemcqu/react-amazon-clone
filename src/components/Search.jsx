import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState,useEffect } from "react";
import { callApi } from "../utils/CallApi";
import { useNavigate,createSearchParams } from "react-router-dom";

export default function Search(){

    const [suggestions,setSuggestions]=useState(null);
    const [searchTerm,setSearchTerm]=useState("");
const [category,setCategory]=useState("All");
const navigate=useNavigate();
function onHandleSubmit(e){
e.preventDefault();
navigate({pathname:"search",
    search:`${
        createSearchParams({
            category:`${category}`,
            searchTerm:`${searchTerm}`
        })
    }`
})
setSearchTerm("");
setCategory("All");
}

function getSuggestions(){
        callApi(`data/suggestions.json`).then((suggestion)=>{
setSuggestions(suggestion);
        })

}
    
    useEffect(()=>{

getSuggestions();

},[]);

    return (
<div className="w-[100%] ">

<div className="flex items-center h-10 bg-amazon-yellow rounded">
    <select className=" p-2 bg-gray-300 text-black border text-xs xl:sm h-full" onChange={(e)=>setCategory(e.target.value)}>
        <option> All </option>
         <option> Deals</option>
          <option> Amazon</option>
           <option> Fashion</option>
            <option> Computer</option> 
            <option> Home</option>
             <option> Mobiles</option>
    </select>
<input className=" flex grow items-center h-[100%] rounded-l text-black 
bg-white focus:outline-none text-center px-4 py-1"
 type="text"
 value={searchTerm}
 onChange={(e)=>(setSearchTerm(e.target.value))}
 />
<button className="w-[45px] cursor-pointer" onClick={onHandleSubmit}>
<MagnifyingGlassIcon className="h-[27px] m-auto stroke-slate-900"/>
</button>
</div>

{suggestions && 
<div className="bg-white text-black w-full z-40 absolute">
{
suggestions.filter((suggestion)=>{
const currentSearchTerm=searchTerm.toLowerCase();
const title=suggestion.title.toLowerCase();
return (
    currentSearchTerm && 
    title.startsWith(currentSearchTerm) && 
    title!==currentSearchTerm
)

}).slice(0,10)
.map((suggestion)=>(

<div key={suggestion.id} onClick={()=>setSearchTerm(suggestion.title)} className="hover:cursor-pointer">
{
    suggestion.title
}

</div>

))


}


</div>

}

</div>

    );
}