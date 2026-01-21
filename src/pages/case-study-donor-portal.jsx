import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../index.css';

function CaseStudyDonorPortal() {
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
                        <span className="text-primary-accent font-semibold">Non-Profit / Fundraising</span>
                        <h1 className="text-4xl md:text-5xl font-bold font-display mt-2">
                            Donor Management Portal
                        </h1>
                    </div>
                </section>

                <section className="py-20 bg-light-bg fade-in-section">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <img
                                    src="/images/Donor.png"
                                    alt="Donor Portal Dashboard Screenshot"
                                    className="rounded-lg shadow-2xl w-full"
                                    loading="lazy"
                                />
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold font-display text-primary-text mb-4">Project Overview</h2>
                                <p className="text-lg text-gray-700 mb-6">
                                    This project is a comprehensive web application designed for non-profit organizations to efficiently
                                    manage their donors, track donations, and visualize fundraising progress. The goal was to replace
                                    scattered spreadsheets with a single, reliable source of truth.
                                </p>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-600 uppercase">Client</h4>
                                        <p className="text-lg font-semibold text-primary-blue">Pro-Bono Portfolio Project</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-600 uppercase">Industry</h4>
                                        <p className="text-lg font-semibold text-primary-blue">Non-Profit & Fundraising</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-600 uppercase">Services</h4>
                                        <p className="text-lg font-semibold text-primary-blue">Frontend Development, UI/UX</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-600 uppercase">Year</h4>
                                        <p className="text-lg font-semibold text-primary-blue">2025</p>
                                    </div>
                                </div>

                                <a
                                    href="https://donor-portal.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
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
                            Non-profit organizations, especially smaller ones, often rely on disjointed tools spreadsheets, email lists,
                            and paper records to manage donor relationships and track contributions.
                        </p>
                        <p className="text-xl text-gray-700 leading-relaxed text-center mt-4">
                            This leads to inefficient data entry, a high risk of errors, missed follow-up opportunities, and a complete
                            lack of real-time insight into fundraising campaign performance.
                        </p>
                    </div>
                </section>

                <section className="py-20 bg-light-bg fade-in-section">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <h2 className="text-3xl font-bold font-display text-primary-text text-center mb-6">The Solution</h2>
                        <p className="text-xl text-gray-700 leading-relaxed mb-6">
                            We developed a secure, responsive frontend application using React and Tailwind CSS. The portal features a
                            central dashboard with key metrics, a searchable database for all donors, and detailed profiles for each donor
                            showing their complete giving history.
                        </p>
                        <p className="text-xl text-gray-700 leading-relaxed">
                            Staff can log new donations (using mock data in this frontend-only build), track campaign goals, and view
                            recent activity in one place. The system was designed with a clean, intuitive UI to ensure rapid adoption with
                            minimal training.
                        </p>
                    </div>
                </section>

                <section className="py-20 bg-primary-blue text-white fade-in-section">
                    <div className="container mx-auto px-6 text-center max-w-4xl">
                        <h2 className="text-3xl font-bold font-display mb-6">Features at a Glance</h2>
                        <p className="text-xl text-gray-200 leading-relaxed mb-10">
                            The portal provides a clean, data-centric interface for managing all aspects of donor relations.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div>
                                <span className="text-5xl font-bold font-display text-primary-accent">Dashboard</span>
                                <p className="text-lg text-gray-200 mt-2">At-a-glance dashboard with key metrics: total revenue, average donation, and total donors.</p>
                            </div>
                            <div>
                                <span className="text-5xl font-bold font-display text-primary-accent">Donors</span>
                                <p className="text-lg text-gray-200 mt-2">Full CRUD functionality for managing detailed donor profiles.</p>
                            </div>
                            <div>
                                <span className="text-5xl font-bold font-display text-primary-accent">Tracking</span>
                                <p className="text-lg text-gray-200 mt-2">Live-searchable history of all donations, linked to donors and specific campaigns.</p>
                            </div>
                        </div>

                        <div className="mt-16 border-t border-gray-700 pt-10">
                            <h3 className="text-2xl font-semibold text-white mb-6">Technology Stack</h3>
                            <div className="max-w-md mx-auto text-lg text-gray-200 grid grid-cols-2 gap-4 text-left">
                                <ul className="list-disc list-inside space-y-2">
                                    <li>React.js</li>
                                    <li>Vite</li>
                                    <li>React Hooks (useState)</li>
                                </ul>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Tailwind CSS</li>
                                    <li>JavaScript (ES6+)</li>
                                    <li>Lucide React (Icons)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-10 bg-light-bg border-t border-gray-200">
                    <div className="container mx-auto px-6 flex justify-between">
                        <a href="case-study-inventory-system" className="font-semibold text-gray-600 hover:text-primary-blue transition duration-300">
                            &larr; Previous Project
                        </a>
                        <a href="#" className="font-semibold text-gray-600 hover:text-primary-blue transition duration-300">
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
        <CaseStudyDonorPortal />
    </React.StrictMode>
);
