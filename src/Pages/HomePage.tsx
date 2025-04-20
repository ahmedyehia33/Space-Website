//import Navbar from "../Components/Navbar";
import DistinationCard from "../Components/DistinationCard";
import Hero from "../Components/Hero";

import './homepage.css'



const HomePage= () => {
  return ( <>
           <div className="w-full flex flex-col">
              <Hero/>
              <DistinationCard/>
           </div>
            
          </> );
}

export default  HomePage;