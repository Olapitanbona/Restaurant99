import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Product } from './pages/Product';
import { Home } from './pages/Home';
import { Navbar } from './component/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="product" element={<Product/>} />
        </Routes>
    </div>
  );
}

export default App;
