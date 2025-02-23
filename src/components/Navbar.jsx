import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo-pyauu.svg";
import "../assets/style.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white navbar shadow-lg w-full fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-10 lg:mx-20">
                <div className="flex justify-between items-center h-20">

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/">
                            <img src={logo} alt="Piyaau Logo" className="h-10 md:h-12" />
                        </Link>
                    </div>

                    {/* desktop navigation */}
                    <div className="hidden xl:flex space-x-8 nav-text items-center">
                        <Link to="/about" className="hover:text-green-600 transition ">About</Link>
                        <Link to="/from-himalaya" className="text-gray-800 hover:text-green-600 transition font-medium">From Himalaya</Link>
                        <Link to="/product" className="text-gray-800 hover:text-green-600 transition font-medium">Product</Link>
                        <Link to="/customization" className="text-gray-800 hover:text-green-600 transition font-medium">Customization</Link>
                        <Link to="/advertisement" className="text-gray-800 hover:text-green-600 transition font-medium">Advertisement</Link>
                        <Link to="/team" className="text-gray-800 hover:text-green-600 transition font-medium">Team</Link>
                        <button className="button-nav text-white transition ">Shop</button>
                    </div>

                    {/* Mobile*/}
                    <div className="xl:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
                            {isOpen ? "✖" : "☰"}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md p-4 flex flex-col items-center space-y-4">
                    <Link to="/about" className="text-gray-800 hover:text-green-600 transition font-medium">About</Link>
                    <Link to="/from-himalaya" className="text-gray-800 hover:text-green-600 transition font-medium">From Himalaya</Link>
                    <Link to="/product" className="text-gray-800 hover:text-green-600 transition font-medium">Product</Link>
                    <Link to="/customization" className="text-gray-800 hover:text-green-600 transition font-medium">Customization</Link>
                    <Link to="/advertisement" className="text-gray-800 hover:text-green-600 transition font-medium">Advertisement</Link>
                    <Link to="/team" className="text-gray-800 hover:text-green-600 transition font-medium">Team</Link>
                    <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition font-semibold">Shop</button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
