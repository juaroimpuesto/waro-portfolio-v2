"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, ArrowLeft, ChevronRight, Zap, Cpu, Mail, MapPin, Globe, Users, Database, ShieldCheck, TrendingUp, Code2, Rocket } from 'lucide-react';

type ProjectKey = 'queue' | 'pos' | 'rag' | null;

export default function Home() {
  const [activeProject, setActiveProject] = useState<ProjectKey>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const whatsappNumber: string = "639XXXXXXXXX"; 
  const message: string = encodeURIComponent("Hi Juaro, I saw your portfolio and I'd like to start a project with Waro Tech!");

  const projects = [
    { id: 'queue' as ProjectKey, title: 'Smart Queue Engine', color: 'text-emerald-400', border: 'border-emerald-500/20', bg: 'bg-emerald-500/5', accent: 'bg-emerald-500' },
    { id: 'pos' as ProjectKey, title: 'Neural Inventory POS', color: 'text-blue-400', border: 'border-blue-500/20', bg: 'bg-blue-500/5', accent: 'bg-blue-500' },
    { id: 'rag' as ProjectKey, title: 'RAG Knowledge Base', color: 'text-purple-400', border: 'border-purple-500/20', bg: 'bg-purple-500/5', accent: 'bg-purple-500' }
  ];

  if (activeProject) {
    return (
      <main className="min-h-screen bg-[#050505] text-white animate-in fade-in duration-500 font-sans">
        <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/95 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <button onClick={() => setActiveProject(null)} className="text-sm font-black uppercase tracking-widest text-white hover:text-green-500 transition-all flex items-center gap-2">
              <ArrowLeft size={18} /> BACK HOME
            </button>
            <div className="hidden md:flex gap-8">
              {projects.map((p) => (
                <button key={p.id} onClick={() => setActiveProject(p.id)} className={`text-xs font-black uppercase tracking-widest transition-all ${activeProject === p.id ? p.color + ' border-b-2 border-current pb-1' : 'text-gray-500 hover:text-gray-300'}`}>
                  {p.title.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 italic">
          {activeProject === 'queue' && (
            <div className="grid lg:grid-cols-2 gap-16 items-start animate-in slide-in-from-left-8 duration-700">
              <div>
                <span className="text-emerald-500 font-mono text-[10px] uppercase tracking-widest mb-4 block font-bold underline decoration-2 italic">Queue Management System</span>
                <h1 className="text-6xl md:text-8xl font-black text-emerald-400 uppercase italic leading-none mb-8">Smart <br/> Queue.</h1>
                <p className="text-gray-400 text-lg leading-relaxed mb-8 italic">Eliminate physical waiting lines. Customers can scan a QR code to join a virtual line and receive real-time updates on their mobile devices.</p>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-emerald-500/80"><ShieldCheck size={16}/> Instant SMS/Web Notifications</div>
                  <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-emerald-500/80"><ShieldCheck size={16}/> Live Occupancy Tracking</div>
                </div>
              </div>
              <div className="bg-emerald-500/5 border border-emerald-500/20 p-10 rounded-[40px] shadow-2xl relative overflow-hidden">
                <Users className="text-emerald-400 mb-6" size={40} />
                <h4 className="font-black uppercase tracking-widest text-[10px] mb-4">Traffic Optimization Live</h4>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden mb-4"><div className="h-full bg-emerald-500 w-[85%] animate-pulse"></div></div>
                <p className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">Efficiency increase // +40%</p>
              </div>
            </div>
          )}
          {/* ... (POS and RAG sections same as before) ... */}
          {activeProject === 'pos' && (
            <div className="animate-in zoom-in-95 duration-700 text-center">
                <h1 className="text-7xl md:text-[10rem] font-black text-blue-500 uppercase italic leading-none mb-6">Inventory</h1>
                <p className="text-gray-400 text-xl max-w-2xl mx-auto italic">Advanced POS & Inventory Tracking for Modern Retail.</p>
            </div>
          )}
          {activeProject === 'rag' && (
            <div className="animate-in slide-in-from-right-8 duration-700">
                <h1 className="text-6xl md:text-8xl font-black text-purple-400 uppercase italic leading-none">Knowledge <br/> Base.</h1>
                <p className="text-gray-400 text-xl mt-8">Private AI Document Intelligence with Zero Data Leaks.</p>
            </div>
          )}
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-green-500/30 font-sans relative overflow-x-hidden">
      <nav className="flex justify-between items-center p-8 max-w-7xl mx-auto border-b border-white/5">
        <div className="text-2xl font-black tracking-tighter uppercase italic">Waro <span className="text-green-500">Tech</span></div>
        <div className="hidden md:flex gap-10 text-[11px] font-black uppercase tracking-widest">
          <a href="#about" className="hover:text-green-500 transition">ABOUT</a>
          <a href="#projects" className="hover:text-green-500 transition">SOLUTIONS</a>
          <a href="#contact" className="hover:text-green-500 transition">CONTACT</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-32 uppercase italic">
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-12">WE BUILD <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 font-black">NEXT-GEN</span> SYSTEMS.</h1>
        <button onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')} className="px-12 py-6 bg-white text-black font-black rounded-xl hover:bg-green-400 transition-all uppercase text-[10px] tracking-widest not-italic">Let&apos;s Start A Project</button>
      </section>

      {/* ABOUT US SECTION */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
        <h2 className="text-[10px] font-black text-green-500 uppercase tracking-[0.4em] font-mono underline underline-offset-4 mb-16 not-italic">00 // The Philosophy</h2>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none">Intelligence over <br/> Legacy.</h3>
                <p className="text-gray-400 text-lg leading-relaxed italic max-w-lg">
                    At <span className="text-white font-bold">Waro Tech Solutions</span>, we don&apos;t just code; we engineer systems that think. We specialize in bridging the gap between traditional business operations and the limitless potential of Artificial Intelligence.
                </p>
                <div className="grid grid-cols-2 gap-4 not-italic">
                    <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                        <Code2 className="text-green-500 mb-2" size={20}/>
                        <h4 className="text-[10px] font-black uppercase tracking-widest">Clean Architecture</h4>
                    </div>
                    <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                        <Rocket className="text-green-500 mb-2" size={20}/>
                        <h4 className="text-[10px] font-black uppercase tracking-widest">Rapid Deployment</h4>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 p-1 rounded-[40px]">
                <div className="bg-[#050505] p-10 rounded-[38px] border border-white/10">
                    <div className="space-y-6">
                        <div className="flex justify-between items-center"><span className="text-[10px] font-mono opacity-40 uppercase">Founded</span><span className="text-xs font-black uppercase">2026 // PH</span></div>
                        <div className="flex justify-between items-center"><span className="text-[10px] font-mono opacity-40 uppercase">Specialization</span><span className="text-xs font-black uppercase text-green-400">Next.js + RAG AI</span></div>
                        <div className="flex justify-between items-center"><span className="text-[10px] font-mono opacity-40 uppercase">Mission</span><span className="text-xs font-black uppercase">Automate Reality</span></div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
        <h2 className="text-[10px] font-black text-green-500 uppercase tracking-[0.4em] font-mono underline underline-offset-4 mb-16 not-italic">01 // Featured Deployments</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.id} onClick={() => setActiveProject(p.id)} className={`group cursor-pointer p-10 rounded-[32px] border ${p.border} ${p.bg} hover:scale-[1.02] transition-all relative overflow-hidden italic`}>
              <h3 className="text-2xl md:text-3xl font-black mb-6 uppercase tracking-tighter">{p.title}</h3>
              <div className="flex items-center gap-2 text-[10px] font-mono opacity-40 uppercase tracking-widest font-bold not-italic">Project Deep-Dive <ChevronRight size={12} /></div>
              <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-700 ${p.accent}`}></div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-48 border-t border-white/5 text-center relative flex flex-col items-center">
        <div className="relative group flex flex-col items-center">
          <motion.h3 onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="text-5xl md:text-[5rem] font-black tracking-tighter uppercase leading-none transition-all duration-500 cursor-crosshair" style={{ textShadow: isHovered ? '0 0 35px rgba(34, 197, 94, 0.9)' : 'none', color: isHovered ? '#22c55e' : 'white' }}>LET&apos;S ENGINEER <br/> THE FUTURE.</motion.h3>
          <AnimatePresence>
            {isHovered && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="mt-8 z-20">
                <div className="flex flex-col items-center gap-3">
                  <div className="h-[1px] w-24 bg-green-500 animate-pulse" />
                  <p className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-green-400 bg-green-500/10 px-8 py-5 border border-green-500/30 backdrop-blur-2xl shadow-[0_0_30px_rgba(34,197,94,0.1)] text-center">Why settle for years of experience, <br className="hidden md:block"/> when you can engineer with intelligence?</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mt-32 not-italic">
            <div className="p-10 border border-white/5 rounded-[40px] bg-white/[0.02]"><MapPin className="mx-auto mb-6 text-green-500" size={32} /><p className="font-black uppercase tracking-widest text-[10px]">Philippines</p></div>
            <div className="p-10 border border-white/5 rounded-[40px] bg-white/[0.02]"><Mail className="mx-auto mb-6 text-green-500" size={32} /><p className="font-bold text-sm italic">juaroimpuesto@gmail.com</p></div>
            <div className="p-10 border border-white/5 rounded-[40px] bg-white/[0.02]"><Globe className="mx-auto mb-6 text-green-500" size={32} /><p className="font-black text-green-400 uppercase tracking-widest text-[10px]">Waro Tech Solutions</p></div>
        </div>
      </section>

      <footer className="p-20 text-center text-gray-700 text-[10px] font-mono uppercase tracking-[0.6em] border-t border-white/5 font-black italic">© 2026 Waro Tech Solutions // Handcrafted in the Philippines</footer>
    </main>
  );
}