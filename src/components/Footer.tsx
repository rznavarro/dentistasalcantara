/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Phone, MessageCircle, MapPin, Clock, Facebook, Instagram, Linkedin, Mail, ExternalLink } from "lucide-react";
import { CLINIC_CONTACT, WHATSAPP_URLS } from "../data/clinicData";
import { trackWhatsAppClick, trackPhoneClick } from "../utils/analytics";

export const Footer: React.FC = () => {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="bg-[#0F1B2D] text-white pt-14 pb-24 md:pb-14 border-t border-[#0B5FA5]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Identity & Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {!logoError ? (
                <div className="bg-white p-2 rounded-xl inline-block">
                  <img
                    src="https://www.dentistasalcantara.cl/images/1/logo.png"
                    alt="Dentistas Alcántara - Agrupación Odontológica Alcántara"
                    className="h-9 w-auto object-contain"
                    onError={() => setLogoError(true)}
                    referrerPolicy="no-referrer"
                  />
                </div>
              ) : (
                <span className="text-xl font-bold font-display text-white">
                  Dentistas Alcántara
                </span>
              )}
            </div>

            <p className="text-sm font-semibold text-white/90">
              Dentistas Alcántara — Agrupación Odontológica Alcántara
            </p>
            <p className="text-xs text-white/70 leading-relaxed">
              Clínica odontológica con especialistas en Las Condes. Cuidando la salud bucal de Santiago desde 1995.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={CLINIC_CONTACT.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#18B4A8] text-white flex items-center justify-center transition-colors"
                aria-label="Facebook de Dentistas Alcántara"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={CLINIC_CONTACT.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#18B4A8] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram de Dentistas Alcántara"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CLINIC_CONTACT.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#18B4A8] text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn de Dentistas Alcántara"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Central Telefónica (all +56 with full digits) */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#18B4A8] font-display">
              Teléfonos de Atención
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              {CLINIC_CONTACT.phones.map((p) => (
                <div key={p.tel} className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#18B4A8] shrink-0" />
                  <div>
                    <span className="text-white/60 text-[11px] block">{p.label}:</span>
                    <a
                      href={p.tel}
                      onClick={() => trackPhoneClick("footer", p.tel)}
                      className="text-white hover:text-[#18B4A8] font-semibold transition-colors"
                    >
                      {p.display}
                    </a>
                  </div>
                </div>
              ))}

              <div className="pt-2 flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <div>
                  <span className="text-white/60 text-[11px] block">WhatsApp:</span>
                  <a
                    href={WHATSAPP_URLS.general}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick("footer")}
                    className="text-[#25D366] hover:underline font-semibold"
                  >
                    {CLINIC_CONTACT.whatsapp}
                  </a>
                </div>
              </div>

              {/* Missing email placeholder */}
              <div className="pt-2 flex items-center gap-2 text-xs text-amber-300">
                <Mail className="w-4 h-4 shrink-0 text-amber-400" />
                <span>Email: [FALTA: email de contacto]</span>
              </div>
            </div>
          </div>

          {/* Col 3: Dirección y Horario */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#18B4A8] font-display">
              Ubicación y Horarios
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-white/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#18B4A8] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Av. Apoquindo 3990, of. 810</p>
                  <p className="text-xs text-white/70">Las Condes, Santiago</p>
                  <p className="text-[11px] text-white/60 mt-0.5">Metro Alcántara (Línea 1)</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#18B4A8] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-semibold text-white">Horarios:</p>
                  <p className="text-white/80 mt-0.5">Lun a Vie: 9:00 a 23:00 hrs.</p>
                  <p className="text-white/80">Sáb, Dom y Festivos: 8:00 a 23:00 hrs.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Links Rápidos y Marca */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#18B4A8] font-display">
              Enlaces y Convenios
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <a href="#urgencias" className="hover:text-white transition-colors">Urgencias dentales</a>
              </li>
              <li>
                <a href="#tratamientos" className="hover:text-white transition-colors">Implantes y Ortodoncia</a>
              </li>
              <li>
                <a href="#tratamientos" className="hover:text-white transition-colors">Bruxismo (Evaluación $0)</a>
              </li>
              <li>
                <a href="#equipo" className="hover:text-white transition-colors">Especialistas certificados</a>
              </li>
              <li>
                <a href="#confianza" className="hover:text-white transition-colors">Convenio Tarjeta Vecino Las Condes</a>
              </li>
              <li>
                <a
                  href={CLINIC_CONTACT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#18B4A8] text-white/80 transition-colors"
                >
                  <span>Ver en Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>

            <div className="p-2 bg-white/5 rounded-xl text-[10px] text-amber-300 border border-white/10">
              Identidad: [FALTA: HEX exactos de marca - provisorio #0B5FA5 y #18B4A8]
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 text-center sm:text-left">
          <p>
            © 2026 Dentistas Alcántara — Agrupación Odontológica Alcántara. Todos los derechos reservados.
          </p>
          <p className="text-[11px] text-white/40">
            Av. Apoquindo 3990, Oficina 810, Las Condes · Santiago de Chile
          </p>
        </div>
      </div>
    </footer>
  );
};
