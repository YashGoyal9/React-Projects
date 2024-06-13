import React, { useState } from "react";
import {AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const LoginForm=({setIsLoggedIn})=>{

    const navigate=useNavigate();

    const[inputChange,setInputChange]=useState({loginEmail:"",loginPassword:""})
    const[showPassword,setShowPassword]=useState(false);
    function changeHandler(event){
        const{value,name}=event.target;
        setInputChange(prevData=>{
            return{
                ...prevData,
                [name]:value

        }
        })
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
        // console.log("hello");
    }


    return(
    <div className="flex flex-col w-full gap-y-4 mt-6">

        <form onSubmit={submitHandler} className="w-full relative">
            <label htmlFor="loginEmail" className="text-richblack-5 text-[0.875rem] mb-1 leading-[1.375rem]" >Email Address <sup className="text-pink-200">*</sup></label>
            <br/>
            <input type="email" 
            required
            placeholder="Enter email address" 
            id="loginEmail"
            name="loginEmail"
            onChange={changeHandler}
            value={inputChange.loginEmail}
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] "
            ></input>
            <br/>
            <br/>
            <label htmlFor="loginPassword"
            className="text-richblack-5 text-[0.875rem] mb-1 leading-[1.375rem]"
            >Password <sup
            className="text-pink-200"
            >*</sup></label>
            <br/>
            <input type={showPassword ?("text"):("password")}
            required
            placeholder="Enter Password "
             id="loginPassword"
             name="loginPassword"
             onChange={changeHandler}
             value={inputChange.loginPassword}
             className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
                <span
                className="absolute right-3 top-[130px] cursor-pointer"
                onClick={()=>setShowPassword((prev)=>!prev)}>
                    {showPassword ?
                    (<AiOutlineEyeInvisible fontSize={24} fill="#afb2bf"/>)
                    :(<AiOutlineEye fontSize={24} fill="#afb2bf"/>)}
                </span>


            <Link to="#">
                <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">
                Forgot Password
                </p>
            </Link>

            <br/>
            
            <button className="bg-yellow-50 rounded-[8px] font-medium text-black px-[12px] py-[8px] w-full">
                Sign In
            </button>
        </form>

    </div>)
}
export default LoginForm;