/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { MessageCircle, Zap, ShieldAlert, HeartPulse, Activity } from "lucide-react";
import { WHATSAPP_URLS } from "../data/clinicData";
import { trackWhatsAppClick } from "../utils/analytics";

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      id: "dolor",
      icon: Zap,
      title: "Dolor de muela intenso",
      description: "Te evaluamos y aliviamos el dolor.",
      tag: "Alivio prioritario",
    },
    {
      id: "fractura",
      icon: ShieldAlert,
      title: "Diente fracturado o golpe",
      description: "Lo reparamos antes de que se infecte.",
      tag: "Preservación dental",
    },
    {
      id: "absceso",
      icon: HeartPulse,
      title: "Encía hinchada o absceso",
      description: "Tratamos la infección de raíz.",
      tag: "Control de infección",
    },
    {
      id: "bruxismo",
      icon: Activity,
      title: "Mandíbula trabada o bruxismo",
      description: "Especialista en articulación temporomandibular.",
      tag: "Evaluación costo $0",
    },
  ];

  return (
    <section id="problema" className="py-14 sm:py-20 bg-[#F5F8FB] border-b border-[#E3E9F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#0B5FA5]">
            <span>Atención rápida en Las Condes</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0F1B2D] font-display text-balance">
            ¿Te duele una muela, se te soltó un bracket o te despiertas con la mandíbula apretada?
          </h2>

          <p className="text-base sm:text-lg text-[#5A6B80] leading-relaxed">
            El dolor de muela no espera al lunes. Tampoco una pieza fracturada o un absceso. Cuanto antes te vea un dentista, más simple y barato suele ser el tratamiento.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.id}
                className="group relative bg-white p-6 rounded-2xl border border-[#E3E9F0] shadow-sm hover:shadow-md hover:border-[#18B4A8]/60 transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#F5F8FB] group-hover:bg-[#18B4A8]/10 text-[#0B5FA5] group-hover:text-[#18B4A8] flex items-center justify-center mb-4 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F1B2D] mb-2 font-display">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#5A6B80] leading-relaxed">
                    {p.description}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#E3E9F0]/60 flex items-center justify-between text-xs text-[#0B5FA5] font-semibold">
                  <span>{p.tag}</span>
                  <span className="text-[#18B4A8] group-hover:translate-x-0.5 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section CTA */}
        <div className="mt-12 text-center">
          <a
            href={WHATSAPP_URLS.urgency}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("problema_urgencia")}
            className="inline-flex items-center gap-2.5 px-7 py-4 text-base font-bold text-white bg-[#25D366] hover:bg-[#1EBE5A] rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-5 h-5 fill-white text-transparent shrink-0" />
            <span>Tengo una urgencia</span>
          </a>
          <p className="text-xs text-[#5A6B80] mt-3">
            Respuesta inmediata por WhatsApp con el especialista de turno.
          </p>
        </div>
      </div>
    </section>
  );
};
