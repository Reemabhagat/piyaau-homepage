import React from "react";
import Hero from "../components/Hero";
import Card from "../components/Card_comp";
import Himalya from "../components/Himalya";
import Big from "../components/Big";
import sampleVideo from "../assets/img/can-call.mp4";
import sampleVideo2 from "../assets/img/Lowblend.mp4";
import FAQ from "../components/Faq";


function Home() {
  return (
    <div className="home-container">
      <Hero />
      <Card />
      <Himalya />
      <Big videoSrc={sampleVideo} videoSrc2={sampleVideo2} />
      <FAQ />
    </div>
  );
}

export default Home;
