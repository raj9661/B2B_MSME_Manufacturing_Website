import React from 'react';
import { ArrowDownRight, ArrowUpRight, BarChart3 } from 'lucide-react';

export const ROIShowcase: React.FC = () => {
  const reductions = [
    { title: 'Unplanned Downtime', note: 'Measured against baseline' },
    { title: 'Manual Data Entry', note: 'Paper form elimination' },
    { title: 'Unused IT Spending', note: 'License & cloud audit' },
    { title: 'Audit Preparation Time', note: 'Continuous traceability' }
  ];

  const gains = [
    { title: 'Factory Throughput', note: 'Bottleneck resolution' },
    { title: 'Real-Time Machine Visibility', note: 'Non-invasive sensors' },
    { title: 'Overall Equipment Effectiveness (OEE)', note: 'Data-driven shifts' },
    { title: 'Operational Control & Governance', note: 'Single-screen dashboard' }
  ];

  return (
    <section className="py-24 bg-slate-950 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>BUSINESS OUTCOMES & GOVERNANCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight mb-4">
            Technology Is Only Valuable When It Improves the Business.
          </h2>

          <p className="text-slate-400 font-mono text-xs sm:text-sm">
            Our engineering interventions focus strictly on measurable operational shift targets evaluated against your factory's unique baseline.
          </p>
        </div>

        {/* 2-Column KPI Shift Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* REDUCTION CARDS (DESIRED DOWNWARD SHIFTS) */}
          <div className="bg-slate-900/80 p-6 rounded-xl border border-rose-900/40">
            <h3 className="text-sm font-mono font-bold uppercase text-rose-400 tracking-wider mb-6 flex items-center gap-2">
              <ArrowDownRight className="w-4 h-4 text-rose-400" />
              OPERATIONAL REDUCTION TARGETS (↓)
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reductions.map((item, idx) => (
                <div key={idx} className="bg-slate-950 p-4 rounded-lg border border-slate-800 font-mono">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-slate-300 font-bold">{item.title}</span>
                    <span className="w-6 h-6 rounded bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold text-sm">
                      ↓
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-500 block">{item.note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* GAIN CARDS (DESIRED UPWARD SHIFTS) */}
          <div className="bg-slate-900/80 p-6 rounded-xl border border-emerald-900/40">
            <h3 className="text-sm font-mono font-bold uppercase text-emerald-400 tracking-wider mb-6 flex items-center gap-2">
              <ArrowUpRight className="w-4 h-4 text-emerald-400" />
              OPERATIONAL GAIN TARGETS (↑)
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {gains.map((item, idx) => (
                <div key={idx} className="bg-slate-950 p-4 rounded-lg border border-slate-800 font-mono">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-slate-300 font-bold">{item.title}</span>
                    <span className="w-6 h-6 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm">
                      ↑
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-500 block">{item.note}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footnote */}
        <p className="text-center text-xs font-mono text-slate-500 mt-8">
          * Improvements measured against pre-assessment baseline benchmarks established in Weeks 1–2.
        </p>

      </div>
    </section>
  );
};
