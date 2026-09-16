import React, { useState } from 'react';
import { 
  CheckCircle2, ArrowRight, ArrowDown, Cpu, Layers, RefreshCcw, 
  Search, Trash2, Link2, Zap, BarChart2, ShieldCheck 
} from 'lucide-react';

export const CorePhilosophy: React.FC = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      step: '01',
      title: 'Process & IT Assessment',
      subtitle: 'Understand baseline operations',
      description: 'We audit machine utilization, paper workflows, operator habits, and server/IT overhead on the factory floor.',
      icon: Search,
      color: 'text-blue-400 border-blue-500/40 bg-blue-500/10'
    },
    {
      step: '02',
      title: 'Remove Unnecessary Work',
      subtitle: 'Eliminate process waste first',
      description: 'Remove redundant approvals, duplicated paper logs, unused SaaS tools, and inefficient movement before adding technology.',
      icon: Trash2,
      color: 'text-amber-400 border-amber-500/40 bg-amber-500/10'
    },
    {
      step: '03',
      title: 'Connect Existing Equipment',
      subtitle: 'Non-invasive retrofitting',
      description: 'Attach non-invasive CT sensors, optical counters, and RS485 Modbus edge gateways to older machines without voiding warranties.',
      icon: Link2,
      color: 'text-cyan-400 border-cyan-500/40 bg-cyan-500/10'
    },
    {
      step: '04',
      title: 'Automate Repetitive Work',
      subtitle: 'Digital workflow triggers',
      description: 'Connect shop floor events to automated maintenance alerts, inventory triggers, and digital approval routing.',
      icon: Zap,
      color: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10'
    },
    {
      step: '05',
      title: 'Monitor Real-Time Performance',
      subtitle: 'Unified OEE dashboard',
      description: 'Deliver single-screen operational visibility for Plant Heads, Production Managers, and Factory Owners.',
      icon: BarChart2,
      color: 'text-purple-400 border-purple-500/40 bg-purple-500/10'
    },
    {
      step: '06',
      title: 'Continuous Improvement',
      subtitle: 'Data-driven refinement',
      description: 'Use empirical telemetry data to systematically optimize cycle times, prevent breakdowns, and optimize IT spend.',
      icon: RefreshCcw,
      color: 'text-teal-400 border-teal-500/40 bg-teal-500/10'
    }
  ];

  return (
    <section id="approach" className="py-24 bg-slate-950 border-b border-slate-800/80 relative overflow-hidden bg-blueprint-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>OUR CORE OPERATIONAL METHODOLOGY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight mb-6">
            Don't Replace Everything.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-amber-400">
              Fix What Is Holding You Back.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Many MSMEs already have valuable machinery, systems and infrastructure. The problem is rarely a lack of technology.
          </p>

          {/* Formula Callout */}
          <div className="mt-6 p-4 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-200 font-mono text-sm max-w-2xl mx-auto flex flex-wrap items-center justify-center gap-2">
            <span className="text-rose-400">Inefficient Processes</span>
            <span>+</span>
            <span className="text-amber-400">Disconnected Systems</span>
            <span>+</span>
            <span className="text-cyan-400">Limited Visibility</span>
            <span>+</span>
            <span className="text-purple-400">Unnecessary IT Costs</span>
          </div>
        </div>

        {/* 6-STEP TRANSFORMATION PIPELINE */}
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-8">
            <span className="font-mono text-xs uppercase text-slate-400 tracking-widest border border-slate-800 px-3 py-1 rounded bg-slate-900">
              CURRENT FACTORY STATE
            </span>
            <ArrowDown className="w-5 h-5 text-cyan-400 mx-auto my-3 animate-bounce" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.step}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className={`p-6 rounded-xl bg-slate-900/80 border transition-all duration-300 relative ${
                    hoveredStep === index 
                      ? 'border-cyan-400 bg-slate-900 shadow-xl shadow-cyan-950/50 -translate-y-1' 
                      : 'border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-slate-500 uppercase">
                      STAGE {item.step}
                    </span>
                    <div className={`p-2.5 rounded-lg border ${item.color}`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-100 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400/90 mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <ArrowDown className="w-5 h-5 text-emerald-400 mx-auto mb-3 animate-bounce" />
            <span className="font-mono text-xs font-bold uppercase text-emerald-400 tracking-widest border border-emerald-500/30 px-4 py-2 rounded-md bg-emerald-500/10">
              OPTIMIZED, LOW-CAPEX CONNECTED FACTORY
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
