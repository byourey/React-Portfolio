import './App.css';
import Technologies from "./components/Technologies";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navbar from "./components/Navbar";




function App() {
  return (
    <div className="App">
      <h1> BJORN YOUREY </h1>
      <Navbar />
      <div id="techno">
       <Technologies />
      </div>
       <div id="portfolio">
      </div>
    </div>
  );
}

export default App;
