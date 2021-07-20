import './App.css';
import Card from './pages/Card/Card';
import Contact from './components/Contact/Contact';
import TailwindCard from './pages/TailwindCard/TaiwindCard';
import { useState } from 'react';

function App() {
  const [showCard , setShowCard ] = useState(-1) ; 
  const goBack = () =>{
    setShowCard(-1)
  }

  return (
    <div className="App ">

      {showCard === 0 &&
       <TailwindCard goBack={goBack}/>}

      {showCard === 1 && 
      <Card goBack={goBack}/> }

       {showCard === -1 &&
        <div className="bg-midnight-500 h-screen w-screen flex flex-col justify-center items-center text-gray-200">
              <button className="bg-midnight-600 rounded-lg py-3 px-7 w-60 border hover:bg-midnight-700 transition border-cerulean-900 mb-10"
                onClick={()=>{
                  setShowCard(0)
                }}
              >Neon Card with Tailwind</button>
              <button className="bg-midnight-600 rounded-lg py-3 px-7 w-60  border hover:bg-midnight-700 transition border-cerulean-900 "
              onClick={()=>{
                setShowCard(1)
              }}
              >Neon Card with Css</button>
        </div>}

      <Contact />

    </div>
  );
}

export default App;

// power by mrbadri