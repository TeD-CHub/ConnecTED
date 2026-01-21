import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import Typed from 'typed.js';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../index.css';

function ContactPage() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Let's Get Started"],
            typeSpeed: 60,
            backSpeed: 0,
            showCursor: false,
            loop: false
        });
        return () => typed.destroy();
    }, []);

    return (
        <>
            <Header activePage="contact" />
            <main className="py-20">
                <div className="container mx-auto px-6">
                    <div className="flex justify-center mb-6">
                        <div className="rounded-full bg-primary-blue p-1">
                            <div className="rounded-full bg-white p-1">
                                <img src="/images/contact.jpeg" alt="Customer care representative" className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover" loading="lazy" decoding="async" />
                            </div>
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold font-display text-center mb-4"><span ref={el}></span></h1>
                    <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto text-center mb-16">
                        We're ready to help. Choose the option that works best for you.
                    </p>

                    <div className="grid md:grid-cols-2 gap-16">

                        <section id="quote" className="p-8 bg-light-bg rounded-lg shadow-lg">
                            <h2 className="text-3xl font-bold font-display text-primary-blue mb-2">Have a Project in Mind?</h2>
                            <p className="text-gray-700 mb-6">Fill out the form below with your project details, and we'll get back to you with a no-obligation quote and timeline.</p>

                            <form action="https://formspree.io/f/xldogdjr" method="POST" className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                    <input type="text" name="name" id="name" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-accent focus:border-primary-accent" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input type="email" name="email" id="email" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-accent focus:border-primary-accent" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Service Needed</label>
                                    <select name="service" id="service" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-accent focus:border-primary-accent bg-white">
                                        <option value="">Please select a service...</option>
                                        <option value="Software Development">Software Development</option>
                                        <option value="Web Development">Web Development</option>
                                        <option value="App Development">App Development</option>
                                        <option value="Tech Consulting">Tech Consulting / Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Project Description</label>
                                    <textarea name="message" id="message" rows="5" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-accent focus:border-primary-accent"></textarea>
                                </div>
                                <div>
                                    <button type="submit" className="w-full bg-primary-accent text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-cyan-600 transition duration-300 transform hover:scale-105">
                                        Send Project Details
                                    </button>
                                </div>
                            </form>
                        </section>

                        <section id="schedule" className="p-8">
                            <h2 className="text-3xl font-bold font-display text-primary-blue mb-2">Ready to Talk?</h2>
                            <p className="text-gray-700 mb-6">The best way to start is with a free, 30-minute discovery call. We'll discuss your idea and see if we're a good fit. No obligation.</p>

                            <a href="https://calendly.com/teddychurchill682/30min" target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center bg-gray-200 text-primary-text px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-300 transition duration-300 transform hover:scale-105">
                                Book Your Free Consultation
                            </a>
                            <p className="text-sm text-gray-600 mt-4 text-center">You will be redirected to Calendly to pick a time.</p>
                        </section>

                    </div>

                    <section id="faq" className="py-12">
                        <div className="container mx-auto px-6 max-w-3xl">
                            <h2 className="text-2xl font-bold font-display text-primary-text mb-4">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-semibold">How long does it take to receive a quote?</h3>
                                    <p className="text-gray-700">We typically respond with a preliminary quote or next steps within 1–3 business days depending on project scope.</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold">What information should I include when requesting a quote?</h3>
                                    <p className="text-gray-700">Provide a brief project overview, desired features, target platforms, and any timelines or budget ranges you have in mind.</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Do you sign NDAs for sensitive projects?</h3>
                                    <p className="text-gray-700">Yes — we’re happy to sign an NDA prior to discussing confidential details.</p>
                                </div>
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
        <ContactPage />
    </React.StrictMode>
);
