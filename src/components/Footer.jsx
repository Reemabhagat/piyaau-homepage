import React from "react";
import logo from "../assets/img/logo-pyauu.svg";
import instaGram from "../assets/img/Instagram.svg";
import faceBook from "../assets/img/Facebook.svg";
import twitTer from "../assets/img/Twitter.svg";
import linkedIn from "../assets/img/LinkedIn.svg";
import playStoreImg from "../assets/img/Play-store.svg";
import appStoreImg from "../assets/img/App-store.svg";
import { Link } from "react-router-dom";


function Footer() {
    return (
        <footer className=" text-black">
            <div className="container mx-auto px-6">
                {/* Footer */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">

                    {/* Column 1 */}
                    <div>

                        <a href="" target="_blank" rel="noopener noreferrer" className="inline-block">
                            <img src={logo} alt="Get it on Google Play" className="mb-2" />
                        </a>


                    </div>

                    {/* Column 2 Resources */}
                    <div>
                        <a href="#" className="footer-title">
                            <h2 className="text-sm font-bold text-black footer-title" >Resources</h2>
                        </a>

                        <ul className="mt-2 space-y-1">
                            <li><a href="#" className="footer-link">Shop</a></li>
                            <li><a href="#" className="footer-link">careers</a></li>
                            <li><a href="#" className="footer-link">Become a Distributor</a></li>
                            <li><a href="#" className="footer-link">Become a retailer</a></li>
                        </ul>
                    </div>

                    {/* Column 3 Pages */}
                    <div>
                        <a href="#" className="footer-title">
                            <h2 className="text-sm font-bold text-black footer-title" >Pages</h2>
                        </a>

                        <ul className="mt-2 space-y-1">
                            <li><a href="#" className="footer-link">Terms & Conditions</a></li>
                            <li><a href="#" className="footer-link">Privacy policy</a></li>
                            <li><a href="/Contactus" target="_blank" className="footer-link">Contact Us</a></li>


                        </ul>
                    </div>

                    {/* Column 4  */}
                    <div className="flex flex-col items-center md:self-start w-full">
                        {/* Social Media */}
                        <div className="flex space-x-4 mb-3">
                            <a href="https://www.instagram.com/piyaauindia/">
                                <img src={instaGram} alt="Instagram" className="w-8 mb-2" />
                            </a>
                            <a href="#">
                                <img src={faceBook} alt="Facebook" className="w-8 mb-2" />
                            </a>
                            <a href="#">
                                <img src={twitTer} alt="Twitter" className="w-8 mb-2" />
                            </a>
                            <a href="https://www.linkedin.com/in/piyaau-india/">
                                <img src={linkedIn} alt="LinkedIn" className="w-8 mb-2" />
                            </a>
                        </div>

                        {/* Playstore button */}
                        <a href="https://play.google.com/store/apps/details?id=in.piyaau.piyaau">
                            <img src={playStoreImg} alt="Google Play" className="mb-2 w-36" />
                        </a>

                        {/* Appstore button */}
                        <a href="https://apps.apple.com/in/app/piyaau/id6670400561">
                            <img src={appStoreImg} alt="App Store" className="w-36" />
                        </a>
                    </div>


                </div>

                {/* Copyright */}
                <div className="text-center text-sm text-black mt-6 font-bold footer-divider pt-4 ">
                    Copyright © 2025 PIyaau
                </div>
            </div>
        </footer>
    );
}

export default Footer;




