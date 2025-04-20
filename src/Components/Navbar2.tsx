import { useState } from "react";
import { NavLink } from "react-router-dom";

import './Navbar2.css';



const Navbar2= () => {
   const [collapsed, setCollapsed] = useState(true);
   const handleClick =()=>{
    setCollapsed(!collapsed);
   }

  return ( <>
            <div id="navbar-container" className=" bg-none pl-3 md:pl-10 pr-8 sm:pr-0 md:pr-0 flex justify-between content-center items-center w-[100%] h-[8rem]  ">
                <div id="logo">
                    <img id="nav-img" src="../assets/shared/logo.svg" />
                </div>
                <div id="header-line">
                    <div className='navbar-line '></div>
                </div>
                <div id="nav-items">
                    <div className="h-[90%] w-[auto] flex content-center items-center text-lg"><span className="mr-3 font-extrabold text-lg ">00</span> Home</div>
                    <NavLink to="distenations" ><div className="h-[90%] w-[auto] flex content-center items-center text-lg"><span className="mr-3 font-extrabold text-lg ">01</span> Distenations</div></NavLink>
                    <div className="h-[90%] w-[auto] flex content-center items-center text-lg"><span className="mr-3 font-extrabold text-lg ">00</span> Home</div>
                    <div className="h-[90%] w-[auto] flex content-center items-center text-lg"><span className="mr-3 font-extrabold text-lg ">00</span> Home</div>
                </div>
                <div id="button" className='h-[auto] w-[2.5rem] hover:cursor-pointer text-white flex content-center items-center justify-center flex-col mr-2 rounded-md' onClick={handleClick} >
                    {collapsed ? (<div className="w-[100%] h-[100%] flex content-center items-center justify-center flex-col gap-1">
                        <div className="w-[95%] h-[7px] bg-white border border-blue-800 rounded-md"></div>
                        <div className="w-[95%] h-[7px] bg-white border border-blue-800 rounded-md"></div>
                        <div className="w-[95%] h-[7px] bg-white border border-blue-800 rounded-md"></div>
                        </div>
                    ) : (null)}
                </div>
            </div>
            <div className={collapsed? "Menu" : "menu-appear"}>
                <div className="flex w-full h-[5rem] pt-3 pr-5 justify-end text-5xl"><h1  onClick={handleClick}> X</h1></div>
                <div className="flex flex-col gap-[4rem] mt-5 w-full p-9 text-3xl">
                <div className="h-[90%] w-[full] flex content-center items-center"><span className="mr-3 font-extrabold">00</span> Home</div>
                <div className="h-[90%] w-[full] flex content-center items-center"><span className="mr-3 font-extrabold">00</span> Home</div>
                <div className="h-[90%] w-[full] flex content-center items-center"><span className="mr-3 font-extrabold">00</span> Home</div>
                <div className="h-[90%] w-[full] flex content-center items-center"><span className="mr-3 font-extrabold">00</span> Home</div>
                </div>
            </div>
          </> );
}

export default  Navbar2;