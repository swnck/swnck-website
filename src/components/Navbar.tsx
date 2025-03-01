import { useState } from 'react'

const navLinks = [
    { id: 1, label: 'Home', href: '/' },
    { id: 2, label: 'About', href: '/about' },
    { id: 3, label: 'Projects', href: '/projects' },
    { id: 4, label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMobileMenuOpen((prev) => !prev)
    }

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 flex items-center justify-between px-4 py-4 bg-transparent z-50">
                <div className="text-3xl font-bold font-[VALORANT-FONT] text-white">
                    swnck.de
                </div>
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                <ul className="hidden lg:flex text-2xl  space-x-6 font-[JosefinSans-FONT]">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={link.href} className="hover:text-gray-300 transition-colors duration-300">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {mobileMenuOpen && (
                <div id="mobile-menu" className="lg:hidden fixed top-16 left-0 right-0 bg-black bg-opacity-80 text-white py-4">
                    <ul className="flex flex-col space-y-4 text-center">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={link.href}
                                    className="hover:text-gray-300 transition-colors duration-300 block"
                                    onClick={toggleMenu}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}
