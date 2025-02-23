import React from "react";
import "../assets/style.css";
import recyclingGif from "../assets/img/recycling.gif";
import flowerGif from "../assets/img/flower.gif";
import dropGif from "../assets/img/drop.gif";
import glasswaterGif from "../assets/img/glass-water.gif";
import herocover from "../assets/img/herocover.webp";
import mountainbg from "../assets/img/mountain-bg.webp";

function CardComponent() {
    return (
        <div className="w-screen h-auto flex flex-col lg:flex-row px-6 pt-20">
            {/* Left Column */}
            <div className="w-full lg:w-1/2 relative flex-col justify-center items-center lg:items-start text-center md:text-left p-4 hidden lg:flex">
                <img src={herocover} alt="Hero Cover" className="about-bg-img" />
            </div>

            {/* Right Cards Section */}
            <div className="w-full flex justify-start sm:justify-center lg:justify-start">
                <div className="w-full lg:w-auto grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 max-w-[500px] sm:max-w-none">
                    <div className="p-6 flex flex-col items-start sm:items-center lg:items-start text-left sm:text-center lg:text-left">
                        <img src={recyclingGif} alt="Sustainable Logo" className="w-16 h-16 mb-4" />
                        <h4 className="text-2xl text-black font-bold pb-6">Sustainable</h4>
                        <p className="text-base text-black p-small">Made from 100% recyclable material, Aluminium cans get rapidly reprocessed and reused within 60 days.</p>
                    </div>
                    <div className="p-6 flex flex-col items-start sm:items-center lg:items-start text-left sm:text-center lg:text-left">
                        <img src={flowerGif} alt="Anti UV Logo" className="w-16 h-16 mb-4" />
                        <h4 className="text-2xl text-black font-bold pb-6">Anti UV</h4>
                        <p className="text-base text-black p-small">Protects against UV rays to prevent contamination and maintain purity.</p>
                    </div>
                    <div className="p-6 flex flex-col items-start sm:items-center lg:items-start text-left sm:text-center lg:text-left">
                        <img src={dropGif} alt="Resealable Logo" className="w-16 h-16 mb-4" />
                        <h4 className="text-2xl text-black font-bold pb-6">Resealable</h4>
                        <p className="text-base text-black p-small">Stay hydrated on the go with sealable cans.<br />Drink. Reseal. Move.</p>
                    </div>
                    <div className="p-6 flex flex-col items-start sm:items-center lg:items-start text-left sm:text-center lg:text-left">
                        <img src={glasswaterGif} alt="Logo" className="w-16 h-16 mb-4" />
                        <h4 className="text-2xl text-black font-bold pb-6">Revitalizing</h4>
                        <p className="text-base text-black p-small">Alkaline water helps detoxify and supports gut health, enhancing immunity.</p>
                    </div>
                </div>
            </div>



        </div>
    );
}

export default CardComponent;
