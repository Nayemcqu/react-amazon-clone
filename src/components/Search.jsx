import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
export default function Search(){

    return (
<div className="w-[100%] ">

<div className="flex items-center h-10 bg-amazon-yellow rounded">
    <select className=" p-2 bg-gray-300 text-black border text-xs xl:sm h-full">
        <option> All </option>
         <option> Deals</option>
          <option> Amazon</option>
           <option> Fashion</option>
            <option> Computer</option> 
            <option> Home</option>
             <option> Mobiles</option>
    </select>
<input className=" flex grow items-center h-[100%] rounded-l text-black bg-white focus:outline-none text-center px-4 py-1" type="text"/>
<button className="w-[45px] cursor-pointer">
<MagnifyingGlassIcon className="h-[27px] m-auto stroke-slate-900"/>
</button>
</div>

</div>

    );
}