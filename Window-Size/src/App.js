import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const[text,setText] = useState('');
  const[name,setName] = useState("Yash");
  const[size,setSize] = useState(window.innerWidth);

  // // variation-1 -> hr render pr ye chlega 
  // useEffect(() =>{
  //   console.log("Ui rendering done ");
  // })

  // // variation-2 ->ek hi baar print hoga in start 
  // useEffect(() =>{
  //   console.log("ui rendering done ");
  // },[]);

  // variation 3-> first time and when dependencies are changed 
  // useEffect(() =>{
  //   console.log("Changes Observed ");
  // },[text]);

  // or

 
  // useEffect(() =>{
  //   console.log("Changes Observed ");
  // },[name]);


  // variation-4 -> to handle unmounting/remove of a component
  // isme phle return vala run hoga then neeche vala 

  useEffect(() =>{
    // add listner 
    console.log("Cleaner Added");

    return () =>{
      console.log("Cleaner Removed");
    }

  },[text]);

  function screenChangeHandler(){
    setSize(window.innerWidth);
  }
  function changeHandler(event){
    setText(event.target.value);
    console.log(text);
  }
  return (
    <div className="App" onChange={screenChangeHandler} >
      {/* <input type="text" onChange={changeHandler}></input> */}
      <div>
        <h1>Window size </h1>
          <p>{size}</p>
      </div>

      <button onClick={screenChangeHandler}>Get Window Size</button>
      
    </div>
  );
}

export default App;








// hw diya tha window ki size print kro choti bdi krke 


// import React, { useEffect, useState } from 'react';

// function App() {
//   const [text, setText] = useState('');
//   const [name, setName] = useState('Yash');
//   const [size, setSize] = useState(window.innerWidth);

//   useEffect(() => {
//     console.log('Changes Observed:', size);
//   }, [size]);

//   useEffect(() => {
//     // Function to handle window resize
//     const handleResize = () => {
//       setSize(window.innerWidth);
//     };

//     // Add event listener for window resize
//     window.addEventListener('resize', handleResize);

//     // Clean up the event listener when the component is unmounted
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []); // Empty dependency array means this effect runs once on mount

//   function changeHandler(event) {
//     setText(event.target.value);
//     console.log(text);
//   }

//   return (
//     <div className="App">
//       <div>
//         <h1>Window size </h1>
//         <p>{size}</p>
//       </div>
//       <input type="text" value={text} onChange={changeHandler} />
//     </div>
//   );
// }

// export default App;

