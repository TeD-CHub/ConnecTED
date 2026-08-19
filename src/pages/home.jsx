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
            <div className="absolute inset-0 bg-black opacity-60 pointer-events-none"></div>

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
        { id: 1, icon: <FaLaptopCode />, title: "Custom Software Development", desc: "Build the exact tool you need. Scalable, secure, and efficient.", link: "/software-development" },
        { id: 2, icon: <FaCode />, title: "Web Development", desc: "Modern digital experiences that engage your audience.", link: "/web-development" },
        { id: 3, icon: <FaMobileAlt />, title: "App Development", desc: "High-performance native and cross-platform mobile applications.", link: "/app-development" },
        { id: 4, icon: <FaUserTie />, title: "Tech Consulting", desc: "Strategic guidance to solve your toughest challenges.", link: "/consulting" },
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


function FeaturedProject() {
    return (
        <section className="py-20 bg-white border-t border-gray-100 relative overflow-hidden">
            <div className="absolute top-10 right-10 w-64 h-64 bg-primary-accent/5 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold font-display text-center text-primary-text mb-4">Latest Success Story</h2>
                <p className="text-lg text-center text-gray-700 mb-12 max-w-2xl mx-auto">See how we partner with our clients to deliver real, production-ready impact.</p>
                
                <div className="max-w-4xl mx-auto bg-slate-900 text-white rounded-2xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col md:flex-row transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,191,255,0.15)] hover:border-slate-700">
                    <div className="md:w-1/2 bg-slate-950 flex items-center justify-center p-8 border-b md:border-b-0 md:border-r border-slate-800">
                        <img src="/images/SoccerAfrica.jpg" alt="Soccer Africa Logo" className="max-h-48 object-contain rounded-lg transition-transform duration-500 hover:scale-105" />
                    </div>
                    <div className="md:w-1/2 p-8 flex flex-col justify-center">
                        <span className="font-mono text-xs text-primary-accent tracking-widest uppercase">// FEATURED_CASE_STUDY</span>
                        <h3 className="text-2xl font-bold font-display mt-2 mb-3">Soccer Africa App</h3>
                        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                            We designed and deployed a custom mobile and web platform for Soccer Africa Football Academy to manage youth training programs, track stats, and automate program scheduling across regional schools.
                        </p>
                        <div>
                            <a href="/portfolio" className="inline-flex items-center gap-2 bg-primary-accent text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-cyan-600 transition duration-300 transform hover:scale-105">
                                View in Portfolio &rarr;
                            </a>
                        </div>
                    </div>
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
                <AnimateOnScroll><FeaturedProject /></AnimateOnScroll>
                <AnimateOnScroll>
                    <section id="about" className="bg-primary-blue text-white py-20 relative overflow-hidden">
                        {/* Grid overlay */}
                        <div className="absolute inset-0 bg-tech-grid opacity-[0.05] pointer-events-none"></div>
                        <div className="container mx-auto px-6 relative z-10">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div className="text-left">
                                    <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">// ABOUT_US</span>
                                    <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 mt-2">Your Timely & Reliable Tech Partner</h2>
                                    <p className="text-lg text-gray-200 mb-6">
                                        We built ConnecTED on a foundation of trust. We respect your deadlines, communicate clearly, and deliver robust, production-ready solutions.
                                    </p>
                                    <p className="text-base text-gray-300">
                                        Whether you are a startup needing a rapid prototype or an established business seeking workflow automation, our engineering pipeline is designed to build and scale your ideas efficiently.
                                    </p>
                                </div>
                                <div className="w-full rounded-lg overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl font-mono text-left text-xs md:text-sm">
                                    {/* Terminal Header */}
                                    <div className="flex items-center space-x-2 px-4 py-3 bg-slate-900 border-b border-slate-950">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        <span className="text-slate-500 text-xs pl-2">connected-cli.sh</span>
                                    </div>
                                    {/* Terminal Content */}
                                    <div className="p-5 space-y-2 text-slate-300">
                                        <p><span className="text-cyan-400">$</span> connected init --client "Soccer Africa"</p>
                                        <p className="text-slate-500">// Bootstrapping mobile academy app...</p>
                                        <p className="text-emerald-400">[✔] Core Performance Engine loaded</p>
                                        <p className="text-emerald-400">[✔] Offline synchronization service ready</p>
                                        <p><span className="text-cyan-400">$</span> connected deploy --production</p>
                                        <p className="text-yellow-400">Uploading static assets & PWA configuration...</p>
                                        <p className="text-emerald-500 font-bold">[SUCCESS] Project is live at soccerafricaint.com</p>
                                    </div>
                                </div>
                            </div>
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
