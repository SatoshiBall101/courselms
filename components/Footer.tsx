"use client";

import React from 'react';
import { BarChart3, Lock } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#01040f] pt-20 pb-10 px-6 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight">
          <div className="bg-blue-600 p-1.5 rounded-lg">
            <BarChart3 className="text-white" size={18} />
          </div>
          <span>FINANCE<span className="text-blue-500 font-black">ELITE</span></span>
        </Link>
        
        <div className="flex gap-8 text-sm font-medium text-slate-400">
          <Link href="/terms" className="hover:text-white transition">Terms</Link>
          <Link href="/privacy" className="hover:text-white transition">Privacy</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-slate-600 text-xs uppercase tracking-wider font-medium">
          © 2026 FINANCE ELITE. Not affiliated with FINRA or NASAA.
        </p>
        <div className="flex items-center gap-2 text-slate-600 text-xs">
          <Lock size={12} /> 
          <span className="tracking-widest uppercase font-bold">Secure 256-bit Encryption</span>
        </div>
      </div>
    </footer>
  );
}
