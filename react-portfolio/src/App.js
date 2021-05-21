import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/Footer"
import About from "./components/About/about"
import Portfolio from "./components/Portfolio/portfolio"
import Contact from "./components/Contact/contact"




function App() {
  return (
    <Router>
      <Navbar />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </Router>     
    
    
  );
}

export default App;
