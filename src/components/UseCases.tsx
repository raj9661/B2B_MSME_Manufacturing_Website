import React from 'react';
import { 
  Activity, BarChart2, Bell, FileSpreadsheet, Server, FileText, ShieldCheck, Network, ArrowRight
} from 'lucide-react';

export const UseCases: React.FC = () => {
  const useCases = [
    {
      title: 'Machine Downtime Monitoring',
      subtitle: 'Know when critical assets stop or slow down.',
      desc: 'Non-invasive current CT sensors detect exactly when machine motors stop running, triggering immediate supervisor notifications.',
      icon: Activity,
      color: 'border-rose-500/30 text-rose-400'
    },
    {
      title: 'Production Monitoring',
      subtitle: 'Track output and utilization live.',
      desc: 'Optical sensors and cycle counting gateways relay real-time throughput metrics to central OEE dashboards.',
      icon: BarChart2,
      color: 'border-cyan-500/30 text-cyan-400'
    },
    {
      title: 'Maintenance Alerts',
      subtitle: 'Turn machine events into workflows.',
      desc: 'High vibration or current spikes trigger automated maintenance tickets on WhatsApp before breakdowns happen.',
      icon: Bell,
      color: 'border-amber-500/30 text-amber-400'
    },
    {
      title: 'Digital Production Logs',
      subtitle: 'Replace paper-based records.',
      desc: 'Shop floor tablets capture operator logs directly into PostgreSQL, eliminating end-of-month manual Excel transcriptions.',
      icon: FileSpreadsheet,
      color: 'border-emerald-500/30 text-emerald-400'
    },
    {
      title: 'IT Infrastructure Review',
      subtitle: 'Identify unnecessary technology expenditure.',
      desc: 'Audit SaaS subscriptions, server bandwidth, and local storage to right-size IT spending around real shop floor usage.',
      icon: Server,
      color: 'border-purple-500/30 text-purple-400'
    },
    {
      title: 'Automated Reporting',
      subtitle: 'Management-ready operational reports.',
      desc: 'Generate shift-wise OEE, downtime breakdown, and production summaries automatically every evening.',
      icon: FileText,
      color: 'border-blue-500/30 text-blue-400'
    },
    {
      title: 'Compliance Records',
      subtitle: 'Maintain structured operational history.',
      desc: 'Continuously index machine telemetry, maintenance logs, and approval records for seamless ISO/customer audits.',
      icon: ShieldCheck,
      color: 'border-teal-500/30 text-teal-400'
    },
    {
      title: 'Multi-Department Workflows',
      subtitle: 'Connect production, maintenance & management.',
      desc: 'Unify inventory requests, approval routing, and shop floor alerts across production and management teams.',
      icon: Network,
      color: 'border-indigo-500/30 text-indigo-400'
    }
  ];

  return (
    <section className="py-24 bg-[#07090e] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Activity className="w-3.5 h-3.5" />
            <span>PRACTICAL IMPLEMENTATION SCENARIOS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight leading-tight mb-4">
            Proven Shop Floor Use Cases
          </h2>

          <p className="text-slate-400 font-mono text-xs sm:text-sm">
            Targeted solutions addressing specific operational pain points on MSME manufacturing lines.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((uc, i) => {
            const IconComp = uc.icon;
            return (
              <div
                key={i}
                className="bg-slate-950 p-5 rounded-xl border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`p-2.5 rounded-lg border bg-slate-900 w-fit mb-4 ${uc.color}`}>
                    <IconComp className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-slate-100 mb-1">
                    {uc.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mb-3">
                    {uc.subtitle}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {uc.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-900 text-[11px] font-mono text-slate-500 flex items-center justify-between">
                  <span>DEPLOYMENT SCENARIO</span>
                  <ArrowRight className="w-3 h-3 text-cyan-400" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
