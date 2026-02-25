"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans flex flex-col">
      <Navbar />
      <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-10">Terms of Service</h1>
        <div className="space-y-8 text-slate-400 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-slate-200 mb-4">1. Acceptance of Terms</h2>
            <p>By accessing and using Finance Elite, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-slate-200 mb-4">2. Pass Guarantee</h2>
            <p>Our Pass Guarantee applies to students who complete 100% of the curriculum and achieve an average score of 80% or higher on our practice exams. If you fail your official FINRA exam within 30 days of completing the course, we will provide a full refund.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-slate-200 mb-4">3. Intellectual Property</h2>
            <p>All content provided on this platform, including videos, quizzes, and text, is the property of Finance Elite and is protected by copyright laws. You are granted a limited, non-transferable license for personal use only.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-slate-200 mb-4">4. Limitation of Liability</h2>
            <p>Finance Elite is an educational resource and does not guarantee specific career outcomes or investment performance. We are not affiliated with FINRA, NASAA, or any financial institution.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
