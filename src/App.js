import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Aboutus from './Components/Aboutus';
import Services from './Components/Services';
import Ourteam from './Components/Ourteam';
import Contactus from './Components/Contactus';
import Footer from './Components/Footer';
import Service01 from './Components/Service01';
import Service02 from './Components/Service02';
import Service03 from './Components/Service03';
import Service04 from './Components/Service04';
import Service05 from './Components/Service05';
import Service06 from './Components/Service06';
import Service07 from './Components/Service07';
import Service08 from './Components/Service08';
import Service09 from './Components/Service09';
import Service10 from './Components/Service10';
import Service11 from './Components/Service11';
import Service12 from './Components/Service12';
import Service13 from './Components/Service13';
import Service14 from './Components/Service14';
import Service15 from './Components/Service15';
import Service16 from './Components/Service16';
import Service17 from './Components/Service17';
import Service18 from './Components/Service18';
import Service19 from './Components/Service19';
import Service20 from './Components/Service20';
import Team01 from './Components/Team01';
import Team02 from './Components/Team02';
import Team03 from './Components/Team03';
import Team04 from './Components/Team04';
import Team05 from './Components/Team05';


function App() {
  return (
    <>
    <Routes>

      {/* Main pages  */}

      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Aboutus />} />
      <Route path="/services" element={<Services />} />
      <Route path="/ourteam" element={<Ourteam />} />
      <Route path="/contact" element={<Contactus />} />

      {/* Services subpages */}

      <Route path="/banking-and-finance" element={<Service01/>}/>
      <Route path="/business-sale-purchase" element={<Service02/>}/>
      <Route path="/business-structuring" element={<Service03/>}/>
      <Route path="/contract-review-drafting" element={<Service04/>}/>
      <Route path="/construction-and-infrastructure" element={<Service05/>}/>
      <Route path="/corporate-immigration" element={<Service06/>}/>
      <Route path="/data-and-privacy" element={<Service07/>}/>
      <Route path="/disputes-litigation" element={<Service08/>}/>
      <Route path="/online-business" element={<Service09/>}/>
      <Route path="/employment-law" element={<Service10/>}/>
      <Route path="/employment-advisory-service" element={<Service11/>}/>
      <Route path="/franchising" element={<Service12/>}/>
      <Route path="/information-technology" element={<Service13/>}/>
      <Route path="/trademarks-patents-ip" element={<Service14/>}/>
      <Route path="/media-and-entertainment" element={<Service15/>}/>
      <Route path="/property-and-leasing" element={<Service16/>}/>
      <Route path="/regulatory-and-compliance" element={<Service17/>}/>
      <Route path="/restructuring-insolvency" element={<Service18/>}/>
      <Route path="/startups" element={<Service19/>}/>
      <Route path="/tax" element={<Service20/>}/>

     {/* Team subpages */}

      <Route path="/meet-our-team/emmanuel-giuffre" element={<Team01/>}/>
      <Route path="/meet-our-team/jill-mcknight" element={<Team02/>}/>
      <Route path="/meet-our-team/emma-jervis" element={<Team03/>}/>
      <Route path="/meet-our-team/james-true" element={<Team04/>}/>
      <Route path="/meet-our-team/kirstin-mcknight" element={<Team05/>}/>
      
    </Routes>
    
    <Footer/>
    </>
  );
}
export default App;