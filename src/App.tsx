import { BrowserRouter, Routes, Route } from "react-router-dom";


import Layout from "./Layout";
//import Hero from "./Components/Hero";

import DestenationCardTwo from "./Components/DistenationCardTwo";
import Hero from "./Components/Hero";
import Crew from "./Components/Crew";



function App() {
  

  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Hero/>}/>
      <Route path='distenations' element={<DestenationCardTwo/>}/>
      <Route path="crew" element={<Crew/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
