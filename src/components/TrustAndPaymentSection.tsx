/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { History, Building2, CreditCard, ShieldCheck, AlertCircle, Image as ImageIcon } from "lucide-react";

export const TrustAndPaymentSection: React.FC = () => {
  const [seremiError, setSeremiError] = useState(false);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const handleImgError = (key: string) => {
    setImgErrors((prev) => ({ ...prev, [key]: true }));
  };

  const clinicPhotos = [
    {
      id: "clinica",
      src: "https://www.dentistasalcantara.cl/pictures/pages/1/dentista-alcantara-nosotros.jpg",
      title: "Instalaciones clínicas",
      desc: "Boxes equipados con bioseguridad",
    },
    {
      id: "consulta",
      src: "https://www.dentistasalcantara.cl/pictures/pages/1/dentista-alcantara-nosotros-consulta.jpg",
      title: "Atención odontológica",
      desc: "Trato personalizado y cercano",
    },
    {
      id: "paciente",
      src: "https://www.dentistasalcantara.cl/pictures/pages/1/dentista-alcantara-nosotros-paciente.jpg",
      title: "Cuidado del paciente",
      desc: "Confort y control de ansiedad",
    },
  ];

  return (
    <section id="confianza" className="py-14 sm:py-20 bg-[#F5F8FB] border-b border-[#E3E9F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#0B5FA5]">
            <span>Seguridad y respaldo clínico</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0F1B2D] font-display text-balance">
            Tu tranquilidad y confianza son lo primero
          </h2>

          <p className="text-base sm:text-lg text-[#5A6B80] leading-relaxed">
            Más de tres décadas atendiendo a familias de Las Condes y Santiago con absoluta transparencia clínica y facilidades de pago.
          </p>
        </div>

        {/* 4 Pillars of Trust */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {/* Pillar 1 */}
          <div className="bg-white p-6 rounded-3xl border border-[#E3E9F0] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0B5FA5]/10 text-[#0B5FA5] flex items-center justify-center mb-4">
                <History className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0F1B2D] font-display mb-1.5">
                Desde 1995 en Santiago
              </h3>
              <p className="text-xs sm:text-sm text-[#5A6B80] leading-relaxed">
                Más de 30 años de trayectoria continua en Las Condes cuidando sonrisas de generaciones de pacientes.
              </p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white p-6 rounded-3xl border border-[#E3E9F0] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#18B4A8]/10 text-[#18B4A8] flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0F1B2D] font-display mb-1.5">
                Convenio Las Condes
              </h3>
              <p className="text-xs sm:text-sm text-[#5A6B80] leading-relaxed">
                Convenio oficial con la Municipalidad de Las Condes (Tarjeta Vecino y seguro municipal para afiliados).
              </p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white p-6 rounded-3xl border border-[#E3E9F0] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0B5FA5]/10 text-[#0B5FA5] flex items-center justify-center mb-4">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0F1B2D] font-display mb-1.5">
                Facilidades de pago
              </h3>
              <p className="text-xs sm:text-sm text-[#5A6B80] leading-relaxed">
                Paga con tarjeta de débito, todas las tarjetas de crédito, efectivo y tarjetas de casas comerciales. Facilidades en tratamientos y cirugías.
              </p>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="bg-white p-6 rounded-3xl border border-[#E3E9F0] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#18B4A8]/10 text-[#18B4A8] flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0F1B2D] font-display mb-1.5">
                SEREMI de Salud
              </h3>
              <div className="my-2 h-10 flex items-center">
                {!seremiError ? (
                  <img
                    src="https://www.dentistasalcantara.cl/images/1/logo.seremi.png"
                    alt="Autorización sanitaria SEREMI de Salud Región Metropolitana"
                    className="max-h-9 w-auto object-contain"
                    onError={() => setSeremiError(true)}
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <span className="text-xs font-semibold text-[#0B5FA5]">Autorización Sanitaria SEREMI</span>
                )}
              </div>
              <p className="text-xs text-amber-700 mt-2 bg-amber-50 p-2 rounded-lg border border-amber-200/80">
                [FALTA: confirmar número de resolución de autorización sanitaria para mostrarlo]
              </p>
            </div>
          </div>
        </div>

        {/* Real Clinic Photos Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clinicPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group rounded-3xl overflow-hidden border border-[#E3E9F0] bg-white shadow-xs"
            >
              <div className="relative aspect-[16/10] bg-[#E9F2F9] overflow-hidden">
                {!imgErrors[photo.id] ? (
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                    loading="lazy"
                    onError={() => handleImgError(photo.id)}
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-[#5A6B80]">
                    <ImageIcon className="w-8 h-8 text-[#0B5FA5] mb-1" />
                    <span className="text-xs">{photo.title}</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h4 className="text-sm font-bold text-[#0F1B2D] font-display">{photo.title}</h4>
                <p className="text-xs text-[#5A6B80] mt-0.5">{photo.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pending Assets Notice (Visible as requested in prompt) */}
        <div className="mt-8 p-4 bg-amber-50/80 border border-amber-200 rounded-2xl text-xs text-amber-900 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <strong>Espacio reservado para material visual:</strong> [FALTA: 4–6 fotos reales de casos antes/después (con consentimiento) y 2 fotos de la fachada/recepción del edificio para que el paciente reconozca el lugar.]
          </div>
        </div>
      </div>
    </section>
  );
};
