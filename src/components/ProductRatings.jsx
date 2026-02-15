import { StarIcon } from "@heroicons/react/24/outline";

export default function ProductRatings(props){
const starNumber=props.avgRating;
const RatingNumber=props.Ratings;

return(
<div className="flex">
{Array.from({length:starNumber},(_,i)=><StarIcon key={i} className="stroke-[#f1B61f] fill-[#f1B61f] h-[20px]"/>)}
{Array.from({length:5-starNumber},(_,i)=><StarIcon key={i} className="stroke-[#f1B61f] h-[20px]"/>)}

<span className="ml-3 text-blue-500">{RatingNumber} </span>
</div>


);

}