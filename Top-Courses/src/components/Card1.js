import React from "react";
// to import icons in react after installing reat-icons
import {FcLike,FcLikePlaceholder} from "react-icons/fc";
import {toast} from "react-toastify";

const Card1 =(props) =>{
    let course = props.data;
    let likedcourses=props.likedcourses;
    let setLikedcourses=props.setLikedcourses;

    function clickHandler(){
        if(likedcourses.includes(course.id)){
            // phle se like hua pda h or unlike krna h 
            setLikedcourses( (prev)=> prev.filter((cid)=>( cid !=course.id)));
            toast.warning("Like removed");
        }
        else{
            // phle se liked nhi h 
            // insert krna h ye course liked courses me 
            if(likedcourses.length === 0){
                setLikedcourses([course.id]);
            }
            else{
                // non-empty phle se 
                setLikedcourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked Successfully")
        }
    }
    
    // console.log(course.image.url);
   return(
    <div className="w-[300px] bg-bgDark bg-opacity-80% rounded-md overflow-hidden">
        <div className="relative">
            <img src={course.image.url}/>
            <div className="absolute text-center text-[1.75rem] w-[40px] h-[40px] right-2 bottom-0 bg-white rounded-full ">
            <button onClick={clickHandler} >
                {
                    likedcourses.includes(course.id)?<FcLike/> :<FcLikePlaceholder/>
                }
            </button>
        </div>   
        </div>
       
        

        <div className="p-4">
            <p className="text-white font-semibold text-lg leading-6  ">{course.title} </p>
            <p className="text-white mt-2">
                 {
                 course.description.length>100?(course.description.substr(0,100)) +"... ":(course.description)
                 } </p>
        </div>
    </div>
   )
}

export default Card1;