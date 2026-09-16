import React, { useState, useEffect } from 'react';
import { Cpu, Activity, ArrowRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenAssessment: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAssessment }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#07090e]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-2xl' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Tag */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-slate-900 border border-cyan-500/40 flex items-center justify-center group-hover:border-cyan-400 transition-colors">
              <Cpu className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-lg tracking-wider text-slate-100 uppercase">
                  VECTORSYS<span className="text-cyan-400">.IND</span>
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded">
                  MSME ENGINE
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono hidden sm:block">
                Industrial Tech & Operational Consulting
              </p>
            </div>
          </a>

          {/* Center Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-mono uppercase tracking-wider text-slate-300">
            <a href="#problems" className="hover:text-cyan-400 transition-colors">Problems</a>
            <a href="#approach" className="hover:text-cyan-400 transition-colors">Approach</a>
            <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
            <a href="#architecture" className="hover:text-cyan-400 transition-colors">IIoT Arch</a>
            <a href="#tech-stack" className="hover:text-cyan-400 transition-colors">Tech Stack</a>
            <a href="#roadmap" className="hover:text-cyan-400 transition-colors">Roadmap</a>
            <a href="#diagnostic" className="hover:text-cyan-400 transition-colors text-amber-400 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 animate-pulse" /> Diagnostic
            </a>
          </nav>

          {/* Right Action & Status */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>ENGINEER ACTIVE</span>
            </div>

            <button
              onClick={onOpenAssessment}
              className="relative group overflow-hidden rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 p-[1px] font-mono text-xs font-semibold uppercase tracking-wider text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all active:scale-95"
            >
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-[5px] bg-slate-950 group-hover:bg-transparent transition-colors">
                <span>Assessment</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md bg-slate-900 text-slate-300 border border-slate-800 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-4 pb-6 mt-3 space-y-3 font-mono text-xs uppercase tracking-wider">
          <a
            href="#problems"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-cyan-400"
          >
            Problems
          </a>
          <a
            href="#approach"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-cyan-400"
          >
            Approach
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-cyan-400"
          >
            4 Core Services
          </a>
          <a
            href="#architecture"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-cyan-400"
          >
            IIoT Architecture
          </a>
          <a
            href="#tech-stack"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-cyan-400"
          >
            Technology Stack
          </a>
          <a
            href="#roadmap"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-cyan-400"
          >
            Roadmap
          </a>
          <a
            href="#diagnostic"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-amber-400 font-bold"
          >
            Interactive Diagnostic
          </a>
          
          <div className="pt-2 border-t border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAssessment();
              }}
              className="w-full py-3 bg-cyan-500 text-slate-950 font-bold rounded text-center flex items-center justify-center gap-2"
            >
              <span>Schedule Operational Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
