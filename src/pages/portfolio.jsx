import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import Typed from 'typed.js';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../index.css';

function PortfolioPage() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['From Idea to Impact'],
            typeSpeed: 60,
            backSpeed: 0,
            loop: false,
            showCursor: false
        });
        return () => typed.destroy();
    }, []);

    return (
        <>
            <Header activePage="portfolio" />
            <main className="py-20 bg-light-bg">
                <div className="container mx-auto px-6">

                    <section className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold font-display text-primary-text mb-4">
                            <span ref={el}></span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                            Explore our case studies to see how we've helped businesses like yours transform their ideas into reality.
                        </p>
                    </section>

                    <section id="projects" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Project 1 */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 hover:shadow-xl hover:-translate-y-1">
                            <img src="/images/Inventory.jpg" alt="Automated Inventory System" className="w-full h-48 object-cover" loading="lazy" />
                            <div className="p-6">
                                <span className="text-sm font-semibold text-primary-accent">Custom Software, Food Industry</span>
                                <h3 className="text-xl font-semibold font-display text-primary-blue my-2">Automated Inventory System</h3>
                                <p className="text-gray-600 mb-4">Developed a custom inventory tool for a regional food distributor to reduce waste and automate ordering.</p>
                                <a href="/case-study-inventory-system.html" className="font-semibold text-primary-accent hover:text-cyan-600 transition duration-300">View Case Study &rarr;</a>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 hover:shadow-xl hover:-translate-y-1">
                            <img src="/images/Donations.jpg" alt="Donor Management Portal" className="w-full h-48 object-cover" loading="lazy" />
                            <div className="p-6">
                                <span className="text-sm font-semibold text-primary-accent">Web Development, Non-Profit</span>
                                <h3 className="text-xl font-semibold font-display text-primary-blue my-2">Donor Management Portal</h3>
                                <p className="text-gray-600 mb-4">Built a secure web portal for a non-profit to manage donations and communicate with supporters.</p>
                                <a href="/case-study-donor-portal.html" className="font-semibold text-primary-accent hover:text-cyan-600 transition duration-300">View Case Study &rarr;</a>
                            </div>
                        </div>

                        {/* Project 3 */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 hover:shadow-xl hover:-translate-y-1">
                            <img src="/images/E-commerce.jpg" alt="E-commerce Mobile App" className="w-full h-48 object-cover" loading="lazy" />
                            <div className="p-6">
                                <span className="text-sm font-semibold text-primary-accent">Web & App Development</span>
                                <h3 className="text-xl font-semibold font-display text-primary-blue my-2">E-commerce Mobile App</h3>
                                <p className="text-gray-600 mb-4">Designed and launched a cross-platform (iOS/Android) e-commerce app for a local retail business.</p>
                                <a href="#" className="font-semibold text-primary-accent hover:text-cyan-600 transition duration-300">View Case Study &rarr;</a>
                            </div>
                        </div>

                        {/* Project 4 */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 hover:shadow-xl hover:-translate-y-1">
                            <img src="/images/Workflow.jpg" alt="Workflow Automation" className="w-full h-48 object-cover" loading="lazy" />
                            <div className="p-6">
                                <span className="text-sm font-semibold text-primary-accent">Tech Consulting, Small Business</span>
                                <h3 className="text-xl font-semibold font-display text-primary-blue my-2">Workflow Automation</h3>
                                <p className="text-gray-600 mb-4">Analyzed and automated key business processes for a service company, saving 20+ hours per week.</p>
                                <a href="#" className="font-semibold text-primary-accent hover:text-cyan-600 transition duration-300">View Case Study &rarr;</a>
                            </div>
                        </div>

                    </section>

                    <section id="contact" className="bg-white py-20 mt-20 rounded-lg shadow-lg">
                        <div className="container mx-auto px-6 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-text mb-4">Let's Build Your Next Big Idea.</h2>
                            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                                <a href="/contact.html#quote" className="bg-primary-accent text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-cyan-600 transition duration-300 transform hover:scale-105">Request a Quote</a>
                            </div>
                        </div>
                    </section>

                </div>
            </main>
            <Footer />
        </>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <PortfolioPage />
    </React.StrictMode>
);
