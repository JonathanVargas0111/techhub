import { products } from "@/assets/data";
import CardProduct from "@/components/CardProduct";
import Categories from "@/components/Categories";


export default function Home() {
  return (
    <div className="">
      <Categories/>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-8">
          {
            products.map((product)=>(
              <li key={product.name}>
                <CardProduct product={product}/>        
              </li>
            ))
          }
      </ul>
    </div>
  );
}
