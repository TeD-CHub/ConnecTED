import React from 'react';
import { FaLinkedin, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-primary-blue text-gray-300 py-16">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8">

                    {/* Column 1: Brand & Socials */}
                    <div>
                        <h3 className="text-2xl font-bold font-display text-white mb-3">ConnecTED</h3>
                        <p className="text-gray-400 mb-4">Your timely & reliable tech partner.</p>

                        <div className="flex space-x-4">
                            <a
                                href="https://www.linkedin.com/company/your-company"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition duration-300"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin size={24} />
                            </a>
                            <a
                                href="https://www.instagram.com/connected0.1/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition duration-300"
                                aria-label="Instagram"
                            >
                                <FaInstagram size={24} />
                            </a>
                            <a
                                href="https://www.tiktok.com/@connected0.1?_r=1&_t=ZM-93EKjcIFubw"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition duration-300"
                                aria-label="TikTok"
                            >
                                <FaTiktok size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Services</h4>
                        <ul className="space-y-2">
                            <li><a href="/software-development" className="hover:text-white">Custom Software</a></li>
                            <li><a href="/web-development" className="hover:text-white">Web Development</a></li>
                            <li><a href="/app-development" className="hover:text-white">App Development</a></li>
                            <li><a href="/consulting" className="hover:text-white">Tech Consulting</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Company */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Company</h4>
                        <ul className="space-y-2">
                            <li><a href="/#about" className="hover:text-white">About Us</a></li>
                            <li><a href="/portfolio" className="hover:text-white">Portfolio</a></li>
                            <li><a href="#" className="hover:text-white">Blog (Coming Soon)</a></li>
                            <li><a href="/contact" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Get in Touch</h4>
                        <ul className="space-y-2">
                            <li>churchill4032@gmail.com</li>
                            <li>(+254) 706-215407</li>
                        </ul>
                    </div>

                </div>
                <div className="text-center text-gray-500 border-t border-gray-700 mt-10 pt-8">
                    © {new Date().getFullYear()} ConnecTED. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
