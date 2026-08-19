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
        <section id="home" className="relative flex items-center justify-center min-h-[500px] md:min-h-[700px] lg:min-h-[80vh] overflow-hidden">
            <picture className="absolute inset-0 w-full h-full">
                <img src="/images/hero.jpeg" alt="Team collaborating" className="absolute inset-0 w-full h-full object-cover" />
            </picture>
            <div className="absolute inset-0 bg-black opacity-60 pointer-events-none"></div>

            {/* Ambient glows */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-accent/15 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="relative z-10 container mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-5">
                    Turn Your <br className="sm:hidden" />
                    <span className="text-cyan-400" ref={el}></span>
                </h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10">
                    ConnecTED delivers timely, reliable tech solutions that automate your work and grow your business.
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <a href="/contact.html#quote" className="bg-primary-accent text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-cyan-600 hover:shadow-[0_0_20px_rgba(0,191,255,0.4)] transition duration-300 transform hover:scale-105">
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

function ServiceCard({ icon, code, title, desc, link }) {
    return (
        <div className="group bg-white p-8 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:border-primary-accent hover:shadow-[0_0_20px_rgba(0,191,255,0.15)] hover:-translate-y-1 relative overflow-hidden">
            {/* Laser scanner element */}
            <div className="laser-scanner absolute left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"></div>

            <div className="font-mono text-[10px] text-gray-400 mb-4 tracking-wider">{code}</div>
            <div className="text-primary-accent mb-4 text-4xl">{icon}</div>
            <h3 className="text-xl font-semibold font-display text-primary-blue mb-3">{title}</h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">{desc}</p>
            <a href={link} className="font-mono font-semibold text-xs text-primary-accent hover:text-cyan-600 transition duration-300 flex items-center gap-1">
                learn_more() &rarr;
            </a>
        </div>
    );
}

function ServicesOverview() {
    const services = [
        { id: 1, icon: <FaLaptopCode />, code: "// 01_SOFTWARE_BUILD", title: "Custom Software Development", desc: "Build the exact tool you need. Scalable, secure, and efficient.", link: "/software-development" },
        { id: 2, icon: <FaCode />, code: "// 02_WEB_INTERFACE", title: "Web Development", desc: "Modern digital experiences that engage your audience.", link: "/web-development" },
        { id: 3, icon: <FaMobileAlt />, code: "// 03_MOBILE_BUILD", title: "App Development", desc: "High-performance native and cross-platform mobile applications.", link: "/app-development" },
        { id: 4, icon: <FaUserTie />, code: "// 04_TECH_ARCH", title: "Tech Consulting", desc: "Strategic guidance to solve your toughest challenges.", link: "/consulting" },
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


function InteractiveTerminal() {
    const [history, setHistory] = useState([
        { type: 'input', text: 'connected init --client "Soccer Africa"' },
        { type: 'comment', text: '// Bootstrapping mobile academy app...' },
        { type: 'success', text: '[✔] Core Performance Engine loaded' },
        { type: 'success', text: '[✔] Offline synchronization service ready' },
        { type: 'input', text: 'connected deploy --production' },
        { type: 'warn', text: 'Uploading static assets & PWA configuration...' },
        { type: 'info', text: '[SUCCESS] Project is live at soccerafricaint.com' }
    ]);
    const [inputValue, setInputValue] = useState('');

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            const command = inputValue.trim().toLowerCase();
            const newHistory = [...history, { type: 'input', text: inputValue }];

            if (command === 'help') {
                newHistory.push({ type: 'output', text: 'Available commands: services, status, clear, help' });
            } else if (command === 'services') {
                newHistory.push({ type: 'output', text: 'Solutions: Custom Software, Web Dev, Mobile Apps, Consulting' });
            } else if (command === 'status') {
                newHistory.push({ type: 'output', text: 'System: Active | Latency: 42ms | Deployments: Stable' });
            } else if (command === 'clear') {
                setHistory([]);
                setInputValue('');
                return;
            } else if (command === '') {
                // Do nothing
            } else {
                newHistory.push({ type: 'error', text: `Command not found: ${inputValue}. Type "help" for a list of commands.` });
            }

            setHistory(newHistory);
            setInputValue('');
        }
    };

    return (
        <div className="w-full rounded-lg overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl font-mono text-left text-xs md:text-sm">
            {/* Terminal Header */}
            <div className="flex items-center space-x-2 px-4 py-3 bg-slate-900 border-b border-slate-950">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-slate-500 text-xs pl-2">connected-cli.sh</span>
            </div>
            {/* Terminal Content */}
            <div className="p-5 space-y-2 text-slate-300 max-h-64 overflow-y-auto">
                {history.map((line, idx) => {
                    if (line.type === 'input') {
                        return <p key={idx}><span className="text-cyan-400">$</span> {line.text}</p>;
                    } else if (line.type === 'comment') {
                        return <p key={idx} className="text-slate-500">{line.text}</p>;
                    } else if (line.type === 'success') {
                        return <p key={idx} className="text-emerald-400">{line.text}</p>;
                    } else if (line.type === 'warn') {
                        return <p key={idx} className="text-yellow-400">{line.text}</p>;
                    } else if (line.type === 'info') {
                        return <p key={idx} className="text-emerald-500 font-bold">{line.text}</p>;
                    } else if (line.type === 'error') {
                        return <p key={idx} className="text-red-400">{line.text}</p>;
                    } else {
                        return <p key={idx} className="text-gray-400">{line.text}</p>;
                    }
                })}
                <div className="flex items-center gap-2">
                    <span className="text-cyan-400 shrink-0">$</span>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="bg-transparent text-slate-200 outline-none w-full border-none p-0 focus:ring-0"
                        placeholder="Type 'help'..."
                    />
                </div>
            </div>
        </div>
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
                                <InteractiveTerminal />
                            </div>
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
