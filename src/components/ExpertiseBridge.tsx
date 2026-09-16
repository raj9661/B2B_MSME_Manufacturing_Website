import React from 'react';
import { Cpu, Server, ArrowRightLeft, ShieldCheck } from 'lucide-react';

export const ExpertiseBridge: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>CROSS-DOMAIN CONSULTING EXPERTISE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight mb-4">
            Engineering Experience. Technology Execution.
          </h2>

          <p className="text-slate-300 font-mono text-sm sm:text-base">
            Cross-domain engineering practitioners who speak the language of both the shop floor and the server room.
          </p>
        </div>

        {/* SPLIT SCREEN BRIDGE VISUAL */}
        <div className="bg-[#090d16] p-6 sm:p-10 rounded-2xl border border-slate-800 max-w-5xl mx-auto relative overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* LEFT: FACTORY FLOOR */}
            <div className="md:col-span-5 bg-slate-900/90 p-6 rounded-xl border border-amber-500/30">
              <span className="font-mono text-xs font-bold text-amber-400 uppercase tracking-widest block mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-amber-400" />
                THE FACTORY FLOOR
              </span>
              <h3 className="text-lg font-bold text-slate-100 mb-2">
                Physical Shop Operations
              </h3>
              <ul className="space-y-2 font-mono text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Industrial Machinery & PLCs
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Production & Cycle Times
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Preventive & Breakdown Maintenance
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Operator & Shop Floor Workflows
                </li>
              </ul>
            </div>

            {/* CENTER: THE BRIDGE */}
            <div className="md:col-span-2 text-center py-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-amber-500 p-[2px] shadow-xl shadow-cyan-500/20">
                <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
                  <ArrowRightLeft className="w-6 h-6 text-cyan-400 animate-pulse" />
                </div>
              </div>
              <span className="font-mono text-xs font-bold text-cyan-400 block mt-2 uppercase tracking-widest">
                BRIDGE
              </span>
            </div>

            {/* RIGHT: SERVER ROOM */}
            <div className="md:col-span-5 bg-slate-900/90 p-6 rounded-xl border border-cyan-500/30">
              <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-3 flex items-center gap-2">
                <Server className="w-4 h-4 text-cyan-400" />
                THE SERVER ROOM
              </span>
              <h3 className="text-lg font-bold text-slate-100 mb-2">
                Enterprise IT & Cloud Infrastructure
              </h3>
              <ul className="space-y-2 font-mono text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> Databases & System Telemetry
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> APIs & Automated Integration
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> Cloud & Server Optimization
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> ERP & Governance Workflows
                </li>
              </ul>
            </div>

          </div>

          <div className="mt-8 pt-4 border-t border-slate-800 text-center font-mono text-xs text-slate-300">
            <p className="italic">
              "We bridge physical manufacturing operations with enterprise IT."
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
