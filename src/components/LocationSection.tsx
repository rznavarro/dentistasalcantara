/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { MapPin, Navigation, Clock, Train, Phone, ExternalLink } from "lucide-react";
import { CLINIC_CONTACT } from "../data/clinicData";
import { trackDirectionsClick, trackPhoneClick } from "../utils/analytics";

export const LocationSection: React.FC = () => {
  const [loadMap, setLoadMap] = useState(true);

  return (
    <section id="ubicacion" className="py-14 sm:py-20 bg-white border-b border-[#E3E9F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#0B5FA5]">
            <MapPin className="w-3.5 h-3.5" />
            <span>Fácil acceso en Las Condes</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0F1B2D] font-display text-balance">
            Estamos a pasos del Metro Alcántara
          </h2>

          <p className="text-base sm:text-lg text-[#5A6B80] leading-relaxed">
            Av. Apoquindo 3990, oficina 810. Excelente conectividad, estacionamientos cercanos y salida directa desde la estación.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Info Card */}
          <div className="lg:col-span-5 bg-[#F5F8FB] p-6 sm:p-8 rounded-3xl border border-[#E3E9F0] flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="space-y-1.5">
                <h3 className="text-xl font-bold text-[#0F1B2D] font-display">
                  Dentistas Alcántara
                </h3>
                <p className="text-xs text-[#5A6B80]">
                  Agrupación Odontológica Alcántara
                </p>
              </div>

              {/* Address info */}
              <div className="flex items-start gap-3 text-sm text-[#0F1B2D]">
                <MapPin className="w-5 h-5 text-[#0B5FA5] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#0F1B2D]">Dirección</strong>
                  <span className="text-[#5A6B80]">
                    Av. Apoquindo 3990, oficina 810, Las Condes, Santiago
                  </span>
                </div>
              </div>

              {/* Metro reference */}
              <div className="flex items-start gap-3 text-sm text-[#0F1B2D]">
                <Train className="w-5 h-5 text-[#18B4A8] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#0F1B2D]">Referencia Metro</strong>
                  <span className="text-[#5A6B80]">
                    Metro Alcántara (Línea 1), salida vereda norte.
                  </span>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3 text-sm text-[#0F1B2D]">
                <Clock className="w-5 h-5 text-[#0B5FA5] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#0F1B2D]">Horarios de Atención</strong>
                  <span className="text-[#5A6B80] text-xs block mt-0.5">
                    · Lunes a viernes: 9:00 a 23:00 hrs.<br />
                    · Sábados, domingos y festivos: 8:00 a 23:00 hrs.
                  </span>
                </div>
              </div>

              {/* Phone quick link */}
              <div className="flex items-start gap-3 text-sm text-[#0F1B2D]">
                <Phone className="w-5 h-5 text-[#18B4A8] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#0F1B2D]">Teléfono Central</strong>
                  <a
                    href={CLINIC_CONTACT.phones[0].tel}
                    onClick={() => trackPhoneClick("ubicacion_card", CLINIC_CONTACT.phones[0].tel)}
                    className="text-[#0B5FA5] font-semibold hover:underline"
                  >
                    +56 2 2206 1380
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Google Maps navigation button */}
            <div className="pt-4 border-t border-[#E3E9F0]">
              <a
                href={CLINIC_CONTACT.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackDirectionsClick("ubicacion_boton")}
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 text-sm font-bold text-white bg-[#0B5FA5] hover:bg-[#084980] rounded-2xl shadow-sm transition-all duration-200 active:scale-98"
              >
                <Navigation className="w-4 h-4" />
                <span>Cómo llegar en Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </div>

          {/* Map Embed (Deferred / lazy) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#E3E9F0] shadow-sm relative min-h-[380px] bg-[#E9F2F9]">
            {loadMap ? (
              <iframe
                title="Mapa de ubicación Dentistas Alcántara en Las Condes"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.125950854298!2d-70.5907696848016!3d-33.415020380784234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf5ef9a224a9%3A0xb3bc7a7d4cb94cb1!2sAv.+Apoquindo+3990%2C+oficina+810%2C+Las+Condes%2C+Regi%C3%B3n+Metropolitana!5e0!3m2!1ses-419!2scl!4v1700000000000!5m2!1ses-419!2scl"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "380px" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#F5F8FB]">
                <MapPin className="w-10 h-10 text-[#0B5FA5] mb-2" />
                <h4 className="text-base font-bold text-[#0F1B2D]">Mapa Interactivo</h4>
                <p className="text-xs text-[#5A6B80] max-w-xs mb-4">
                  Haz clic para cargar el mapa interactivo de Google Maps
                </p>
                <button
                  type="button"
                  onClick={() => setLoadMap(true)}
                  className="px-4 py-2 bg-[#0B5FA5] text-white text-xs font-semibold rounded-xl shadow-xs"
                >
                  Cargar mapa
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
