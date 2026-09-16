import React, { useState } from 'react';
import { 
  Activity, Cpu, CheckCircle2, Radio
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [automationTab, setAutomationTab] = useState<'after' | 'before'>('after');


  return (
    <section id="services" className="py-24 bg-[#07090e] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>SPECIALIZED SERVICES FOR MSME MANUFACTURERS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight mb-4">
            Practical Engineering & Technology Capabilities
          </h2>
          <p className="text-slate-400 font-mono text-sm sm:text-base">
            Targeted consulting and retrofitting solutions to increase factory productivity without high capital expenditure.
          </p>
        </div>

        {/* SERVICE 01: OPERATIONAL EFFICIENCY */}
        <div className="mb-20 bg-slate-950/80 border border-slate-800 rounded-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6">
              <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 mb-3 inline-block">
                SERVICE 01 — OPERATIONAL EFFICIENCY
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4">
                Make Your Factory Run Better.
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                We analyze production bottlenecks, unnecessary process steps, downtime causes, inefficient approvals, manual work, and operational waste directly on your factory floor.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 font-mono text-xs text-slate-300">
                {[
                  'Bottleneck Identification',
                  'Downtime Cause Analysis',
                  'Throughput Improvement',
                  'Cycle-Time Reduction',
                  'Workflow Optimization',
                  'OEE Monitoring Systems',
                  'Maintenance Process Improvement'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded bg-slate-900 border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-lg bg-gradient-to-r from-cyan-950/40 to-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                <span className="font-bold text-cyan-400 uppercase block mb-1">BUSINESS OUTCOME:</span>
                Higher throughput. Less operational waste. Better machine utilization.
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-slate-900/90 rounded-xl p-5 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 font-mono text-xs text-slate-400">
                  <span className="flex items-center gap-2 text-slate-200 font-bold">
                    <Activity className="w-4 h-4 text-cyan-400" />
                    OEE & THROUGHPUT OPTIMIZATION
                  </span>
                  <span className="text-cyan-400">LIVE BASELINE SHIFT</span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>Machine Utilization / Availability</span>
                      <span className="text-emerald-400 font-bold">58% → 84% (+26%)</span>
                    </div>
                    <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-slate-800">
                      <div className="bg-gradient-to-r from-cyan-500 to-emerald-400 h-full w-[84%] rounded-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>Unplanned Stoppage Time</span>
                      <span className="text-emerald-400 font-bold">Reduced by 40%</span>
                    </div>
                    <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-slate-800">
                      <div className="bg-emerald-500 h-full w-[35%] rounded-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>Batch Cycle Time</span>
                      <span className="text-cyan-400 font-bold">Streamlined</span>
                    </div>
                    <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-slate-800">
                      <div className="bg-cyan-400 h-full w-[76%] rounded-full"></div>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-slate-500 font-mono pt-2 border-t border-slate-800">
                  * Baseline shift measured against pre-assessment factory benchmarks.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* SERVICE 02: INDUSTRIAL IoT & LEGACY RETROFITTING */}
        <div id="architecture" className="mb-20 bg-slate-950/80 border border-slate-800 rounded-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
          <div className="mb-8">
            <span className="font-mono text-xs font-bold text-amber-400 uppercase tracking-widest px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 mb-3 inline-block">
              SERVICE 02 — INDUSTRIAL IoT & LEGACY RETROFITTING
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-3">
              Connect Existing Machines. Don't Replace Them Prematurely.
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
              Older machinery can often be monitored using non-invasive external sensors and edge technology — giving you real-time visibility without spending millions on new equipment.
            </p>
          </div>

          {/* Business Value Highlight Box */}
          <div className="mb-8 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 font-mono text-sm text-amber-300 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <Radio className="w-5 h-5 text-amber-400 animate-pulse shrink-0" />
              <span><strong>BUSINESS VALUE FIRST:</strong> Know when machines run, stop, slow down and require attention in real-time.</span>
            </div>
            <span className="text-xs text-slate-400">Technical Architecture Below ↓</span>
          </div>

          {/* IIoT ARCHITECTURE FLOW DIAGRAM */}
          <div className="bg-[#090d16] p-6 rounded-xl border border-slate-800 font-mono">
            <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-6 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              NON-INVASIVE IIoT RETROFIT ARCHITECTURE
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 relative">
              
              {/* Node 1 */}
              <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-400 transition-colors text-center">
                <span className="text-[10px] text-slate-500 block mb-1">01. ASSET</span>
                <span className="text-xs font-bold text-slate-200 block mb-1">Existing Machine</span>
                <span className="text-[10px] text-slate-400">CNC, Lathe, Press, Injection</span>
              </div>

              {/* Node 2 */}
              <div className="p-3.5 rounded-lg bg-slate-900 border border-cyan-500/40 hover:border-cyan-400 transition-colors text-center glow-cyan">
                <span className="text-[10px] text-cyan-400 block mb-1">02. NON-INVASIVE</span>
                <span className="text-xs font-bold text-cyan-300 block mb-1">Sensors</span>
                <span className="text-[10px] text-slate-300">CT Current / Vibration / Optical</span>
              </div>

              {/* Node 3 */}
              <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-400 transition-colors text-center">
                <span className="text-[10px] text-slate-500 block mb-1">03. PROTOCOL</span>
                <span className="text-xs font-bold text-slate-200 block mb-1">RS485 / Modbus</span>
                <span className="text-[10px] text-slate-400">Industrial Wired Bus</span>
              </div>

              {/* Node 4 */}
              <div className="p-3.5 rounded-lg bg-slate-900 border border-amber-500/40 hover:border-amber-400 transition-colors text-center">
                <span className="text-[10px] text-amber-400 block mb-1">04. EDGE PROCESSING</span>
                <span className="text-xs font-bold text-amber-300 block mb-1">Edge Gateway</span>
                <span className="text-[10px] text-slate-300">ESP32 / Raspberry Pi</span>
              </div>

              {/* Node 5 */}
              <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-400 transition-colors text-center">
                <span className="text-[10px] text-slate-500 block mb-1">05. TRANSPORT</span>
                <span className="text-xs font-bold text-slate-200 block mb-1">MQTT / Node-RED</span>
                <span className="text-[10px] text-slate-400">Lightweight Data Stream</span>
              </div>

              {/* Node 6 */}
              <div className="p-3.5 rounded-lg bg-slate-900 border border-emerald-500/40 hover:border-emerald-400 transition-colors text-center">
                <span className="text-[10px] text-emerald-400 block mb-1">06. VISIBILITY</span>
                <span className="text-xs font-bold text-emerald-300 block mb-1">Dashboard & Alerts</span>
                <span className="text-[10px] text-slate-300">Grafana / WhatsApp / SMS</span>
              </div>

            </div>

            <p className="text-xs text-slate-400 mt-4 text-center">
              Click any architecture node above to view practical deployment details.
            </p>
          </div>
        </div>

        {/* SERVICE 03: PROCESS RE-ENGINEERING & AUTOMATION */}
        <div className="mb-20 bg-slate-950/80 border border-slate-800 rounded-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5">
              <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-widest px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 mb-3 inline-block">
                SERVICE 03 — PROCESS RE-ENGINEERING & AUTOMATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4">
                Automate the Right Process — Not the Wrong One.
              </h3>

              <blockquote className="p-4 rounded-lg bg-slate-900 border-l-4 border-emerald-400 text-slate-200 text-sm font-semibold italic mb-5">
                "We eliminate unnecessary steps before automating them. If a process is inefficient, automation only makes the inefficiency faster."
              </blockquote>

              <div className="space-y-2 font-mono text-xs text-slate-300 mb-6">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold">1. MAP</span>
                  <span>Document exact shop floor steps</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold">2. REMOVE WASTE</span>
                  <span>Cut redundant forms & handoffs</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold">3. SIMPLIFY & STANDARDIZE</span>
                  <span>Create clear standard operating procedure</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold">4. AUTOMATE</span>
                  <span>Connect digital triggers & databases</span>
                </div>
              </div>
            </div>

            {/* INTERACTIVE BEFORE / AFTER WORKFLOW TRANSFORMER */}
            <div className="lg:col-span-7">
              <div className="bg-slate-900/90 rounded-xl p-6 border border-slate-800">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-mono text-xs font-bold uppercase text-slate-300">
                    OPERATIONAL PROCESS TRANSFORMATION
                  </h4>
                  <div className="flex items-center bg-slate-950 p-1 rounded-md border border-slate-800 font-mono text-xs">
                    <button
                      onClick={() => setAutomationTab('before')}
                      className={`px-3 py-1 rounded transition-colors ${
                        automationTab === 'before'
                          ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30 font-bold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      BEFORE (Manual)
                    </button>
                    <button
                      onClick={() => setAutomationTab('after')}
                      className={`px-3 py-1 rounded transition-colors ${
                        automationTab === 'after'
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      AFTER (Automated)
                    </button>
                  </div>
                </div>

                {automationTab === 'before' ? (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3 bg-rose-950/20 rounded border border-rose-900/40 text-rose-300 flex items-center justify-between">
                      <span>1. Operator Fills Paper Form</span>
                      <span className="text-[10px] text-rose-400">Takes 15 mins</span>
                    </div>
                    <div className="p-3 bg-rose-950/20 rounded border border-rose-900/40 text-rose-300 flex items-center justify-between">
                      <span>2. Physical Hand-off to Supervisor</span>
                      <span className="text-[10px] text-rose-400">Shift Delay</span>
                    </div>
                    <div className="p-3 bg-rose-950/20 rounded border border-rose-900/40 text-rose-300 flex items-center justify-between">
                      <span>3. Manual Excel Data Entry</span>
                      <span className="text-[10px] text-rose-400">Typo Risk</span>
                    </div>
                    <div className="p-3 bg-rose-950/20 rounded border border-rose-900/40 text-rose-300 flex items-center justify-between">
                      <span>4. Manual Email & Waiting for Approval</span>
                      <span className="text-[10px] text-rose-400">1-2 Days Lost</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3 bg-emerald-950/30 rounded border border-emerald-500/30 text-emerald-300 flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        1. Digital Sensor / Tablet Trigger
                      </span>
                      <span className="text-[10px] text-emerald-400 font-bold">Instant (0.1s)</span>
                    </div>
                    <div className="p-3 bg-emerald-950/30 rounded border border-emerald-500/30 text-emerald-300 flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        2. Automated Workflow Route
                      </span>
                      <span className="text-[10px] text-emerald-400 font-bold">Zero Hand-off</span>
                    </div>
                    <div className="p-3 bg-emerald-950/30 rounded border border-emerald-500/30 text-emerald-300 flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        3. Database & Notification Push
                      </span>
                      <span className="text-[10px] text-emerald-400 font-bold">PostgreSQL Sync</span>
                    </div>
                    <div className="p-3 bg-emerald-950/30 rounded border border-emerald-500/30 text-emerald-300 flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        4. Real-time Dashboard & Audit Record
                      </span>
                      <span className="text-[10px] text-emerald-400 font-bold">Live Visibility</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* SERVICE 04: IT COST OPTIMIZATION */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6">
              <span className="font-mono text-xs font-bold text-purple-400 uppercase tracking-widest px-2.5 py-1 rounded bg-purple-500/10 border border-purple-500/30 mb-3 inline-block">
                SERVICE 04 — IT COST OPTIMIZATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-4">
                Your IT Budget Should Fund Productivity — Not Waste.
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                We review software licenses, SaaS subscriptions, cloud infrastructure, local servers, redundant systems, and underutilized IT resources to restructure spending around actual business usage.
              </p>

              <h4 className="text-xs font-mono font-bold uppercase text-purple-400 tracking-wider mb-3">
                OPTIMIZE BEFORE YOU UPGRADE
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed font-sans mb-4">
                Instead of making exaggerated percentage claims, we conduct granular audits to identify unutilized cloud compute, duplicate software licenses, and outdated maintenance contracts.
              </p>
            </div>

            {/* VISUAL IT SPEND BREAKDOWN */}
            <div className="lg:col-span-6">
              <div className="bg-slate-900/90 rounded-xl p-6 border border-slate-800 font-mono text-xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="font-bold text-slate-200">TYPICAL UNOPTIMIZED MSME IT SPEND</span>
                  <span className="text-rose-400 font-semibold">IDENTIFIABLE WASTE</span>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>Unused SaaS / Software Licenses</span>
                      <span className="text-rose-400">Idle / Excess Seats</span>
                    </div>
                    <div className="w-full bg-slate-950 h-3 rounded overflow-hidden">
                      <div className="bg-rose-500 h-full w-[80%] rounded"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>Oversized Cloud & Server Instances</span>
                      <span className="text-amber-400">Underutilized RAM/CPU</span>
                    </div>
                    <div className="w-full bg-slate-950 h-3 rounded overflow-hidden">
                      <div className="bg-amber-500 h-full w-[65%] rounded"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>Duplicate Storage & Redundant Tools</span>
                      <span className="text-purple-400">Consolidated Infrastructure</span>
                    </div>
                    <div className="w-full bg-slate-950 h-3 rounded overflow-hidden">
                      <div className="bg-purple-500 h-full w-[45%] rounded"></div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 text-[11px] text-emerald-400 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Right-size infrastructure based on real shop floor data traffic.</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
