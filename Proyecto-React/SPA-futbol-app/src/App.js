import "./styles.css";
import Menu from "./componentes/Menu";
import LigasPagina from "./paginas/LigasPagina";
import Footer from "./componentes/Footer";
import InicioPagina from "./paginas/InicioPagina";
import ContactoPagina from "./paginas/ContactoPagina";
import RealMadridPagina from "./paginas/RealMadridPagina";
import TorneosPagina from "./paginas/TorneosPagina";
import MundialQatarPagina from "./paginas/MundialQatarPagina";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Menu />
        <div className="container pt-5 mt-5">
          <Routes>
            <Route path="/" element={<InicioPagina />} />
            <Route path="/Contacto" element={<ContactoPagina />} />
            <Route path="/Ligas" element={<LigasPagina />} />
            <Route path="/RealMadrid" element={<RealMadridPagina />} />
            <Route path="/Torneos" element={<TorneosPagina />} />
            <Route path="/MundialQatar" element={<MundialQatarPagina />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
