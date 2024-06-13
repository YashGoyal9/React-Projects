import './App.css';
import reviews from './data';
import Body from './components/Body';

function App() {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>Our Testimonials </h1>
        <div className="bg-violet-400 h-[4px] w-[10vw] mx-auto  mt-1"> <hr/> </div>
        <Body reviews={reviews}></Body>
      </div>
    </div>
  );
}

export default App;
