//importações incriveis
import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'; 

// paginas massa d+
import Teste from "../src/pages/Teste.jsx"
import Login from "./pages/Login.jsx"
import Produtos from './pages/Produtos.jsx';
import Cadastro from './pages/Cadastro.jsx';
import Home from './pages/Home.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/alo' element={<Teste/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/produtos' element={<Produtos/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
