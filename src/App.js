import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="App bg-primary text-white">
        <Header/>
        <Hero/>
        <AboutUs/>
    </div>
  );
}

export default App;
