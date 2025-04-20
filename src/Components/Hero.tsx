import "./hero.css";
import Navbar2 from "./Navbar2";


const Hero= () => {
  return ( <>
                 <div id="homepage-container" className="pt-0 sm:pt-0  h-full w-full flex flex-col">
                    <Navbar2/>
                
                <div id="homepage" className="h-full w-full flex flex-col  md:flex-row content-center sm:content-baseline px-[3rem] pt-[5rem] sm:pt-[8rem]  md:pt-[10rem]  pb-[5rem]">
                  <div className="w-[100%] text-center sm:text-center md:text-center flex content-center h-full items-center pl-1 sm:pl-10 md:pl-20 ">
                    <p className="text-blue-200  font-medium tracking-normal">
                   <span className="text-2xl md:text-3xl sm:4xl font-light"> SO, YOU WANT TO TRAVEL TO <br/> </span>
                     <span className="w-full text-center pl-2 text-white text-6xl sm:text-9xl md:text-9xl tracking-widest mt-[1rem] sm:mt-[2rem] mb-[1rem] block font-extralight">SPACE </span><br/>
                    <span className="leading-normal md:leading-snug text-md sm:text-xl md:text-3xl "> Let’s face it;
                     if you want to go to space, you might as well genuinely go to outer space and not hover
                      kind of on the edge of it. Well sit back, 
                      and relax because we’ll give you a truly out of this world experience!
                      </span>
                    </p>
                  
                  </div>
                  <div className="h-full w-[100%] flex items-center content-center justify-center  p-[3rem] ">
                     <div id="explore-button" className="h-[10rem] w-[10rem] sm:h-[12rem] sm:w-[12rem] md:h-[13rem] md:w-[13rem] lg:h-[14rem] lg:w-[14rem] bg-white rounded-full flex content-center items-center ">
                      <p className="w-full text-center text-2xl sm:text-4xl md:text-5xl font-medium">Explore</p>
                      </div> 
                  </div>
                </div>
            </div>
          </> );
}

export default  Hero;