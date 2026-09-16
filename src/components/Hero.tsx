import React, { useState } from 'react';
import { 
  ArrowRight, AlertTriangle, CheckCircle2, 
  Cpu, FileSpreadsheet, Layers, Radio, Shield, Zap
} from 'lucide-react';

interface HeroProps {
  onOpenAssessment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAssessment }) => {
  const [activeTab, setActiveTab] = useState<'comparison' | 'connected' | 'disconnected'>('comparison');


  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-blueprint-grid overflow-hidden border-b border-slate-800/80">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-amber-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Operational Positioning Tag */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider shadow-lg shadow-cyan-950/40">
            <Radio className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
            <span>PRACTICAL LOW-CAPEX MANUFACTURING MODERNIZATION</span>
          </div>
        </div>

        {/* Main Headline & Positioning */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-100 tracking-tight leading-[1.08] mb-6">
            Modernize Your Manufacturing.{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-400">
              Without Replacing Everything.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto mb-10">
            We help MSME manufacturers reduce downtime, eliminate process waste, optimize IT costs, connect legacy machines, automate workflows, and improve operational visibility — using practical engineering and low-CapEx technology.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 font-mono">
            <button
              onClick={onOpenAssessment}
              className="w-full sm:w-auto px-8 py-4 rounded-md bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-600 text-slate-950 font-bold text-sm uppercase tracking-wider hover:brightness-110 transition-all shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-3 group active:scale-[0.98]"
            >
              <span>Schedule an Operational Assessment</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#approach"
              className="w-full sm:w-auto px-8 py-4 rounded-md bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:border-cyan-500/50 text-sm font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <span>See How It Works</span>
              <Zap className="w-4 h-4 text-amber-400" />
            </a>
          </div>

          {/* Core Philosophy Badge */}
          <p className="text-xs font-mono text-slate-400 mt-6 flex items-center justify-center gap-2">
            <Shield className="w-3.5 h-3.5 text-cyan-400" />
            <span>OPERATIONAL PHILOSOPHY: <strong className="text-slate-200">Improve what you already have before spending heavily on replacing it.</strong></span>
          </p>
        </div>

        {/* HERO VISUALIZATION — DISCONNECTED vs CONNECTED FACTORY */}
        <div className="bg-slate-950/90 rounded-xl border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl">
          
          {/* Top Control Bar */}
          <div className="bg-slate-900/90 border-b border-slate-800 px-4 py-3 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3 font-mono text-xs text-slate-300">
              <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="font-semibold text-slate-200 uppercase tracking-wider">
                INTERACTIVE INDUSTRIAL FACTORY SIMULATOR
              </span>
              <span className="hidden md:inline-block text-slate-500">|</span>
              <span className="hidden md:inline-block text-slate-400">Visualizing Disconnected vs Connected Operations</span>
            </div>

            {/* Interactive State Toggle */}
            <div className="flex items-center bg-slate-950 rounded-lg p-1 border border-slate-800 font-mono text-xs">
              <button
                onClick={() => setActiveTab('comparison')}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  activeTab === 'comparison'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Split View
              </button>
              <button
                onClick={() => setActiveTab('disconnected')}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  activeTab === 'disconnected'
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40 font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Disconnected (Before)
              </button>
              <button
                onClick={() => setActiveTab('connected')}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  activeTab === 'connected'
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Connected (After)
              </button>
            </div>
          </div>

          {/* Visual Canvas Grid */}
          <div className="p-4 sm:p-6 lg:p-8 bg-[#090d16] min-h-[460px] relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
              
              {/* LEFT SIDE: DISCONNECTED FACTORY */}
              {(activeTab === 'comparison' || activeTab === 'disconnected') && (
                <div className="rounded-lg bg-slate-900/80 border border-rose-900/40 p-5 relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute top-0 right-0 bg-rose-950/80 text-rose-400 font-mono text-[10px] uppercase font-bold px-3 py-1 rounded-bl border-b border-l border-rose-800/50 flex items-center gap-1.5">
                    <AlertTriangle className="w-3 h-3 text-rose-400" />
                    DISCONNECTED FACTORY FLOOR
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-100 mb-1 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                      Unmonitored & Disconnected State
                    </h3>
                    <p className="text-xs text-slate-400 font-mono mb-5">
                      Legacy Machines • Manual Data Entry • Blindspots • High Downtime Risk
                    </p>

                    {/* Machine Simulation Cards - Disconnected */}
                    <div className="space-y-3">
                      
                      {/* Machine A */}
                      <div className="bg-slate-950/80 p-3.5 rounded-md border border-slate-800 relative">
                        <div className="flex items-center justify-between text-xs font-mono mb-2">
                          <span className="text-slate-300 font-semibold">VMC-01 (CNC Milling Machine)</span>
                          <span className="px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/30 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping"></span>
                            UNPLANNED STOP (42 min)
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-[11px] font-mono text-slate-400">
                          <div className="bg-slate-900 p-2 rounded border border-slate-800/60">
                            <span className="block text-[10px] text-slate-500">REASON</span>
                            <span className="text-rose-300">Unknown Stoppage</span>
                          </div>
                          <div className="bg-slate-900 p-2 rounded border border-slate-800/60">
                            <span className="block text-[10px] text-slate-500">LOG METHOD</span>
                            <span className="text-slate-300 flex items-center gap-1">
                              <FileSpreadsheet className="w-3 h-3 text-amber-400" /> Paper Shift Log
                            </span>
                          </div>
                          <div className="bg-slate-900 p-2 rounded border border-slate-800/60">
                            <span className="block text-[10px] text-slate-500">OEE VISIBILITY</span>
                            <span className="text-slate-400">End-of-Month Excel</span>
                          </div>
                        </div>
                      </div>

                      {/* Machine B */}
                      <div className="bg-slate-950/80 p-3.5 rounded-md border border-slate-800">
                        <div className="flex items-center justify-between text-xs font-mono mb-2">
                          <span className="text-slate-300 font-semibold">LATHE-04 (Hydraulic Machine)</span>
                          <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                            RUNNING (CYCLES UNTRACKED)
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-[11px] font-mono text-slate-400">
                          <div className="bg-slate-900 p-2 rounded border border-slate-800/60">
                            <span className="block text-[10px] text-slate-500">VIBRATION</span>
                            <span className="text-amber-400">High / Unmonitored</span>
                          </div>
                          <div className="bg-slate-900 p-2 rounded border border-slate-800/60">
                            <span className="block text-[10px] text-slate-500">OPERATOR</span>
                            <span className="text-slate-300">Manual Tally Counter</span>
                          </div>
                          <div className="bg-slate-900 p-2 rounded border border-slate-800/60">
                            <span className="block text-[10px] text-slate-500">MAINTENANCE</span>
                            <span className="text-rose-400">Reactive Fixes</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Impact Summary Bar */}
                  <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-rose-400">
                    <span className="flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5" /> High Bottlenecks & Missing Real-time Data
                    </span>
                    <span className="text-slate-500 text-[11px]">Est. OEE: ~52%</span>
                  </div>
                </div>
              )}

              {/* RIGHT SIDE: DIGITALLY CONNECTED FACTORY */}
              {(activeTab === 'comparison' || activeTab === 'connected') && (
                <div className="rounded-lg bg-slate-900/90 border border-cyan-500/40 p-5 relative overflow-hidden flex flex-col justify-between glow-cyan">
                  <div className="absolute top-0 right-0 bg-cyan-950/90 text-cyan-300 font-mono text-[10px] uppercase font-bold px-3 py-1 rounded-bl border-b border-l border-cyan-500/40 flex items-center gap-1.5">
                    <Zap className="w-3 h-3 text-cyan-400 animate-pulse" />
                    DIGITALLY RETROFITTED FACTORY
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-100 mb-1 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Connected & Automated Environment
                    </h3>
                    <p className="text-xs text-cyan-400/90 font-mono mb-5">
                      Non-Invasive IIoT Sensors • Edge Gateway • MQTT • Real-Time OEE Dashboard
                    </p>

                    {/* Machine Simulation Cards - Connected */}
                    <div className="space-y-3">
                      
                      {/* Connected Machine A */}
                      <div className="bg-slate-950 p-3.5 rounded-md border border-cyan-500/30 relative">
                        <div className="flex items-center justify-between text-xs font-mono mb-2">
                          <span className="text-slate-200 font-semibold flex items-center gap-1.5">
                            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                            VMC-01 [CT Sensor + ESP32 Edge]
                          </span>
                          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1 font-bold">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                            ACTIVE OPTIMAL (98.4%)
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-[11px] font-mono text-slate-300">
                          <div className="bg-slate-900/90 p-2 rounded border border-cyan-900/40">
                            <span className="block text-[10px] text-slate-400">SIGNAL</span>
                            <span className="text-cyan-400 flex items-center gap-1">
                              <Radio className="w-3 h-3 animate-pulse text-cyan-400" /> Modbus/RS485
                            </span>
                          </div>
                          <div className="bg-slate-900/90 p-2 rounded border border-cyan-900/40">
                            <span className="block text-[10px] text-slate-400">GATEWAY</span>
                            <span className="text-emerald-400">MQTT to Grafana</span>
                          </div>
                          <div className="bg-slate-900/90 p-2 rounded border border-cyan-900/40">
                            <span className="block text-[10px] text-slate-400">LIVE OEE</span>
                            <span className="text-amber-400 font-bold">86.2% Live</span>
                          </div>
                        </div>
                      </div>

                      {/* Connected Machine B */}
                      <div className="bg-slate-950 p-3.5 rounded-md border border-cyan-500/30">
                        <div className="flex items-center justify-between text-xs font-mono mb-2">
                          <span className="text-slate-200 font-semibold flex items-center gap-1.5">
                            <Layers className="w-3.5 h-3.5 text-amber-400" />
                            LATHE-04 [Vibration + Optical Sensor]
                          </span>
                          <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                            TELEMETRY STREAMING
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-[11px] font-mono text-slate-300">
                          <div className="bg-slate-900/90 p-2 rounded border border-cyan-900/40">
                            <span className="block text-[10px] text-slate-400">CYCLE COUNT</span>
                            <span className="text-emerald-400 font-bold">1,420 units/hr</span>
                          </div>
                          <div className="bg-slate-900/90 p-2 rounded border border-cyan-900/40">
                            <span className="block text-[10px] text-slate-400">AUTOMATION</span>
                            <span className="text-cyan-400">Auto WhatsApp Alert</span>
                          </div>
                          <div className="bg-slate-900/90 p-2 rounded border border-cyan-900/40">
                            <span className="block text-[10px] text-slate-400">CAPEX SPEND</span>
                            <span className="text-emerald-400 font-bold">&lt; 5% New Machine</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Operational Telemetry Metrics Header */}
                  <div className="mt-5 pt-3 border-t border-cyan-500/30 flex items-center justify-between text-xs font-mono">
                    <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Full Floor Visibility & Zero Manual Paperwork
                    </span>
                    <span className="text-cyan-400 font-bold">Target OEE: &gt;85%</span>
                  </div>
                </div>
              )}

            </div>

            {/* Bottom Flow Graphic Arrow */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="text-slate-500 uppercase">TRANSFORMATION FLOW:</span>
                <span className="text-slate-300">Legacy Machine</span>
                <span className="text-cyan-400">→ Non-invasive Sensor</span>
                <span className="text-cyan-400">→ RS485 / Modbus</span>
                <span className="text-cyan-400">→ Edge Gateway</span>
                <span className="text-emerald-400">→ Real-time Dashboard</span>
              </div>
              <div className="text-amber-400 font-semibold flex items-center gap-1">
                <Zap className="w-3.5 h-3.5" /> Low-CapEx Modernization
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
