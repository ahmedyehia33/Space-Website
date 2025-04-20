import "./DistenationCardTwo.css";
import data from '../data.json';
import {SetStateAction, useState } from "react";
import Navbar2 from "./Navbar2";


const Destinations= () => {
    const {destinations = []} = data;
    const [selectedDest , setSelectedDest] = useState(destinations[0]);
    console.log(`selected `, selectedDest);

    const handleClick= (dest: SetStateAction<{ name: string; images: { png: string; webp: string; }; description: string; distance: string; travel: string; }>)=>{
        setSelectedDest(dest)
      }
  return ( <>
  <div id="destination-card-container" 
  className="flex flex-col" >
            <Navbar2/>
            <div 
             className="flex flex-col  space-y-10 md:justify-center w-full py-[2rem] px-[2rem] lg:p-[8rem] pt-[1rem] lg:px-[3rem] justify-center items-center">
                
                    <div className="name  md:pl-5  w-full ">
                    <h2 className="text-white font-barlow md:font-thin md:text-2xl tracking-wider text-center md:text-start"> <span className="mr-4 font-bold text-white opacity-25">01 </span>PICK YOUR DESTINATION</h2>
                    </div>
            <div className="flex flex-col lg:flex-row sm:w-full  md:w-[90%] justify-center items-center gap-5">
                    <div className="destiantion-image h-[150px] w-[150px] md:h-[480px] md:w-[480px] md:mb-[3rem]">
                        <img src={selectedDest.images.png}className="w-full " />
                    </div>
                
                <div className="flex-col w-full md:w-[90%] lg:w-[50%]  items-center justify-center space-y-[40px] lg:pl-[2rem]">
                <div className="flex sm:gap-1 md:gap-2 lg:gap-6 w-full  justify-center lg:justify-start space-x-7 text-gray-200 my-[2rem] ">
                {destinations.map((dest) => (
                  <div key={dest.name} onClick={()=> handleClick(dest)}
                  className="text-3xl  font-semibold  ">
                    <span className={selectedDest.name == dest.name? 'active pb-3 hover:cursor-pointer text-white font-barlow font-thin' : 'not-active font-barlow font-thin text-blue-300 hover:cursor-pointer tracking-wide'}>{dest.name}</span>
                  </div>
                ))}

              </div>
              <div className="flex w-full justify-center lg:justify-start">
                    <h3 className="text-6xl my-10 md:my-0 md:text-8xl text-white font-bellefair">{selectedDest.name.toUpperCase()}</h3>
              </div>
              <div className="flex w-full justify-center lg:justify-start">
                <p className="text-2xl text-blue-300 font-barlow leading-loose text-center lg:text-start">
                    {selectedDest.description}
                </p>

              </div>
              <div className="w-full h-[2px]  bg-white opacity-25"></div>

              <div className="flex flex-col gap-5 items-center md:flex-row lg:px-0 justify-between lg:justify-start md:px-20 ">
                <div className="flex-col justify-center items-center text-center w-full space-y-4">
                    <div className="font-barlow text-blue-300 font-lg">AVG. DISTANCE</div>
                    <div className="font-bellefair text-white text-3xl">{selectedDest.distance.toUpperCase()}</div>
                </div>
                <div className="flex-col w-full justify-center items-center text-center space-y-4">
                    <div className="font-barlow text-blue-300 font-lg">Est. travel time</div>
                    <div className="font-bellefair text-white text-3xl">{selectedDest.travel.toUpperCase()}</div>
                </div>
              </div>
              
                </div>
                </div>


            </div>
            </div>
          </> );
}

export default  Destinations;