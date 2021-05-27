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
    <div>
    <Router>
      <Navbar />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
      
    </Router>  
    <About />
    <Portfolio />
    <Contact />
    <Footer />   
    </div>
    
    
  );
}

export default App;
