import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactPage from "./Pages/ContactPage";
const App = () => {
  return (
    <BrowserRouter>
      <main className="w-full min-h-screen relative">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        {/* <Footer /> */}
      </main>
    </BrowserRouter>
  );
};

export default App;
