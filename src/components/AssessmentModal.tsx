import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Cpu, ShieldCheck, Factory, AlertTriangle, Building2, User, Phone, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AssessmentModal: React.FC<AssessmentModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [industry, setIndustry] = useState('');
  const [machineAge, setMachineAge] = useState('');
  const [primaryPains, setPrimaryPains] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    role: 'Plant Head / Operations Head',
    company: '',
    phone: '',
    email: '',
    notes: ''
  });

  if (!isOpen) return null;

  const togglePain = (pain: string) => {
    setPrimaryPains(prev => 
      prev.includes(pain) ? prev.filter(p => p !== pain) : [...prev, pain]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00f0ff', '#f59e0b', '#10b981']
    });
  };

  const resetForm = () => {
    setStep(1);
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      
      <div className="relative w-full max-w-2xl bg-[#090d16] border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden glow-cyan">
        
        {/* Header Bar */}
        <div className="bg-slate-900 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>OPERATIONAL ASSESSMENT SCHEDULER</span>
          </div>
          <button
            onClick={resetForm}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8">
          
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-emerald-400" />
              </div>

              <h3 className="text-2xl font-bold text-slate-100 mb-2 font-mono">
                Assessment Request Confirmed
              </h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
                Thank you, <strong className="text-cyan-400">{formData.name}</strong>. An industrial consultant will review your factory profile and contact you within 24 hours.
              </p>

              {/* Assessment Summary Box */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-left max-w-md mx-auto mb-6 space-y-2 text-slate-300">
                <div className="text-cyan-400 font-bold uppercase border-b border-slate-800 pb-2 mb-2">
                  CONFIRMED ASSESSMENT SCOPE:
                </div>
                <div><strong>Industry:</strong> {industry || 'MSME Manufacturing'}</div>
                <div><strong>Machine Profile:</strong> {machineAge || 'Mixed Machinery'}</div>
                <div><strong>Focus Pain Points:</strong> {primaryPains.join(', ') || 'Floor Operations'}</div>
                <div><strong>Contact Phone:</strong> {formData.phone}</div>
              </div>

              <button
                onClick={resetForm}
                className="px-6 py-3 rounded-md bg-cyan-500 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider hover:brightness-110"
              >
                Return to Site
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              
              {/* STEP 1: FACTORY PROFILE */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <span className="font-mono text-xs text-cyan-400 uppercase font-bold block mb-1">
                      STEP 1 OF 3 — FACTORY PROFILE
                    </span>
                    <h3 className="text-xl font-bold text-slate-100">
                      What sector best describes your manufacturing plant?
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
                    {[
                      'Precision Machining',
                      'Plastics & Injection',
                      'Auto Ancillary',
                      'Metal Fabrication',
                      'Electronics Assembly',
                      'Packaging',
                      'Pharma / FMCG',
                      'General Manufacturing'
                    ].map((ind) => (
                      <button
                        type="button"
                        key={ind}
                        onClick={() => setIndustry(ind)}
                        className={`p-3 rounded-lg border text-left transition-all ${
                          industry === ind 
                            ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 font-bold' 
                            : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        {ind}
                      </button>
                    ))}
                  </div>

                  <div>
                    <label className="font-mono text-xs text-slate-300 font-bold block mb-2">
                      Machine Age & Controller Profile:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                      {[
                        'Mostly Legacy (>10 yrs)',
                        'Mixed Legacy & CNCs',
                        'Modern CNCs / PLCs'
                      ].map((age) => (
                        <button
                          type="button"
                          key={age}
                          onClick={() => setMachineAge(age)}
                          className={`p-3 rounded-lg border text-left transition-all ${
                            machineAge === age 
                              ? 'bg-amber-500/20 border-amber-400 text-amber-300 font-bold' 
                              : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                          }`}
                        >
                          {age}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      type="button"
                      disabled={!industry || !machineAge}
                      onClick={() => setStep(2)}
                      className="px-6 py-3 rounded bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      Next Step <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: PAIN POINTS */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <span className="font-mono text-xs text-cyan-400 uppercase font-bold block mb-1">
                      STEP 2 OF 3 — OPERATIONAL PAIN POINTS
                    </span>
                    <h3 className="text-xl font-bold text-slate-100">
                      Which challenges require immediate assessment?
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                    {[
                      'Unplanned Machine Downtime',
                      'Production Bottlenecks & Delays',
                      'Paper Shift Logs & Excel Entry',
                      'Disconnected Systems & ERP Silos',
                      'Unoptimized IT & Cloud Costs',
                      'Audit & Compliance Record Stress'
                    ].map((pain) => {
                      const isSelected = primaryPains.includes(pain);
                      return (
                        <button
                          type="button"
                          key={pain}
                          onClick={() => togglePain(pain)}
                          className={`p-3.5 rounded-lg border text-left transition-all flex items-center justify-between ${
                            isSelected 
                              ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 font-bold' 
                              : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                          }`}
                        >
                          <span>{pain}</span>
                          {isSelected && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-2.5 rounded bg-slate-900 border border-slate-800 text-slate-300 font-mono text-xs uppercase"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      disabled={primaryPains.length === 0}
                      onClick={() => setStep(3)}
                      className="px-6 py-3 rounded bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider disabled:opacity-50 flex items-center gap-2"
                    >
                      Final Step <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: CONTACT DETAILS */}
              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <span className="font-mono text-xs text-cyan-400 uppercase font-bold block mb-1">
                      STEP 3 OF 3 — SCHEDULING DETAILS
                    </span>
                    <h3 className="text-xl font-bold text-slate-100">
                      Where should our engineers contact you?
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                    <div>
                      <label className="block text-slate-300 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g., Rajesh Kumar"
                        className="w-full bg-slate-950 border border-slate-800 rounded p-2.5 text-slate-100 focus:border-cyan-400 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 mb-1">Your Role *</label>
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded p-2.5 text-slate-100 focus:border-cyan-400 outline-none"
                      >
                        <option>Plant Head / Operations Head</option>
                        <option>Factory Owner / Director</option>
                        <option>Production Manager</option>
                        <option>Maintenance Manager</option>
                        <option>CTO / IT Head</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-300 mb-1">Company / Plant Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g., Precision Tech Components Pvt Ltd"
                        className="w-full bg-slate-950 border border-slate-800 rounded p-2.5 text-slate-100 focus:border-cyan-400 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 mb-1">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-slate-950 border border-slate-800 rounded p-2.5 text-slate-100 focus:border-cyan-400 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-mono text-xs mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rajesh@precisiontech.com"
                      className="w-full bg-slate-950 border border-slate-800 rounded p-2.5 text-slate-100 font-mono text-xs focus:border-cyan-400 outline-none"
                    />
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-4 py-2.5 rounded bg-slate-900 border border-slate-800 text-slate-300 font-mono text-xs uppercase"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-3 rounded bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20"
                    >
                      Confirm Assessment Booking
                    </button>
                  </div>
                </div>
              )}

            </form>
          )}

        </div>

      </div>
    </div>
  );
};
