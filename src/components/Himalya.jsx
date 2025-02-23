import React from "react";
import "../assets/style.css";
import leftcan from "../assets/img/leftcan.webp";
import rightcan from "../assets/img/rightcan.webp";

function Himalaya() {
    return (
        <div>
            {/* Refreshment Section */}
            <div className="himalaya-section flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16 py-12 lg:py-16">
                {/* Left  Section */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-4 sm:px-8 md:px-16">
                    <h2 className="text-xl sm:text-3xl md:text-5xl font-bold mb-4 text-black">
                        Pure Refreshment. Eco-Friendly
                    </h2>
                    <p className="text-sm sm:text-lg md:text-xl mb-6 text-black">
                        With a natural pH level of 7.1-8, Piyaau offers antioxidant-infused hydration in eco-friendly aluminium cans, supporting both your well-being and the environment.
                    </p>
                </div>

                {/* Right  Section */}
                <div className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0">

                </div>
            </div>

            {/* Hydration Section */}
            <div className="hydrate-section flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16 py-12 lg:py-16">
                {/* Left Cards */}
                <div className="w-full flex justify-center mt-6 lg:mt-0">
                    <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-6">
                        {/* Card 1 */}
                        <div className="flex flex-col items-center text-center p-4">
                            <img src={leftcan} alt="Bottle" className="mb-4 w-24 md:w-32 lg:w-40" />
                            <h6 className="text-base font-bold text-black">Sparkling Water 330ml</h6>
                        </div>

                        {/* Card 2 */}
                        <div className="flex flex-col items-center text-center p-4">
                            <img src={rightcan} alt="Can" className="mb-4 w-24 md:w-32 lg:w-40" />
                            <h6 className="text-base font-bold text-black">Natural Mineral Water 500ml</h6>
                        </div>
                    </div>
                </div>

                {/* Right  Section */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-4 sm:px-8 md:px-16">
                    <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-black">Pure Hydration</h1>
                    <p className="text-sm sm:text-lg md:text-xl mb-6 text-black">
                        Experience the revitalizing essence of Natural Mineral water and the delightful fizz of Sparkling Water.
                    </p>
                    <button class="button-nav text-white transition">Buy Now</button>
                </div>
            </div>

            {/* Fuel Section */}
            <div className="fuel-section flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16 py-12 lg:py-16">
                {/* Left  Section */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-4 sm:px-8 md:px-16">
                    <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-black">Every can fuels our Mission</h1>
                    <p className="text-sm sm:text-lg md:text-xl mb-6 text-black">
                        Piyaau contributes ₹1 for every can you drink to setup resources for disadvantaged communities of urban and rural India.
                    </p>
                    <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">Buy</button>
                </div>

                {/* Right  Section */}
                <div className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0">
                    {/* Card 1 */}
                    <div className="flex flex-col items-center text-center p-4">
                        <img src={leftcan} alt="Bottle" className="mb-4 w-24 md:w-32 lg:w-40" />
                        <h6 className="text-base font-bold text-black">Sparkling Water 330ml</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Himalaya;
