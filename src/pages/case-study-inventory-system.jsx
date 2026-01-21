import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../index.css';

function CaseStudyInventorySystem() {
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
            <Header />
            <main>
                <section className="bg-primary-blue text-white py-20">
                    <div className="container mx-auto px-6 text-center">
                        <span className="text-primary-accent font-semibold">Food & Beverage Distribution</span>
                        <h1 className="text-4xl md:text-5xl font-bold font-display mt-2">
                            Automated Inventory & Order System
                        </h1>
                    </div>
                </section>

                <section className="py-20 bg-light-bg fade-in-section">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <img
                                    src="/images/Inventory.jpg"
                                    alt="Inventory Dashboard Screenshot"
                                    className="rounded-lg shadow-2xl w-full"
                                    loading="lazy"
                                />
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold font-display text-primary-text mb-4">Project Overview</h2>
                                <p className="text-lg text-gray-700 mb-6">
                                    We partnered with a regional food distributor to replace their manual, spreadsheet-based inventory
                                    tracking with a custom web application. The new system provides real-time stock levels, automates purchase
                                    orders, and integrates with their accounting, saving time and eliminating costly errors.
                                </p>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-600 uppercase">Client</h4>
                                        <p className="text-lg font-semibold text-primary-blue">Regional Food Distributors</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-600 uppercase">Industry</h4>
                                        <p className="text-lg font-semibold text-primary-blue">Food Industry</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-600 uppercase">Services</h4>
                                        <p className="text-lg font-semibold text-primary-blue">Custom Software, Tech Consulting</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-600 uppercase">Year</h4>
                                        <p className="text-lg font-semibold text-primary-blue">2025</p>
                                    </div>
                                </div>

                                <a
                                    href="#"
                                    className="inline-block mt-8 bg-gray-200 text-primary-text px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-300 transition duration-300 transform hover:scale-105"
                                >
                                    View Live Project
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white fade-in-section">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <h2 className="text-3xl font-bold font-display text-primary-text text-center mb-6">The Challenge</h2>
                        <p className="text-xl text-gray-700 leading-relaxed text-center">
                            The client was manually tracking all inventory across three warehouses using 5 different, disconnected
                            spreadsheets. This led to daily stock-outs of popular items and over-stocking of perishable goods, resulting
                            in significant waste.
                        </p>
                        <p className="text-xl text-gray-700 leading-relaxed text-center mt-4">
                            The process was entirely manual, requiring 20+ hours per week of data entry and verification, which was prone
                            to human error and delayed reporting. They had no real-time visibility into their stock levels.
                        </p>
                    </div>
                </section>

                <section className="py-20 bg-light-bg fade-in-section">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <h2 className="text-3xl font-bold font-display text-primary-text text-center mb-6">The Solution</h2>
                        <p className="text-xl text-gray-700 leading-relaxed mb-6">
                            ConnecTED designed and developed a custom, centralized web application built with React, Node.js, and a
                            PostgreSQL database. We created a barcode scanning module, accessible via mobile phones, allowing warehouse
                            staff to update inventory in real-time during receiving and shipping.
                        </p>
                        <p className="text-xl text-gray-700 leading-relaxed">
                            We also built a custom dashboard for the purchasing team that flags low-stock items and auto-generates
                            purchase orders based on preset par levels. Finally, we integrated the system directly with their accounting
                            software, eliminating all manual data entry for invoices.
                        </p>
                    </div>
                </section>

                <section className="py-20 bg-primary-blue text-white fade-in-section">
                    <div className="container mx-auto px-6 text-center max-w-4xl">
                        <h2 className="text-3xl font-bold font-display mb-6">The Results</h2>
                        <p className="text-xl text-gray-200 leading-relaxed mb-10">
                            The new system transformed their operations within the first two months, providing complete visibility into
                            their supply chain and automating their most time-consuming tasks.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div>
                                <span className="text-5xl font-bold font-display text-primary-accent">95%</span>
                                <p className="text-lg text-gray-200 mt-2">Reduction in data entry errors</p>
                            </div>
                            <div>
                                <span className="text-5xl font-bold font-display text-primary-accent">40%</span>
                                <p className="text-lg text-gray-200 mt-2">Reduction in perishable food waste</p>
                            </div>
                            <div>
                                <span className="text-5xl font-bold font-display text-primary-accent">20+</span>
                                <p className="text-lg text-gray-200 mt-2">Hours saved per week on manual tasks</p>
                            </div>
                        </div>

                        <div className="mt-16 border-t border-gray-700 pt-10">
                            <blockquote className="text-2xl italic text-gray-200 max-w-3xl mx-auto">
                                "Working with ConnecTED was a game-changer. Their solution was timely, reliable, and has fundamentally
                                improved how we do business. We've eliminated guesswork and can finally trust our numbers."
                            </blockquote>
                            <p className="text-lg font-semibold text-white mt-6">
                                - John R., Operations Manager
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-10 bg-light-bg border-t border-gray-200">
                    <div className="container mx-auto px-6 flex justify-between">
                        <a href="portfolio" className="font-semibold text-gray-600 hover:text-primary-blue transition duration-300">
                            &larr; Back to Portfolio
                        </a>
                        <a href="case-study-donor-portal" className="font-semibold text-gray-600 hover:text-primary-blue transition duration-300">
                            Next Project &rarr;
                        </a>
                    </div>
                </section>

                <section id="contact" className="bg-white py-20 fade-in-section">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-text mb-4">
                            Let's Build Your Next Big Idea.
                        </h2>
                        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
                            Ready to start your project? Get a detailed quote or schedule a free, no-obligation consultation with our
                            team.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <a
                                href="contact.html#quote"
                                className="bg-primary-accent text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-cyan-600 transition duration-300 transform hover:scale-105"
                            >
                                Request a Quote
                            </a>
                            <a
                                href="contact.html#schedule"
                                className="bg-gray-200 text-primary-text px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-300 transition duration-300 transform hover:scale-105"
                            >
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
        <CaseStudyInventorySystem />
    </React.StrictMode>
);
