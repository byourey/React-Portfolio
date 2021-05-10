import './App.css';
import Technologies from "./components/Technologies";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navbar from "./components/Navbar";




function App() {
  return (
    <div className="App">
      <h1> BJORN YOUREY </h1>
      <Navbar />
      <Technologies />
    </div>
  );
}

export default App;
