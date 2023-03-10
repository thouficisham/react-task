import './App.css';
import Layout from "./components/Layout"
import nipponlogo from "../src/assets/download.webp"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={nipponlogo} alt='nippon logo' style={{positiob: 'relative', width: '50px', height: '50px', right: '100px'}}/>
        Header
      </header>
      <Layout />
      <footer className="App-footer">
        Footer
      </footer>
    </div>
  );
}

export default App;
