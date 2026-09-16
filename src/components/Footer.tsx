import React from 'react';
import { Cpu, ArrowRight, Radio } from 'lucide-react';

interface FooterProps {
  onOpenAssessment: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAssessment }) => {
  return (
    <footer className="bg-[#040609] border-t border-slate-800 text-slate-400 font-mono text-xs">
      
      {/* Top Banner */}
      <div className="border-b border-slate-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
              <Cpu className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <span className="font-bold text-slate-200 text-sm block">VECTORSYS INDUSTRIAL CONSULTING</span>
              <span className="text-[11px] text-slate-500">Bridging Physical Shop Floor Operations with Enterprise IT</span>
            </div>
          </div>

          <button
            onClick={onOpenAssessment}
            className="px-4 py-2 rounded bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-200 hover:text-cyan-400 transition-colors uppercase font-bold text-[11px] flex items-center gap-2"
          >
            <span>Book Assessment</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Footer Links & SEO intent grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1 */}
          <div>
            <h4 className="text-slate-200 font-bold uppercase mb-4 text-xs">4 Core Capabilities</h4>
            <ul className="space-y-2 text-[11px]">
              <li><a href="#services" className="hover:text-cyan-400">01. Operational Efficiency & OEE</a></li>
              <li><a href="#architecture" className="hover:text-cyan-400">02. IIoT & Legacy Retrofitting</a></li>
              <li><a href="#services" className="hover:text-cyan-400">03. Process Automation</a></li>
              <li><a href="#services" className="hover:text-cyan-400">04. IT Cost Optimization</a></li>
            </ul>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-slate-200 font-bold uppercase mb-4 text-xs">Methodology & Tech</h4>
            <ul className="space-y-2 text-[11px]">
              <li><a href="#approach" className="hover:text-cyan-400">Low-CapEx Methodology</a></li>
              <li><a href="#tech-stack" className="hover:text-cyan-400">Modbus & RS485 Bus</a></li>
              <li><a href="#tech-stack" className="hover:text-cyan-400">ESP32 & Edge Gateways</a></li>
              <li><a href="#tech-stack" className="hover:text-cyan-400">Grafana & PostgreSQL</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-slate-200 font-bold uppercase mb-4 text-xs">Diagnostic & Roadmap</h4>
            <ul className="space-y-2 text-[11px]">
              <li><a href="#problems" className="hover:text-cyan-400">Does This Look Familiar?</a></li>
              <li><a href="#diagnostic" className="hover:text-cyan-400">Interactive Problem Diagnostic</a></li>
              <li><a href="#roadmap" className="hover:text-cyan-400">4-Phase Implementation Roadmap</a></li>
              <li><a href="#assessment-form" className="hover:text-cyan-400">Operational Assessment</a></li>
            </ul>
          </div>

          {/* Col 4 - Search Intent Focus */}
          <div>
            <h4 className="text-slate-200 font-bold uppercase mb-4 text-xs">MSME Engineering Scope</h4>
            <p className="text-[11px] leading-relaxed text-slate-400 mb-3">
              Serving MSME manufacturing owners, Plant Heads, Factory Directors, Operations Heads, and CTOs seeking practical, low-CapEx technology modernization.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 text-[11px]">
              <Radio className="w-3 h-3 animate-pulse" />
              <span>Low-CapEx Operational Strategy</span>
            </div>
          </div>

        </div>

        {/* SEO Tag Cloud */}
        <div className="pt-6 border-t border-slate-900 text-[10px] text-slate-500 flex flex-wrap gap-x-4 gap-y-2">
          <span>MSME Manufacturing Modernization</span> • 
          <span>Industrial IoT Consulting</span> • 
          <span>Legacy Machine Monitoring</span> • 
          <span>Non-Invasive CT Sensors</span> • 
          <span>Modbus RS485 Edge Gateways</span> • 
          <span>OEE Optimization</span> • 
          <span>Manufacturing IT Cost Reduction</span> • 
          <span>Factory Process Re-engineering</span>
        </div>

        {/* Bottom Legal */}
        <div className="mt-8 pt-6 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} VectorSys Industrial Consulting. All rights reserved.</p>
          <p className="text-slate-400 italic">
            "Improve what you already have before spending heavily on replacing it."
          </p>
        </div>

      </div>
    </footer>
  );
};
