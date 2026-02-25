"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, Brain, BarChart2, ShieldCheck, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PILLARS = [
  {
    icon: <Brain className="text-blue-400" size={32} />,
    title: "Cognitive Load Management",
    desc: "We split complex regulations into 'micro-units' that fit naturally into how the human brain processes new data. No more overwhelm."
  },
  {
    icon: <Target className="text-purple-400" size={32} />,
    title: "Adaptive Spaced Repetition",
    desc: "Our engine tracks your performance and re-surfaces difficult topics at mathematically optimal intervals to cement long-term memory."
  },
  {
    icon: <Zap className="text-emerald-400" size={32} />,
    title: "Active Recall Training",
    desc: "Instead of passive reading, we force your brain to retrieve information through rapid-fire quizzes and decision-making scenarios."
  }
];

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans flex flex-col">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">The Elite Method</h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              We didn&apos;t just build a course; we built a high-performance learning engine. Based on decades of research in educational psychology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {PILLARS.map((pillar, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-900/50 border border-white/5 rounded-[2.5rem] p-10 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-3xl rounded-full group-hover:bg-blue-600/10 transition-colors" />
                <div className="mb-8">{pillar.icon}</div>
                <h2 className="text-2xl font-bold mb-4">{pillar.title}</h2>
                <p className="text-slate-400 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full -mr-20 -mt-20" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for the modern professional.</h2>
                <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                  The Series exams are harder than they&apos;ve ever been. Static textbooks and 8-hour lectures don&apos;t work for today&apos;s high-pace lifestyle. Our platform adapts to you.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="text-blue-300" size={20} />
                    <span className="font-semibold">Save 40% more time on average</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="text-blue-300" size={20} />
                    <span className="font-semibold">Guaranteed pass or full refund</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#020617]/40 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                <div className="flex items-center justify-between mb-8">
                  <h4 className="font-bold">Learning Curve Progress</h4>
                  <BarChart2 className="text-blue-400" size={20} />
                </div>
                <div className="space-y-6">
                  {[
                    { label: 'Retention Rate', value: '92%', width: 'w-[92%]', color: 'bg-blue-400' },
                    { label: 'Application Speed', value: '85%', width: 'w-[85%]', color: 'bg-indigo-400' },
                    { label: 'Confidence Score', value: '98%', width: 'w-[98%]', color: 'bg-purple-400' },
                  ].map((stat, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-xs font-bold mb-2 uppercase tracking-wider text-slate-300">
                        <span>{stat.label}</span>
                        <span>{stat.value}</span>
                      </div>
                      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className={`h-full ${stat.color} ${stat.width}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
