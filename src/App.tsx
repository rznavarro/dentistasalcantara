/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { TopBar } from "./components/TopBar";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProblemSection } from "./components/ProblemSection";
import { UrgencySection } from "./components/UrgencySection";
import { TreatmentsSection } from "./components/TreatmentsSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { TeamSection } from "./components/TeamSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { TrustAndPaymentSection } from "./components/TrustAndPaymentSection";
import { FaqSection } from "./components/FaqSection";
import { FinalCtaSection } from "./components/FinalCtaSection";
import { LocationSection } from "./components/LocationSection";
import { Footer } from "./components/Footer";
import { FloatingActions } from "./components/FloatingActions";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#0F1B2D] flex flex-col font-sans selection:bg-[#18B4A8]/20 selection:text-[#0B5FA5]">
      {/* 1. Thin Urgent Top Announcement Bar */}
      <TopBar />

      {/* 2. Compactable Header */}
      <Header />

      {/* Main Landing Flow */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: El Problema */}
        <ProblemSection />

        {/* Section 3: Urgencias - Razón para actuar ahora */}
        <UrgencySection />

        {/* Section 4: Tratamientos con Especialistas */}
        <TreatmentsSection />

        {/* Section 5: Prueba Social y Opiniones Reales */}
        <ReviewsSection />

        {/* Section 6: Equipo de Especialistas */}
        <TeamSection />

        {/* Section 7: Cómo Funciona en 3 Pasos */}
        <HowItWorksSection />

        {/* Section 8: Confianza, SEREMI y Facilidades de Pago */}
        <TrustAndPaymentSection />

        {/* Section 9: Preguntas Frecuentes */}
        <FaqSection />

        {/* Section 10: CTA Final y Formulario Alternativo */}
        <FinalCtaSection />

        {/* Section 11: Ubicación en Metro Alcántara */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp CTA and Mobile 2-Button Fixed Bar */}
      <FloatingActions />
    </div>
  );
}
