import React from 'react';
// Note: Sa Next.js, mas mainam gamitin ang Lucide-React pero dahil Font Awesome ang prefer mo, 
// gagamit tayo ng standard Font Awesome CDN classes.
export default function Home() {
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
      </section>

      {/* 4. PROJECTS SECTION */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
        <h2 className="text-xs font-mono text-green-500 uppercase tracking-[0.2em] mb-12">01 // Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/50 transition-all">
            <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Smart Queue Engine</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">A virtual queuing web application designed to optimize customer flow.</p>
          </div>
          <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all">
            <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Neural Inventory POS</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">Full-scale POS system with automated inventory tracking.</p>
          </div>
          <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all">
            <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">RAG Knowledge Base</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">AI interface using Retrieval-Augmented Generation for complex data.</p>
          </div>
        </div>
      </section>

      {/* 5. CONTACT SECTION (NEW!) */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5 text-center">
        <h2 className="text-xs font-mono text-green-500 uppercase tracking-[0.2em] mb-6">02 // Get In Touch</h2>
        <h3 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter">LET'S BUILD THE FUTURE.</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Email */}
          <a href="mailto:juaroimpuesto@gmail.com" className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition group">
            <div className="text-2xl mb-4 text-green-500 group-hover:scale-110 transition-transform">
              <i className="fas fa-envelope"></i>
            </div>
            <p className="text-xs font-mono uppercase tracking-widest opacity-60">Email</p>
            <p className="text-sm font-bold">juaroimpuesto@gmail.com</p>
          </a>

          {/* LinkedIn/GitHub Proxy */}
          <a href="https://github.com/juaroimpuesto" target="_blank" className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition group">
            <div className="text-2xl mb-4 text-green-500 group-hover:scale-110 transition-transform">
              <i className="fab fa-github"></i>
            </div>
            <p className="text-xs font-mono uppercase tracking-widest opacity-60">GitHub</p>
            <p className="text-sm font-bold">@juaroimpuesto</p>
          </a>

          {/* Location */}
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 transition group">
            <div className="text-2xl mb-4 text-green-500">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <p className="text-xs font-mono uppercase tracking-widest opacity-60">Based In</p>
            <p className="text-sm font-bold">Philippines</p>
          </div>
        </div>

        <div className="mt-16">
          <button 
  onClick={() => window.open('https://wa.me/639452371937?text=Hi%20Juaro,%20I%20would%20like%20to%20start%20a%20project%20with%20Waro%20Tech!', '_blank')}
  className="px-10 py-4 bg-green-500 text-black font-black rounded-full hover:bg-white transition-all transform hover:scale-105 uppercase text-[10px] tracking-[0.2em]"
>
  Let's Start A Project
</button>
        </div>
      </section>

      <footer className="p-12 text-center text-gray-600 text-[10px] font-mono uppercase tracking-widest border-t border-white/5">
        © 2026 Waro Tech Solutions // juaroimpuesto@gmail.com
      </footer>
    </main>
  );
}