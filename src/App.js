import Sec from './Section1/Sect.js';
import Ski from './Section2/Skills.js'
import Bac from './Section2-back/Background.js';
import Pro from './Projects-big/Project.js';
import Im from './Project-Image/Ima.js';
import Fo from './Project-form/Form';
import Te from './Project-text/Text.js';
import Sub from './Submit/Submit.js';
import Fot from './Footer/Footer.js';
import Hos from "./Navbar/hoda/Hod.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className='contenair'>
            <Hos />
            <BrowserRouter>
                <Sec />
                <Bac />
                <Ski />
                <Pro/>

                <Routes>
                        <Route path='/' element={<Im />} />
                        <Route path="/form" element={<Fo />} />
                        <Route path="/text" element={<Te />} />
                </Routes>
                <Sub />
                <Fot />
            </BrowserRouter>
        </div>
    );
}
export default App;