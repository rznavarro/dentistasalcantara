/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { GraduationCap, Award, MessageCircle } from "lucide-react";
import { DOCTORS, WHATSAPP_URLS } from "../data/clinicData";
import { trackWhatsAppClick } from "../utils/analytics";

export const TeamSection: React.FC = () => {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="equipo" className="py-14 sm:py-20 bg-[#F5F8FB] border-b border-[#E3E9F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#0B5FA5]">
            <span>Cuerpo Médico Odontológico</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0F1B2D] font-display text-balance">
            Un especialista para cada tratamiento, bajo un mismo techo
          </h2>

          <p className="text-base sm:text-lg text-[#5A6B80] leading-relaxed">
            Liderados por la <strong>Dra. María Angélica Silva</strong>, odontóloga de la Universidad de Chile con magíster en Implantología, atendemos en Santiago desde 1995.
          </p>
        </div>

        {/* 9 Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DOCTORS.map((doc) => {
            const hasError = failedImages[doc.id];

            return (
              <div
                key={doc.id}
                className="group relative bg-white rounded-3xl overflow-hidden border border-[#E3E9F0] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {/* Photo container */}
                <div className="relative aspect-[4/3] bg-[#E9F2F9] overflow-hidden">
                  {!hasError ? (
                    <img
                      src={doc.photoUrl}
                      alt={`${doc.name}, ${doc.specialty} en Las Condes`}
                      className="w-full h-full object-cover object-top group-hover:scale-106 transition-transform duration-500 ease-out"
                      loading="lazy"
                      onError={() => handleImageError(doc.id)}
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#0B5FA5]/15 to-[#18B4A8]/15 text-[#0B5FA5]">
                      <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-xl font-bold font-display text-[#0B5FA5] mb-2">
                        {doc.name.replace(/^(Dr\.|Dra\.)\s*/, "").slice(0, 2).toUpperCase()}
                      </div>
                      <span className="text-xs font-medium text-[#5A6B80]">Especialista odontológico</span>
                    </div>
                  )}

                  {doc.badge && (
                    <div className="absolute top-3 left-3 bg-[#0B5FA5] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      <span>{doc.badge}</span>
                    </div>
                  )}

                  {/* Gradient overlay on hover for high-contrast legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-xs font-medium text-white/95">
                      {doc.specialty}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-[#0F1B2D] font-display group-hover:text-[#0B5FA5] transition-colors">
                      {doc.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#18B4A8] mt-0.5">
                      {doc.specialty}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E3E9F0] flex items-center justify-between text-xs text-[#5A6B80]">
                    <div className="flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-[#0B5FA5] shrink-0" />
                      <span>{doc.university}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href={WHATSAPP_URLS.custom("Hola, quiero agendar una hora de evaluación con un especialista en Dentistas Alcántara")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("equipo_cta")}
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
