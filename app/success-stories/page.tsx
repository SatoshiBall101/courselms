"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Award, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const STORIES = [
  {
    name: "Alexandra Reed",
    role: "Investment Banking Analyst at Goldman Sachs",
    image: "https://i.pravatar.cc/150?u=alex",
    quote: "I was terrified of the Series 7 options section. Finance Elite's visual breakdowns turned my weakest area into my highest scoring module on exam day.",
    score: "92%",
    time: "3 Weeks"
  },
  {
    name: "Marcus Thorne",
    role: "Financial Advisor at Morgan Stanley",
    image: "https://i.pravatar.cc/150?u=marcus",
    quote: "The adaptive quizzes are a game changer. It stopped wasting my time on things I already knew and pushed me on the complex state laws for my Series 66.",
    score: "88%",
    time: "4 Weeks"
  },
  {
    name: "Sarah Jenkins",
    role: "Independent Wealth Manager",
    image: "https://i.pravatar.cc/150?u=sarah",
    quote: "Moving from a non-finance background, I needed something that didn't just use jargon. This is the only platform that actually explains the 'why'.",
    score: "85%",
    time: "2.5 Weeks"
  },
  {
    name: "David Chen",
    role: "Compliance Associate at JPMorgan",
    image: "https://i.pravatar.cc/150?u=david",
    quote: "The cheat sheets alone are worth the price. I passed my SIE and S7 back-to-back using only Finance Elite. Highly recommend to any career switcher.",
    score: "94%",
    time: "5 Weeks"
  }
];

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans flex flex-col">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Success Stories</h1>
              <p className="text-slate-400 text-lg">
                Join 15,000+ financial professionals who cleared their exams on the first attempt with Finance Elite.
              </p>
            </div>
            <div className="bg-blue-600/10 border border-blue-500/20 rounded-2xl p-6 flex items-center gap-4">
              <div className="bg-blue-600 p-3 rounded-xl">
                <Award className="text-white" size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Pass Guarantee</p>
                <p className="text-xl font-black">94% First-Time</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {STORIES.map((story, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-900/40 border border-white/5 rounded-[2rem] p-8 md:p-10 relative group"
              >
                <Quote className="absolute top-8 right-8 text-white/5 group-hover:text-blue-500/10 transition-colors" size={80} />
                
                <div className="flex items-center gap-4 mb-8">
                  <img src={story.image} alt={story.name} className="w-16 h-16 rounded-full border-2 border-blue-500/30" />
                  <div>
                    <h3 className="text-xl font-bold">{story.name}</h3>
                    <p className="text-sm text-slate-500">{story.role}</p>
                  </div>
                </div>
                
                <p className="text-slate-300 text-lg italic leading-relaxed mb-8 relative z-10">
                  &ldquo;{story.quote}&rdquo;
                </p>
                
                <div className="grid grid-cols-2 gap-4 pt-8 border-t border-white/5">
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-1">Exam Score</span>
                    <span className="text-2xl font-black text-blue-400">{story.score}</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-1">Study Period</span>
                    <span className="text-2xl font-black text-slate-200">{story.time}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 bg-slate-900/30 border border-white/5 rounded-[3rem] p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to be our next success story?</h2>
            <button className="bg-white text-black px-10 py-4 rounded-xl font-bold hover:bg-slate-200 transition-all inline-flex items-center gap-2">
              Start Your Journey <ExternalLink size={18} />
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
