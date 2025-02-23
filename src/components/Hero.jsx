import React, { useState, useEffect } from "react";
import "../assets/style.css";
import heroImage from "../assets/img/Hero.webp";
import heroImagetwo from "../assets/img/herocover.webp";

function Hero() {
    const texts = ["A Cause.", "A Change.", "A Better World."];
    const [index, setIndex] = useState(0);
    const [scrollX, setScrollX] = useState(window.innerWidth);
    const [lastScrollY, setLastScrollY] = useState(0);
    useEffect(() => {

        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollDifference = window.scrollY - lastScrollY;
            setScrollX((prev) => prev - scrollDifference * 1.5);
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <div>
            <div className="w-screen h-screen flex flex-col lg:flex-row  pt-20 lg:pt-10">
                {/*  Column */}
                <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center lg:items-start px-6 md:px-32 text-white text-center lg:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black">Hydrate For</h1>

                    {/*  Text  */}
                    <div className="sliding-text-container">
                        {texts.map((text, i) => (
                            <h1 key={i} className={`sliding-text ${i === index ? "active-slide" : "hidden-slide"}`}>
                                {text}
                            </h1>
                        ))}
                    </div>

                    <p className="text-base md:text-2xl mb-6 text-black p-small">Piyaau offers Natural Mineral water packed in eco-friendly Aluminum cans.</p>
                    <button className="button-nav text-white transition px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md">Buy</button>
                </div>

                {/*  Image  */}
                <div className="w-full lg:w-1/2 h-full flex justify-start relative">
                    <img src={heroImage} alt="Hero Section" className="w-full hero-img" />
                    <img src={heroImagetwo} alt="Hero Section" className="w-full bg-cover" />
                </div>
            </div>

            {/* Scrolling Text  */}
            <div className="moving-line-wrap">
                <div className="moving-text" style={{ transform: `translateX(${scrollX}px)` }}>
                    We Are What We Drink!
                </div>
            </div>



        </div>
    );
}

export default Hero;
