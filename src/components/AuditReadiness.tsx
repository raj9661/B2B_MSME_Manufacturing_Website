import React from 'react';
import { FileCheck, ShieldCheck, Database, Layers, ArrowRight, CheckCircle2 } from 'lucide-react';

export const AuditReadiness: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950 border-b border-slate-800/80 relative bg-blueprint-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>COMPLIANCE & TRACEABILITY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight leading-tight mb-4">
              Make Audit Readiness Continuous.
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Instead of preparing everything manually in a state of panic before an ISO, customer, or regulatory audit, continuously capture and organize operational records in real time.
            </p>

            <div className="space-y-3 font-mono text-xs text-slate-300 mb-6">
              {[
                'Full Machine Data Traceability',
                'Digital Maintenance & Sensor Logs',
                'Automated Shift & Production Records',
                'Digital Workflows & Approval History',
                'Centralized Document Organization',
                'Instant One-Click Audit Reporting'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-500 font-mono italic">
              * Focuses on operational traceability and structured digital record management.
            </p>
          </div>

          {/* Record Flow Visual Diagram */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/90 rounded-xl p-6 border border-slate-800 font-mono">
              <h3 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-6 flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-emerald-400" />
                CONTINUOUS COMPLIANCE RECORD PIPELINE
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="p-3 rounded bg-slate-950 border border-slate-800 text-xs">
                  <span className="text-cyan-400 font-bold block mb-1">MACHINE DATA</span>
                  <span className="text-slate-400 text-[11px]">Runtime, downtime logs & alarms</span>
                </div>

                <div className="p-3 rounded bg-slate-950 border border-slate-800 text-xs">
                  <span className="text-amber-400 font-bold block mb-1">MAINTENANCE RECORDS</span>
                  <span className="text-slate-400 text-[11px]">Preventive actions & parts replaced</span>
                </div>

                <div className="p-3 rounded bg-slate-950 border border-slate-800 text-xs">
                  <span className="text-emerald-400 font-bold block mb-1">PRODUCTION RECORDS</span>
                  <span className="text-slate-400 text-[11px]">Batch outputs & scrap tallies</span>
                </div>

                <div className="p-3 rounded bg-slate-950 border border-slate-800 text-xs">
                  <span className="text-purple-400 font-bold block mb-1">WORKFLOW LOGS</span>
                  <span className="text-slate-400 text-[11px]">Supervisor approvals & SOPs</span>
                </div>
              </div>

              {/* Central Box */}
              <div className="p-4 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-center">
                <span className="text-xs font-bold text-emerald-400 block uppercase tracking-wider mb-1">
                  CENTRALIZED OPERATIONAL REPOSITORY
                </span>
                <p className="text-[11px] text-slate-300">
                  Automated index → Clean report generation → Zero audit stress
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
