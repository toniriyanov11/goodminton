import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import Testimonial from './components/Testimonial';
import Homebase from './components/Homebase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-primary text-white">
        <Header/>
        <Hero/>
        <AboutUs/>
        <Gallery/>
        <Testimonial/>
        <Homebase/>
        <Footer/>
    </div>
  );
}

export default App;
