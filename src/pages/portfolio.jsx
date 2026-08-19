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
            <main className="relative py-20 bg-light-bg bg-tech-dots overflow-hidden">
                {/* Glow backdrop circles */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary-accent/10 rounded-full blur-[80px] pointer-events-none"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-blue/15 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10">

                    <section className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold font-display text-primary-text mb-4">
                            <span ref={el}></span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                            Explore our case studies to see how we've helped businesses like yours transform their ideas into reality.
                        </p>
                    </section>

                    {/* Monospace Code Comment Header */}
                    <div className="font-mono text-xs text-gray-500 mb-6 tracking-widest flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        // 01. ACTIVE_DEPLOYMENTS (COUNT: 01)
                    </div>

                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:border-primary-accent hover:shadow-[0_0_25px_rgba(0,191,255,0.22)] hover:-translate-y-1 flex flex-col md:flex-row">
                        {/* Left Side: Logo Box */}
                        <div className="md:w-1/2 bg-gray-50 flex items-center justify-center p-8 border-b md:border-b-0 md:border-r border-gray-100">
                            <img src="/images/SoccerAfrica.jpg" alt="Soccer Africa" className="max-h-48 object-contain rounded-lg transition-transform duration-500 hover:scale-105" loading="lazy" />
                        </div>
                        {/* Right Side: Details */}
                        <div className="md:w-1/2 p-8 flex flex-col justify-center">
                            <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-primary-accent bg-cyan-950/5 px-2.5 py-1 rounded inline-block mb-3 w-fit">// CAT: ACADEMY_PLATFORM</span>
                            <h3 className="text-2xl font-bold font-display text-primary-blue mb-3">Soccer Africa</h3>
                            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                A custom web and mobile platform built for Soccer Africa Football Academy to manage youth training programs, track player performance, schedule sessions, and handle school partnerships.
                            </p>
                            <ul className="list-disc list-inside text-xs text-gray-500 space-y-1 mb-6 leading-relaxed">
                                <li>Parent & Coach dashboard panels</li>
                                <li>Offline-first local data syncing</li>
                                <li>Real-time scoreboards and match results</li>
                            </ul>
                            <div>
                                <a href="https://soccerafricaint.com" target="_blank" rel="noopener noreferrer" className="font-mono font-semibold text-sm text-primary-accent hover:text-cyan-600 transition duration-300 flex items-center gap-1">visit_site() &rarr;</a>
                            </div>
                        </div>
                    </div>

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
