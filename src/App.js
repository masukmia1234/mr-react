import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Head/Header';
import Hero from './components/Hero/Home';
import Features from './components/Features/Features';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import Testimonial from './components/Testimonial/Testimonial';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
     <Header />
     <Hero />
     <Features />
     <Portfolio />
     <Resume />
      <Testimonial />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
