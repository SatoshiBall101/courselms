"use client";

import React, { useState } from 'react';
import { BarChart3, LogOut, User, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "/curriculum", label: "Curriculum" },
    { href: "/methodology", label: "Methodology" },
    { href: "/success-stories", label: "Success Stories" },
    { href: "/enterprise", label: "Enterprise" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#020617]/70 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex justify-between items-center relative">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight z-10">
          <div className="bg-blue-600 p-1.5 rounded-lg">
            <BarChart3 className="text-white" size={20} />
          </div>
          <span>FINANCE<span className="text-blue-500 font-black">ELITE</span></span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4 z-10">
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <>
                <button 
                  onClick={() => logout()}
                  className="text-sm font-bold text-slate-400 hover:text-white transition flex items-center gap-2"
                >
                  <LogOut size={16} /> Log out
                </button>
                <Link 
                  href="/dashboard"
                  className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.2)] flex items-center gap-2"
                >
                  <User size={16} /> View Dashboard
                </Link>
              </>
            ) : (
              <>
                <Link 
                  href="/login"
                  className="text-sm font-bold text-slate-300 hover:text-white transition"
                >
                  Log in
                </Link>
                <Link 
                  href="/login"
                  className="bg-white hover:bg-slate-200 text-black px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-300 hover:text-white p-2 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#020617] border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className="text-lg font-medium text-slate-300 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-6 border-t border-white/5 flex flex-col gap-4">
                {user ? (
                  <>
                    <Link 
                      href="/dashboard"
                      className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-4 rounded-xl text-center font-bold transition-all"
                      onClick={() => setIsOpen(false)}
                    >
                      View Dashboard
                    </Link>
                    <button 
                      onClick={() => {
                        logout();
                        setIsOpen(false);
                      }}
                      className="text-slate-400 hover:text-white font-bold py-2 transition"
                    >
                      Log out
                    </button>
                  </>
                ) : (
                  <>
                    <Link 
                      href="/login"
                      className="bg-white hover:bg-slate-200 text-black px-6 py-4 rounded-xl text-center font-bold transition-all"
                      onClick={() => setIsOpen(false)}
                    >
                      Get Started
                    </Link>
                    <Link 
                      href="/login"
                      className="text-center text-slate-300 hover:text-white font-bold py-2 transition"
                      onClick={() => setIsOpen(false)}
                    >
                      Log in
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
