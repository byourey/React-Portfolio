import './App.css';
import Technologies from "./components/Technologies";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import NavbarNav from "./components/NavbarNav";




function App() {
  return (
    <div className="App">
      <h1> BJORN YOUREY </h1>
      <NavbarNav />
      <Technologies />
    </div>
  );
}

export default App;
