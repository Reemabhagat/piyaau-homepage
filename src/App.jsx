import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Contact from "./Pages/Contact";
function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />  
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contactus" element={<Contact />} />
          </Routes>
        </main>
        <Footer />  
      </div>
    </Router>
  );
}

export default App;
