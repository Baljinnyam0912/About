import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";

import {motion} from "framer-motion";


export default function BackgroundParticles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

const options = useMemo(() => ({
  background: { color: { value: "transparent" } },
  fullScreen: { enable: false },

  interactivity: {
    events: {
      onHover: {
        enable: false,
        mode: ["grab", "repulse"], // mouse ойртоход хөдөлнө
      },
    },
    modes: {
      grab: {
        distance: 150, // mouse-оос шугам татагдана
        links: { opacity: 1 }
      },
      repulse: {
        distance: 200, // өгсөх мэт зай авна
        duration: 0.4
      },
    },
  },

  particles: {
    number: { value: 70 },
    move: { enable: true, speed: 1 },
    size: { value: 3 },
    color: { value: "#ffffffff" },
    
    links: {
      enable: true,
      distance: 140,
      color: "#ffffffff",
      opacity: 0.4,
      width: 1,
    },
  },
}), []);


  return (
    
    <div className="relative h-[90vh] w-full bg-black overflow-hidden">  Нүүр хуудасны өндөр 
    
    
      {init && (
        
        <Particles
        
          id="tsparticles"
          options={options}
          className="absolute inset-0 -z-0"
        />
        
        
      )}
       
     
      
      <div className="relative z-10 bg-none flex items-start justify-center h-[90vh] text-white ">
         
        <div className="w-full h-96 bg-none flex mt-20 justify-center items-center flex-col">
         


          <motion.h6 
                initial={{ opacity: 0, y: 40 }}     // доороос (y:40)
                whileInView={{ opacity: 1, y: 0 }}  // харагдахад дээш орж ирнэ
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}           // нэг л удаа анимац болно
               className="font-bold p-4 text-white text-lg"
          
          >
            FRONT-END DEVELOPER
          </motion.h6>

          <motion.h1 
                initial={{ opacity: 0, y: 40 }}     // доороос (y:40)
                whileInView={{ opacity: 1, y: 0 }}  // харагдахад дээш орж ирнэ
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}           // нэг л удаа анимац болно
               className="text-6xl p-8 font-bold text-white"
          
          >
            Baljinnyam Bekhbat
          </motion.h1>
          <motion.h1 
                initial={{ opacity: 0, y: 40 }}     // доороос (y:40)
                whileInView={{ opacity: 1, y: 0 }}  // харагдахад дээш орж ирнэ
                transition={{ duration: 1.3, ease: "easeOut" }}
                viewport={{ once: true }}           // нэг л удаа анимац болно
               className="text-white text-xs"
          
          >
            {'{ Html, Css, Sass, Javascript, NodeJs, ReactJs, Ejs, MongoDB, Postman, Tailwindcss, Bootstrap, RestAPI }'}
            
          </motion.h1>
          <motion.h1 
                initial={{ opacity: 0, y: 40 }}     // доороос (y:40)
                whileInView={{ opacity: 1, y: 0 }}  // харагдахад дээш орж ирнэ
                transition={{ duration: 1.6, ease: "easeOut" }}
                viewport={{ once: true }}           // нэг л удаа анимац болно
               className="text-white text-xs"
          
          >
            {'{ Photoshop, Sketchup, Enscape, Drawling }'}
            
          </motion.h1>

          {/* <h6 className="font-bold p-4 text-white text-lg">FRONT-END DEVELOPER</h6> */}
          {/* <h1 className="text-6xl p-8 font-bold text-white"></h1> */}
          {/* <p className="text-white text-xs">  {'{ Html, Css, Sass, Javascript, NodeJs, ReactJs, Ejs, MongoDB, Postman, Tailwindcss, Bootstrap, RestAPI }'}</p> */}
          <p className="text-white text-xs"></p>
          

            
        </div>
      </div>
    </div>
  );
}
   <motion.h1
      
    ></motion.h1>