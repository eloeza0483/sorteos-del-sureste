import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage'
import { PaymentPage } from './pages/PaymentPage'
import ScrollToTop from './components/ScrollToTop';
import { ReservationProvider } from './context/ReservationContext';

function App() {

  return (
    <ReservationProvider>
    <BrowserRouter>
    <ScrollToTop/>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pagos" element={<PaymentPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </ReservationProvider>
  );
}

export default App
