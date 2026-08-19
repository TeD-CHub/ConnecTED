import React, { useState } from 'react';

export default function Header({ activePage }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Helper to determine link classes
    const getLinkClass = (page) => {
        const baseClass = "text-gray-600 hover:text-primary-blue font-medium transition duration-300";
        const activeClass = "text-primary-accent font-semibold font-mono";
        return activePage === page ? activeClass : baseClass;
    };

    const renderLink = (page, label, href) => {
        const isActive = activePage === page;
        return (
            <a href={href} className={getLinkClass(page)}>
                {isActive ? `[ ${label.toLowerCase()} ]` : label}
            </a>
        );
    };

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center relative">

                <a href="/" className="flex items-center gap-3 group">
                    <div className="h-10 w-10 shrink-0 rotate-45 overflow-hidden rounded-lg">
                        <img
                            src="/images/Logo.png"
                            alt="ConnecTED Logo"
                            className="h-full w-full object-cover -rotate-45 scale-[1.42]"
                        />
                    </div>
                    <span className="font-sans text-2xl text-[#0A2A4E] tracking-tight">
                        connec<span className="text-primary-accent font-mono font-bold">[TED]</span>
                    </span>
                </a>

                <div className="hidden md:flex space-x-8 items-center">
                    {renderLink('home', 'Home', '/')}
                    {renderLink('about', 'About', activePage === 'home' ? '#about' : '/#about')}
                    {renderLink('services', 'Services', activePage === 'home' ? '#services' : '/#services')}
                    {renderLink('portfolio', 'Portfolio', '/portfolio')}
                    {renderLink('contact', 'Contact', '/contact')}
                </div>

                <a
                    href="/contact#quote"
                    className="hidden md:block bg-primary-accent text-white px-5 py-2 rounded-full font-semibold hover:bg-cyan-600 hover:shadow-[0_0_20px_rgba(0,191,255,0.4)] transition duration-300"
                >
                    Request a Quote
                </a>

                <div className="md:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`md:hidden transition-all duration-300 ease-out absolute top-full left-0 w-full bg-white shadow-lg overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100 visible pointer-events-auto' : 'max-h-0 opacity-0 invisible pointer-events-none'}`}
            >
                <a href="/" className="block px-6 py-4 text-gray-600 hover:bg-light-bg">Home</a>
                <a href={activePage === 'home' ? '#about' : '/#about'} className="block px-6 py-4 text-gray-600 hover:bg-light-bg">About</a>
                <a href={activePage === 'home' ? '#services' : '/#services'} className="block px-6 py-4 text-gray-600 hover:bg-light-bg">Services</a>
                <a href="/portfolio" className="block px-6 py-4 text-gray-600 hover:bg-light-bg">Portfolio</a>
                <a href="/contact" className="block px-6 py-4 text-gray-600 hover:bg-light-bg">Contact</a>
                <a href="/contact#quote" className="block px-6 py-4 text-primary-accent font-semibold hover:bg-light-bg">Request a Quote</a>
            </div>
        </header>
    );
}
