import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { useLocation, useSearchParams } from "react-router-dom";
import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import BlogPage from "./pages/BlogPage.js";
import CategoryPage from "./pages/CategoryPage.js";
import TagPage from "./pages/TagPage.js";

export const baseUrl="https://codehelp-apis.vercel.app/api/get-blogs";

export default function App(){

  const{ allData } = useContext(AppContext);
  const [searchParams,setSearchParams]=useSearchParams();
  const location=useLocation();

  useEffect(()=>{
    const page=searchParams.get("page") ?? 1;
    if(location.pathname.includes("tags")){
      const tag=location.pathname.split("/").at(-1).replaceAll("-"," ");
      allData(Number(page),tag);
    }
    else if(location.pathname.includes("categories")){
      const category=location.pathname.split("/").at(-1).replaceAll("-"," ");
      allData(Number(page),null,category);
    }
    else{
      allData(Number(page));
    }
  },[location.pathname,location.search]); 

  return(

  <Routes>
    <Route path="/" element = {<Home/>}/>
    <Route path="/blog/:blogId" element = {<BlogPage/>}/>
    <Route path="/tags/:tag" element = {<TagPage/>}/>
    <Route path="/categories/:category" element = {<CategoryPage/>}/>

  </Routes>
  )
};
