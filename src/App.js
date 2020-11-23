
import './App.css';
import React, {useState} from 'react';
function App() {
  
  const [val, setval] = useState(10);

 
  return (
    <div >
     
     <button onClick={
       ()=>{
        setval(val+1);}}

       >H</button>

     <span>{val}</span>
     <button
     onClick={
      ()=>{
       setval(val-1);}}
     >L</button>

    </div>
  );
}

export default App;
