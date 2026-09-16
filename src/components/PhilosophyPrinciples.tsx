import React from 'react';
import { ShieldCheck, Compass, Lightbulb, Zap, TrendingUp } from 'lucide-react';

export const PhilosophyPrinciples: React.FC = () => {
  const principles = [
    {
      num: '01',
      title: 'Eliminate Before Automating',
      desc: 'Never digitize an inefficient process. Map shop floor activities, remove unnecessary handoffs and paperwork first.',
      icon: Lightbulb
    },
    {
      num: '02',
      title: 'Retrofit Before Replacing',
      desc: 'Valuable physical assets shouldn\'t be discarded prematurely. Non-invasive sensors unlock machine data at a fraction of capital cost.',
      icon: Compass
    },
    {
      num: '03',
      title: 'Measure Before Scaling',
      desc: 'Deploy telemetry on critical bottleneck machines first. Prove operational value and ROI before expanding floor-wide.',
      icon: TrendingUp
    },
    {
      num: '04',
      title: 'Optimize Before Upgrading',
      desc: 'Audit SaaS seats, server bandwidth, and software licenses before paying for expensive IT infrastructure upgrades.',
      icon: Zap
    },
    {
      num: '05',
      title: 'ROI Before Technology',
      desc: 'Technology is a tool, not the goal. Every intervention must tie back to throughput, uptime, or cost reduction.',
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-24 bg-[#07090e] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>HOW WE THINK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight leading-tight mb-4">
            5 Core Engineering & Operational Principles
          </h2>

          <p className="text-slate-400 font-mono text-xs sm:text-sm">
            Practitioner-led engineering mindset built for real-world shop floor conditions.
          </p>
        </div>

        {/* 5 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {principles.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.num}
                className="bg-slate-950 p-5 rounded-xl border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 font-mono">
                    <span className="text-xl font-bold text-cyan-400">{item.num}</span>
                    <IconComponent className="w-5 h-5 text-slate-500" />
                  </div>
                  <h3 className="text-base font-bold text-slate-100 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-slate-900 text-[10px] font-mono text-slate-500">
                  ENGINEERING RULE
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
