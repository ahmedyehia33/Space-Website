import Navbar2 from "./Navbar2";
import data from '../data.json';
import { useState } from "react";
import "./crew.css";



const Crew= () => {
    const {crew = []} = data;
    const [selectedCrewMember , setSelectedCrewMemeber] = useState(crew[0]);
  return ( <>
                <div id="crew-container" 
                className="w-full felx flex-col h-[auto]  pt-5">
                    <Navbar2/>
                <div className="flex flex-col items-center justify-center gap-8 pb-[1rem]">
                    <div className="md:pl-40 w-full md:mb-20 lg:text-start text-center pt-8">
                        <h2 className="text-white  text-2xl  font-barlow  md:text-4xl tracking-tight text-center md:text-start"> <span className="mr-4 font-bold text-white opacity-25">02</span>MEET YOUR CREW</h2>
                    </div>
                    <div className="flex flex-col gap-5 lg:gap-[32px] w-full items-center justify-center text-center px-10 lg:flex-row lg:w-[80%]">
                        <div className="flex flex-col items-center gap-5 lg:gap-10 lg:items-start  py-10">
                            <div className="text-2xl md:text-4xl text-white font-bellefair opacity-50">
                                {selectedCrewMember.role.toUpperCase()}
                            </div>
                            <div className="text-2xl md:text-5xl  lg:w-full lg:text-start lg:tracking-widest text-white font-bellefair">
                                {selectedCrewMember.name.toUpperCase()}
                            </div>
                            <div className="text-[#D0D6F9] md:w-[40%] lg:w-[90%] lg:leading-relaxed lg:text-xl text-lg md:text-xl md:text-center lg:text-start font-barlow">
                                {selectedCrewMember.bio}
                            </div>
                            <div className="w-full flex justify-center gap-4 lg:justify-start lg:mt-[4rem] lg:gap-10">
                            
                                {crew.map((member) => 
                                    <div key={member.name} 
                                    onClick={() => setSelectedCrewMemeber(member)}
                                    className={`h-[12px] w-[12px] md:h-[16px] md:w-[16px] rounded-full bg-white cursor-pointer transition-opacity duration-300 ${
                                      member.name === selectedCrewMember.name ? 'opacity-100' : 'opacity-25'
                                    }`}
                                  ></div> )}

                            </div>
                        </div>
                        <div className="w-[271px]  md:w-[446px] lg:w-full overflow-hidden md:mt-[3rem] ">
                            <img src={selectedCrewMember.images.png}  
                            style={{objectFit:'cover', objectPosition:'center'}}
                            className="w-full h-full mask-image-gradient"/>
                        </div>
                    </div>
                </div>

                </div>
          </> );
}

export default  Crew;