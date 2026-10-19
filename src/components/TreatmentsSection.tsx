/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import {
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Smile,
  HeartHandshake,
  Flame,
  Activity,
  Shield,
  Layers,
  Scissors,
  Compass,
  ArrowRight,
} from "lucide-react";
import { TREATMENTS, WHATSAPP_URLS } from "../data/clinicData";
import { trackWhatsAppClick } from "../utils/analytics";

const ICON_MAP: Record<string, React.ElementType> = {
  ShieldCheck,
  Sparkles,
  Smile,
  HeartHandshake,
  Flame,
  Activity,
  Shield,
  Layers,
  Scissors,
  Compass,
};

export const TreatmentsSection: React.FC = () => {
  return (
    <section id="tratamientos" className="py-14 sm:py-20 bg-[#F5F8FB] border-b border-[#E3E9F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#0B5FA5]">
            <span>Odontología integral en Las Condes</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0F1B2D] font-display text-balance">
            Tratamientos dentales con especialistas en Santiago
          </h2>

          <p className="text-base sm:text-lg text-[#5A6B80] leading-relaxed">
            Diagnóstico certero con equipamiento clínico y especialistas universitarios dedicados a cada área de la odontología.
          </p>
        </div>

        {/* 10 Treatments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TREATMENTS.map((item) => {
            const Icon = ICON_MAP[item.iconName] || ShieldCheck;
            const waUrl = WHATSAPP_URLS.treatment(item.whatsappMessage);

            return (
              <div
                key={item.id}
                className="group relative bg-white p-6 rounded-2xl border border-[#E3E9F0] shadow-xs hover:shadow-md hover:border-[#18B4A8]/60 transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#F5F8FB] group-hover:bg-[#18B4A8]/10 text-[#0B5FA5] group-hover:text-[#18B4A8] flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    {item.highlight && (
                      <span className="text-[11px] font-semibold text-[#0B5FA5] bg-[#E9F2F9] px-2.5 py-0.5 rounded-full">
                        {item.highlight}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-[#0F1B2D] mb-2 font-display group-hover:text-[#0B5FA5] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#5A6B80] leading-relaxed">
                    {item.shortDesc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#E3E9F0]/60">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick(`tratamiento_${item.id}`, item.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B5FA5] group-hover:text-[#18B4A8] transition-colors"
                  >
                    <span>Consultar por WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Bottom CTA Banner */}
        <div className="mt-12 p-6 sm:p-8 bg-white rounded-3xl border border-[#E3E9F0] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-bold text-[#0F1B2D] font-display">
              ¿No sabes qué necesitas? Escríbenos y te orientamos.
            </h3>
            <p className="text-sm text-[#5A6B80]">
              Cuéntanos tus síntomas o dudas y te asignamos directamente con el especialista indicado.
            </p>
          </div>

          <a
            href={WHATSAPP_URLS.custom("Hola, tengo dudas sobre qué tratamiento necesito en Dentistas Alcántara")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("tratamientos_orientacion")}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-[#25D366] hover:bg-[#1EBE5A] rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white text-transparent shrink-0" />
            <span>Pedir orientación por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
