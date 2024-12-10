import React from "react";
import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
import Services from "../components/Home/Services";
import Projects from "../components/Home/Projects";
import About from "../components/Home/About";
import Testimonial from "../components/Home/Testimonial";
import Contact from "../components/Contact";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <Projects />
      <About />
      <Testimonial />
      <Contact text={"Get a quote for your upcoming project"}/>
    </>
  );
};

export default HomePage;
