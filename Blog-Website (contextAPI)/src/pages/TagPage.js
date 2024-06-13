import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Header from "../components/Header"
import Content from "../components/Content"
import Footer from "../components/Footer"

const TagPage=()=>{

    const navigation=useNavigate();
    const location=useLocation();
    const tag=location.pathname.split("/").at(-1);

    return(
        <div className="w-full h-full flex flex-col   items-center scroll-smooth ">
            <Header/>
            <div className=" mt-[70px] w-[530px]">
                <div className="flex  items-center gap-3">
                    <button 
                    onClick={()=>navigation(-1)}
                    className="rounded-md border px-4 py-1" 
                    >
                        Back
                    </button>
                    <h2 className="font-bold text-xl">Blogs Tagged</h2>
                    <span className="text-lg mx-1 font-semibold text-blue-700">#{tag}</span>
                </div>
                <Content/>
            </div>
            <Footer/>
        </div>
    )

}
export default TagPage;