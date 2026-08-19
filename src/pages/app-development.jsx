import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../index.css';

function AppDevelopmentPage() {
    useEffect(() => {
        const sections = document.querySelectorAll('.fade-in-section');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Header activePage="services" />
            <main>
                <section className="bg-primary-blue text-white py-20 relative overflow-hidden border-b border-cyan-900/30">
                    <div className="absolute inset-0 bg-tech-grid opacity-[0.05] pointer-events-none"></div>
                    <div className="container mx-auto px-6 text-center relative z-10">
                        <span className="text-primary-accent font-semibold font-mono text-xs uppercase tracking-widest">// Our Services</span>
                        <h1 className="text-4xl md:text-5xl font-bold font-display mt-2">
                            App Development
                        </h1>
                    </div>
                </section>

                <section className="py-20 fade-in-section">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-3 gap-12">
                            <div className="md:col-span-2">
                                <h2 className="text-3xl font-bold font-display text-primary-text mb-4">Engage Your Customers on Mobile</h2>
                                <p className="text-lg text-gray-700 mb-6">
                                    Engage your customers wherever they are with a stunning mobile app. We specialize in developing both iOS
                                    and Android applications that are fast, intuitive, and ready to publish on the app stores.
                                </p>
                                <p className="text-lg text-gray-700 mb-6">
                                    From the initial idea and UI/UX design to a fully functional app, our team guides you through the entire
                                    process. We build native apps for maximum performance or cross-platform apps for wider reach and faster
                                    development.
                                </p>

                                <h3 className="text-2xl font-bold font-display text-primary-text mb-4 mt-10">Who Is This For?</h3>
                                <p className="text-lg text-gray-700">This service is perfect for businesses and organizations that:</p>
                                <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mt-4">
                                    <li>Want to build a community or loyalty program.</li>
                                    <li>Need to offer a mobile-first service or e-commerce experience.</li>
                                    <li>Want to create an internal app to improve team productivity.</li>
                                    <li>Have a great idea for a new consumer app.</li>
                                </ul>
                            </div>

                            <aside className="bg-light-bg p-8 rounded-lg shadow-lg transition duration-300 hover:shadow-xl hover:-translate-y-1">
                                <div className="flex flex-col items-center mb-6">
                                    <div className="rounded-full bg-primary-blue p-1">
                                        <div className="rounded-full bg-white p-1">
                                            <img src="/images/App Dev.jpeg" alt="App Development illustration" className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover" loading="lazy" decoding="async" />
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold font-display text-primary-blue mb-5">What We Offer</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <svg className="h-6 w-6 text-primary-accent flex-shrink-0 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span><strong>Native iOS Development</strong> (Swift)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="h-6 w-6 text-primary-accent flex-shrink-0 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span><strong>Native Android Development</strong> (Kotlin)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="h-6 w-6 text-primary-accent flex-shrink-0 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span><strong>Cross-Platform Development</strong> (React Native)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="h-6 w-6 text-primary-accent flex-shrink-0 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span><strong>Mobile UI/UX Design</strong> & Prototyping</span>
                                    </li>
                                </ul>
                                <h3 className="text-xl font-bold font-display text-primary-blue mb-4 mt-8 border-t border-gray-200 pt-6">Technologies We Use</h3>
                                <div className="flex flex-wrap gap-2">
                                    <span className="font-mono text-[10px] px-2.5 py-1 bg-cyan-950/5 text-primary-blue rounded border border-cyan-900/10">// React Native</span>
                                    <span className="font-mono text-[10px] px-2.5 py-1 bg-cyan-950/5 text-primary-blue rounded border border-cyan-900/10">// Expo</span>
                                    <span className="font-mono text-[10px] px-2.5 py-1 bg-cyan-950/5 text-primary-blue rounded border border-cyan-900/10">// Swift / Kotlin</span>
                                    <span className="font-mono text-[10px] px-2.5 py-1 bg-cyan-950/5 text-primary-blue rounded border border-cyan-900/10">// Firebase</span>
                                    <span className="font-mono text-[10px] px-2.5 py-1 bg-cyan-950/5 text-primary-blue rounded border border-cyan-900/10">// Node.js</span>
                                    <span className="font-mono text-[10px] px-2.5 py-1 bg-cyan-950/5 text-primary-blue rounded border border-cyan-900/10">// App Store Connect</span>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>

                <section id="contact" className="bg-light-bg py-20 fade-in-section">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-text mb-4">
                            Have an App Idea?
                        </h2>
                        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
                            Let's talk about how we can bring it to life on the app stores.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <a href="/contact.html#quote" className="bg-primary-accent text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-cyan-600 transition duration-300 transform hover:scale-105">
                                Request a Quote
                            </a>
                            <a href="/contact.html#schedule" className="bg-gray-200 text-primary-text px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-300 transition duration-300 transform hover:scale-105">
                                Schedule a Consultation
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AppDevelopmentPage />
    </React.StrictMode>
);
