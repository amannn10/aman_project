import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import Home from './Pages/Home';
import { Services } from './Pages/Services';
import { Products } from './Pages/Products';
import { Login } from './Pages/Login';
import { Register } from './Pages/Register';
import { ContactUs } from './Pages/ContactUs';
import { Order } from './Pages/Order';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Order />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
