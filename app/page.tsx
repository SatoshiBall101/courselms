"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, CheckCircle2, Play, Star, GraduationCap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

const COURSES = [
  { id: "sie", title: "SIE Mastery", desc: "The foundation. 1,500+ practice questions and video lessons.", price: 149, popular: false },
  { id: "s7", title: "Series 7 Top-Off", desc: "Comprehensive options & suitability deep-dive. Our most popular course.", price: 299, popular: true },
  { id: "s66", title: "Series 66 Uniform", desc: "State laws and fiduciary responsibility simplified for quick mastery.", price: 199, popular: false },
];

const FEATURES = [
  { icon: <GraduationCap className="text-blue-500" size={24} />, title: "Bite-Sized Lessons", desc: "Complex financial concepts broken down into easy-to-digest 5-minute modules." },
  { icon: <Star className="text-purple-500" size={24} />, title: "Adaptive Quizzes", desc: "Our algorithm identifies your weak spots and drills them until you achieve mastery." },
  { icon: <ShieldCheck className="text-emerald-500" size={24} />, title: "Instant Feedback", desc: "Get detailed explanations for every question immediately after answering." },
];

export default function FinanceHome() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans overflow-hidden selection:bg-blue-500/30 flex flex-col">
      <Navbar />

      <main>
        {/* BACKGROUND EFFECTS */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-40 -left-40 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

        {/* HERO SECTION */}
        <section className="relative pt-48 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full text-blue-400 text-xs font-bold mb-8 backdrop-blur-md"
          >
            <ShieldCheck size={14} /> 
            <span className="tracking-wide">94% FIRST-TIME PASS RATE</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.05] max-w-5xl"
          >
            The Gold Standard for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
              FINRA Exam Prep.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
          >
            Stop memorizing. Start understanding. Our proprietary framework is designed to help modern financial professionals pass on the first try.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link 
              href={user ? "/dashboard" : "/login"}
              className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-500 transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.4)]"
            >
              {user ? "VIEW DASHBOARD" : "VIEW COURSES"} <ArrowRight size={18} />
            </Link>
            <button className="bg-slate-800/50 border border-white/10 px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all backdrop-blur-sm">
              <Play size={18} className="text-slate-300" /> WATCH DEMO
            </button>
          </motion.div>

          {/* SOCIAL PROOF */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-20 pt-10 border-t border-white/5 w-full max-w-4xl"
          >
            <p className="text-sm text-slate-500 font-medium mb-6 uppercase tracking-widest">Trusted by professionals at top firms</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {['Goldman Sachs', 'Morgan Stanley', 'JPMorgan', 'Merrill Lynch'].map(firm => (
                <div key={firm} className="text-xl md:text-2xl font-black font-serif tracking-tighter">{firm}</div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* FEATURES SECTION */}
        <section className="bg-[#040b1e] border-y border-white/5 py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Study Smarter, Not Harder</h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">Our platform is built on cognitive science principles to maximize retention and minimize study time.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {FEATURES.map((feat, idx) => (
                <div key={idx} className="bg-[#020617] p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors">
                  <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 border border-white/5">
                    {feat.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COURSE CARDS */}
        <section className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Choose Your Path</h2>
                <p className="text-slate-400 text-lg max-w-xl">Everything you need to pass, neatly packaged into comprehensive, easy-to-follow courses.</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400 bg-slate-900/50 px-4 py-2 rounded-full border border-white/5">
                <Star className="text-yellow-500" size={16} fill="currentColor" />
                <span>4.9/5 average rating</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {COURSES.map((course) => (
                <motion.div 
                  key={course.id}
                  whileHover={{ y: -8 }}
                  className={`relative bg-slate-900/40 p-8 rounded-[2rem] backdrop-blur-md transition-all flex flex-col ${
                    course.popular 
                      ? 'border-2 border-blue-500 shadow-[0_0_40px_rgba(37,99,235,0.15)]' 
                      : 'border border-white/5 hover:border-white/15'
                  }`}
                >
                  {course.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider">
                      MOST POPULAR
                    </div>
                  )}
                  
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                      course.popular ? 'bg-blue-500/20 text-blue-400' : 'bg-slate-800 text-slate-300'
                    }`}>
                      <GraduationCap size={28} />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{course.title}</h3>
                  <p className="text-slate-400 text-sm mb-8 leading-relaxed min-h-[60px]">
                    {course.desc}
                  </p>
                  
                  <div className="space-y-4 mb-10 flex-grow">
                    {['Video Curriculum', 'Practice Question Bank', 'Printable Cheat Sheets', '1-on-1 Support'].map((feat) => (
                      <div key={feat} className="flex items-center gap-3 text-sm text-slate-300 font-medium">
                        <div className="bg-blue-500/10 p-1 rounded-full">
                          <CheckCircle2 size={14} className="text-blue-400" />
                        </div>
                        {feat}
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-8 border-t border-white/10 mt-auto flex flex-col gap-6">
                    <div>
                      <span className="text-sm text-slate-500 font-medium block mb-1">One-time payment</span>
                      <span className="text-4xl font-black">${course.price}</span>
                    </div>
                    <button className={`w-full py-4 rounded-xl font-bold text-sm transition-all ${
                      course.popular 
                        ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25' 
                        : 'bg-white text-black hover:bg-slate-200'
                    }`}>
                      ENROLL NOW
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
