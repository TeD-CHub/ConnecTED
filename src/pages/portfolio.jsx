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
                        {/* Soccer Africa */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 hover:shadow-xl hover:-translate-y-1">
                            <img src="/images/SoccerAfrica.jpg" alt="Soccer Africa" className="w-full h-48 object-contain p-4 bg-gray-50 border-b border-gray-100" loading="lazy" />
                            <div className="p-6">
                                <span className="text-sm font-semibold text-primary-accent">Web & App Development, Sports Academy</span>
                                <h3 className="text-xl font-semibold font-display text-primary-blue my-2">Soccer Africa</h3>
                                <p className="text-gray-600 mb-4">A custom web and mobile platform built for Soccer Africa Football Academy to manage youth training programs, track player performance, schedule sessions, and handle school partnerships.</p>
                                <a href="https://soccerafricaint.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary-accent hover:text-cyan-600 transition duration-300">Visit Website &rarr;</a>
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
