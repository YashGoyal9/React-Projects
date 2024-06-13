import "./App.css";
import Navbar from './components/Navbar';
import { Routes,Route} from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Dashboard from './Pages/Dashboard';
import { useState } from "react";



function App() {

  const[isloggedIn, setIsLoggedIn]=useState(false);



  return (
    <div className="bg-richblack-900 flex flex-col h-[100vh] w-[100vw] ">

    <Navbar isloggedIn={isloggedIn} setIsLoggedIn={setIsLoggedIn}/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />}/>
      <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>

    </Routes>

    </div>
  );
}

export default App;
