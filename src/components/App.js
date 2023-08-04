import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
  let [show, setShow]=useState(false);


  return (
    <div className="App" id="main">
      <button onClick={()=>setShow(!show)}>Show</button>
      {
        show && <p className="hide show">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      }
    </div>
  );
}

export default App
