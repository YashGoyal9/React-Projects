import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import BlogDetails from "./BlogDetails";

const Content =()=>{

    const{posts,loading} = useContext(AppContext);


    return(
        <div className="pt-20 pb-20 w-[530px] flex flex-col gap-y-7">
            {
                loading ?(<Spinner/>):
                (
                    posts.length===0 ?
                    (<div>
                        <p>No Posts Found</p>
                    </div> ) :
                    (
                        posts.map( (post) =>(
                            <BlogDetails key={post.id} post={post}/>
                        ))
                    )
                )
            }
        </div>
    )
}
export default Content;
