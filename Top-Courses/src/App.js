import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import {toast} from "react-toastify";
import {apiUrl,filterData} from './data';
import Spinner from './components/Spinner';

  
const App=() =>{
  const[courses,setCourses]=useState(null);
  const[loading,setLoading]=useState(true);
  const[category,setCategory]=useState(filterData[0].title);

  async function fetchData(){
    setLoading(true);

  try{
    let response=await fetch(apiUrl);
    // if(!response.ok){
    //   toast.error("Api ft gya ");

    // }
    let output=await response.json();
    // output 
    setCourses(output.data);
  }
  catch(error){
    toast.error("Network issue h buddy");
  }
  setLoading(false);
}
    useEffect(()=>{
      fetchData();
    },[])

  return (

    <div className=" min-h-screen flex flex-col bg-[#4d4d62] overflow-hidden">
       <div>
          <Navbar></Navbar>
       </div>
       <div className='bg-[#4d4d62] w-100vw'>
       <div>
        <Filter filterData={filterData} setCategory={setCategory} category={category}>
        </Filter> 
       </div>
       <div className='w-4/5 max-w-[1200px] mx-auto flex flex-row flex-wrap justify-center items-center min-h-[50vh]' >
         {
           loading ? (<Spinner/>) : (<Cards  courses={courses} category={category} ></Cards> )
         }
       </div>
       </div>
      
    </div>
   

   
  );
}


export default App;
