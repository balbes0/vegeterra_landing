import React, {useEffect, useState} from 'react';
import ProcessSteps from "./sections/ProcessSteps";
import Services from "./sections/Services";
import Mission from "./sections/Mission";
import Team from "./sections/Team";
import PartnershipForm from "./sections/PartnershipForm";
import Footer from "./sections/Footer";
import Benefits from "./sections/Benefits";
import Values from "./sections/Values";
import AboutBrand from "./sections/AboutBrand";
import "./styles/style.css"
import AgroconsultationForm from "./sections/AgroconsultationForm";

function App() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handler = () => setIsMobile(window.innerWidth <= 500);
        handler();
        window.addEventListener("resize", handler);
        return () => window.removeEventListener("resize", handler);
    }, []);

    return (
        <div className="App">
            <AboutBrand/>
            <ProcessSteps/>
            <Benefits/>
            <Services/>
            {isMobile && <PartnershipForm/>}
            <Mission/>
            <Values/>
            <Team/>
            {!isMobile && <PartnershipForm/>}
            {isMobile && <AgroconsultationForm/>}
            <Footer/>
        </div>
    );
}

export default App;
