import {ShoppingCartIcon} from "@heroicons/react/24/outline"
import Search from "./Search";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function NavBar(){

    const cart=useSelector((state)=>state.cart.productNumber);

return(
<header className="min-w-[1000px]">
<div className=" flex  bg-amazon-default text-white">
{/** left */}
  <div className="flex items-center m-4">
    <Link to={"/"}>
    <img src="/images/amazon.png" className="h-[35px] w-[100px] m-2"/>
    </Link>
<div className="pr-4 pl-4">
<div className="text-xs xl:text-sm">Deliver to</div>
<div className="text-sm xl:text-base font-bold"> united Kingdom</div>
</div>


</div>

{/** middle */}

  <div className="flex grow relative items-center">
<Search/>

</div>

{/** Right */}
  <div className="flex items-center">
<div className="pr-4 pl-4">
<div className="text-xs xl:text-sm">Hello, sign in </div>
<div className="text-sm xl:text-base font-bold"> Accounts & Lists</div>
</div>

<div className="pr-4 pl-4">
<div className="text-xs xl:text-sm">Returns</div>
<div className="text-sm xl:text-base font-bold"> & Orders</div>
</div>
<Link to={"/checkout"}>
<div className="flex pr-3 pl-3 ">
<ShoppingCartIcon className="h-[48px]"/>
<div className="relative">
<div className="absolute right-[9px] font-bold m-2 text-orange-400">
    {cart}
</div>
</div>
<div className="flex items-center text-sm xl:text-sm font-bold ">
    Cart
</div>
</div>
</Link>
</div>
</div>
<div className="flex bg-amazon-light-blue text-white space-x-3 text-xs xl:text-sm p-2 pl-6">
<div>Today's Deals</div>
<div>Customer Service</div>
<div>GiftCards</div>
<div>Sell </div>
</div>
</header>


);

}