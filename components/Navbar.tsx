"use client";

import React from 'react';
import { BarChart3, LogOut, User } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#020617]/70 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight z-10">
          <div className="bg-blue-600 p-1.5 rounded-lg">
            <BarChart3 className="text-white" size={20} />
          </div>
          <span>FINANCE<span className="text-blue-500 font-black">ELITE</span></span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link href="/curriculum" className="hover:text-white transition-colors">Curriculum</Link>
          <Link href="/methodology" className="hover:text-white transition-colors">Methodology</Link>
          <Link href="/success-stories" className="hover:text-white transition-colors">Success Stories</Link>
          <Link href="/enterprise" className="hover:text-white transition-colors">Enterprise</Link>
        </div>
        <div className="flex items-center gap-4 z-10">
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
                className="text-sm font-bold text-slate-300 hover:text-white transition hidden sm:block"
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
      </div>
    </nav>
  );
}
