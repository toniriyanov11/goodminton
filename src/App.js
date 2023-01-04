import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <div className="App bg-primary text-white">
        <Header/>
        <Hero/>
        <AboutUs/>
        <Gallery/>
        <Testimonial/>
    </div>
  );
}

export default App;
