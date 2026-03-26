import { Link } from "react-router-dom";



const Navbar =() => {

    return (
        <div className="w-screen h-[64px] bg-[#17181f] flex items-center text-white justify-center gap-[2vw]"> 
            <Link to="/" className="w-[100px] h-[40px] border-solid rounded-3xl hover:bg-[#27272A]  flex items-center justify-center">
            <p>Home</p>
            </Link>

            <Link to="/about" className="w-[100px] h-[40px] border-solid hove rounded-3xl hover:bg-[#27272A] flex items-center justify-center">
             <p>About</p>
            
             </Link>

             <Link to="/skils" className="w-[100px] h-[40px] border-solid hover:bg-[#27272A] rounded-3xl flex items-center justify-center">
             <p>Skill</p>
            
             </Link>
              <Link to="/projects" className="w-[100px] h-[40px] border-solid hover:bg-[#27272A] rounded-3xl flex items-center justify-center">
             <p>Projects</p>
            
             </Link>
              <Link to="/contact" className="w-[100px] h-[40px] border-solid hover:bg-[#27272A] rounded-3xl flex items-center justify-center">
             <p>Contact</p>
            
             </Link>
        </div>

    )
}
export default Navbar;