import React from "react";
import { NavLink } from "react-router-dom";


const BlogDetails=({post})=>{

    return(
        <div className=" mt-[25px]">
            <div>
                <NavLink to={`/blog/${post.id}`}>
                <span className="font-bold underline text-lg ">{post.title}</span>
                </NavLink>
                </div>

                <p>
                    By 
                    <span className="italic text-md font-semibold"> {post.author} </span>
                    on {" "}
                    <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
                        <span className="font-bold underline ">{post.category}</span>
                    </NavLink>
                </p>
                <p className="text-sm">Posted on {post.date}</p>
                <p className="my-2">{post.content}</p>

                <div>
                    {post.tags.map ( (tag,index) =>(
                        <NavLink to={`/tags/${tag.replaceAll(" ","-")}`} key={index} >
                            <span className="text-sm mx-1 font-semibold text-blue-700">{`#${tag}`}</span>
                            </NavLink>
                        ) )}
                </div>
        
        </div>
    )
}
export default BlogDetails;