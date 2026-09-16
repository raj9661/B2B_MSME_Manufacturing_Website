import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemGrid } from './components/ProblemGrid';
import { CorePhilosophy } from './components/CorePhilosophy';
import { ServicesSection } from './components/ServicesSection';
import { AuditReadiness } from './components/AuditReadiness';
import { LowCapExComparison } from './components/LowCapExComparison';
import { TechStack } from './components/TechStack';
import { ExecutionRoadmap } from './components/ExecutionRoadmap';
import { ROIShowcase } from './components/ROIShowcase';
import { PhilosophyPrinciples } from './components/PhilosophyPrinciples';
import { ExpertiseBridge } from './components/ExpertiseBridge';
import { UseCases } from './components/UseCases';
import { InteractiveDiagnostic } from './components/InteractiveDiagnostic';
import { FinalCTA } from './components/FinalCTA';
import { AssessmentModal } from './components/AssessmentModal';
import { Footer } from './components/Footer';

export function App() {
  const [assessmentModalOpen, setAssessmentModalOpen] = useState(false);

  const handleOpenAssessment = () => {
    setAssessmentModalOpen(true);
  };

  const handleCloseAssessment = () => {
    setAssessmentModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      {/* Sticky Header Nav */}
      <Navbar onOpenAssessment={handleOpenAssessment} />

      {/* Main Storytelling Sequence */}
      <main>
        {/* 1. Hero Section (Disconnected vs Connected Factory Simulator) */}
        <Hero onOpenAssessment={handleOpenAssessment} />

        {/* 2. Does This Look Familiar? (6 Problem Cards) */}
        <ProblemGrid />

        {/* 3. Core Philosophy & Transformation Pipeline */}
        <CorePhilosophy />

        {/* 4. 4 Core Services & IIoT Architecture */}
        <ServicesSection />

        {/* 5. Continuous Audit & Compliance Readiness */}
        <AuditReadiness />

        {/* 6. Low-CapEx Modernization Comparison */}
        <LowCapExComparison />

        {/* 7. Practical Technology Stack */}
        <TechStack />

        {/* 8. Execution Roadmap (Timeline) */}
        <ExecutionRoadmap />

        {/* 9. ROI & Baseline Metric Shifts */}
        <ROIShowcase />

        {/* 10. 5 Principles ("How We Think") */}
        <PhilosophyPrinciples />

        {/* 11. Expertise Bridge (Factory Floor vs Server Room) */}
        <ExpertiseBridge />

        {/* 12. 8 Practical Use Cases */}
        <UseCases />

        {/* 13. Interactive "What's Your Problem?" Diagnostic */}
        <InteractiveDiagnostic />

        {/* 14. Strong Final Call to Action */}
        <FinalCTA onOpenAssessment={handleOpenAssessment} />
      </main>

      {/* Footer */}
      <Footer onOpenAssessment={handleOpenAssessment} />

      {/* Operational Assessment Booking Modal */}
      <AssessmentModal
        isOpen={assessmentModalOpen}
        onClose={handleCloseAssessment}
      />
    </div>
  );
}

export default App;
