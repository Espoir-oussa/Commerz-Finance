import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Accueil from './Pages/Accueil';
import Autre from './Pages/Autre'; // exemple d’autre page
import { Demandefinance } from './Pages/Demandefinance';
import ContactForm from './Pages/ContactForm';
import NosFinances from './Pages/NosFinances';
import SubventionSuisse from './Pages/subvention-suisse';
import BourseFamiliale from './Pages/boursefamiliale';
import Aideguadeloupe from './Pages/aideguadeloupe';
import FinancementCanada from './Pages/financementcanada';
import FinancementPolynesie from './Pages/financementpolynesie';
import BesoinFinancement from './Pages/besoinfinancement';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* <Navbar /> */}
        <Nav/>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/autre" element={<Autre />} />
            <Route path="/demandefinance" element={<Demandefinance />} />
            <Route path="/contactform" element={<ContactForm/>}/>
            <Route path="/nosfinances" element={<NosFinances />} />
            <Route path="/subventionsuisse" element={<SubventionSuisse />} />
            <Route path="/boursefamiliale" element={<BourseFamiliale />} />
            <Route path="/aideguadeloupe" element={<Aideguadeloupe />} />
            <Route path="/financementcanada" element={<FinancementCanada />} />
            <Route path="/financementpolynesie" element={<FinancementPolynesie />} />
            <Route path="/besoinfinancement" element={<BesoinFinancement />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
