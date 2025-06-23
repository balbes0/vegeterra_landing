import React from 'react';
import Header from "./sections/Header";
import ProcessSteps from "./sections/ProcessSteps";
import Services from "./sections/Services";
import Mission from "./sections/Mission";
import Team from "./sections/Team";
import PartnershipForm from "./sections/PartnershipForm";
import Footer from "./sections/Footer";
import Benefits from "./sections/Benefits";
import Values from "./sections/Values";
import AboutBrand from "./sections/AboutBrand";

function App() {
  return (
    <div className="App">
        <Header/>
        <AboutBrand/>
        <ProcessSteps/>
        <Benefits/>
        <Services/>
        <Mission/>
        <Values/>
        <Team/>
        <PartnershipForm/>
        <Footer/>
    </div>
  );
}

export default App;
