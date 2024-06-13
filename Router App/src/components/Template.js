import React from "react";
import frame from '../assets/frame.png';
import signup from '../assets/signup.png';
import login from "../assets/login.png";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import {FcGoogle} from 'react-icons/fc';



const Template=({title,desc1,desc2,formType,setIsLoggedIn})=>{
    return(
        <div className="flex w-11/12 max-w-[1160px] mx-auto py-12 justify-between gap-y-0">

            <div className="w-11/12 max-w-[450px] flex flex-col gap-0 ">
                <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">{title}</h1>
                <p className="text-[1.125rem] leading-[0.2rem] mt-4 text-richblack-100">{desc1}</p>
                <p className="text-[1.125rem] leading-[1.25rem] mt-4 text-blue-100 italic">{desc2}</p>
                {formType ==="signup" ? (<SignUpForm setIsLoggedIn={setIsLoggedIn}/>):(<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

                <div className="flex w-full items-center my-4 gap-x-2">
                    <div className=" w-full h-[1px] bg-richblack-700"></div>
                    <p className="text-richblack-700 font-medium leading-[1.375rem]">OR</p>
                    <div className="w-full h-[1px] bg-richblack-700"></div>
                </div>

                <div className="w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6 ">
                {<FcGoogle/>}
                <button>Sign Up with Google</button>
                </div>

            </div>

            <div className="relative w-11/12 max-w-[450px]">
                <img src={frame} alt="pattern" width={558} height={504} loading="lazy"/>
                {formType==="signup"?
                (<img className="absolute -top-[10px] right-[10px]" src={signup}/>):
                (<img className="absolute -top-[10px] right-[10px]" src={login}/>)}

            </div>



        </div>
    )
}
export default Template