import { BrowserRouter, Routes, Route } from "react-router-dom";



//import Hero from "./Components/Hero";

import DestenationCardTwo from "./Components/DistenationCardTwo";
import Hero from "./Components/Hero";
import Crew from "./Components/Crew";
import Techno from "./Components/Techno";



function App() {
  

  return(
    <BrowserRouter>
    <Routes>
      
      <Route index element={<Hero/>}/>
      <Route path='distenations' element={<DestenationCardTwo/>}/>
      <Route path="crew" element={<Crew/>} />
      <Route path="technologies" element={<Techno/>}/>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App;
