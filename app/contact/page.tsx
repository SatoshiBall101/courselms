"use client";

import React from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans flex flex-col">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Have questions about our curriculum or enterprise solutions? Our team of financial educators is here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-slate-900/40 border border-white/5 rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email</p>
                      <p className="font-medium">support@financeelite.edu</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Phone</p>
                      <p className="font-medium">+1 (888) 555-0123</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Office</p>
                      <p className="font-medium">Wall St, New York, NY</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-600 rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-4">Live Q&A Support</h3>
                <p className="text-blue-100 mb-6 text-sm">
                  Our instructors are available Monday-Friday, 9AM-6PM EST for live tutoring support.
                </p>
                <button className="w-full bg-white text-blue-600 py-3 rounded-xl font-bold hover:bg-blue-50 text-sm transition-colors">
                  Open Support Chat
                </button>
              </div>
            </div>

            <div className="lg:col-span-2">
              <form className="bg-slate-900/40 border border-white/5 rounded-[2.5rem] p-8 md:p-12 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Subject</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 focus:outline-none focus:border-blue-500 transition-colors appearance-none">
                    <option>General Inquiry</option>
                    <option>Enterprise Solutions</option>
                    <option>Academic Support</option>
                    <option>Billing Question</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Message</label>
                  <textarea 
                    rows={6}
                    placeholder="Tell us how we can help..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                <button className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-500 transition-all flex items-center justify-center gap-2 w-full md:w-auto">
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
