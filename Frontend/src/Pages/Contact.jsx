import Navbar from "../component/Navbar";
import SecondNavbar from "../component/SecoundNavbar";
import ContactContent from "../component/ContactContent";



const Contact = () => {

    return (
    
          <div className="w-full h-screen bg-[#17181f] "> 
            <Navbar/>
            <SecondNavbar title={"Contact"}/>
            <div className="w-full h-96 bg-none flex justify-center items-center gap-10 ">
              <ContactContent></ContactContent>
              <ContactContent></ContactContent>
              <ContactContent title="zail"></ContactContent>

            {/* <div className="w-[350px] h-80 bg-yellow-400 border-solid rounded-2xl">
              
              
              
                  
            </div> */}
            </div>
            </div>
    )
}
//////27272A Background color changed 



export default Contact;