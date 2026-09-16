import React from 'react';
import { DollarSign, Zap } from 'lucide-react';

export const LowCapExComparison: React.FC = () => {
  return (
    <section className="py-24 bg-[#07090e] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-wider mb-4">
            <DollarSign className="w-3.5 h-3.5" />
            <span>CAPITAL EFFICIENCY PHILOSOPHY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight mb-4">
            Modernization Doesn't Always Mean New Machinery.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Where practical, we prioritize low-CapEx improvements before recommending major equipment replacement.
          </p>
        </div>

        {/* COMPARISON MATRIX */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* TRADITIONAL HIGH-CAPEX APPROACH */}
          <div className="bg-slate-950 p-6 sm:p-8 rounded-2xl border border-rose-950 relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-widest px-2.5 py-1 rounded bg-rose-500/10 border border-rose-500/30">
                  TRADITIONAL APPROACH
                </span>
                <span className="text-xs font-mono text-rose-400 font-bold">HIGH CAPEX</span>
              </div>

              <h3 className="text-xl font-bold text-slate-100 mb-3">
                Full Machine Replacement
              </h3>

              <div className="space-y-4 font-mono text-xs text-slate-400 mb-8">
                <div className="p-3 bg-slate-900 rounded border border-slate-800">
                  <span className="text-slate-200 font-bold block mb-1">1. REPLACE MACHINERY</span>
                  Scrap working physical assets prematurely.
                </div>
                <div className="p-3 bg-slate-900 rounded border border-slate-800">
                  <span className="text-slate-200 font-bold block mb-1">2. PROPRIETARY PLCs</span>
                  Vendor lock-in with closed communication protocols.
                </div>
                <div className="p-3 bg-slate-900 rounded border border-slate-800">
                  <span className="text-slate-200 font-bold block mb-1">3. HEAVY SOFTWARE SUITES</span>
                  High annual per-seat licensing fees.
                </div>
                <div className="p-3 bg-slate-900 rounded border border-slate-800">
                  <span className="text-slate-200 font-bold block mb-1">4. OVERSIZED INFRASTRUCTURE</span>
                  Unnecessary server capacity upfront.
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-rose-950/30 border border-rose-900/50 text-xs font-mono text-rose-300">
              <span className="font-bold text-rose-400 block mb-1">RISK PROFILE:</span>
              High upfront capital expenditure, long ROI payback period, shop floor disruption.
            </div>
          </div>

          {/* OUR PRACTICAL LOW-CAPEX APPROACH */}
          <div className="bg-slate-950 p-6 sm:p-8 rounded-2xl border border-cyan-500/40 relative flex flex-col justify-between glow-cyan">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/30">
                  OUR PRACTICAL APPROACH
                </span>
                <span className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5" /> LOW CAPEX FIRST
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-100 mb-3">
                Assess → Re-engineer → Retrofit → Connect
              </h3>

              <div className="space-y-4 font-mono text-xs text-slate-300 mb-8">
                <div className="p-3 bg-slate-900 rounded border border-cyan-900/40">
                  <span className="text-cyan-400 font-bold block mb-1">1. ASSESS & RE-ENGINEER</span>
                  Remove process waste & manual steps first.
                </div>
                <div className="p-3 bg-slate-900 rounded border border-cyan-900/40">
                  <span className="text-cyan-400 font-bold block mb-1">2. NON-INVASIVE SENSORS</span>
                  CT current & vibration sensors attached externally.
                </div>
                <div className="p-3 bg-slate-900 rounded border border-cyan-900/40">
                  <span className="text-cyan-400 font-bold block mb-1">3. OPEN EDGE GATEWAYS</span>
                  RS485/Modbus, ESP32 & MQTT open standards.
                </div>
                <div className="p-3 bg-slate-900 rounded border border-cyan-900/40">
                  <span className="text-cyan-400 font-bold block mb-1">4. MEASURED VALUE</span>
                  Monitor performance and scale based on ROI.
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-emerald-950/30 border border-emerald-500/40 text-xs font-mono text-emerald-300">
              <span className="font-bold text-emerald-400 block mb-1">BUSINESS BENEFIT:</span>
              Fraction of traditional cost, immediate operational visibility, zero machine downtime during install.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
