import React, { useState } from 'react';
import { Calendar, Search, Link2, Zap, TrendingUp, CheckCircle2 } from 'lucide-react';

export const ExecutionRoadmap: React.FC = () => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      time: 'Weeks 1–2',
      title: 'Assess & Map',
      badge: 'PHASE 01',
      description: 'Identify major operational bottlenecks, manual processes, downtime patterns, and IT inefficiencies.',
      deliverables: [
        'On-site factory floor process audit',
        'Machine utilization & downtime baseline study',
        'Paper workflow & manual data entry inventory',
        'IT infrastructure & SaaS spend review'
      ],
      icon: Search,
      color: 'border-blue-500/40 text-blue-400 bg-blue-500/10'
    },
    {
      time: 'Weeks 3–5',
      title: 'Connect & Capture',
      badge: 'PHASE 02',
      description: 'Deploy appropriate non-invasive sensors and edge gateways to begin capturing real-time operational data.',
      deliverables: [
        'Installation of CT current & vibration sensors',
        'RS485 / Modbus edge gateway deployment',
        'MQTT data pipeline configuration',
        'Initial data validation & baseline calibration'
      ],
      icon: Link2,
      color: 'border-cyan-500/40 text-cyan-400 bg-cyan-500/10'
    },
    {
      time: 'Weeks 6–8',
      title: 'Automate & Integrate',
      badge: 'PHASE 03',
      description: 'Connect systems, create automated notification workflows, alerts, and operational dashboards.',
      deliverables: [
        'Grafana OEE & downtime dashboard rollout',
        'Automated WhatsApp / SMS maintenance alerts',
        'Digital shift log replaces paper forms',
        'ERP / Database API integration'
      ],
      icon: Zap,
      color: 'border-amber-500/40 text-amber-400 bg-amber-500/10'
    },
    {
      time: 'Ongoing',
      title: 'Measure & Improve',
      badge: 'PHASE 04',
      description: 'Track uptime, throughput, cycle time, OEE, and operational costs for continuous optimization.',
      deliverables: [
        'Weekly bottleneck & cycle-time reviews',
        'Predictive maintenance alert refinement',
        'Ongoing IT spend optimization',
        'Continuous shift performance reviews'
      ],
      icon: TrendingUp,
      color: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10'
    }
  ];

  return (
    <section id="roadmap" className="py-24 bg-[#07090e] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Calendar className="w-3.5 h-3.5" />
            <span>STRUCTURED CONSULTING ENGAGEMENT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight leading-tight mb-4">
            From Assessment to Measurable Improvement
          </h2>

          <p className="text-slate-400 font-mono text-xs sm:text-sm">
            A clear 4-stage execution roadmap designed for minimal disruption to ongoing production operations.
          </p>
        </div>

        {/* Horizontal Timeline Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          {phases.map((phase, idx) => (
            <button
              key={idx}
              onClick={() => setActivePhase(idx)}
              className={`p-4 rounded-xl border text-left font-mono transition-all relative ${
                activePhase === idx 
                  ? 'bg-slate-900 border-cyan-400 shadow-lg shadow-cyan-950/40' 
                  : 'bg-slate-950 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] text-slate-500 uppercase font-bold">{phase.badge}</span>
                <span className="text-xs text-cyan-400 font-bold">{phase.time}</span>
              </div>
              <h3 className="text-sm font-bold text-slate-100 mb-1">{phase.title}</h3>
              <div className={`h-1 rounded-full w-full mt-2 ${
                activePhase === idx ? 'bg-gradient-to-r from-cyan-400 to-emerald-400' : 'bg-slate-800'
              }`} />
            </button>
          ))}
        </div>

        {/* Active Phase Detail Card */}
        <div className="bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 max-w-4xl mx-auto">
          <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
            <div>
              <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-widest block mb-1">
                {phases[activePhase].badge} • TIMELINE: {phases[activePhase].time}
              </span>
              <h3 className="text-2xl font-bold text-slate-100">
                {phases[activePhase].title}
              </h3>
            </div>
            <span className="px-3 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
              Deliverable Focus
            </span>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans">
            {phases[activePhase].description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs text-slate-300">
            {phases[activePhase].deliverables.map((item, i) => (
              <div key={i} className="p-3 rounded bg-slate-900 border border-slate-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
