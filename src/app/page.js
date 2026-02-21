import CategoryPage from "./catagory/page";
import Hero from "./components/Hero";
import NewDrop from "./components/NewDrop-";
import ReviewsPage from "./components/Reviews";

export default function Home() {
  return (
   <div>
<Hero/>
<NewDrop/>
<CategoryPage/>
<ReviewsPage/>
   </div>
  );
}
