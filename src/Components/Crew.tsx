import Navbar2 from "./Navbar2";
import data from '../data.json';
import { useState, SetStateAction } from "react";
import "./crew.css";



const Crew= () => {
    const {crew = []} = data;
    const [selectedCrewMember , setSelectedCrewMemeber] = useState(crew[0]);
  return ( <>
                <div id="crew-container" 
                className="w-full felx flex-col h-[auto] pb-16 pt-5">
                    <Navbar2/>
                <div className="flex flex-col items-center justify-center gap-8">
                    <div className="md:pl-28  w-full md:mb-20 lg:text-start text-center pt-8">
                        <h2 className="text-white  text-2xl font-barlow md:font-thin md:text-4xl tracking-wider text-center md:text-start"> <span className="mr-4 font-bold text-white opacity-25">02</span>MEET YOUR CREW</h2>
                    </div>
                    <div className="flex flex-col gap-5 w-full items-center justify-center text-center px-10">
                        <div className="flex flex-col items-center gap-5">
                            <div className="text-2xl text-white font-bellefair opacity-50">
                                {selectedCrewMember.role.toUpperCase()}
                            </div>
                            <div className="text-2xl text-white font-bellefair">
                                {selectedCrewMember.name.toUpperCase()}
                            </div>
                            <div className="text-blue-300 text-lg font-barlow">
                                {selectedCrewMember.bio}
                            </div>
                            <div className="w-full flex justify-center gap-4">
                                <div className="h-[12px] w-[12px] rounded-full bg-white "
                                onClick={()=>setSelectedCrewMemeber(crew[0])}></div>
                                <div className="h-[12px] w-[12px] rounded-full bg-white opacity-25"
                                onClick={()=>setSelectedCrewMemeber(crew[1])}></div>
                                <div className="h-[12px] w-[12px] rounded-full bg-white opacity-25"
                                   onClick={()=>setSelectedCrewMemeber(crew[2])} ></div>
                                <div className="h-[12px] w-[12px] rounded-full bg-white opacity-25"
                                onClick={()=>setSelectedCrewMemeber(crew[3])}></div>

                            </div>
                        </div>
                        <div className="w-[271px] h-[340px]">
                            <img src={selectedCrewMember.images.png}  className="w-full  opacity-90"/>
                        </div>
                    </div>
                </div>

                </div>
          </> );
}

export default  Crew;