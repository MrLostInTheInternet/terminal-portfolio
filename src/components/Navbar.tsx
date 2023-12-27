import { useState } from 'react';

const Navbar = () => {
    const [focused, setFocused] = useState(false);

    const handleClick = () => {
        setFocused(!focused);
    };

    return (
        <nav className="flex flex-wrap justify-between items-center p-5 md:p-10 bg-transparent text-white">
            {/* Logo */}
            <a href="/" className="flex items-center">
                <img src="/bitmap.svg" alt="Logo" className="w-20 h-20 md:w-32 md:h-32" />
            </a>

            {/* Navigation links */}
            <div onClick={handleClick} className="flex flex-col md:flex-row mt-2 md:mt-0 md:space-x-5">
                <a href="/" className={` font-bold text-lg md:text-xl ${focused ? 'text-[#efa667]' : 'text-[#d4d4d4]'} cursor-pointer transition duration-300 hover:text-[#efa667]`}>Home</a>
                <a href="/projects" className={` font-bold text-lg md:text-xl ${focused ? 'text-[#efa667]' : 'text-[#d4d4d4]'} cursor-pointer transition duration-300 hover:text-[#efa667]`}>Projects</a>
                <a href="/about" className={` font-bold text-lg md:text-xl ${focused ? 'text-[#efa667]' : 'text-[#d4d4d4]'} cursor-pointer transition duration-300 hover:text-[#efa667]`}>About</a>
                <a href="/contact" className={` font-bold text-lg md:text-xl ${focused ? 'text-[#efa667]' : 'text-[#d4d4d4]'} cursor-pointer transition duration-300 hover:text-[#efa667]`}>Contact</a>
                {/* Add more pages as needed */}
            </div>

            {/* Social logos */}
            <div className="mt-4 md:mt-0">
                <a href="/contact" target="_blank" rel="">
                    <img src="/favicon.svg" alt="Social Logo" className="w-8 h-8 md:w-10 md:h-10 mx-2" />
                </a>
                {/* Add more social logos as needed */}
            </div>
        </nav>
    );
};

export default Navbar;
