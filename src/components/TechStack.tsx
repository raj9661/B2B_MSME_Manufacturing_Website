import React from 'react';
import { Cpu, Network, Layers, Database, CheckCircle2 } from 'lucide-react';

export const TechStack: React.FC = () => {
  const techCategories = [
    {
      category: 'Machine Connectivity',
      icon: Cpu,
      accent: 'border-cyan-500/40 text-cyan-400',
      items: [
        { name: 'Modbus RTU/TCP', desc: 'Standard industrial protocol' },
        { name: 'RS485 Bus', desc: 'Long-distance noise-immune wiring' },
        { name: 'Industrial Sensors', desc: 'Current, CTs, Vibration, Optical' }
      ]
    },
    {
      category: 'Edge & IIoT Gateways',
      icon: Network,
      accent: 'border-amber-500/40 text-amber-400',
      items: [
        { name: 'ESP32 Edge Microcontrollers', desc: 'Low-cost industrial edge processing' },
        { name: 'Raspberry Pi / Industrial Gateways', desc: 'Local data buffering & buffering' },
        { name: 'MQTT Transport Protocol', desc: 'Lightweight pub/sub messaging' },
        { name: 'Node-RED', desc: 'Visual edge telemetry routing' }
      ]
    },
    {
      category: 'Workflow Automation',
      icon: Layers,
      accent: 'border-emerald-500/40 text-emerald-400',
      items: [
        { name: 'n8n Workflow Engine', desc: 'Self-hosted automation triggers' },
        { name: 'Make & Webhooks', desc: 'Multi-system data synchronization' },
        { name: 'REST & GraphQL APIs', desc: 'ERP & legacy system integration' }
      ]
    },
    {
      category: 'Data & Visualization',
      icon: Database,
      accent: 'border-purple-500/40 text-purple-400',
      items: [
        { name: 'PostgreSQL Database', desc: 'Time-series & relational storage' },
        { name: 'Grafana Dashboards', desc: 'Real-time OEE & downtime dashboards' }
      ]
    }
  ];

  return (
    <section id="tech-stack" className="py-24 bg-slate-950 border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>PRACTICAL TECHNOLOGY ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight leading-tight mb-4">
            Practical Technology. Built Around Your Existing Factory.
          </h2>

          <p className="text-slate-400 font-mono text-xs sm:text-sm">
            We use proven, open-standard industrial protocols and edge technology designed for reliability and minimal maintenance.
          </p>
        </div>

        {/* Tech Nodes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((cat, idx) => {
            const IconComp = cat.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg border bg-slate-950 ${cat.accent}`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-mono font-bold text-slate-200">
                      {cat.category}
                    </h3>
                  </div>

                  <div className="space-y-3 font-mono">
                    {cat.items.map((item, i) => (
                      <div key={i} className="p-2.5 rounded bg-slate-950 border border-slate-800/80 text-xs">
                        <span className="text-slate-200 font-bold block mb-0.5">{item.name}</span>
                        <span className="text-[10px] text-slate-400 block">{item.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 text-[10px] font-mono text-slate-500 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-cyan-400" /> Open Standards & Low Maintenance
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <p className="text-center text-xs font-mono text-slate-500 mt-10">
          * Business outcomes and ROI remain more prominent than technical stack names.
        </p>

      </div>
    </section>
  );
};
