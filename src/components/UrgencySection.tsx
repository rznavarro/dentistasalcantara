/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { MessageCircle, Phone, Clock, ShieldCheck, MapPin, AlertTriangle } from "lucide-react";
import { CLINIC_CONTACT, WHATSAPP_URLS } from "../data/clinicData";
import { trackWhatsAppClick, trackPhoneClick } from "../utils/analytics";

export const UrgencySection: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="urgencias" className="py-14 sm:py-20 bg-white border-b border-[#E3E9F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0B5FA5]/5 via-white to-[#18B4A8]/5 rounded-3xl border border-[#E3E9F0] p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Content Left */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0B5FA5] uppercase tracking-wider">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" aria-hidden="true" />
                <span>Atención de Urgencia Dental</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0F1B2D] font-display text-balance">
                Urgencia dental en Las Condes, también sábado, domingo y festivos
              </h2>

              <p className="text-base sm:text-lg text-[#5A6B80] leading-relaxed">
                Lunes a viernes de 9:00 a 23:00. Sábados, domingos y festivos de 8:00 a 23:00. Escríbenos y te decimos altiro cuándo te podemos ver.
              </p>

              {/* Schedule and location details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-[#E3E9F0]/80 shadow-xs">
                  <Clock className="w-5 h-5 text-[#0B5FA5] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#0F1B2D]">Horario Continuado</h4>
                    <p className="text-xs text-[#5A6B80] mt-0.5 leading-relaxed">
                      Lun - Vie: 9:00 a 23:00<br />
                      Sáb, Dom y Festivos: 8:00 a 23:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-[#E3E9F0]/80 shadow-xs">
                  <MapPin className="w-5 h-5 text-[#18B4A8] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#0F1B2D]">Ubicación Rápida</h4>
                    <p className="text-xs text-[#5A6B80] mt-0.5 leading-relaxed">
                      Av. Apoquindo 3990, Of. 810<br />
                      Metro Alcántara (Línea 1)
                    </p>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <a
                  href={WHATSAPP_URLS.urgency}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick("urgencias_banner")}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-base font-bold text-white bg-[#25D366] hover:bg-[#1EBE5A] rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-transparent shrink-0" />
                  <span>Pedir hora por WhatsApp</span>
                </a>

                <a
                  href={CLINIC_CONTACT.phones[0].tel}
                  onClick={() => trackPhoneClick("urgencias_banner", CLINIC_CONTACT.phones[0].tel)}
                  className="inline-flex items-center justify-center gap-2.5 px-5 py-4 text-sm font-semibold text-[#0B5FA5] bg-white hover:bg-[#F5F8FB] border border-[#E3E9F0] rounded-2xl shadow-xs transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Phone className="w-4 h-4 text-[#0B5FA5]" />
                  <span>Llamar al 2 2206 1380</span>
                </a>
              </div>

              {/* Visible missing verification note per spec */}
              <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Nota clínica:</strong> [FALTA: confirmar si la urgencia es realmente 24 horas; el sitio actual dice &quot;24/7&quot; pero el horario publicado es hasta las 23:00. Hasta confirmar, usa &quot;todos los días, incluso fines de semana y festivos&quot;.]
                </span>
              </div>
            </div>

            {/* Visual Right */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#E3E9F0] shadow-md bg-[#F5F8FB] aspect-[4/3]">
                {!imgError ? (
                  <img
                    src="https://www.dentistasalcantara.cl/images/28/banner-urgencias.jpg"
                    alt="Atención de urgencia dental en Las Condes"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={() => setImgError(true)}
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-tr from-[#0B5FA5]/15 to-[#18B4A8]/10 text-center">
                    <ShieldCheck className="w-12 h-12 text-[#0B5FA5] mb-3" />
                    <h3 className="text-base font-bold text-[#0F1B2D]">Urgencia Dental Especializada</h3>
                    <p className="text-xs text-[#5A6B80] mt-1">Diagnóstico inmediato y alivio de dolor garantizado</p>
                  </div>
                )}
                <div className="absolute top-3 left-3 bg-[#0B5FA5] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  Urgencias Las Condes
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
