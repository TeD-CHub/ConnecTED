import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import Typed from 'typed.js';
import { FaLaptopCode, FaCode, FaMobileAlt, FaUserTie } from 'react-icons/fa';

import Header from '../components/Header';
import Footer from '../components/Footer';
import '../index.css';

// --- Components ---
function AnimateOnScroll({ children }) {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setIsVisible(true);
                observer.unobserve(domRef.current);
            }
        });

        if (domRef.current) observer.observe(domRef.current);

        return () => {
            if (domRef.current) observer.unobserve(domRef.current);
        };
    }, []);

    return (
        <div ref={domRef} className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}>
            {children}
        </div>
    );
}

function HeroSection() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                'Ideas Into Reality.',
                'Software Into Solutions.',
                'Concepts Into Code.',
            ],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
            smartBackspace: true,
        });
        return () => typed.destroy();
    }, []);

    return (
        <section id="home" className="relative flex items-center justify-center min-h-[500px] md:min-h-[700px] lg:min-h-[80vh]">
            <picture className="absolute inset-0 w-full h-full">
                <img src="/images/hero.jpeg" alt="Team collaborating" className="absolute inset-0 w-full h-full object-cover" />
            </picture>
            <div className="absolute inset-0 bg-black opacity-60"></div>

            <div className="relative z-10 container mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-5">
                    Turn Your <br className="sm:hidden" />
                    <span className="text-cyan-400" ref={el}></span>
                </h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10">
                    ConnecTED delivers timely, reliable tech solutions that automate your work and grow your business.
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <a href="/contact.html#quote" className="bg-primary-accent text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-cyan-600 transition duration-300 transform hover:scale-105">
                        Request a Quote
                    </a>
                    <a href="/contact.html" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-text transition duration-300 transform hover:scale-105">
                        Schedule a Consultation
                    </a>
                </div>
            </div>
        </section>
    );
}

function ServiceCard({ icon, title, desc, link }) {
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg transition duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="text-primary-accent mb-4 text-4xl">{icon}</div>
            <h3 className="text-xl font-semibold font-display text-primary-blue mb-3">{title}</h3>
            <p className="text-gray-600 mb-4">{desc}</p>
            <a href={link} className="font-semibold text-primary-accent hover:text-cyan-600 transition duration-300">
                Learn More &rarr;
            </a>
        </div>
    );
}

function ServicesOverview() {
    const services = [
        { id: 1, icon: <FaLaptopCode />, title: "Custom Software Development", desc: "Build the exact tool you need. Scalable, secure, and efficient.", link: "/software-development.html" },
        { id: 2, icon: <FaCode />, title: "Web Development", desc: "Modern digital experiences that engage your audience.", link: "/web-development.html" },
        { id: 3, icon: <FaMobileAlt />, title: "App Development", desc: "High-performance native and cross-platform mobile applications.", link: "/app-development.html" },
        { id: 4, icon: <FaUserTie />, title: "Tech Consulting", desc: "Strategic guidance to solve your toughest challenges.", link: "/consulting.html" },
    ];

    return (
        <section id="services" className="bg-light-bg py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold font-display text-center text-primary-text mb-4">Our Core Solutions</h2>
                <p className="text-lg text-center text-gray-700 mb-12">We provide the end-to-end technical expertise you need to succeed.</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map(s => <ServiceCard key={s.id} {...s} />)}
                </div>
            </div>
        </section>
    );
}

function App() {
    return (
        <>
            <Header activePage="home" />
            <main>
                <HeroSection />
                <AnimateOnScroll><ServicesOverview /></AnimateOnScroll>
                <AnimateOnScroll>
                    <section id="about" className="bg-primary-blue text-white py-20">
                        <div className="container mx-auto px-6 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Your Timely & Reliable Tech Partner</h2>
                            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
                                We built ConnecTED on a foundation of trust. We respect your deadlines, communicate clearly, and deliver robust solutions.
                            </p>
                        </div>
                    </section>
                </AnimateOnScroll>
                {/* ... Other sections would go here, simplified for brevity but you should render them all ... */}
                <AnimateOnScroll>
                    <section className="bg-white py-20">
                        <div className="container mx-auto px-6 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-text mb-4">See Our Work in Action</h2>
                            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
                                We don't just build solutions; we build results.
                            </p>
                            <a href="/portfolio.html" className="bg-primary-accent text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-cyan-600 transition duration-300 transform hover:scale-105">View Our Portfolio</a>
                        </div>
                    </section>
                </AnimateOnScroll>
            </main>
            <Footer />
        </>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
