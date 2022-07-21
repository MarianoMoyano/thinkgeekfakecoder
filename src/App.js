import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/src/dropdown'
import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Inicio from "./components/Inicio";
import Categoria from "./components/Categoria"

function App() {
  return (
    <Router>
      <NavBar tiendaWebMM = "Thinkgeekfake"/>
      <Routes>
      <Route path="/" element={<Inicio />}  />
      <Route path="/categoria/:id" element={<Categoria />} />
      </Routes>
    </Router>
  );
}

export default App;
