
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



// import { createContext } from "react";
// import ChildA from "./ChildA";

// const data = createContext()

// function App() {

//   const name = "khushboo kumari"

//   return (
//     <div className="App">

//       <data.Provider value={name}>

//         <ChildA />

//       </data.Provider>

//     </div>
//   )
// }
// export default App;
// export {data};



import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Blogs from "./Blogs";
import Contact from "./Contact";
import NoPage from "./NoPage";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}