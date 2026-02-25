"use client";

import React, { useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BookOpen, Trophy, Clock, PlayCircle, ChevronRight, BarChart } from 'lucide-react';

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  if (!user) return null;

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans flex flex-col">
      <Navbar />
      
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, {user.email?.split('@')[0]}</h1>
            <p className="text-slate-400">Continue where you left off in your Series 7 Mastery course.</p>
          </div>
          <div className="flex items-center gap-4 bg-slate-900/50 p-2 rounded-2xl border border-white/5">
            <div className="px-4 py-2 text-center">
              <span className="block text-xl font-black">12</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Day Streak</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="px-4 py-2 text-center">
              <span className="block text-xl font-black">84%</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Avg Score</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Progress */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full -mr-20 -mt-20" />
              <div className="relative z-10">
                <span className="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-6">Current Course</span>
                <h2 className="text-3xl font-bold mb-4">Series 7 Top-Off Mastery</h2>
                <div className="flex items-center gap-6 mb-8 text-blue-100">
                  <div className="flex items-center gap-2">
                    <BookOpen size={18} />
                    <span className="text-sm font-medium">14/22 Lessons</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={18} />
                    <span className="text-sm font-medium">8h 12m left</span>
                  </div>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-blue-100">
                    <span>Overall Progress</span>
                    <span>64%</span>
                  </div>
                  <div className="h-2 w-full bg-black/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white w-[64%] shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                  </div>
                </div>
                <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all flex items-center gap-2">
                  Resume Lesson <PlayCircle size={18} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-900/40 border border-white/5 rounded-3xl p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold">Recent Quiz Results</h3>
                  <ChevronRight size={18} className="text-slate-500" />
                </div>
                <div className="space-y-4">
                  {[
                    { title: 'Options Strategies', score: '92%', date: 'Yesterday' },
                    { title: 'Debt Instruments', score: '78%', date: '2 days ago' },
                    { title: 'Customer Accounts', score: '100%', date: '4 days ago' },
                  ].map((quiz, i) => (
                    <div key={i} className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/5">
                      <div>
                        <p className="text-sm font-bold">{quiz.title}</p>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">{quiz.date}</p>
                      </div>
                      <span className={`text-sm font-black ${quiz.score === '100%' ? 'text-emerald-400' : 'text-blue-400'}`}>{quiz.score}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900/40 border border-white/5 rounded-3xl p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold">Upcoming Live Sessions</h3>
                  <ChevronRight size={18} className="text-slate-500" />
                </div>
                <div className="space-y-4">
                  {[
                    { title: 'Weekly Q&A Review', time: 'Tomorrow, 2:00 PM', instructor: 'Prof. Miller' },
                    { title: 'Final Exam Cram', time: 'Friday, 10:00 AM', instructor: 'Sarah Jenkins' },
                  ].map((session, i) => (
                    <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/5">
                      <p className="text-sm font-bold mb-1">{session.title}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] text-blue-400 font-bold uppercase tracking-tighter">{session.time}</span>
                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">{session.instructor}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Stats */}
          <div className="space-y-8">
            <div className="bg-slate-900/40 border border-white/5 rounded-3xl p-8">
              <h3 className="font-bold mb-6 flex items-center gap-2">
                <Trophy className="text-yellow-500" size={18} /> Mastery Badges
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className={`aspect-square rounded-2xl flex items-center justify-center border ${i <= 3 ? 'bg-blue-600/20 border-blue-500/30 text-blue-400' : 'bg-white/5 border-white/10 text-slate-700'}`}>
                    <Trophy size={20} />
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest text-center mt-6">Next Badge: 10 Straight Quizzes</p>
            </div>

            <div className="bg-slate-900/40 border border-white/5 rounded-3xl p-8">
              <h3 className="font-bold mb-6 flex items-center gap-2">
                <BarChart className="text-blue-500" size={18} /> Performance Heatmap
              </h3>
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: 28 }).map((_, i) => (
                  <div key={i} className={`aspect-square rounded-sm ${i % 5 === 0 ? 'bg-blue-600' : i % 3 === 0 ? 'bg-blue-400' : 'bg-white/5'}`} />
                ))}
              </div>
              <div className="flex justify-between mt-4">
                <span className="text-[10px] font-bold text-slate-500">LESS</span>
                <span className="text-[10px] font-bold text-slate-500">MORE</span>
              </div>
            </div>

            <div className="bg-blue-600/10 border border-blue-500/20 rounded-3xl p-6">
              <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">Need Help?</p>
              <p className="text-sm text-slate-300 mb-4 font-medium">Our expert instructors are online and ready to answer your questions.</p>
              <button className="w-full bg-blue-600 py-3 rounded-xl font-bold text-sm hover:bg-blue-500 transition">Chat with Tutor</button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
