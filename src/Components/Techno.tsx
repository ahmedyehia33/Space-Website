import Navbar2 from './Navbar2';
import './techno.css';
import data from '../data.json';
import { useState } from 'react';

const Techno= () => {
const {technology = [] } = data;
const [selectedTechnology , setSelectedTechnology] = useState(technology[0]);

  return ( <>
                <div 
                id='technology-container'
                className='flex flex-col w-full items-center justify-center'>
                  
                    <Navbar2/>
                    <div className='flex flex-col gap-5'>
                        <div className=" w-full   text-center pt-8 ">
                            <h2 className="text-white  text-2xl  font-barlow  md:text-4xl tracking-tight text-center md:text-start md:pl-20 "> <span className="mr-4 font-bold text-white opacity-25">03</span>SPACE LAUNCH 101</h2>
                        </div>
                        <div className='flex flex-col lg:flex-row-reverse w-full  items-center justify-center gap-8 py-10'>
                            <div className='w-[373px] lg:w-[608px] md:w-[100%]  lg:h-full'>
                                    <img src={selectedTechnology.images.landscape} alt=""  className='w-full hidden md:block lg:hidden'/>
                                    <img src={selectedTechnology.images.portrait} alt=""  className='w-full md:hidden lg:block'/>
                            </div>
                            <div className='flex flex-col lg:flex-row lg:w-[70%] justify-center items-center text-center lg:text-start gap-10'>
                            <div className='flex flex-row lg:flex-col gap-5 justify-center lg:pl-24 lg:gap-10'>
                                {technology.map((techno) => 
                                <div key={techno.id}
                                onClick={()=> setSelectedTechnology(techno)}
                                className={`h-[50px] w-[50px] lg:h-[70px] lg:w-[70px] font-bellefair rounded-full border-2 border-[#D0D6F9] flex items-center justify-center text-xl lg:text-3xl
                                    ${selectedTechnology.name === techno.name ? 'bg-white text-black' : 'bg-transparent text-white'}
                                  `} >
                                    {techno.id}

                                </div>)}

                            </div>
                            <div className='flex flex-col text-center lg:text-start gap-5'>
                            <div className="text-2xl md:text-4xl text-white font-bellefair opacity-50 lg:pl-4">
                                THE TERMONOLGY...
                            </div>
                            
                            <div className="text-2xl md:text-5xl  lg:w-full lg:pl-4 lg:text-start lg:tracking-widest text-white font-bellefair">
                                {selectedTechnology.name.toUpperCase()}
                            </div>
                            <div className="text-[#D0D6F9] md:w-[100%] lg:w-[90%] lg:leading-relaxed lg:text-xl text-lg md:text-xl text-center md:text-center lg:text-start font-barlow px-5">
                                {selectedTechnology.description}
                            </div>
                            </div>
                            </div>

                        </div>
                        
                    </div>
                    


                </div>
          </> );
}

export default  Techno;