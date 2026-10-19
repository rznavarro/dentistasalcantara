/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react";
import { MessageCircle, Phone, CheckCircle2, Send, AlertCircle } from "lucide-react";
import { CLINIC_CONTACT, WHATSAPP_URLS } from "../data/clinicData";
import { trackWhatsAppClick, trackPhoneClick, trackFormSubmit } from "../utils/analytics";

export const FinalCtaSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    treatment: "Urgencia",
    honeypot: "", // anti-spam honeypot
  });
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Determine dynamic copy based on current day (0=Sunday, 6=Saturday)
  const isWeekendOrHoliday = useMemo(() => {
    const day = new Date().getDay();
    return day === 0 || day === 6;
  }, []);

  const dynamicSubtext = isWeekendOrHoliday
    ? "Escríbenos ahora y te damos hora en Las Condes, incluso hoy domingo o festivo."
    : "Escríbenos ahora y te damos hora en Las Condes, incluso fines de semana y festivos.";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check for bots
    if (formData.honeypot) {
      return;
    }

    if (!formData.name.trim()) {
      setErrorMsg("Por favor, ingresa tu nombre.");
      return;
    }

    if (!formData.phone.trim() || formData.phone.length < 8) {
      setErrorMsg("Por favor, ingresa un número de teléfono válido.");
      return;
    }

    setErrorMsg("");
    setSubmitted(true);
    trackFormSubmit(formData.treatment);
  };

  const formWhatsAppUrl = useMemo(() => {
    const msg = `Hola, soy ${formData.name}. Solicito que me llamen o agendar hora para: ${formData.treatment}. Mi teléfono de contacto es ${formData.phone}.`;
    return WHATSAPP_URLS.custom(msg);
  }, [formData]);

  return (
    <section id="contacto" className="py-16 sm:py-24 bg-[#0B5FA5] text-white relative overflow-hidden">
      {/* Decorative subtle lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#18B4A8]/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/20 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Direct Call to Action */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#18B4A8] bg-white/10 px-3 py-1 rounded-full backdrop-blur-xs">
              <span>Atención Inmediata</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-balance leading-tight">
              No esperes a que el dolor empeore
            </h2>

            <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-xl">
              {dynamicSubtext}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={WHATSAPP_URLS.general}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("cta_final")}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-bold text-white bg-[#25D366] hover:bg-[#1EBE5A] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 fill-white text-transparent shrink-0" />
                <span>Pedir hora por WhatsApp</span>
              </a>

              <a
                href={CLINIC_CONTACT.phones[0].tel}
                onClick={() => trackPhoneClick("cta_final", CLINIC_CONTACT.phones[0].tel)}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl backdrop-blur-xs transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-4 h-4 text-[#18B4A8]" />
                <span>Llamar al 2 2206 1380</span>
              </a>
            </div>

            <div className="pt-4 flex items-center gap-3 text-xs text-white/70">
              <span>📍 Av. Apoquindo 3990, of. 810, Las Condes</span>
              <span>·</span>
              <span>🚇 Metro Alcántara</span>
            </div>
          </div>

          {/* Right Column: Alternative 3-Field Lead Capture Form */}
          <div className="lg:col-span-5">
            <div className="bg-white text-[#0F1B2D] p-6 sm:p-8 rounded-3xl shadow-2xl border border-white/20">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1 mb-2">
                    <h3 className="text-xl font-bold font-display text-[#0F1B2D]">
                      ¿Prefieres que te contactemos?
                    </h3>
                    <p className="text-xs text-[#5A6B80]">
                      Déjanos tus datos y una coordinadora te responderá a la brevedad.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl border border-red-200">
                      {errorMsg}
                    </div>
                  )}

                  {/* Honeypot anti-spam (hidden from real users) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website_hp">No llenar este campo</label>
                    <input
                      type="text"
                      id="website_hp"
                      name="website_hp"
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Field 1: Nombre */}
                  <div>
                    <label htmlFor="contact_name" className="block text-xs font-semibold text-[#0F1B2D] mb-1">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="contact_name"
                      required
                      placeholder="Ej: Macarena Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#E3E9F0] focus:outline-none focus:ring-2 focus:ring-[#0B5FA5] transition-all bg-[#F5F8FB]"
                    />
                  </div>

                  {/* Field 2: Teléfono */}
                  <div>
                    <label htmlFor="contact_phone" className="block text-xs font-semibold text-[#0F1B2D] mb-1">
                      Teléfono (+56 9) *
                    </label>
                    <input
                      type="tel"
                      id="contact_phone"
                      required
                      placeholder="+56 9 1234 5678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#E3E9F0] focus:outline-none focus:ring-2 focus:ring-[#0B5FA5] transition-all bg-[#F5F8FB]"
                    />
                  </div>

                  {/* Field 3: ¿Qué necesitas? */}
                  <div>
                    <label htmlFor="contact_treatment" className="block text-xs font-semibold text-[#0F1B2D] mb-1">
                      ¿Qué necesitas? *
                    </label>
                    <select
                      id="contact_treatment"
                      value={formData.treatment}
                      onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#E3E9F0] focus:outline-none focus:ring-2 focus:ring-[#0B5FA5] transition-all bg-[#F5F8FB]"
                    >
                      <option value="Urgencia">Urgencia dental</option>
                      <option value="Implantes">Implantes dentales</option>
                      <option value="Ortodoncia">Ortodoncia / Invisalign</option>
                      <option value="Bruxismo">Bruxismo (Evaluación $0)</option>
                      <option value="Estética">Estética dental / Diseño de sonrisa</option>
                      <option value="Niños">Niños / Odontopediatría</option>
                      <option value="Otro">Otro tratamiento / Consulta general</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3.5 px-4 text-sm font-bold text-white bg-[#0B5FA5] hover:bg-[#084980] rounded-xl shadow-sm transition-all duration-200 active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Quiero que me llamen</span>
                  </button>

                  <div className="pt-2">
                    <p className="text-[11px] text-[#5A6B80] text-center">
                      Tus datos están protegidos bajo secreto profesional médico.
                    </p>
                    <p className="text-[10px] text-amber-800 bg-amber-50 p-1.5 rounded mt-2 text-center border border-amber-200">
                      [FALTA: email o endpoint de destino]
                    </p>
                  </div>
                </form>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-xl font-bold font-display text-[#0F1B2D]">
                    ¡Solicitud recibida!
                  </h3>

                  <p className="text-sm text-[#5A6B80] leading-relaxed">
                    Gracias, <strong>{formData.name}</strong>. Nos comunicaremos contigo a la brevedad al número {formData.phone}.
                  </p>

                  <div className="pt-2">
                    <p className="text-xs text-[#0F1B2D] font-semibold mb-2">
                      ¿Quieres confirmación inmediata ahora mismo?
                    </p>
                    <a
                      href={formWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackWhatsAppClick("form_success_whatsapp", formData.treatment)}
                      className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 text-sm font-bold text-white bg-[#25D366] hover:bg-[#1EBE5A] rounded-xl shadow-md transition-all active:scale-98"
                    >
                      <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                      <span>Abrir WhatsApp con estos datos</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#0B5FA5] underline pt-2 hover:text-[#084980]"
                  >
                    Enviar otra solicitud
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
