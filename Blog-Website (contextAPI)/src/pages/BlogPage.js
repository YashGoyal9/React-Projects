import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
// import { baseUrl } from "../App";
import BlogDetails from "../components/BlogDetails";
import Spinner from "../components/Spinner";
import Header from "../components/Header"


const BlogPage=()=>{
    const newBaseUrl="https://codehelp-apis.vercel.app/api/";
    const navigation=useNavigate();
    const [blog,setBlog]=useState(null);
    const[relatedBlogs,setRelatedBlogs]=useState([]);
    const location=useLocation();
    const {loading,setLoading}=useContext(AppContext);

    const blogId=location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs(){
        setLoading(true);
        let url=`${newBaseUrl}get-blog?blogId=${blogId}`;

        try{
            const res=await fetch(url);
            const data=await res.json();
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch(error){
            console.log("Error aa gya bhai ji");
            setBlog(null);
            setRelatedBlogs([]);


        }
        setLoading(false);
    }

    useEffect( ()=>{
        if(blogId){
            fetchRelatedBlogs();
        }
    },[location.pathname])


    return(
        <div className="w-full h-full flex flex-col gap-y-1  items-center scroll-smooth ">
            <Header/>
            <div className="mt-[70px] w-[530px] ">
            <button
            onClick={()=>navigation(-1)} 
            className="rounded-md border px-4 py-1"
            >
                Back
            </button>
            </div>

            {
                loading ? (<Spinner/>):
                blog ?
                (
                    <div className="w-[530px]">
                        <BlogDetails post={blog}/>
                        <h2 className="font-bold text-3xl mt-[30px]">Related Blogs</h2>

                        {
                          relatedBlogs.map((post)=>{
                            return (<div key={post.id} >
                                <BlogDetails post={post}/>
                            </div>
                            )
                          })  
                        }
                    
                    </div>
                ) :
                (
                    <div>
                        <p>No Blog Found</p>
                        </div>
                )
                
            }

        </div>
    )

}
export default BlogPage;