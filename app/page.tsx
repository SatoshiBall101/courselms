"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, BarChart3, GraduationCap, ArrowRight, CheckCircle2, Lock } from 'lucide-react';

const COURSES = [
  { id: "sie", title: "SIE Mastery", desc: "The foundation. 1,500+ practice questions.", price: 149 },
  { id: "s7", title: "Series 7 Top-Off", desc: "Comprehensive options & suitability deep-dive.", price: 299 },
  { id: "s66", title: "Series 66 Uniform", desc: "State laws and fiduciary responsibility simplified.", price: 199 },
];

export default function FinanceHome() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-md border-b border-white/5 px-10 py-5 flex justify-between items-center">
        <div className="flex items-center gap-2 text-xl font-bold tracking-tight">
          <BarChart3 className="text-blue-500" />
          <span>FINANCE<span className="text-blue-500">ELITE</span></span>
        </div>
        <div className="hidden md:flex gap-10 text-sm font-medium text-slate-400">
          <a href="#" className="hover:text-white transition">Curriculum</a>
          <a href="#" className="hover:text-white transition">Success Stories</a>
          <a href="#" className="hover:text-white transition">Enterprise</a>
        </div>
        <button 
          onClick={() => setIsLoggedIn(!isLoggedIn)}
          className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold transition-all shadow-lg shadow-blue-600/20"
        >
          {isLoggedIn ? "Access Portal" : "Get Started"}
        </button>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-40 pb-24 px-6 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full text-blue-400 text-xs font-bold mb-8"
        >
          <ShieldCheck size={14} /> 94% FIRST-TIME PASS RATE
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
          The Gold Standard for <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
            FINRA Exam Prep.
          </span>
        </h1>
        
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
          Stop memorizing. Start understanding. Our proprietary framework is designed for the modern financial professional.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-white text-black px-10 py-4 rounded-xl font-black flex items-center justify-center gap-2 hover:bg-slate-200 transition">
            VIEW COURSES <ArrowRight size={18} />
          </button>
          <button className="bg-slate-900 border border-white/10 px-10 py-4 rounded-xl font-bold hover:bg-slate-800 transition">
            WATCH DEMO
          </button>
        </div>
      </section>

      {/* COURSE CARDS */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COURSES.map((course) => (
            <motion.div 
              key={course.id}
              whileHover={{ y: -10 }}
              className="bg-slate-900/50 border border-white/5 p-8 rounded-3xl backdrop-blur-sm group hover:border-blue-500/50 transition-all"
            >
              <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600/20">
                <GraduationCap className="text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{course.title}</h3>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                {course.desc}
              </p>
              <ul className="space-y-3 mb-10">
                {['Cheat Sheets', 'Live Q&A', 'Mock Exams'].map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                    <CheckCircle2 size={14} className="text-blue-500" /> {feat}
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-black">${course.price}</span>
                <button className="text-blue-500 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  ENROLL NOW <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12 px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-4 opacity-50">
          <Lock size={14} /> 
          <span className="text-xs tracking-widest uppercase font-bold">Secure Bank-Level Encryption</span>
        </div>
        <p className="text-slate-600 text-[10px] uppercase tracking-tighter">
          © 2026 FINANCE ELITE. Not affiliated with FINRA or NASAA.
        </p>
      </footer>
    </div>
  );
}