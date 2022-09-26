import './style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './pages/login';
import { DataTest } from './pages/dataTeste';
import { DataRocket } from './pages/dataRocket';
import { DataFuel } from './pages/dataFuel';
import { DataClima } from './pages/dataClima';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clima" element={<DataClima/>}></Route>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/teste" element={<DataTest/>}></Route>
        <Route path="/rocket" element={<DataRocket/>}></Route>
        <Route path="/fuel" element={<DataFuel/>}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
