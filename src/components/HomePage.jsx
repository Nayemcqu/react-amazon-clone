
import { data } from "../utils/homePageCard";
import { Carousel, HomePageCard, CarouselCategory, CarouselProduct } from "./index";


export default function HomePage(){



return  (
  <div className="bg-amazon-background">

<div className="min-w-[1000px]  max-w-[1500px] bg-purple-500 mx-auto">

<Carousel/>

<div className="grid xl:grid-cols-4 grid-cols-3 -mt-80 bg-gradient-to-b from-zinc-200 to-zinc-400">

{data.map((item,index)=>( 
<HomePageCard title={item.title} img={item.img}
link={item.link} key={index}
/>

))}


<div className="m-3 pt-8 ">
    <img src="images/banner_image_2.jpg" className="xl:hidden"/>
</div>
</div>
<CarouselProduct/>
<CarouselCategory />
<div className="h-[200px]">
    <img src="images/banner_image.jpg" className="h-[100%] m-auto"/>
</div>
</div>

    </div>

);

}