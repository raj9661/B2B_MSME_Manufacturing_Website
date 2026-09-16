import React, { useState } from 'react';
import { 
  Activity, Hourglass, FileText, Cpu, DollarSign, ShieldCheck, BarChart2, 
  ArrowRight, Search, Zap, CheckCircle2 
} from 'lucide-react';

interface DiagnosticOption {
  id: string;
  label: string;
  icon: any;
  problem: string;
  analyze: string[];
  approach: string;
  metric: string;
  color: string;
}

export const InteractiveDiagnostic: React.FC = () => {
  const options: DiagnosticOption[] = [
    {
      id: 'downtime',
      label: 'Machine Downtime',
      icon: Activity,
      problem: 'Unexpected machine stoppages and unknown breakdown root causes on the factory floor.',
      analyze: ['Current draw & motor running signals', 'Downtime frequency & duration patterns', 'Cycle-time degradation prior to breakdown'],
      approach: 'Non-invasive CT current sensing + Modbus edge gateway + real-time WhatsApp maintenance alerts.',
      metric: 'Unplanned downtime reduction & Availability OEE gain.',
      color: 'border-rose-500/40 text-rose-400 bg-rose-500/10'
    },
    {
      id: 'bottlenecks',
      label: 'Production Bottlenecks',
      icon: Hourglass,
      problem: 'Small process inefficiencies compound, causing work-in-progress inventory buildup and delayed orders.',
      analyze: ['Work-center cycle time variation', 'Inter-departmental handoff delays', 'Shift-to-shift operator pace variance'],
      approach: 'Shop floor cycle timing + process re-engineering + bottleneck buffer balancing.',
      metric: 'Throughput capacity improvement & reduced cycle times.',
      color: 'border-amber-500/40 text-amber-400 bg-amber-500/10'
    },
    {
      id: 'manual',
      label: 'Manual Processes',
      icon: FileText,
      problem: 'Paper shift logs, Excel transcription, and manual approval loops consume valuable time.',
      analyze: ['Time spent filling forms by operators', 'Excel entry error rate', 'Approval latency between supervisor & management'],
      approach: 'Shop floor tablet data entry + n8n automated workflow routing + PostgreSQL database.',
      metric: '90%+ reduction in paper log handling & instant shift visibility.',
      color: 'border-cyan-500/40 text-cyan-400 bg-cyan-500/10'
    },
    {
      id: 'legacy',
      label: 'Legacy Machines',
      icon: Cpu,
      problem: 'Older machines lack modern PLC communications or digital output ports.',
      analyze: ['Physical machine electrical panels', 'External signal tapping points (relays/CTs)', 'Modbus / RS485 wiring feasibility'],
      approach: 'External non-invasive current & optical sensors + ESP32 edge gateway retrofitting.',
      metric: 'Digital machine connectivity without voiding asset warranties or replacing equipment.',
      color: 'border-blue-500/40 text-blue-400 bg-blue-500/10'
    },
    {
      id: 'it-costs',
      label: 'IT Costs',
      icon: DollarSign,
      problem: 'Unused software licenses, oversized cloud servers, and redundant IT contracts inflate overhead.',
      analyze: ['Software seat utilization rates', 'Cloud RAM/CPU load graphs', 'Redundant backup & SaaS tooling'],
      approach: 'Infrastructure right-sizing + SaaS seat audit + open-standard database migration.',
      metric: 'Lower recurring IT expenditure tied strictly to shop floor usage.',
      color: 'border-purple-500/40 text-purple-400 bg-purple-500/10'
    },
    {
      id: 'compliance',
      label: 'Compliance Stress',
      icon: ShieldCheck,
      problem: 'ISO, customer, and regulatory audits trigger stressful manual record hunting.',
      analyze: ['Existing paper record retention', 'Maintenance log completeness', 'Quality traceability gaps'],
      approach: 'Centralized digital operational logging + continuous audit report generator.',
      metric: 'Continuous audit readiness with instant one-click report export.',
      color: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10'
    },
    {
      id: 'realtime-data',
      label: 'Lack of Real-Time Data',
      icon: BarChart2,
      problem: 'Management only sees factory performance at the end of the month via static spreadsheets.',
      analyze: ['Information latency across departments', 'Report compilation time', 'Decision lead times'],
      approach: 'Unified Grafana real-time OEE dashboard on executive TV monitors & smartphones.',
      metric: 'Real-time shift visibility & zero end-of-month reporting lag.',
      color: 'border-teal-500/40 text-teal-400 bg-teal-500/10'
    }
  ];

  const [selectedId, setSelectedId] = useState<string>('downtime');
  const selected = options.find(o => o.id === selectedId) || options[0];

  return (
    <section id="diagnostic" className="py-24 bg-slate-950 border-b border-slate-800/80 relative bg-blueprint-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Search className="w-3.5 h-3.5" />
            <span>INTERACTIVE OPERATIONAL DIAGNOSTIC</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight leading-tight mb-4">
            Where Is Your Biggest Operational Challenge?
          </h2>

          <p className="text-slate-400 font-mono text-xs sm:text-sm">
            Select your factory's primary friction point below to explore our analytical approach and target metrics.
          </p>
        </div>

        {/* Buttons Selector */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10 max-w-4xl mx-auto">
          {options.map((opt) => {
            const IconComp = opt.icon;
            const isSelected = opt.id === selectedId;
            return (
              <button
                key={opt.id}
                onClick={() => setSelectedId(opt.id)}
                className={`px-4 py-2.5 rounded-lg border font-mono text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 border-cyan-400 font-bold shadow-lg shadow-cyan-500/20 scale-105'
                    : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <IconComp className="w-4 h-4" />
                <span>{opt.label}</span>
              </button>
            );
          })}
        </div>

        {/* DYNAMIC DIAGNOSTIC VIEW CARD */}
        <div className="bg-[#090d16] p-6 sm:p-8 rounded-2xl border border-cyan-500/40 max-w-4xl mx-auto glow-cyan font-mono">
          
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-400 animate-pulse" />
              DIAGNOSTIC ANALYSIS: {selected.label.toUpperCase()}
            </span>
            <span className="text-[11px] text-slate-500">PRACTICAL ENGINEERING PATHWAY</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Left: Problem & Analysis */}
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-[10px] text-rose-400 uppercase font-bold block mb-1">
                  1. THE OPERATIONAL PROBLEM
                </span>
                <p className="text-xs text-slate-200 leading-relaxed font-sans">
                  {selected.problem}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-[10px] text-cyan-400 uppercase font-bold block mb-2">
                  2. WHAT WE ANALYZE ON YOUR SHOP FLOOR
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300 font-sans">
                  {selected.analyze.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-cyan-400 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Approach & Target Metric */}
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-slate-950 border border-amber-500/30">
                <span className="text-[10px] text-amber-400 uppercase font-bold block mb-1">
                  3. PRACTICAL ENGINEERING APPROACH
                </span>
                <p className="text-xs text-slate-200 leading-relaxed font-sans">
                  {selected.approach}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-emerald-950/40 border border-emerald-500/40">
                <span className="text-[10px] text-emerald-400 uppercase font-bold block mb-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  4. EXPECTED BUSINESS METRIC
                </span>
                <p className="text-xs text-emerald-300 font-bold font-mono">
                  {selected.metric}
                </p>
              </div>
            </div>

          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>Ready to address {selected.label.toLowerCase()} in your plant?</span>
            <a href="#assessment-form" className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1">
              Include in Assessment <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
