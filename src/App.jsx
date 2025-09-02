import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactPage from "./Pages/ContactPage";
import ServicePage from "./Pages/ServicePage";
import AboutusPage from "./Pages/AboutusPage";
import ScrollToTop from "./components/ScrollToTop";
const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <main className="w-full min-h-screen relative">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutusPage/>} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
};

export default App;
