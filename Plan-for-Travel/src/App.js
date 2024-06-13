// import React from "react";
import React , {useState}  from "react";
import data from './data';
import Tours from "./Components/Tours";

const App = () => {

  const[tours,setTours]=useState(data);

  function removetourHandler(id){
    const newTours=tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length ===0){
    return(
      <div className="refresh">
        <h2>No tours left</h2>
        <button className="btn-white" onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    )
  }
  
  return(
    <div className="app">
    <Tours tours={tours} removetourHandler={removetourHandler}> </Tours>
  </div>
  );
  
};

export default App;
