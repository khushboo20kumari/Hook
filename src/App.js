
// import { createContext } from 'react';
// import './App.css';

// import ChildA from './ChildA';

// const data = createContext()

// function App() {


//   const name = "khushboo kumari"

//   return (

//     <div className="App">

//       <data.Provider value={name}>

//         <ChildA />

//       </data.Provider>

//     </div>

//   );
// }

// export default App;
// export {data};



import { createContext } from "react";
import ChildA from "./ChildA";

const data = createContext()

function App() {
  
  const name = "khushboo kumari"

  return (
    <div className="App">

      <data.Provider value={name}>

        <ChildA />

      </data.Provider>

    </div>
  )
}
export default App;
export {data};