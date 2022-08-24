import NachBar from "./components/NachBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/src/dropdown'
import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Inicio from "./components/Inicio";
import Categoria from "./components/Categoria"
import CartWidget from "./components/CartWidget";
import CartProvider from "./components/CartContext";
import MasDetalles from "./components/MasDetalle";

function App() {
  return (
    <CartProvider>
    <Router>
      <NachBar tiendaWebMM = "Thinkgeekfake"/>
      <Routes>
      <Route path="/cart" element={<CartWidget />}  />
      <Route path="/producto/:id" element={<MasDetalles />}  />
      <Route path="/" element={<Inicio />}  />
      <Route path="/categoria/:id" element={<Categoria />} />
      <Route
              path="*"
              element={
                <div className="error404">
                  <h1>No se encuentra esta pagina (404)</h1>
                </div>
              }
            />
      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;
