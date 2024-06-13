import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Header from "../components/Header"
import Content from "../components/Content"
import Footer from "../components/Footer"

const CategoryPage=()=>{

    const navigation =useNavigate();
    const location=useLocation();
    const category=location.pathname.split("/").at(-1);

    return(
        <div className="w-full h-full flex flex-col   items-center scroll-smooth ">
            <Header/>
            
                <div className="flex  items-center gap-3 mt-[70px] w-[530px]">
                    <button 
                    onClick={()=>navigation(-1)}
                    className="rounded-md border px-4 py-1" 
                    >
                        Back
                    </button>
                    <h2 className="font-bold text-xl">Blogs on</h2>
                    <span className="text-lg mx-1 font-semibold ">#{category}</span>
            </div>
            <div className="w-[530px] ">
            <Content/>
            </div>
            <Footer/>
        </div>
    )
}
export default CategoryPage;