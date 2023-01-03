import './App.css';
import React, { useState } from 'react';





const Counter = () => {

    const [num, setNum] = useState(0);


   const onInc =() => {
    setNum(num+1);
   }

   const onDec =() => {
    setNum(num-1);
   }

  return (
    <div className = "main">
      <div className = "center">
         <h1 className="val">{num}</h1>

         <div className = "btn">
             <button onClick={onInc} className="bdes1"> + </button>
             <button onClick={onDec} className="bdes2"> - </button>
         </div>
      </div>
    </div>
  );
}

export default Counter;
