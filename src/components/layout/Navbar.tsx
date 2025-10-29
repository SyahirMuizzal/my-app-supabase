"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="w-full bg-white border-b shadow-sm fixed top-0 left-0 z-50">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">
          <Link href="/">MyLogo</Link>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex flex-row gap-10 items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-medium transition ${
                  pathname === link.href
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "text-gray-800 hover:text-gray-500"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Tombol hamburger (mobile only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <ul className="flex flex-col space-y-3 py-4 text-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block font-medium transition ${
                    pathname === link.href
                      ? "text-blue-600"
                      : "text-gray-800 hover:text-gray-500"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
