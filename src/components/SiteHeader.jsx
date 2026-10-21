import { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full fixed top-0 left-0 flex justify-between items-center z-50 border-b border-[#F3F4F6] bg-white/80 backdrop-blur-3xl px-4 sm:px-8 lg:px-12 py-4 sm:py-6 shadow-xs">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <img src="/logo.png" alt="Logo icon" className="w-8 h-8 object-contain" />
                <h1 className="text-2xl sm:text-3xl font-black tracking-tight">Right<span className="text-[#16A34A]">PICK</span></h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
                <ul className="flex items-center gap-8 font-medium text-[#4B5563]">
                    <li><a href="#home" className="hover:text-[#16A34A] transition">Home</a></li>
                    <li><a href="#services" className="hover:text-[#16A34A] transition">Services</a></li>
                    <li><a href="#contact" className="hover:text-[#16A34A] transition">Contact Us</a></li>
                </ul>
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
                <button className="bg-[#F3F4F6] border border-[#E5E7EB] shadow-xs px-6 py-2 rounded-xl font-medium cursor-pointer hover:bg-gray-100 transition">
                    Free Demo
                </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="md:hidden p-2 text-gray-700 focus:outline-hidden cursor-pointer"
                aria-label="Toggle Menu"
            >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white border-b border-[#E5E7EB] shadow-lg py-6 px-6 flex flex-col gap-4 md:hidden">
                    <nav>
                        <ul className="flex flex-col gap-4 font-medium text-[#4B5563]">
                            <li>
                                <a 
                                    href="#home" 
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block hover:text-[#16A34A]"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#services" 
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block hover:text-[#16A34A]"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#contact" 
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block hover:text-[#16A34A]"
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <button 
                        onClick={() => setIsMenuOpen(false)}
                        className="w-full bg-[#16A34A] text-white py-2.5 rounded-xl font-medium cursor-pointer shadow-sm mt-2"
                    >
                        Free Demo
                    </button>
                </div>
            )}
        </header>
    );
}

export default Header;