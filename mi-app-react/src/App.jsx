import './App.css'
import Header from './componentes/encabezado/header';
import Footer from './componentes/footer/footer';
import Home from "./pages/home/home"
import Deportes from './pages/deportes/deportes';
import HockeyInfo from './pages/deportes/hockey';
import InfoClub from './pages/infoClub/infoClub';
import ScrollToTop from './componentes/ScrollToTop'
import InformacionSocios from './pages/informacionSocios/informacionSocios';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
     <Header></Header>
     <ScrollToTop></ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deportes" element={<Deportes />} />
        <Route path="/hockeyinfo" element={<HockeyInfo />} />
        <Route path="/infoClub" element={<InfoClub />} />
        <Route path="/informacionSocios" element={<InformacionSocios />} />
      </Routes>
     <Footer></Footer>
    </BrowserRouter>
    
  );
}

export default App;