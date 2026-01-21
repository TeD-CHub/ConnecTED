import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../index.css';

function ConsultingPage() {
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
                <section className="bg-primary-blue text-white py-20">
                    <div className="container mx-auto px-6 text-center">
                        <span className="text-primary-accent font-semibold">Our Services</span>
                        <h1 className="text-4xl md:text-5xl font-bold font-display mt-2">
                            Tech Consulting & Solutions
                        </h1>
                    </div>
                </section>

                <section className="py-20 fade-in-section">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-3 gap-12">
                            <div className="md:col-span-2">
                                <h2 className="text-3xl font-bold font-display text-primary-text mb-4">Expert Guidance for Your Toughest Tech Problems</h2>
                                <p className="text-lg text-gray-700 mb-6">
                                    Stuck on a technical challenge? Need to automate a manual process but don't know where to start? Our
                                    expert consultants provide the strategic guidance and practical solutions to solve your toughest
                                    challenges.
                                </p>
                                <p className="text-lg text-gray-700 mb-6">
                                    We act as your partner, analyzing your current systems, identifying bottlenecks, and recommending the
                                    right technology to save you time and money. We don't just give advice; we help you implement the
                                    solution.
                                </p>

                                <h3 className="text-2xl font-bold font-display text-primary-text mb-4 mt-10">Who Is This For?</h3>
                                <p className="text-lg text-gray-700">This service is perfect for businesses and organizations that:</p>
                                <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mt-4">
                                    <li>Are unsure what technology they need to grow.</li>
                                    <li>Have inefficient workflows and repetitive manual tasks.</li>
                                    <li>Need an expert opinion before making a large tech investment.</li>
                                    <li>Require help integrating multiple different software systems.</li>
                                </ul>
                            </div>

                            <aside className="bg-light-bg p-8 rounded-lg shadow-lg transition duration-300 hover:shadow-xl hover:-translate-y-1">
                                <div className="flex flex-col items-center mb-6">
                                    <div className="rounded-full bg-primary-blue p-1">
                                        <div className="rounded-full bg-white p-1">
                                            <img src="/images/customer care.jpeg" alt="Customer care representative" className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover" loading="lazy" decoding="async" />
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold font-display text-primary-blue mb-5">What We Offer</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <svg className="h-6 w-6 text-primary-accent flex-shrink-0 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span><strong>Technology Roadmapping</strong> & Strategy</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="h-6 w-6 text-primary-accent flex-shrink-0 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span><strong>Business Process Automation</strong></span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="h-6 w-6 text-primary-accent flex-shrink-0 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span><strong>System Integration</strong> & API Strategy</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="h-6 w-6 text-primary-accent flex-shrink-0 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span><strong>IT Infrastructure</strong> & Security Review</span>
                                    </li>
                                </ul>
                            </aside>
                        </div>
                    </div>
                </section>

                <section id="contact" className="bg-light-bg py-20 fade-in-section">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-text mb-4">
                            Need an Expert Opinion?
                        </h2>
                        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
                            Let's solve your most complex tech problems together.
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

                <section id="faq" className="py-12">
                    <div className="container mx-auto px-6 max-w-3xl">
                        <h2 className="text-2xl font-bold font-display text-primary-text mb-4">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-semibold">What is your consulting process?</h3>
                                <p className="text-gray-700">We begin with discovery, produce a roadmap, then implement a pilot followed by a full roll-out and knowledge transfer.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold">How long is a typical engagement?</h3>
                                <p className="text-gray-700">Short advisory engagements can be 2–4 weeks; larger implementations typically range 3–6 months.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold">Do you help implement recommendations?</h3>
                                <p className="text-gray-700">Yes — we can implement recommendations directly or work with your team to hand off solutions.</p>
                            </div>
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
        <ConsultingPage />
    </React.StrictMode>
);
