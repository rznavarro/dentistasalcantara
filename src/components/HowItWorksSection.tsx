/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { MessageSquare, CalendarCheck, UserCheck, MessageCircle } from "lucide-react";
import { WHATSAPP_URLS } from "../data/clinicData";
import { trackWhatsAppClick } from "../utils/analytics";

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Escríbenos por WhatsApp o llámanos",
      description: "Cuéntanos qué te pasa, tus molestias o qué tratamiento buscas resolver.",
    },
    {
      number: "02",
      icon: CalendarCheck,
      title: "Te confirmamos día y hora",
      description: "Si es urgencia, te damos prioridad inmediata para que no sigas sufriendo.",
    },
    {
      number: "03",
      icon: UserCheck,
      title: "Te atiende el especialista",
      description: "En Av. Apoquindo 3990, oficina 810, a pasos de la estación Metro Alcántara.",
    },
  ];

  return (
    <section id="como-funciona" className="py-14 sm:py-20 bg-white border-b border-[#E3E9F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#0B5FA5]">
            <span>Atención ágil y sin complicaciones</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0F1B2D] font-display text-balance">
            Tu hora en 3 pasos
          </h2>

          <p className="text-base sm:text-lg text-[#5A6B80] leading-relaxed">
            Coordinamos tu atención en menos de 10 minutos. Todo directo y claro.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-[#F5F8FB] p-8 rounded-3xl border border-[#E3E9F0] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-display text-[#0B5FA5]/30">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-xs text-[#0B5FA5] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#0F1B2D] font-display mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#5A6B80] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E3E9F0]/70 flex items-center gap-2 text-xs text-[#18B4A8] font-semibold">
                  <span>Paso {idx + 1} de 3</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href={WHATSAPP_URLS.general}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("pasos_cta")}
            className="inline-flex items-center gap-2.5 px-7 py-4 text-base font-bold text-white bg-[#25D366] hover:bg-[#1EBE5A] rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-5 h-5 fill-white text-transparent shrink-0" />
            <span>Pedir hora por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
