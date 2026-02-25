"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle2, Search, Filter } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const MODULES = [
  {
    title: "SIE: Securities Industry Essentials",
    lessons: [
      "Knowledge of Capital Markets",
      "Understanding Products and Their Risks",
      "Trading, Customer Accounts and Settlement",
      "Overview of Regulatory Framework"
    ]
  },
  {
    title: "Series 7: General Securities Representative",
    lessons: [
      "Seeking Business for the Broker-Dealer",
      "Opening and Maintaining Customer Accounts",
      "Providing Investment Information",
      "Execution and Reporting of Transactions",
      "Options and Debt Instruments Deep Dive"
    ]
  },
  {
    title: "Series 66: Uniform Combined State Law",
    lessons: [
      "Economic Factors and Business Information",
      "Investment Vehicle Characteristics",
      "Client Investment Recommendations",
      "Laws, Regulations, and Guidelines"
    ]
  }
];

export default function CurriculumPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans flex flex-col">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Curriculum</h1>
            <p className="text-slate-400 text-lg max-w-2xl">
              Exhaustive, up-to-date, and designed for maximum retention. Our course material is updated weekly to reflect the latest FINRA exam patterns.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input 
                type="text" 
                placeholder="Search topics (e.g. Options, Margin, Ethics)..." 
                className="w-full bg-slate-900 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <button className="flex items-center gap-2 bg-slate-900 border border-white/10 rounded-xl px-6 py-4 font-bold hover:bg-slate-800 transition">
              <Filter size={18} /> Filters
            </button>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {MODULES.map((module, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-900/40 border border-white/5 rounded-3xl p-8 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-blue-600/20 p-3 rounded-2xl">
                    <BookOpen className="text-blue-500" size={24} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">{module.title}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {module.lessons.map((lesson, lIdx) => (
                    <div key={lIdx} className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors group">
                      <CheckCircle2 size={18} className="text-blue-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <span className="font-medium">{lesson}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
