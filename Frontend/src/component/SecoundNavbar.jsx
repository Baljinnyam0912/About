import {motion} from "framer-motion"



const SecondNavbar = ({title, background}) => {
    return ( <div className="w-full h-32 bg-none flex justify-content items-center flex-col">
         <motion.h1 
                initial={{ opacity: 0, y: 40 }}     // доороос (y:40)
                whileInView={{ opacity: 1, y: 0 }}  // харагдахад дээш орж ирнэ
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}           // нэг л удаа анимац болно
               className="text-5xl p-8 font-bold text-white"
          >
          {title} {background}
          </motion.h1>

    </div>
    )
}

export default SecondNavbar

