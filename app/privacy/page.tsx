"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans flex flex-col">
      <Navbar />
      <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-10">Privacy Policy</h1>
        <div className="space-y-8 text-slate-400 leading-relaxed">
          <p>Last Updated: February 25, 2026</p>
          <section>
            <h2 className="text-xl font-bold text-slate-200 mb-4">1. Information We Collect</h2>
            <p>We collect information you provide directly to us when you create an account, enroll in a course, or contact us for support. This includes your name, email address, and payment information.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-slate-200 mb-4">2. How We Use Your Data</h2>
            <p>We use your data to provide our services, personalize your learning experience, and communicate with you about your progress. We do not sell your personal information to third parties.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-slate-200 mb-4">3. Data Security</h2>
            <p>We implement industry-standard security measures to protect your personal information, including 256-bit encryption for all data transmissions and secure payment processing via PCI-compliant partners.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
