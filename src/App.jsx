import React, { useState } from 'react';
import './index.css';
const App = () => {
   const purple = "#8e44ad";
   const [bg,setBg] = useState(purple);
   const st = "Click Me 😄";
   const [Name,setName] = useState(st);

  

   const bgchange = () =>{
       const bgc = "#34495e";
       setBg(bgc);
       const str = "Done!! 🐌";
       setName(str);
   };
   
   const bgBack = () =>{
       const bgc = "#8e44ad";
       setBg(bgc);
       const sttemp = "Click Me 😄";
       setName(sttemp);

   };
     
   return(
     <>
        <div style = {{ backgroundColor : bg}}>
            <button onMouseEnter ={bgchange} onMouseLeave={bgBack}>{Name}</button>
        </div>
     </>
   );
}

export default App;