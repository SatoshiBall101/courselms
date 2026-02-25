"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, PieChart, Briefcase } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SOLUTIONS = [
  {
    icon: <Users className="text-blue-500" size={24} />,
    title: "Batch Enrollment",
    desc: "Easily manage hundreds of candidates across multiple departments with centralized billing and dashboarding."
  },
  {
    icon: <PieChart className="text-purple-500" size={24} />,
    title: "Performance Analytics",
    desc: "Real-time visibility into candidate progress, identifying those at risk before their exam date."
  },
  {
    icon: <Briefcase className="text-emerald-500" size={24} />,
    title: "Custom Pathways",
    desc: "Tailor the curriculum to your firm's specific compliance standards and internal processes."
  }
];

export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans flex flex-col">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full text-blue-400 text-xs font-bold mb-8"
              >
                <Building2 size={14} /> FOR FINANCIAL INSTITUTIONS
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
                Scale Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                  Talent Pipeline.
                </span>
              </h1>
              <p className="text-slate-400 text-xl leading-relaxed mb-10">
                The most reliable way to get your incoming class of analysts and advisors licensed. Reduced overhead, higher pass rates, faster onboarding.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-500 transition shadow-lg shadow-blue-600/20">
                  Request a Demo
                </button>
                <button className="bg-slate-900 border border-white/10 px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition">
                  Download Case Study
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full" />
              <div className="relative bg-slate-900/50 border border-white/10 rounded-[2.5rem] p-8 md:p-12 overflow-hidden backdrop-blur-sm">
                <div className="space-y-8">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Global Class Performance</span>
                    <span className="text-blue-500 font-bold">Live</span>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
                      <span className="text-3xl font-black block mb-2">96%</span>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-tight">Avg. Readiness</span>
                    </div>
                    <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
                      <span className="text-3xl font-black block mb-2">124</span>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-tight">Active Seats</span>
                    </div>
                  </div>
                  <div className="h-32 w-full bg-gradient-to-t from-blue-500/20 to-transparent rounded-2xl relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500" />
                    {/* Simplified wave pattern */}
                    <svg className="absolute bottom-1 w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 100">
                      <path d="M0 80 Q 100 20, 200 80 T 400 80" fill="none" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SOLUTIONS.map((sol, idx) => (
              <div key={idx} className="bg-slate-900/40 border border-white/5 rounded-3xl p-8 hover:bg-slate-900/60 transition-colors">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6">
                  {sol.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{sol.title}</h3>
                <p className="text-slate-400 leading-relaxed">{sol.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
