import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import "../assets/style.css";
import recyclingGif from "../assets/img/recycling.gif";
import flowerGif from "../assets/img/flower.gif";
import dropGif from "../assets/img/drop.gif";
import glasswaterGif from "../assets/img/glass-water.gif";
import canBg from "../assets/img/can-bg.webp";
import canWhite from "../assets/img/canWhite.webp";

function CardComponent() {
    const controlsCan = useAnimation();
    const [moveCan, setMoveCan] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const refreshmentSection = document.getElementById("refreshment-section");
            if (refreshmentSection) {
                const rect = refreshmentSection.getBoundingClientRect();
                const currentScrollY = window.scrollY;

                if (rect.top < window.innerHeight / 1.5) {
                    setMoveCan(true);
                } else if (currentScrollY < lastScrollY.current) {
                    setMoveCan(false);
                }

                lastScrollY.current = currentScrollY;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (moveCan) {
            controlsCan.start({
                x: ["0vw", "65vw"],
                y: ["0vh", "85vh"],
                transition: { duration: 1.5, ease: "easeInOut" },
            });
        } else {
            controlsCan.start({
                x: ["65vw", "0vw"],
                y: ["85vh", "0vh"],
                transition: { duration: 1.5, ease: "easeInOut" },
            });
        }
    }, [moveCan, controlsCan]);

    return (
        <div className="Roll">
            <div id="first-section" className="w-screen h-auto flex flex-col lg:flex-row px-6 pt-20">
                <div className="w-full lg:w-1/2 relative flex flex-col justify-center items-center lg:items-start p-4 hidden lg:flex">
                    <img src={canBg} alt="Background" className="" />
                    <div className="can-animation absolute">
                        <motion.img
                            src={canWhite}
                            alt="White Can"
                            className="white-can-500 relative w-[160px] h-auto bg-drop-water"
                            animate={controlsCan}

                        />
                    </div>
                </div>

                <div className="w-full flex justify-start sm:justify-center lg:justify-start">
                    <div className="w-full lg:w-auto grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 max-w-[500px] sm:max-w-none">
                        {[
                            { img: recyclingGif, title: "Sustainable", text: "Made from 100% recyclable material, Aluminium cans get rapidly reprocessed and reused within 60 days." },
                            { img: flowerGif, title: "Anti UV", text: "Protects against UV rays to prevent contamination and maintain purity." },
                            { img: dropGif, title: "Resealable", text: "Stay hydrated on the go with sealable cans. Drink. Reseal. Move." },
                            { img: glasswaterGif, title: "Revitalizing", text: "Alkaline water helps detoxify and supports gut health, enhancing immunity." }
                        ].map((item, index) => (
                            <div key={index} className="p-6 flex flex-col items-start sm:items-center lg:items-start">
                                <img src={item.img} alt={item.title} className="w-16 h-16 mb-4" />
                                <h4 className="text-2xl text-black font-bold pb-6">{item.title}</h4>
                                <p className="text-base text-black">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div id="refreshment-section" className="himalaya-section flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16 py-12 lg:py-26 relative">
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start px-4 sm:px-8 md:px-16">
                    <h2 className="text-4xl sm:text-3xl md:text-5xl font-bold mb-4 text-black">
                        Pure Refreshment. Eco-Friendly
                    </h2>
                    <p className="text-sm sm:text-lg md:text-xl mb-6 text-black">
                        With a natural pH level of 7.1-8, Piyaau offers antioxidant-infused hydration in eco-friendly aluminium cans, supporting both your well-being and the environment.
                    </p>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0 relative">
                    <div className="can-animation relative">
                        <motion.img
                            src={canWhite}
                            alt="White Can"
                            className="white-can-500 absolute w-[160px] h-auto"
                            animate={controlsCan}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardComponent;
