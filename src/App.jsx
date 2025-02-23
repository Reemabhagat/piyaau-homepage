import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Contactus from "./Pages/Contact";
function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />  
        <main className="content my-20 lg:my-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contactus" element={<Contactus />} />
          </Routes>
        </main>
        <Footer />  
      </div>
    </Router>
  );
}

export default App;
