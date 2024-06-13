import React from "react";

import Header from "../components/Header"
import Content from "../components/Content"
import Footer from "../components/Footer"

const Home=()=>{
    return(
        <div className="w-full h-full flex flex-col gap-y-1 items-center scroll-smooth ">
            <Header/>
            <Content/>
            <Footer/>
        </div>
    )

}
export default Home;