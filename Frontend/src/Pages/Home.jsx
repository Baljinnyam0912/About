import React from 'react';
import Particles from "../component/Particles";
import { DiJavascript1, DiReact, DiNodejs, DiPhotoshop, DiBootstrap, DiCoda, DiHtml5, DiGit, DiMongodb, DiJavascript, Ditail, DiCss3, DiJava, DiHtml53dEffects, DiHtml5Multimedia, DiHtml5Connectivity, DiSass } from "react-icons/di";
import { SiAdobephotoshop, SiBootstrap, SiDepositphotos, SiMongodb, SiMongoose, SiTailwindcss } from "react-icons/si";


// import ContainerHomeTwo from '../component/ContainerHomeTwo';
// import ContainerHome from '../component/ContainerHome';
import Navbar from '../component/Navbar';



const Home = () => {
    return (
        <div>
             <Navbar/>
             <Particles></Particles>
             {/* <ContainerHome/> */}
             {/* <ContainerHomeTwo/> */}
             {/* <ParticlesComponent id="practicles"/> */}
             <div className='w-full h-screen bg-black flex justify-center'>
                
<div className="grid grid-cols-4 grid-rows-8 gap-4 w-[90%] h-[90%] mt-5 bg-none">
    <div className="col-span-2 row-span-3 border solid rounded-xl flex justify-center items-center"> <DiNodejs className='text-[200px] text-rose-50'/></div>
    <div className="row-span-3 col-start-3 border solid rounded-xl flex justify-center items-center"><DiReact className='text-[200px] text-rose-50'/></div>
    <div className="row-span-3 col-start-4 border solid rounded-xl flex justify-center items-center"><DiBootstrap className='text-[200px] text-rose-50'/></div>
    <div className="row-span-3 row-start-4 border solid rounded-xl flex justify-center items-center"><DiJavascript1 className='text-[200px] text-rose-50'/></div>
    <div className="col-span-2 row-span-2 row-start-4 border solid rounded-xl flex justify-center items-center"><SiTailwindcss className='text-[120px] text-rose-50'/></div>
    <div className="row-span-2 col-start-4 row-start-4 border solid rounded-xl flex justify-center items-center"><DiHtml5 className='text-[150px] text-rose-50'/></div>
    <div className="row-span-2 col-start-1 row-start-7 border solid rounded-xl flex justify-center items-center"><DiGit className='text-[150px] text-rose-50'/></div>
    <div className="row-span-3 col-start-3 row-start-6 border solid rounded-xl flex justify-center items-center"><SiMongodb className='text-[180px] text-rose-50'/></div>
    <div className="row-span-2 col-start-2 row-start-6 border solid rounded-xl flex justify-center items-center"><SiAdobephotoshop className='text-[110px] text-rose-50' /></div>
    <div className="row-span-2 col-start-4 row-start-6 border solid rounded-xl flex justify-center items-center"><DiSass className='text-[150px] text-rose-50'/></div>
</div>
    
                
{/* <div className="grid grid-cols-4 grid-rows-8 gap-4 w-[90%] h-[90%] mt-5">
    <div className="col-span-2 row-span-3 border solid rounded-xl">1</div>
    <div className="row-span-3 col-start-3 border solid rounded-xl">2</div>
    <div className="row-span-3 col-start-4 border solid rounded-xl">3</div>
    <div className="row-span-3 row-start-4 border solid rounded-xl">4</div>
    <div className="col-span-2 row-span-2 row-start-4 border solid rounded-xl">5</div>
    <div className="row-span-2 col-start-4 row-start-4 border solid rounded-xl">6</div>
    <div className="row-span-2 col-start-2 row-start-6 border solid rounded-xl">7</div>
    <div className="col-start-3 row-start-6 border solid rounded-xl">8</div>
    <div className="col-start-4 row-start-6 border solid rounded-xl">9</div>
    <div className="col-span-2 row-span-2 col-start-3 row-start-7 border solid rounded-xl">10</div>
    <div className="row-span-2 col-start-1 row-start-7 border solid rounded-xl">11</div>
    <div className="col-start-2 row-start-8 border solid rounded-xl">12</div>
</div> */}
    
                
                
{/* <div className="grid grid-cols-4 grid-rows-10 gap-4  w-[90%] h-[90%] mt-5">
    <div className="col-span-2 row-span-2 border solid rounded-xl gap-5">1</div>
    <div className="row-span-2 col-start-3 border solid rounded-xl">2</div>
    <div className="row-span-2 col-start-4 border solid rounded-xl">3</div>
    <div className="row-span-4 row-start-3 border solid rounded-xl">4</div>
    <div className="col-span-2 row-span-2 row-start-3 border solid rounded-xl">5</div>
    <div className="row-span-2 col-start-4 row-start-3 border solid rounded-xl">6</div>
    <div className="row-span-2 col-start-2 row-start-5 border solid rounded-xl">7</div>
    <div className="row-span-2 col-start-3 row-start-5 border solid rounded-xl">8</div>
    <div className="row-span-2 col-start-4 row-start-5 border solid rounded-xl">9</div>
    <div className="col-span-2 row-span-2 col-start-3 row-start-7 border solid rounded-xl">10</div>
    <div className="col-span-2 row-span-2 col-start-1 row-start-7 border solid rounded-xl">13</div>
    <div className="row-span-2 row-start-9 border solid rounded-xl">16</div>
    <div className="col-span-3 row-span-2 row-start-9 border solid rounded-xl">17</div>
</div> */}
             </div>


        </div>
    )
}


// const Home = () => {
//     return (
//         <div>
//              <div className="w-full h-screen bg-banner-sda bg-no-repeat bg-center bg-cover relative overflow-hidden">
//                  <div className="max-w-6xl mx-auto text-rose">
//                     <Navbar/>
//                     <ContainerHome/>
//                  </div>

//                  <div className="w-full h-screen absolute top-0 left-0">
//                  {/* <ParticlesComponent/> */}
//                  </div>

                
//              </div>

//              {/* <Navbar/>
//              <ContainerHome/>
//              <ContainerHomeTwo/> */}
//              {/* <ParticlesComponent id="practicles"/> */}


//         </div>
//     )
// }
// function App() {
//   return (
//     <div className="w-full h-screen bg-banner-bg bg-no-repeat bg-center bg-cover relative overflow-hidden">
//       <div className="max-w-6xl mx-auto text-rose">
//         {/* Header */}
//         <Header />
//         {/* Banner */}
//         <Banner />
//       </div>
//       <div className="w-full h-screen absolute top-0 left-0">
//         <Design />
//       </div>
//     </div>
//   );
// }


export default Home;

