import { SetStateAction, useState } from "react";
import data from "../data.json";
import './distentionCard.css'
const DistinationCard= () => {
     const {destinations = []} = data;
     const [selectedDist , setSelectedDist] = useState(destinations[0]);
     console.log(`selected `, selectedDist)
     
     const handleClick= (dest: SetStateAction<{ name: string; images: { png: string; webp: string; }; description: string; distance: string; travel: string; }>)=>{
       setSelectedDist(dest)
     }
  return ( <>
            <div id="distination-container" className="flex items-center h-[auto] flex-col pt-[6rem]">
             <div> 
              <h1 className="mt-[1rem] mb-[2rem]"> <span className="text-gray-800 mr-5 text-xl">01</span>  <span className="text-gray-500 text-xl tracking-tight">PICK YOUR DISTINATION </span></h1>
             </div>
              <div id="selected-destination-image" className="w-[12rem] h-[12rem] mt-4" >
                <img src={selectedDist.images.png} className="w-full h-full object-contain max-w-full max-h-full"/>
              </div>
              <div className="flex gap-6 w-[90%]  justify-center text-gray-200 my-[2rem] ">
                {destinations.map((dest) => (
                  <div key={dest.name} onClick={()=> handleClick(dest)}
                  className="text-xl font-semibold text-gray-500 ">
                    <span className={selectedDist.name == dest.name? 'active pb-3 hover:cursor-pointer' : 'not-active hover:cursor-pointer'}>{dest.name}</span>
                  </div>
                ))}

              </div>
                <div id="selecte-dest-info" className="flex flex-col w-full items-center my-[2rem] px-6 text-center">
                  <h1 className="text-6xl tracking-widest mb-[1.5rem]">{selectedDist.name}</h1>
                  <p className="text-lg text-gray-500">{selectedDist.description}</p>
                  <hr className="w-[92%] border-0 h-[0.5px] bg-gray-800 my-[1.5rem]" />
                  <div className="flex flex-col w-full justify-center text-center gap-4">
                    <div>
                      <h2 className=" text-gray-500 font-extrabold tracking-tight text-xl">AVG DISTANCE</h2>
                      <h2 className="text-3xl tracking-widest">{selectedDist.distance.toLocaleUpperCase()}</h2>
                    </div>
                    <div>
                      <h2 className=" text-gray-500 font-extrabold tracking-tight text-xl">EST. TRAVEL TIME</h2>
                      <h2 className="text-3xl tracking-widest">{selectedDist.travel.toLocaleUpperCase()}</h2>
                    </div>
                  </div>
                </div>
                

            </div>
          </> );
}

export default  DistinationCard;