

'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="bg-white lg:bg-opacity-80 hover:bg-opacity-100 shadow-lg sticky lg:top-3 z-50 mx-auto max-w-screen-xl rounded-md duration-500 w-full select-none backdrop-blur-sm">
            <div className="flex justify-between items-center p-4 lg:py-3 px-6 sm:px-10">
                {/* Logo */}
                <Image
                    src="/HPV_logo_green.png"
                    alt="Logo"
                    width={180}
                    height={60}
                    className="text-green-600"
                />

                {/* Botón de menú hamburguesa (solo en móviles) */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:hidden text-gray-600 hover:text-green-600 font-bold text-2xl duration-200 focus:outline-none"
                >
                    ☰
                </button>

                {/* Menú de navegación */}
                <div
                    className={`absolute top-0 right-0 h-screen w-64 shadow-lg transform ${
                        menuOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 ease-in-out lg:static lg:h-auto lg:w-auto lg:shadow-none lg:translate-x-0 lg:flex bg-white/90 md:bg-white/0`}
                >
                    <ul className="flex flex-col lg:flex-row lg:gap-6 text-black uppercase font-semibold items-center p-6 lg:p-0 space-y-4 lg:space-y-0">
                        <li 
                            className={`hover:text-green-500 p-2 cursor-pointer ${
                                pathname === "/" ? "text-green-600 underline decoration-2 underline-offset-[8px]" : ""
                            }`}
                        >
                            <Link href="/" onClick={() => setMenuOpen(false)}>Inicio</Link>
                        </li>
                        <li 
                            className={`hover:text-green-500 p-2 cursor-pointer ${
                                pathname === "/nosotros" ? "text-green-600 underline decoration-2 underline-offset-[8px]" : ""
                            }`}
                        >
                            <Link href="/nosotros" onClick={() => setMenuOpen(false)}>Nosotros</Link>
                        </li>
                        <li 
                            className={`hover:text-green-500 p-2 cursor-pointer ${
                                pathname === "/profesionales" ? "text-green-600 underline decoration-2 underline-offset-[8px]" : ""
                            }`}
                        >
                            <Link href="/profesionales" onClick={() => setMenuOpen(false)}>Profesionales</Link>
                        </li>
                        <li 
                            className={`hover:text-green-500 p-2 cursor-pointer ${
                                pathname === "/obrassociales" ? "text-green-600 underline decoration-2 underline-offset-[8px]" : ""
                            }`}
                        >
                            <Link href="/obrassociales" onClick={() => setMenuOpen(false)}>Obras Sociales</Link>
                        </li>
                        <li>
                            <button 
                                className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-white hover:text-green-600 hover:shadow-md duration-200" 
                                onClick={() => {
                                    setMenuOpen(false);
                                    window.open('https://turnos.hospitaldelavilla.com.ar/', '_blank')
                                }}
                            >
                                Turnos Online
                            </button>
                        </li>
                        <li>
                            <button 
                                className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-white hover:text-green-600 hover:shadow-md duration-200" 
                                onClick={() => {
                                    setMenuOpen(false);
                                    window.open('https://geclisaweb.hospitaldelavilla.com.ar/login', '_blank')
                                }}
                            >
                                Sistema GECLISA
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;


