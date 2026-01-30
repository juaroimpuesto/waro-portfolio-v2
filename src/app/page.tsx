"use client";

import React from 'react';

export default function Home() {
  // Palitan mo ang number na ito ng iyong totoong WhatsApp number (simulan sa 63)
  const whatsappNumber = "639XXXXXXXXX"; 
  const message = encodeURIComponent("Hi Juaro, I saw your portfolio and I'd like to start a project with Waro Tech!");

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-green-500/30">
      {/* 1. BACKGROUND EFFECT */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-green-900/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[120px] rounded-full" />
      </div>

      {/* 2. NAVIGATION */}
      <nav className="flex justify-between items-center p-8 max-w-7xl mx-auto border-b border-white/5">
        <div className="text-xl font-black tracking-tighter uppercase">
          Waro <span className="text-green-500">Tech</span>
        </div>
        <div className="hidden md:flex gap-10 text-[10px] font-mono uppercase tracking-[0.2em] opacity-50">
          <a href="#projects" className="hover:text-green-400 transition">Solutions</a>
          <a href="#contact" className="hover:text-green-400 transition">Contact</a>
        </div>
      </nav>

      {/* 3. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-24 text-center md:text-left">
        <div className="inline-block px-3 py-1 rounded-full border border-green-500/20 bg-green-500/5 text-[10px] font-mono text-green-400 mb-8 uppercase tracking-widest">
          Next.js + AI Engineering Specialist
        </div>
        
        <h1 className="text-6xl md:text-[110px] font-black tracking-tighter leading-[0.9] mb-10">
          WE ENGINEER <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
            INTELLIGENT
          </span> UI.
        </h1>
        
        <p className="text-gray-500 text-lg md:text-2xl max-w-2xl mb-12 leading-tight">
          High-performance systems for global startups. Specialized in building <span className="text-white">POS architectures</span> and <span className="text-white">AI interfaces</span>.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center md:justify-start">
          <button 
            onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')}
            className="px-12 py-5 bg-white text-black font-bold rounded-xl hover:bg-green-400 transition-all transform hover:-translate-y-1 uppercase text-xs tracking-widest"
          >
            Let&apos;s Start A Project
          </button>
          <div className="flex items-center gap-4 px-6 py-4 border border-white/10 rounded-xl bg-white/5">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[10px] font-mono opacity-70 uppercase">Ready for Deployment</span>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PROJECTS SECTION */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
        <h2 className="text-xs font-mono text-green-500 uppercase tracking-[0.2em] mb-12">01 // Featured Deployments</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* PROJECT 1: VIRTUAL QUEUING */}
          <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/50 transition-all">
            <div className="h-1 w-12 bg-green-500 mb-6 group-hover:w-full transition-all duration-500"></div>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Smart Queue Engine</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed italic">
              Virtual queuing web application designed to eliminate physical wait times and optimize customer flow.
            </p>
            <div className="flex gap-2">
              <span className="text-[9px] font-mono border border-white/20 px-2 py-1 rounded">Next.js</span>
              <span className="text-[9px] font-mono border border-white/20 px-2 py-1 rounded">Real-time</span>
            </div>
          </div>

          {/* PROJECT 2: AI POS ANALYTICS */}
          <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all">
            <div className="h-1 w-12 bg-blue-500 mb-6 group-hover:w-full transition-all duration-500"></div>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Neural Inventory POS</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed italic">
              Full-scale POS system with automated inventory tracking and supply-chain forecasting for retail operations.
            </p>
            <div className="flex gap-2">
              <span className="text-[9px] font-mono border border-white/20 px-2 py-1 rounded">TypeScript</span>
              <span className="text-[9px] font-mono border border-white/20 px-2 py-1 rounded">Analytics</span>
            </div>
          </div>

          {/* PROJECT 3: RAG DOC BOT */}
          <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all">
            <div className="h-1 w-12 bg-purple-500 mb-6 group-hover:w-full transition-all duration-500"></div>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">RAG Knowledge Base</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed italic">
              AI interface using Retrieval-Augmented Generation to query complex private documentation.
            </p>
            <div className="flex gap-2">
              <span className="text-[9px] font-mono border border-white/20 px-2 py-1 rounded">OpenAI API</span>
              <span className="text-[9px] font-mono border border-white/20 px-2 py-1 rounded">Vector DB</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5 text-center">
        <h2 className="text-xs font-mono text-green-500 uppercase tracking-[0.2em] mb-6 text-center">02 // Get In Touch</h2>
        <h3 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter">LET&apos;S BUILD THE FUTURE.</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 transition group">
            <p className="text-[10px] font-mono uppercase tracking-widest opacity-60 mb-2">Location</p>
            <p className="text-sm font-bold">Philippines</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 transition group">
            <p className="text-[10px] font-mono uppercase tracking-widest opacity-60 mb-2">Direct Email</p>
            <p className="text-sm font-bold">juaroimpuesto@gmail.com</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 transition group">
            <p className="text-[10px] font-mono uppercase tracking-widest opacity-60 mb-2">Service</p>
            <p className="text-sm font-bold italic text-green-500">Waro Tech Solutions</p>
          </div>
        </div>

        <div className="mt-16">
          <button 
            onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')}
            className="px-10 py-4 bg-green-500 text-black font-black rounded-full hover:bg-white transition-all transform hover:scale-105 uppercase text-[10px] tracking-widest"
          >
            Check Availability
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="p-12 text-center text-gray-600 text-[10px] font-mono uppercase tracking-widest border-t border-white/5">
        © 2026 Waro Tech Solutions // juaroimpuesto@gmail.com
      </footer>
    </main>
  );
}