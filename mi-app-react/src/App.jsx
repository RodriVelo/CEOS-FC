import './App.css'
import Header from './componentes/encabezado/header';
import Footer from './componentes/footer/footer';
import Home from "./pages/home/home"
import Deportes from './pages/deportes/deportes';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
     <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deportes" element={<Deportes />} />
      </Routes>
     <Footer></Footer>
    </BrowserRouter>
    
  );
}

export default App;