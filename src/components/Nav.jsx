import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Nav = () => {
    const location = useLocation();

    const Links = [
        { name: "Accueil", link: "/" },
        { name: "Demander votre financement", link: "/Demandefinance" },
        { name: "Contactez-nous", link: "/ContactForm" },
        { name: "Nos financements", link: "/NosFinances" },
    ];
    const [open, setOpen] = useState(false);
    const isActive = (path) => location.pathname === path;

    return (
        <header className="bg-white shadow-md sticky top-0 z-50 md:pr-10">
            <div className="flex items-center justify-between flex-wrap px-6 py-3 md:px-10 ">

                {/* Bloc logo + Google Translate + burger */}
                <div className="flex items-center justify-between space-x-4 md:space-x-10 w-full md:w-auto">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img src="/assets/logo.png" alt="Logo" className="w-16" />
                    </Link>

                    {/* Google Translate */}
                    <div id="google_translate_element" className="ml-20 text-sm "></div>

                    {/* Menu burger */}
                    <div
                        onClick={() => setOpen(!open)}
                        className="text-2xl cursor-pointer ml-auto md:hidden"
                    >
                        <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                    </div>
                </div>

                {/* Liens de navigation */}
                <ul
                    className={`md:flex md:items-center md:space-x-6 space-y-6 md:space-y-0 w-full md:w-auto transition-all duration-300 ease-in-out ${open ? 'block mt-4' : 'hidden md:block'}`}
                >
                    {Links.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.link}
                                className={`block text-sm md:text-base font-medium ${
                                    isActive(link.link)
                                        ? 'text-yellow-500 underline underline-offset-4'
                                        : 'text-gray-800 hover:text-yellow-500'
                                }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Nav;
