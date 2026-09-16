import React from 'react';
import { 
  AlertOctagon, Hourglass, FileText, Network, TrendingUp, ShieldAlert, ArrowDownRight
} from 'lucide-react';

export const ProblemGrid: React.FC = () => {
  const problems = [
    {
      id: '01',
      title: 'Unplanned Downtime',
      subtitle: 'Machines stop, but the real cause isn\'t always visible.',
      detail: 'Operators log stoppage hours after the breakdown occurs. Without real-time current or vibration telemetry, chronic micro-stoppages remain hidden in shift averages.',
      icon: AlertOctagon,
      accent: 'border-rose-500/40 text-rose-400 bg-rose-500/10',
      badge: 'AVAILABILITY LOSS'
    },
    {
      id: '02',
      title: 'Production Bottlenecks',
      subtitle: 'Small process inefficiencies create large delays.',
      detail: 'Parts pile up between work centers while supervisors rely on gut feel. Minor cycle-time variations compound across shifts, constraining overall throughput.',
      icon: Hourglass,
      accent: 'border-amber-500/40 text-amber-400 bg-amber-500/10',
      badge: 'THROUGHPUT LOSS'
    },
    {
      id: '03',
      title: 'Manual Processes',
      subtitle: 'Paper logs, Excel sheets and repetitive data entry consume valuable time.',
      detail: 'Operators waste 15-20% of shift time recording machine metrics manually. Transcribing paper forms into end-of-month spreadsheets introduces errors and delay.',
      icon: FileText,
      accent: 'border-cyan-500/40 text-cyan-400 bg-cyan-500/10',
      badge: 'MANPOWER WASTE'
    },
    {
      id: '04',
      title: 'Disconnected Systems',
      subtitle: 'Machines, ERP, spreadsheets and departments operate in silos.',
      detail: 'Production doesn\'t know maintenance schedule changes, inventory managers lack accurate job completion data, and management works with week-old reports.',
      icon: Network,
      accent: 'border-blue-500/40 text-blue-400 bg-blue-500/10',
      badge: 'DATA SILOS'
    },
    {
      id: '05',
      title: 'Rising IT Costs',
      subtitle: 'Unused licenses, infrastructure and cloud resources increase overhead.',
      detail: 'MSMEs often pay for oversized cloud instances, unutilized software seats, and redundant local servers designed for enterprise scale rather than actual MSME needs.',
      icon: TrendingUp,
      accent: 'border-purple-500/40 text-purple-400 bg-purple-500/10',
      badge: 'OVERHEAD WASTE'
    },
    {
      id: '06',
      title: 'Audit Stress',
      subtitle: 'Critical records are scattered and difficult to retrieve when audits arrive.',
      detail: 'ISO, customer, and compliance audits require panic-driven record hunting across cabinets, emails, and isolated hard drives instead of automated digital history.',
      icon: ShieldAlert,
      accent: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10',
      badge: 'COMPLIANCE RISK'
    }
  ];

  return (
    <section id="problems" className="py-24 bg-[#07090e] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono uppercase tracking-wider mb-4">
            <ArrowDownRight className="w-3.5 h-3.5" />
            <span>DOES THIS LOOK FAMILIAR?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight mb-4">
            Your Factory Is Producing.{' '}
            <span className="block text-slate-400 font-medium text-2xl sm:text-3xl md:text-4xl mt-2">
              But Is It Performing at Its Potential?
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-mono">
            Common friction points slowing down MSME manufacturing operations today.
          </p>
        </div>

        {/* 6 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem) => {
            const IconComponent = problem.icon;
            return (
              <div
                key={problem.id}
                className="group relative bg-slate-950/70 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Top ID & Badge */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-bold text-slate-600 group-hover:text-cyan-400 transition-colors">
                      {problem.id}
                    </span>
                    <span className={`text-[10px] font-mono uppercase font-semibold px-2.5 py-1 rounded border ${problem.accent}`}>
                      {problem.badge}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-3">
                    <div className={`p-3 rounded-lg border ${problem.accent} shrink-0`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                        {problem.title}
                      </h3>
                      <p className="text-sm font-semibold text-slate-300 mt-1">
                        {problem.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Operational Detail */}
                  <p className="text-xs text-slate-400 leading-relaxed font-sans mt-3 border-t border-slate-800/80 pt-3">
                    {problem.detail}
                  </p>
                </div>

                {/* Micro Status Bar */}
                <div className="mt-6 pt-3 border-t border-slate-900 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>IMPACT: OPERATIONAL FRICTION</span>
                  <span className="text-rose-400 group-hover:translate-x-1 transition-transform">
                    ADDRESSABLE →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
