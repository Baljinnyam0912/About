import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Skills from './Pages/Skills';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Projects from './Pages/Projects';



function App() {
    return (
    <div className='App'>
        <BrowserRouter>
        <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/skils" element={<Skills/>}/>
            <Route path="/projects" element={<Projects/>}/>

        </Routes>
        
        </BrowserRouter>
        
    </div>
)


}
export default App;