import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftSidebar = () => {
  const [categories,setCategories] = useState([])
  useEffect(()=>{
    fetch("https://openapi.programming-hero.com/api/news/categories")
    .then(res=>res.json())
    .then(data=>setCategories(data.data.news_category))
  },[])
  return (
    <div>
     <h2 className="font-semibold">All Category({categories.length})</h2>
     <div className="flex flex-col gap-2 mt-6">
      {
        categories.map((category)=>(
          <NavLink
          to={`/category/${category.category_id}`}
           className="btn" key={category.category_id}>{category.category_name}</NavLink>
        ))
      }
     </div>
    </div>
  );
};

export default LeftSidebar;