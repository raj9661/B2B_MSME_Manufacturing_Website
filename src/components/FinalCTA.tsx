import React from 'react';
import { ArrowRight, ShieldCheck, PhoneCall, Cpu, Zap } from 'lucide-react';

interface FinalCTAProps {
  onOpenAssessment: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenAssessment }) => {
  return (
    <section id="assessment-form" className="py-24 bg-[#05070a] border-b border-slate-800/80 relative overflow-hidden bg-blueprint-grid">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-6">
          <Cpu className="w-3.5 h-3.5" />
          <span>FACTORY OPERATIONAL & IT ASSESSMENT</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-tight mb-6">
          Find Out Where Your Factory Is Losing Time, Money and Visibility.
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10 font-sans">
          Start with an operational and IT assessment. We identify practical improvement opportunities before recommending major technology investments.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 font-mono mb-12">
          <button
            onClick={onOpenAssessment}
            className="w-full sm:w-auto px-9 py-4 rounded-md bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-600 text-slate-950 font-bold text-sm uppercase tracking-wider hover:brightness-110 transition-all shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-3 group active:scale-[0.98]"
          >
            <span>Schedule an Operational Assessment</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="tel:+919876543210"
            onClick={(e) => {
              e.preventDefault();
              onOpenAssessment();
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-md bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:border-cyan-500/50 text-sm font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-cyan-400" />
            <span>Talk to an Engineer</span>
          </a>
        </div>

        {/* Reassurance Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-slate-400 border-t border-slate-800/80 pt-8 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Zero Obligations</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Practitioner Audit</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Low-CapEx Focus</span>
          </div>
        </div>

      </div>
    </section>
  );
};
