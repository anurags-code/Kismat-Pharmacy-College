"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  // { href: "/admissions", label: "Admissions" },
  { href: "/courses", label: "Courses" },
  { href: "/committees", label: "Committees" },
  { href: "/faculties", label: "Faculties" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex justify-between items-center h-16">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 relative">
              <Image
                src="/assets/logo.png"
                alt="Kismat Pharmacy College Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-[#922704] font-extrabold text-lg leading-tight hidden sm:block">
              Kismat Pharmacy College
            </span>
            <span className="text-[#166534] font-bold text-base leading-tight sm:hidden">
              KPC
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    pathname === link.href
                      ? "bg-[#166534] text-white"
                      : "text-gray-700 hover:bg-[#dcfce7] hover:text-[#166534]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/admissions"
              className="hidden lg:inline-flex items-center px-4 py-2 bg-[#166534] text-white text-sm font-semibold rounded-md hover:bg-[#14532d] transition-colors duration-200"
            >
              Apply Now
            </Link>
            <button
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#166534]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-3">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      pathname === link.href
                        ? "bg-[#166534] text-white"
                        : "text-gray-700 hover:bg-[#dcfce7] hover:text-[#166534]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2 px-4">
                <Link
                  href="/admissions"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full text-center px-4 py-2 bg-[#166534] text-white text-sm font-semibold rounded-md hover:bg-[#14532d] transition-colors duration-200"
                >
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
