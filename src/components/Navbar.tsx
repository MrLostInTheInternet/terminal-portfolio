import { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="flex flex-wrap justify-between items-center p-3 mt-2 md:p-5 bg-transparent text-[#d4d4d4]">
            {/* Logo */}
            <a href="/" className="flex items-center">
                <img src="/bitmap.svg" alt="Logo" className="md:mx-8 w-16 h-18 md:w-26 md:h-26" />
            </a>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
                <button onClick={toggleMobileMenu} className="text-white" name='logo-btn'>
                    <svg
                        aria-label='logo'
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                </button>
            </div>

            {/* Navigation links */}
            <div
                className={`${isMobileMenuOpen ? 'block' : 'hidden'
                    } md:flex flex-col md:flex-row mt-2 md:mt-0 md:mx-3`}
            >
                <a
                    href="/"
                    className="font-bold text-md md:text-lg mx-4 text-[#d4d4d4] cursor-pointer transition duration-300 hover:text-[#efa667] mb-2 md:mb-0"
                >
                    Home
                </a>
                <a
                    href="/projects"
                    className="font-bold text-md md:text-lg mx-4 text-[#d4d4d4] cursor-pointer transition duration-300 hover:text-[#efa667] mb-2 md:mb-0"
                >
                    Projects
                </a>
                <a
                    href="/about"
                    className="font-bold text-md md:text-lg mx-4 text-[#d4d4d4] cursor-pointer transition duration-300 hover:text-[#efa667] mb-2 md:mb-0"
                >
                    About Me
                </a>
                <a
                    href="/contact"
                    className="font-bold text-md md:text-lg mx-4 text-[#d4d4d4] cursor-pointer transition duration-300 hover:text-[#efa667] mb-2 md:mb-0"
                >
                    Contact Me
                </a>
                {/* Add more pages as needed */}
            </div>
        </nav>
    );
};

export default Navbar;
