import "./navbar.css"


const Navbar= () => {
  
  return ( <>
            <div id="navbar" className="flex content-center  justify-between pl-[3rem] relative" >
              <div id="logo" className="flex items-center justify-between w-[45%]">
                  <img src="../assets/shared/logo.svg" className="mr-[2rem]"/>
                  <div id="header-line" className="h-[0.08px] w-[20em] bg-gray-200 rounded-md z-20 absolute left-[9rem]"></div>
              </div>
              <div id="navbar-items" className="  w-[630px] h-[5rem] text-white rounded-sm flex space-x-3 items-center content-between z-10 ">
              <div className="h-[100%] w-[auto] flex items-center content-center text-center p-3"><h1 className="w-full flex items-center justify-center text-center hover:border-b h-full">Home</h1></div>
                <div className="h-[100%] w-[9rem] flex items-center content-center text-center"><h1 className="w-full text-center">Home</h1></div>
                <div className="h-[100%] w-[9rem] flex items-center content-center text-center"><h1 className="w-full text-center">Home</h1></div>
                <div className="h-[100%] w-[9rem] flex items-center content-center text-center"><h1 className="w-full text-center">Home</h1></div>
              </div>
            </div>
          </> );
}

export default  Navbar;