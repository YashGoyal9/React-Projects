import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SignUpForm = ({setIsLoggedIn}) => {

    const navigate=useNavigate();
    const [inputChange, setInputChange] = useState({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" })
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2,setShowPassword2]=useState(false);
    const [accountType ,setAccountType]= useState("student");
    function changeHandler(event) {
        const { name, value } = event.target;
        setInputChange(prevData => {
            return {
                ...prevData,
                [name]: [value]
            }
        })
    }

    function submitHandler(event) {
        event.preventDefault();
        if(inputChange.password!=inputChange.confirmPassword){
            toast.error("Password do not match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Sign up Successfully");
        navigate("/dashboard");
        // console.log(inputChange)
    }


    return (
        <div className="overflow-hidden">
            {/* student-instructor tab  */}
            <div className="flex  bg-richblack-800 p-1 gap-x-5  my-6 rounded-full max-w-max">
            <button
            className={`${accountType === "student" 
            ?
              "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200 `}
            onClick={()=> setAccountType("student")}>
                Student
                </button>
                <button 
                className={`${accountType === "instructor" 
                ?
                  "bg-richblack-900 text-richblack-5"
                :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200 `}
                
                onClick={()=> setAccountType("instructor")} >Instructor</button>
            </div>

            <form onSubmit={submitHandler} className="flex flex-col gap-2 m-1">

                <div className="flex gap-x-1 ">

                    <label htmlFor="firstName" className="text-richblack-5 w-full text-[0.875rem] mb-1 leading-[1.375rem]">First Name <sup className="text-pink-200">*</sup>
                    <br />
                    <input type="text" placeholder="First Name"
                        required
                        name="firstName"
                        id="firstName"
                        value={inputChange.firstName}
                        onChange={changeHandler}
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] "

                    >
                    </input>
                    </label>
                    
                    <br />
                    <label htmlFor="lastName" className="text-richblack-5 w-full text-[0.875rem] mb-1 leading-[1.375rem]">Last Name <sup className="text-pink-200">*</sup>
                    <br />
                    <input type="text" placeholder="Last Name"
                        required
                        name="lastName"
                        id="lastName"
                        value={inputChange.lastName}
                        onChange={changeHandler}
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] "

                    >
                    </input>
                    </label>

                </div>

         

                <div>
                <label htmlFor="email" className="text-richblack-5 text-[0.875rem] mb-1 leading-[1.375rem]">Email <sup className="text-pink-200">*</sup>
                        <br />
                        <input type="email" placeholder="Enter email address"
                            required
                            name="email"
                            id="email"
                            value={inputChange.email}
                            onChange={changeHandler}
                            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] "

                        >
                        </input>
                        </label>
                </div>
                

                

                <div className="relative flex gap-x-1 ">

                    <label htmlFor="password" className="text-richblack-5 w-full text-[0.875rem] mb-1 leading-[1.375rem]">Password <sup className="text-pink-200">*</sup>
                    <br />
                    <input type={showPassword ? ("text") : ("password")}
                        placeholder="password"
                        required
                        name="password"
                        id="password"
                        value={inputChange.password}
                        onChange={changeHandler}
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] "

                    />
                    <span 
                    className="absolute right-[230px] top-[35px] cursor-pointer"
                    onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#afb2bf" />) : (<AiOutlineEye fontSize={24} fill="#afb2bf" />)}
                    </span>
                    </label>

                    <br />

                    <label htmlFor="confirmPassword" className="text-richblack-5 w-full  text-[0.875rem] mb-1 leading-[1.375rem]">Confirm Password <sup className="text-pink-200">*</sup> 
                    <br />
                    <input type={showPassword2 ? ("text") : ("password")}
                        placeholder="Confirm Password"
                        required
                        name="confirmPassword"
                        id="confirmPassword"
                        value={inputChange.confirmPassword}
                        onChange={changeHandler}
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] "

                    />

                    <span
                     className="absolute right-[5px] top-[35px] cursor-pointer"
                     onClick={() => setShowPassword2((prev) => !prev)}>
                        {showPassword2 ? (<AiOutlineEyeInvisible fontSize={24} fill="#afb2bf" />) : (<AiOutlineEye fontSize={24} fill="#afb2bf" />)}
                    </span>
                    </label>
                </div>

                <button className="bg-yellow-50 rounded-[8px] font-medium text-black px-[12px] py-[8px] w-full">
                    Create Account
                    </button>

            </form>




        </div>
    )
}
export default SignUpForm;