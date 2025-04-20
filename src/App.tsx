import { BrowserRouter, Routes, Route } from "react-router-dom";


import Layout from "./Layout";
//import Hero from "./Components/Hero";
import DistinationCard from "./Components/DistinationCard";
import DestenationCardTwo from "./Components/DistenationCardTwo";



function App() {
  

  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<DestenationCardTwo/>}/>
      <Route path='distenations' element={<DistinationCard/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
