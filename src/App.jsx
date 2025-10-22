import React from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero";
import Program from "./components/Programs/Program.jsx";
import Title from "./components/Title/title.jsx";
import About from "./components/About/About.jsx";
import Campous from "./components/Campous/Campous.jsx";
import Testimonial from "./components/Testimonials/Testimonial.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
      <Title title="Our Programs Lorem" subTitle=" ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." />
      <Program />
      <Title title="New Adventure" subTitle=" lorem ipsum dolor sit amet." />
      <About />
      <Title title="campous photos" subTitle="Gallery" />
      <Campous />
      <Testimonial />
      </div>
    </div>
  );
}

export default App;
